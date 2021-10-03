<template>
  <v-container fluid class="carousel py-16 bkg">
    <v-row>
      <Slider
        :title="'Продукция'"
        :slides="goods"
        @open-image="handleGoods($event, goods)"
      />
      <Slider
        :title="'Услуги'"
        :slides="services"
        @open-image="handleGoods($event, services)"
      />
      <Slider
        :title="'Документы'"
        :slides="documents"
        @open-image="handleImage($event, documents)"
      />

      <v-dialog
        v-model="showDocumentsSlider"
        max-width="800px"
        @click="showDocumentsSlider = !showDocumentsSlider"
      >
        <PopUpSliderDocument
          :array-of-images="currentArray"
          :number="childActiveSlide"
        />
      </v-dialog>
      <v-dialog
        v-model="showCurrentPicture"
        max-width="100%"
        class="dialogHeight"
        @click="showCurrentPicture = !showCurrentPicture"
      >
        <PopUpSliderGoods
          @close-popup="closePopUp($event)"
          :array-of-images="currentArray"
          :number="childActiveSlide"
        />
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
import Slider from "./Slider.vue";
import PopUpSliderDocument from "./PopUpSliderDocument.vue";
import PopUpSliderGoods from "./PopUpSliderGoods.vue";

export default {
  data() {
    return {
      activeSlide: 0,
      showDocumentsSlider: false,
      showCurrentPicture: false,
      ass: 0,
      currentArray: [],

      documents: [
        {
          title: "Свидетельство о государственной регистрации",
          src: require("../assets/documents/doc001.jpg"),
        },
        {
          title: "Свидетельство о постановке в налоговом органе",
          src: require("../assets/documents/doc002.jpg"),
        },
        {
          title: "Лицензия",
          src: require("../assets/documents/doc003.jpg"),
        },
        {
          title: "Протокол испытаний №1",
          src: require("../assets/documents/doc004.jpg"),
        },
        {
          title: "Протокол испытаний №2",
          src: require("../assets/documents/doc005.jpg"),
        },
        {
          title: "Протокол испытаний №3",
          src: require("../assets/documents/doc006.jpg"),
        },
        {
          title: "Протокол испытаний №5",
          src: require("../assets/documents/doc007.jpg"),
        },
        {
          title: "Приложение к Протоколу испытаний №5",
          src: require("../assets/documents/doc008.jpg"),
        },
        {
          title: "Паспорт щебня",
          src: require("../assets/documents/doc009.jpg"),
        },
        {
          title: "Паспорт камня",
          src: require("../assets/documents/doc010.jpg"),
        },
      ],
      services: [
        {
          title: "",
          src: require("../assets/jpgs/1 (3).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (5).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (4).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (6).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (10).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (11).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (13).jpg"),
        },
      ],
      goods: [
        {
          title: "",
          src: require("../assets/jpgs/1 (2).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (7).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (8).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (9).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (16).jpg"),
        },
        {
          title: "",
          src: require("../assets/jpgs/1 (17).jpg"),
        },
      ],
    };
  },
  methods: {
    closePopUp() {
      this.showCurrentPicture = false;
    },
    handleImage(activeSlide, currentArray) {
      this.showDocumentsSlider = true;
      this.ass = activeSlide;
      this.currentArray = currentArray;
    },
    handleGoods(activeSlide, currentArray) {
      this.showCurrentPicture = true;
      this.ass = activeSlide;
      this.currentArray = currentArray;
    },
  },
  components: {
    Slider,
    PopUpSliderDocument,
    PopUpSliderGoods,
  },
  props: {
    info: {
      type: String,
    },
  },
};
</script>
<style >
.dialogHeight {
  max-height: 95% !important;
}
.v-dialog {
  box-shadow: none !important;
}
.carousel {
  -webkit-box-shadow: 0px 26px 23px -4px rgba(34, 60, 80, 0.39);
  -moz-box-shadow: 0px 26px 23px -4px rgba(34, 60, 80, 0.39);
  box-shadow: 0px 26px 23px -4px rgba(34, 60, 80, 0.39);
}
</style>
