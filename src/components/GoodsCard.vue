<template>
  <v-col class="mx-8">
    <v-card
      class="mx-auto"
      width="30
    0"
    >
      <v-img :src="currentGood.src" height="220px"></v-img>

      <v-card-title>
        <span style="word-break: break-word">{{ currentGood.title }}</span>
      </v-card-title>

      <v-card-actions>
        <v-spacer />
        <v-btn icon @click="show = !show"> Подробнее </v-btn>
        <v-spacer />
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ currentGood.subtitle }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    good: {
      type: Number,
    },
  },
  computed: {
    currentGood() {
      switch (this.good) {
        case 1:
          return {
            src: require("../assets/goods/1.jpg"),
            title: "Ж/Д Отгрузки",
            subtitle: "Материал для железобетонных конструкций",
          };
        case 2:
          return {
            src: require("../assets/goods/2.jpg"),
            title: "Мобильные , дробильные комплексы",
            subtitle: "Материал для изготовления асфальта",
          };
        case 3:
          return {
            src: require("../assets/goods/3.jpg"),
            title: "Полстационарные дробильные комплексы",
            subtitle: "Подсыпка под застройку домов",
          };
        case 4:
          return {
            src: require("../assets/goods/4.jpg"),
            title: "Дороги",
            subtitle: "Материал для изготовления дорог",
          };
        case 5:
          return {
            src: require("../assets/goods/5.jpg"),
            title: "Ж/Д   полотно",
            subtitle: "Материал для изготовления железнодорожного полотна",
          };
        case 6:
          return {
            src: require("../assets/goods/6.jpg"),
            title: "Габионы",
            subtitle: "Материал для изготовления габионов",
          };
        case 7:
          return {
            src: require("../assets/goods/7.jpg"),
            title: "Морские и речные причалы",
            subtitle: "Материал для строительства морских и речных причалов",
          };
        case 8:
          return {
            src: require("../assets/goods/8.jpg"),
            title: "Базальтовое волокно",
            subtitle: "Материал для изготовления базальтового полотна",
          };
        case 9:
          return {
            src: require("../assets/goods/9.jpg"),
            title: "Базальтовые трубы",
            subtitle: "Материал для изготовления базальтовых труб",
          };
        default:
          return "";
      }
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>
