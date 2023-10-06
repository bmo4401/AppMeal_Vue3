<template>
  <div class="flex flex-col p-8">
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axiosClient from "../axiosClient.js";

/* const meals = computed(() => store.state.meals); */

const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
