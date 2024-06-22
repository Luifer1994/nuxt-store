<template>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="props.items"
      :ui="{ item: carouselItemClass }"
      class="rounded-lg overflow-hidden relative w-full"
      :indicators="false"
    >
      <div class="relative overflow-hidden rounded-lg group mx-1 sm:mx-2 md:mx-3">
        <div>
          <NuxtImg width="600" height="400" 
            class="object-cover w-full h-46 sm:h-46 md:h-46 lg:h-46 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125" 
            :src="item.image" 
            :alt="item.title"
            loading="lazy"
          />
        </div>
        <div class="absolute inset-x-0 bottom-0">
          <div class="px-2 py-2 xl:px-4 xl:py-3">
            <p class="text-sm font-bold text-gray-900 xl:text-base">{{ item.title }}</p>
          </div>
        </div>
        <a :href="item.link" title="">
          <span class="absolute inset-0" aria-hidden="true"></span>
        </a>
      </div>
    </UCarousel>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineProps, computed } from "vue";
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  });
  
  const carouselRef = ref();
  
  const carouselItemClass = computed(() => {
    return 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5';
  });

  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  