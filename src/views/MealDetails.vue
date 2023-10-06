<template>
  <div class="p-8">
    <div
      v-for="meal of meals"
      class="max-w-fit border-2 rounded-md border-black p-2"
      :key="meal.idMeal"
    >
      <img
        :src="meal.strMealThumb"
        class="w-20 aspect-square"
        :alt="meal.strMeal"
      />
      <h3 class="text-emerald-500 font-semibold truncate">
        {{ meal.strMeal }}
      </h3>
      <br />
      <div class="flex gap-3">
        <YoutubeButton :href="meal.strYoutube">Youtube By Id</YoutubeButton>
      </div>
      <div>
        <h2 class="font-bold">Ingredients</h2>
        <div class="grid grid-cols-3 gap-5">
          <ul v-for="(_, idx) of new Array(20)">
            <li v-if="meal[`strIngredient${idx + 1}`]">
              {{ idx + 1 }}.
              {{ meal[`strIngredient${idx + 1}`] }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
const route = useRoute();
const meals = ref([]);
onMounted(async () => {
  const id = route.params.id;
  if (id) {
    const { data } = await axiosClient.get(`/lookup.php?i=${id}`);
    if (data) meals.value = data.meals;
    console.log("❄️ ~ file: MealDetails.vue:44 ~ meals:", meals.value);
  }
});
</script>
