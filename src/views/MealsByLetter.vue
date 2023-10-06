<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetters', params: { letter } }"
      :key="letter"
      v-for="letter of letters"
      >{{ letter }}</router-link
    >
  </div>
  <MealList />
</template>

<script setup>
import MealList from "./MealList.vue";

let letters = ["A"];
for (let i = 1; i <= 25; i++) {
  letters.push(String.fromCharCode(letters[i - 1].charCodeAt(0) + 1));
}
</script>
