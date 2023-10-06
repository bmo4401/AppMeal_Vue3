<template>
  <div>
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        class="w-20 aspect-square"
        :alt="meal.strMeal"
      />
    </router-link>
    <h3 class="text-emerald-500 font-semibold truncate">
      {{ meal.strMeal }}
    </h3>
    <br />
    <div class="flex gap-3">
      <YoutubeButton :href="meal.strYoutube">Youtube By Name</YoutubeButton>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const props = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
