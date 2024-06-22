<template>
  <div class="bg-white border rounded-lg p-6 text-center">
    <div class="flex justify-center mb-4">
      <UIcon :name="icon" class="h-10 w-10 text-gray-500"  />
    </div>
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-500">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
