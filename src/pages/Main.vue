<template>
  <v-app>
    <Carousel />
    <Sliders />
    <Contacts />

    <!-- <Goods class="pt-16" /> -->
    <!-- <AboutCompany class="ac-shadow" /> -->
  </v-app>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Contacts from "../components/Contacts.vue";
// import AboutCompany from "../components/AboutCompany.vue";
import Sliders from "../components/Sliders.vue";
// import Goods from "../components/Goods.vue";

export default {
  components: {
    Carousel,
    Contacts,
    // AboutCompany,
    Sliders,
    // Goods,
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