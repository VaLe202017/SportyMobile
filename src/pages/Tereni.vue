<template>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide :name="1" img-src="../assets/golfTeren.jpg">
        <div
          class="q-mt-md text-center"
          style="padding-top: 45%; font-size: 20px; color: white"
        >
          <strong>GOLF TERENI</strong>
          <p>Nudimo široki asortiman golf terena</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="../assets/kosarkaTeren.jpg">
        <div
          class="q-mt-md text-center"
          style="padding-top: 45%; font-size: 20px; color: white"
        >
          <strong>KOŠARKAŠKI TERENI</strong>
          <p>Nudimo široki asortiman košarkaških terena</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="../assets/tenisTeren.jpg">
        <div
          class="q-mt-md text-center"
          style="padding-top: 45%; font-size: 20px; color: white"
        >
          <strong>TENISKI TERENI</strong>
          <p>Nudimo široki asortiman teniskih terena</p>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
