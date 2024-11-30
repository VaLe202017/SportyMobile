<template>
  <q-page>
    <div class="q-pa-md">
      <h1>{{ $t("about") }}</h1>
      <p>
        {{ $t("description") }}
      </p>
    </div>
    <div ref="mapElement" style="height: 500px; width: 100%"></div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";

const mapElement = ref(""); // Referenca za mapu
let map = ""; // Globalna varijabla za mapu
let marker = ""; // Globalna varijabla za marker

const address = {
  street: "Vukovarska ulica 58, Rijeka",
  title: "Sjedište",
}; // Adresa za dodatni marker

// Funkcija za inicijalizaciju Google mape
const initMap = (position = { lat: 45.338277, lng: 14.424203 }) => {
  map = new google.maps.Map(mapElement.value, {
    center: position, // Koristi trenutnu lokaciju kao početnu poziciju
    zoom: 14,
  });

  // Postavi marker na mapu
  marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "Trenutna lokacija",
  });

  // Dodaj dodatni marker prema adresi
  addMarkerByAddress(address);
};

// Funkcija za dodavanje markera koristeći adresu
const addMarkerByAddress = (address) => {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address.street }, (results, status) => {
    if (status === "OK" && results[0]) {
      const position = results[0].geometry.location;

      // Dodaj marker na mapi
      new google.maps.Marker({
        position: position,
        map: map,
        title: address.title,
      });

      // Centriraj mapu na novu lokaciju
      map.setCenter(position);
    } else {
      console.error("Geocoding failed: " + status);
    }
  });
};

// Funkcija za dobivanje GPS lokacije korisnika
const updateLocation = (position) => {
  const { latitude, longitude } = position.coords;
  const currentPosition = { lat: latitude, lng: longitude };

  // Centriraj mapu na trenutnu poziciju korisnika
  if (map) {
    map.setCenter(currentPosition);
  }

  // Premjesti marker na trenutnu poziciju korisnika
  if (marker) {
    marker.setPosition(currentPosition);
  }
};

// Funkcija za dohvaćanje trenutne GPS pozicije i postavljanje automatskog praćenja
const initGeolocation = () => {
  if (navigator.geolocation) {
    // Prvo postavljanje početne lokacije
    navigator.geolocation.getCurrentPosition(
      updateLocation,
      (error) => {
        console.error("Error getting location:", error);
      },
      { enableHighAccuracy: true }
    );

    // Postavljanje praćenja promjena u GPS lokaciji
    navigator.geolocation.watchPosition(
      updateLocation,
      (error) => {
        console.error("Error watching location:", error);
      },
      { enableHighAccuracy: true }
    );
  } else {
    console.error("Geolocation API not supported by this browser.");
  }
};

// Funkcija za obradu podataka akcelerometra i pomicanje mape
const initDeviceOrientation = () => {
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (event) => {
      const { alpha, beta, gamma } = event;

      // U ovom primjeru, gamma (bočni nagib) se može koristiti za promjenu zuma ili rotacije
      if (map && gamma) {
        map.setZoom(14 + gamma / 30); // Prilagodite zoom na osnovu gamma vrijednosti
      }
    });
  } else {
    console.error("Device Orientation API not supported by this browser.");
  }
};

// Inicijalizacija mape kada je komponenta montirana
onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAA1jdIClaBpIVxfBjDMj65BVojM87x1TY&libraries=&v=weekly";
  script.async = true;
  script.onload = () => {
    console.log("Google Maps API successfully loaded!");
    initMap(); // Inicijaliziraj mapu s početnom pozicijom
    initGeolocation(); // Postavi GPS praćenje
    initDeviceOrientation(); // Postavi praćenje orijentacije uređaja
  };
  document.body.appendChild(script);
});
</script>

<style scoped>
h1 {
  color: #1976d2;
}
</style>
