<template>
  <div style="position: relative" class="pb-16">
    <v-row>
      <v-col cols="12" offset-xs="2" offset-sm="3" class="mt-8">
        <span class="about-company text-h4" style="font-weight: 500"
          >О компании</span
        >
      </v-col> </v-row
    ><v-row>
      <v-col cols="12" sm="6" md="6" class="color-bkg py-16 px-16 ml-0">
        <v-row>
          <v-col cols="12" xs="0" sm="5"></v-col>
          <v-col align-center>
            <span
              class="text-h7 text-md-h5"
              style="font-weight: 400; color: white"
            >
              Мы специализируемся на капитальных вложениях в объекты горнорудной
              отрасли.<br /><br /><br />
              Частью нашей стратегии также является выстраивание партнерских
              отношений с инвесторами для совместной реализации текущих и
              запуска новых проектов.
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        offset-sm="1"
        sm="5"
        md="4"
        align-center
        class="py-16 px-16"
      >
        <span
          class="text-h7 text-md-h5"
          style="font-weight: 200; color: #282c75"
        >
          Основные активы "НРК" - золотые месторождения, находящиеся в
          Свердловской и Магаданской областях, Забайкальском и Приморском краях,
          республике Саха (Якутия) и Чукотском автономном округе. Компания также
          обладает рядом лицензий на перспективные медные проекты в
          Забайкальском и Хабаровском краях.<br /><br />
          По итогам ГРР 2018-2021 гг. ожидаемый объем запасов по якорным
          проектам "НРК" превысит 150 т золота.
        </span>
      </v-col>
    </v-row>
    <!-- <v-row class="d-flex align-end">
      <v-col cols="12" offset-sm="1" sm="4">
        <v-img src="../assets/images/1.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="4" offset-sm="2">
        <v-img src="../assets/images/2.jpg"> </v-img>
      </v-col>
      <v-col> </v-col>
    </v-row> -->
  </div>
</template>

<script>
</script>

<style>
.color-bkg {
  background-color: #282c75;
}
.about-company111:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  content: "";
  background: #fed62e;
  border-radius: 10px;
}
</style>