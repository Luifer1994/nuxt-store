<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineProps, computed } from "vue";
import type { Ref } from "vue";

// Define props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator: (value: string) => ["large", "small"].includes(value),
  },
  interval: {
    type: Number,
    default: 3000,
  },
});

interface CarouselRef {
  page: number;
  pages: number;
  select: (index: number) => void;
  next: () => void;
}

const carouselRef: Ref<CarouselRef | null> = ref(null);

let intervalId: number | undefined;

// Computed property for dynamic class
const carouselItemClass = computed(() => {
  return props.type === "large"
    ? "basis-full"
    : "xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5";
});

onMounted(() => {
  intervalId = window.setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, props.interval);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="props.items"
    :ui="{
      item: carouselItemClass,
      indicators: {
        base: 'rounded-full h-3 w-3',
        active: 'bg-indigo-500',
        inactive: 'bg-gray-300',
      },
    }"
    class="rounded-lg overflow-hidden relative w-full"
    indicators
  >
    <div v-if="props.type === 'large'" class="relative w-full group">
      <NuxtImg
        width="600"
        height="400"
        :src="item.src"
        class="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        draggable="false"
        loading="lazy"
        priority
        :alt="item.title"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4"
      >
        <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
        <p class="mb-4">{{ item.description }}</p>
        <button
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          {{ item.buttonText }}
        </button>
      </div>
    </div>
    <div v-else class="relative w-full p-4 group">
      <div
        class="p-4 bg-white rounded-lg shadow text-center h-32 flex flex-col justify-center transition-transform duration-300 ease-in-out group-hover:scale-105"
      >
        <h2 class="text-xl font-semibold">{{ item.title }}</h2>
        <p class="text-gray-600">{{ item.itemsCount }} items</p>
        <p v-if="item.discount" class="text-indigo-500 font-bold">
          {{ item.discount }}% off
        </p>
      </div>
    </div>
  </UCarousel>
</template>

<style scoped>
/* Additional styles if needed */
</style>
