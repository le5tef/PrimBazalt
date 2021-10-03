<template>
  <div>
    <v-container fluid style="position: relative">
      <v-row class="d-flex justify-space-around">
        <v-card
          elevation="24"
          v-for="good in arrayOfImages"
          :key="good.id"
          class="ma-6"
        >
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="200"
          >
            <v-carousel-item :src="good.src" height="150" width="250">
            </v-carousel-item>
          </v-carousel>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
    </v-container>
    <v-btn @click="$emit('close-popup')" absolute right top
      ><v-icon>mdi-close</v-icon></v-btn
    >
  </div>
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