<template>
  <v-app>
    <Header />
    <v-main class="app">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
.app {
  background-color: rgb(230, 230, 230);
}
</style>