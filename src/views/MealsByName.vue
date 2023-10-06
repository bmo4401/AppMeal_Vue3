<template>
  <div class="mx-10 my-2">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div
    class="grid grid-cols-3 p-8 gap-5 items-center justify-between overflow-y-auto h-[600px] border-2 border-slate-400 rounded-md"
  >
    <div
      v-for="meal of meals"
      class="max-w-fit border-2 rounded-md border-black p-2"
      :key="meal.idMeal"
    >
      <MealItem :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

import MealItem from "./MealItem.vue";
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

const keyword = ref("");
const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
