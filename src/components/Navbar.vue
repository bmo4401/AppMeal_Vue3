<template>
  <header class="bg-white shadow h-16 flex gap-5 items-center justify-around">
    <router-link
      :to="{ name: 'home' }"
      class="hover:text-orange-500 hover:scale-110 hover:font-bold mx-2"
    >
      Home</router-link
    >
    <div class="flex gap-5">
      <router-link
        :to="{ name: 'byName' }"
        class="hover:scale-105 hover:opacity-90 hover:text-emerald-500 transition-transform"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="hover:scale-105 hover:opacity-90 hover:text-emerald-500 transition-transform"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="hover:scale-105 hover:opacity-90 hover:text-emerald-500 transition-transform"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
