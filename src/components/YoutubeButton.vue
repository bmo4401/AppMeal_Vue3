<template>
  <a
    :href="href"
    target="_blank"
    class="border-2 px-2 py-1 rounded-md border-orange-500 bg-orange-500 text-white"
  >
    <slot></slot>
  </a>
</template>

<script setup>
/* passing props */
const props = defineProps({
  href: String,
});
</script>
