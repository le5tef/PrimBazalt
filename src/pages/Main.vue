<template>
  <v-app>
    <Carousel class="car-shadow" />
    <Goods class="px-16 pt-16" />
    <AboutCompany class="ac-shadow" />
    <Slider class="pa-4" />
  </v-app>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import AboutCompany from "../components/AboutCompany.vue";
import Slider from "../components/Slider.vue";
import Goods from "../components/Goods.vue";

export default {
  components: {
    Carousel,
    AboutCompany,
    Slider,
    Goods,
  },

  data: () => ({}),
};
</script>
<style scoped>
.ac-shadow {
  -webkit-box-shadow: 0px -44px 52px -6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px -44px 52px -6px rgba(34, 60, 80, 0.2);
  box-shadow: 0px -44px 52px -6px rgba(34, 60, 80, 0.2);
}
</style>