<script setup lang="ts">
import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";
import { ref, defineProps, computed, defineEmits } from "vue";
import { useCar } from "@/modules/car/composables/useCar";
import type { Item } from "@/modules/car/interfaces/carInterfaces";

const { addItem, items } = useCar();

// Define props
const props = defineProps<{
  items: ProductsResponseApi[];
  interval: number;
  refDom: string;
}>();

// Define emits
const emit = defineEmits(["productClick"]);

const carouselRef = ref<HTMLElement | null>(null);

const carouselItemClass = computed(
  () => "xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
);

// Handle product click
const handleProductClick = (id: number | string, event: Event) => {
  event.preventDefault();
  emit("productClick", id);
};

// Handle favorite click
const handleFavoriteClick = (id: number | string, event: Event) => {
  event.stopPropagation();
  console.log(`Favorito clicado: ${id}`);
};

// Handle add to cart click
const handleAddToCartClick = (item: ProductsResponseApi, event: Event) => {
  if (isItemInCart(item.id)) return;
  event.stopPropagation();
  let itemToAdd = { ...item, quantity: 1 } as Item;
  addItem(itemToAdd);
};

// Validate if item is in cart or not
const isItemInCart = (id: number) => {
  return items.value.some((item) => item.id === id);
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
      <div class="relative" @click="handleProductClick(item.id, $event)">
        <div class="aspect-w-1 aspect-h-1">
          <img
            class="object-cover w-full h-full"
            :src="item.images[0]"
            alt=""
          />
        </div>
        <div class="px-6 py-5 flex-1">
          <p
            class="text-xs font-medium tracking-widest text-gray-400 uppercase"
          >
            {{ item.category }}
          </p>
          <h3 class="mt-3 text-sm font-medium min-h-[30px]">
            <a :href="`/product/${item.id}`" :title="item.title">
              {{ item.title }}
              <span class="absolute inset-0" aria-hidden="true"></span>
            </a>
          </h3>
          <div class="flex justify-between items-center mt-5">
            <p class="text-sm font-bold">${{ item.price }}</p>
            <div class="flex space-x-4">
              <!-- Botón de favorito -->
              <button
                type="button"
                class="inline-flex items-center justify-center hover:text-rose-500"
                @click.stop="handleFavoriteClick(item.id, $event)"
              >
                <UIcon name="i-heroicons-heart" class="h-6 w-6 font-bold" />
              </button>
              <!-- Botón de agregar al carrito -->
              <button
                type="button"
                :class="
                  isItemInCart(item.id)
                    ? 'text-indigo-600'
                    : 'hover:text-indigo-600'
                "
                class="inline-flex items-center justify-center"
                @click.stop="handleAddToCartClick(item, $event)"
              >
                <UIcon
                  name="i-heroicons-shopping-bag"
                  class="h-6 w-6 font-bold"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCarousel>
</template>

<style scoped>
.group {
  width: 250px; /* Aquí también aseguramos la misma anchura */
}
</style>
