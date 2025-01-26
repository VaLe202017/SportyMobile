<template>
  <q-page padding>
    <div class="row q-gutter-md">
      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/kosarka.jpg"
              alt="Kosarka"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Košarka" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=kosarka" target="_blank"/>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/badminton.jpg"
              alt="Badminton"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Badminton" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=badminton" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/kuglanje.jpg"
              alt="Kuglanje"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Kuglanje" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=kuglanje" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/nogomet.jpg"
              alt="Nogomet"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Nogomet" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=nogomet" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/stolni.jpg"
              alt="Stolni Tenis"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Stolni tenis" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=stolni-tenis" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/tenis.jpg"
              alt="Tenis"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Tenis" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=tenis" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/yoga.jpg"
              alt="Yoga"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Yoga/aerobik" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=yoga" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="hover-card">
          <q-card-section>
            <q-img
              src="../assets/trcanje.jpg"
              alt="Trcanje"
              style="height: 150px; width: 100%;"
            ></q-img>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Trčanje" color="primary" href="https://rezervacije.rijekasport.hr/rezervacija/?sport=trčanje" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
.hover-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>

<script>
export default {
  name: "GridPage",
};
</script>
