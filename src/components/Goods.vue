<template>
  <div class="goods-bkg">
    <v-container>
      <v-row>
        <GoodsCard
          class="mb-8 col"
          v-for="good in 9"
          :key="good"
          :good="good"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GoodsCard from "./GoodsCard.vue";
export default {
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