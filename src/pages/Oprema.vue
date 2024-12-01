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
        <div class="q-mt-md text-center" style="padding-top: 65%; font-size: 20px; color: black">
          {{ "Najbolja oprema za kosarku." }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="../assets/tenis_oprema.jpg">
        <div class="q-mt-md text-center" style="padding-top: 65%; font-size: 20px; color: black">
          {{ "Najbolja oprema za tenis." }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="../assets/golf_oprema.jpg">
        <div class="q-mt-md text-center" style="padding-top: 65%; font-size: 20px; color: white">
          {{ "Najbolja oprema za golf." }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" img-src="../assets/nogomet_oprema.jpg">
        <div class="q-mt-md text-center" style="padding-top: 65%; font-size: 20px; color: white">
          {{ "Najbolja oprema za nogomet." }}
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
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
