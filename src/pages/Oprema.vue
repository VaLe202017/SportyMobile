<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      height="300px"
      class="bg-purple text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide :name="1" img-src="../assets/kosarka_oprema.jpg">
        <div class="q-mt-md text-left" style="padding-top: 45%; font-size: 20px; color: black">
          <strong>OPREMA ZA KOSARKU</strong>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="../assets/tenis_oprema.jpg">
        <div class="q-mt-md text-left" style="padding-top: 45%; font-size: 20px; color: black">
          <strong>OPREMA ZA TENIS</strong>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="../assets/golf_oprema.jpg">
        <div class="q-mt-md text-left" style="padding-top: 45%; font-size: 20px; color: whitesmoke">
          <strong>OPREMA ZA GOLF</strong>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
    }
  }
}
</script>
