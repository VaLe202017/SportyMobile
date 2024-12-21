<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md">
      <q-input
        filled
        type="number"
        v-model="sifra_korisnika"
        label="Sifra korisnika"
      />

      <q-date v-model="datum_iznajmljivanja" mask="YYYY-MM-DD" minimal="" />

      <q-date v-model="datum_vracanja" mask="YYYY-MM-DD" minimal="" />

      <q-input
        filled
        type="number"
        v-model="ukupan_iznos"
        label="Ukupan iznos"
      />

      <div>
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
          @click="insertFacility()"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const sifra_korisnika = ref(null);
    const datum_iznajmljivanja = ref(null);
    const datum_vracanja = ref(null);
    const ukupan_iznos = ref(null);

    return {
      datum_iznajmljivanja,
      datum_vracanja,
      ukupan_iznos,
      sifra_korisnika,
    };
  },
  methods: {
    async insertFacility() {
      const formData = {
        sifra_korisnika: this.sifra_korisnika,
        datum_iznajmljivanja: this.datum_iznajmljivanja,
        datum_vracanja: this.datum_vracanja,
        ukupan_iznos: this.ukupan_iznos,
      };
      await axios
        .post("http://localhost:3000/api/narudzbe/", formData)
        .then((result) => {
          console.log(result.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
