<template>
  <div>
    <v-carousel hide-delimiters height="600" class="carousel">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :class="item.src"
        class="bkg"
        height="600"
      >
        <div class="text-h2">Slide {{ i + 1 }}</div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "first-img",
        },
        {
          src: "second-img",
        },
      ],
    };
  },
};
</script>
<style scoped>
.bkg {
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  filter: brightness(0.8);
}
.first-img {
  background-image: url("../assets/jpgs/1 (5).jpg");
}
.second-img {
  background-image: url("../assets/jpgs/1 (12).jpg");
}
.carousel {
  -webkit-box-shadow: 0px 26px 23px -4px rgba(34, 60, 80, 0.39);
  -moz-box-shadow: 0px 26px 23px -4px rgba(34, 60, 80, 0.39);
  box-shadow: 0px 26px 23px -4px rgba(34, 60, 80, 0.39);
}
</style>