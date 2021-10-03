<template>
  <div class="goods-bkg">
    <v-container>
      <!-- <div class="d-flex justify-center mb-8">
        <v-btn @click="showAll = !showAll">{{ currentText }}</v-btn>
      </div> -->
      <div>
        <v-row>
          <GoodsCard class="mb-8" v-for="good in 3" :key="good" :good="good" />
        </v-row>
      </div>
      <!-- <div v-if="!showAll">
        <v-row>
          <GoodsCard class="mb-8" v-for="good in 9" :key="good" :good="good" />
        </v-row>
      </div> -->
    </v-container>
  </div>
</template>

<script>
import GoodsCard from "./GoodsCard.vue";
export default {
  computed: {
    currentText() {
      switch (this.showAll) {
        case true:
          return "А гвозди?";
        default:
          return "Так вот же они";
      }
    },
  },
  data() {
    return {
      showAll: true,
    };
  },
  components: {
    GoodsCard,
  },
};
</script>

<style>
.goods-bkg {
  background-color: rgb(230, 230, 230);
}
</style>