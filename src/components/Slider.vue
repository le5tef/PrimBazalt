<template>
  <v-col>
    <v-card elevation="24" max-width="350" class="mx-auto">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center text-h5">
              <span class="underline">{{ title }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-carousel
        :continuous="true"
        :show-arrows="true"
        hide-delimiter-background
        v-model="childActiveSlide"
        delimiter-icon="mdi-circle-small"
      >
        <v-carousel-item
          v-for="(page, i) in slides"
          :key="i"
          :src="page.src"
          @click="$emit('open-image', childActiveSlide)"
        >
          <v-sheet tile>
            <v-row class="fill-height" align="center" justify="center"> </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-system-bar class="pa-5" lights-out>
        <b>
          {{ slides[childActiveSlide].title }}
        </b>
      </v-system-bar>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      childActiveSlide: 0,
    };
  },
  props: {
    slides: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
};
</script>
<style >
.bkg {
  background-color: rgb(230, 230, 230);
}
.underline {
  border-bottom: 3px solid #ffa600;
  display: inline-block;
  padding: 0px 7px;
  font-weight: 700;
}
</style>