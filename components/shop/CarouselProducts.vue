<script setup lang="ts">
import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";
import { ref, defineProps, computed, defineEmits } from "vue";

// Define props
const props = defineProps<{
  items: ProductsResponseApi[];
  interval: number;
  refDom: string;
}>();

// Define emits
const emit = defineEmits(['productClick']);

const carouselRef = ref<HTMLElement | null>(null);

const carouselItemClass = computed(
  () => "xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
);

// Handle product click
const handleProductClick = (id: number|string, event: Event) => {
  event.preventDefault();
  emit('productClick', id);
};
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="props.items"
    :ui="{ item: carouselItemClass }"
    class="rounded-lg overflow-hidden w-full"
    :indicators="false"
  >
    <div
      class="relative overflow-hidden bg-white border border-gray-200 rounded-lg group mx-2 flex flex-col justify-between"
    >
      <div class="absolute z-10 top-3 right-3">
        <button
          type="button"
          class="inline-flex items-center justify-center text-gray-400 hover:text-rose-500"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="relative"  @click="handleProductClick(item.id, $event)">
        <div class="aspect-w-1 aspect-h-1">
          <img class="object-cover w-full h-full" :src="item.images[0]" alt="" />
        </div>
        <div class="px-6 py-5 flex-1">
          <p class="text-xs font-medium tracking-widest text-gray-400 uppercase">
            {{ item.category.name }}
          </p>
          <h3 class="mt-3 text-sm font-medium min-h-[30px]">
            <a href="javascript:void(0);" title="">
              {{ item.title }}
              <span class="absolute inset-0" aria-hidden="true"></span>
            </a>
          </h3>
          <p class="mt-5 text-sm font-bold min-h-[20px]">${{ item.price }}</p>
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 transition-all duration-200 translate-y-full group-hover:translate-y-0"
      >
        <button
          type="button"
          class="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-indigo-600"
        >
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          Agregar al carrito
        </button>
      </div>
    </div>
  </UCarousel>
</template>

<style scoped>
.group {
  width: 250px; /* Aquí también aseguramos la misma anchura */
}
</style>
