<template>
  <div>
    <v-carousel hide-delimiters height="600">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :class="item.src"
        class="bkg pa-8"
        height="600"
      >
        <!-- <div class="text-h2">{{ item.title }}</div>
        <v-btn>Подробнее</v-btn> -->

        <v-row class="mt-16">
          <v-col cols="10" md="4" offset-md="2">
            <div
              style="color: white; font-weight: 600"
              class="text-h3 text-md-h2"
            >
              {{
                $vuetify.breakpoint.xs &&
                item.title === "Полустационарные дробильные комплексы"
                  ? "Полустац. дробильные комплексы"
                  : item.title
              }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" offset-md="2">
            <div style="width: 100px" class="underline"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" offset-md="2">
            <v-btn x-large tile outlined color="white">Подробнее</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" offset-md="3"> </v-col>
        </v-row>
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
          title: "Полустационарные дробильные комплексы",
          subtitle:
            "Тут будет текст для первого слайда главного полноэкранного слайдера",
        },
        {
          src: "second-img",
          title: "Мобильные  дробильные комплексы",
          subtitle:
            "Тут будет текст для второго слайда главного полноэкранного слайдера",
        },
        {
          src: "third-img",
          title: "Ж/Д Отгрузки",
          subtitle:
            "Тут будет текст для третьего слайда главного полноэкранного слайдера",
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
.third-img {
  background-image: url("../assets/jpgs/1 (17).jpg");
}
</style>