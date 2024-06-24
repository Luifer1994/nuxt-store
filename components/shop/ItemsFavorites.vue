<template>
  <div>
    <div
      v-if="favoriteItems.length"
      class="max-w-sm w-full lg:max-w-full lg:flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 p-1 mb-2"
      v-for="(item, index) in favoriteItems"
      :key="index"
    >
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden xs:mx-auto lg:mr-2"
        :style="{ backgroundImage: `url(${item.image})` }"
        :title="item.title"
      ></div>
      <div
        class="flex items-center justify-between md:order-3 md:justify-end w-full lg:w-auto p-4 border-t border-b lg:border-t-0 lg:border-b-0 border-gray-300 dark:border-gray-600"
      >
        <div class="text-end md:order-4 md:w-32">
          <button
            name="Eliminar de favoritos"
            type="button"
            class="text-red-600 hover:underline dark:text-red-500"
            @click="removeItem(item.id)"
          >
            <UIcon name="i-heroicons-trash" class="h-6 w-6 font-bold" />
          </button>
        </div>
      </div>

      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <nuxt-link
          :to="`/products/${item.id}`"
          class="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
    <div v-else class="text-center py-8">
      <div class="mb-4">
        <UIcon name="i-heroicons-heart" class="h-12 w-12 text-gray-400" />
      </div>
      <p class="text-lg font-medium text-gray-900 dark:text-white">
        ¡Tu lista de favoritos está vacía!
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Añade productos a tu lista de favoritos para verlos aquí.
      </p>
      <nuxt-link
        class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        to="/"
      >
        Descubrir productos
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCar } from "@/modules/car/composables/useCar";
import type { Item } from "@/modules/car/interfaces/carInterfaces";
import { useFavorite } from "@/modules/favorites/composables/useFavorite";
const { items: favoriteItems, removeItem } = useFavorite();

</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
