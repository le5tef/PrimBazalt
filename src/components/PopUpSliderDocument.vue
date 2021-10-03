<template>
  <v-carousel hide-delimiters height="auto">
    <v-carousel-item v-for="(item, i) in arrayOfImages" :key="i">
      <v-img :src="item.src" max-height="800px" contain />
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    childActiveSlide: {
      type: Number,
    },
    arrayOfImages: {
      type: Array,
    },
  },
};
</script>