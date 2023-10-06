<template>
  <div
    class="grid grid-cols-3 p-8 gap-5 items-center justify-between overflow-y-auto h-[600px] border-2 border-slate-400 rounded-md"
  >
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
const route = useRoute();

const keyword = ref("");
const searchMealsByLetter = () => {
  store.dispatch("searchMealsByLetter", keyword.value.toLowerCase());
};
onMounted(() => {});
/* listen on route change */
watch(route, () => {
  keyword.value = route.params.letter;
  if (keyword.value) {
    searchMealsByLetter();
  }
});
const meals = computed(() => store.state.mealsByLetter);
</script>
