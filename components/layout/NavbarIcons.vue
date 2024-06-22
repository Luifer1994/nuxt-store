<template>
  <div class="flex items-center space-x-3 xs:ml-5 ml-4 lg:ml-10">
    <button
      type="button"
      class="relative p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div
        class="w-7 h-7 flex items-center justify-center bg-white rounded-full"
      >
        <UIcon name="i-heroicons-shopping-bag" class="w-6 h-6" />
      </div>
      <span
        class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"
      >
        {{ items.length }}
      </span>
    </button>
    <button
      type="button"
      class="relative p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div
        class="w-7 h-7 flex items-center justify-center bg-white rounded-full"
      >
        <UIcon name="i-heroicons-heart" class="w-6 h-6" />
      </div>
      <span
        class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-rose-500 text-white"
      >
        {{ favoriteItems.length }}
      </span>
    </button>
    <button
      @click="darkModeStore.toggleDarkMode"
      type="button"
      class="p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div
        class="w-7 h-7 flex items-center justify-center bg-white rounded-full"
      >
        <UIcon
          :name="isDarkMode ? 'i-heroicons-moon' : 'i-heroicons-sun'"
          class="w-6 h-6"
        />
      </div>
    </button>
    <button
      type="button"
      class="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
    >
      <NuxtImg
        width="600"
        height="400"
        class="object-cover bg-gray-300 rounded-full w-9 h-9"
        src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/horizontal-menu/3/avatar-male.png"
        alt=""
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCar } from "@/modules/car/composables/useCar";
import { useFavorite } from "@/modules/favorites/composables/useFavorite";
import { useDarkModeStore } from "@/stores/darkModeStore";

// Importar el store y reactividad necesaria
const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
const { items } = useCar();
const { items: favoriteItems } = useFavorite();
</script>
