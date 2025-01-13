<template>
  <div class="q-pa-md">
    <div class="container">
      <div class="kosarka">Košarka</div>
      <div class="stolni">Stolni tenis</div>
      <div class="tenis">Tenis</div>
      <div class="badminton">Badminton</div>
      <div class="yoga">Yoga/aerobic</div>
      <div></div>
    </div>
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

<style>
.container{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}
.container > div{
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-size: cover;
}
.kosarka{
  grid-column-start: 1;
  grid-column-end: 1;
  background-image: url(../assets/kosarka.jpg);
}
.stolni{
  grid-column-start: 2;
  grid-column-end: 2;
  background-image: url(../assets/stolni.jpg);
}
.tenis{
  grid-column-start: 3;
  grid-column-end: 3;
  background-image: url(../assets/tenis.jpg);
}
.badminton{
  grid-column-start: 4;
  grid-column-end: 4;
  background-image: url(../assets/badminton.jpg);
}
.yoga{
  grid-column-start: 4;
  grid-column-end: 4;
  background-image: url(../assets/yoga.jpg);
}
</style>
