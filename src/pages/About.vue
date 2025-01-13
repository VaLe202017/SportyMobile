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

const mapElement = ref("");
let map = "";
let marker = "";

const address = {
  street: "Vukovarska ulica 58, Rijeka",
  title: "Sjedište",
};

const initMap = (position = { lat: 45.338277, lng: 14.424203 }) => {
  map = new google.maps.Map(mapElement.value, {
    center: position, 
    zoom: 14,
  });

  marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "Trenutna lokacija",
  });

  addMarkerByAddress(address);
};

const addMarkerByAddress = (address) => {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address.street }, (results, status) => {
    if (status === "OK" && results[0]) {
      const position = results[0].geometry.location;

      new google.maps.Marker({
        position: position,
        map: map,
        title: address.title,
      });

      map.setCenter(position);
    } else {
      console.error("Geocoding failed: " + status);
    }
  });
};

const updateLocation = (position) => {
  const { latitude, longitude } = position.coords;
  const currentPosition = { lat: latitude, lng: longitude };

  if (map) {
    map.setCenter(currentPosition);
  }

  if (marker) {
    marker.setPosition(currentPosition);
  }
};

const initGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      updateLocation,
      (error) => {
        console.error("Error getting location:", error);
      },
      { enableHighAccuracy: true }
    );

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

const initDeviceOrientation = () => {
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (event) => {
      const { alpha, beta, gamma } = event;

      if (map && gamma) {
        map.setZoom(14 + gamma / 30);
      }
    });
  } else {
    console.error("Device Orientation API not supported by this browser.");
  }
};

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAA1jdIClaBpIVxfBjDMj65BVojM87x1TY&libraries=&v=weekly";
  script.async = true;
  script.onload = () => {
    console.log("Google Maps API successfully loaded!");
    initMap();
    initGeolocation();
    initDeviceOrientation();
  };
  document.body.appendChild(script);
});
</script>

<style scoped>
h1 {
  color: #1976d2;
}
</style>
