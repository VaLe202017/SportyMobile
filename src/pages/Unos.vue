<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        type = "date"
        v-model="datum_iznajmljivanja"
        label="Datum_iznajmljivanja"
      />

      <q-input
        filled
        type= "date"
        v-model="datum_vracanja"
        label="Datum_vracanja"
      />

      <q-input
        filled
        type= "number"
        v-model="ukupan_iznos"
        label="Ukupan_iznos"
      />

      <q-input
        filled
        type= "number"
        v-model="sifra_korisnika"
        label="Sifra korisnika"
      />


      <div>
        <q-btn label="Submit" type="submit" color="primary" @click="insertFacility()"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';

export default {
  setup () {

    const datum_iznajmljivanja = ref(null)
    const datum_vracanja = ref(null)
    const ukupan_iznos = ref(null)
    const sifra_korisnika = ref(null)


    return {
      datum_iznajmljivanja,
      datum_vracanja,
      ukupan_iznos,
      sifra_korisnika
    }
  },
  methods: {
    async insertFacility() {
      const formData = {
        "Datum iznajmljivanja": this.datum_iznajmljivanja,
        "Datum vracanja": this.datum_vracanja,
        "Ukupan iznos": this.ukupan_iznos,
        "Sifra korisnika": this.sifra_korisnika
      }
      await axios.post('http://localhost:3000/api/narudzbe/', formData)
        .then(result => {
          console.log(result.data)
        })
        .catch(error => {
          console.error(error)
        })
    },
  }
}
</script>
