<template>
  <div>
    <div
      v-if="items.length"
      class="max-w-sm w-full lg:max-w-full lg:flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 p-1 mb-2"
      v-for="(item, index) in items"
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
        <div class="flex items-center">
          <button
            @click="decrementQuantity(item.id)"
            type="button"
            id="decrement-button"
            data-input-counter-decrement="counter-input"
            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <UIcon name="i-heroicons-minus" class="h-6 w-6 font-bold" />
          </button>
          <input
            type="text"
            id="counter-input"
            data-input-counter
            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
            min="1"
            :value="item.quantity"
            required
          />
          <button
            @click="incrementQuantity(item.id)"
            type="button"
            id="increment-button"
            data-input-counter-increment="counter-input"
            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <UIcon name="i-heroicons-plus" class="h-6 w-6 font-bold" />
          </button>
        </div>
        <div class="text-end md:order-4 md:w-32">
          <p class="text-base font-bold text-gray-900 dark:text-white">
            ${{ item.price }}
          </p>
        </div>
      </div>

      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <nuxt-link
          :to="`/products/${item.id}`"
          class="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
          {{ item.title }}
        </nuxt-link>

        <div class="flex items-center gap-4">
          <button
            name="Agregar a favoritos"
            type="button"
            @click.stop="handleFavoriteClick(item, $event)"
            :class="
              isItemInFavorites(item.id)
                ? 'text-rose-500'
                : 'hover:text-rose-500'
            "
          >
            <UIcon
              :name="
                isItemInFavorites(item.id)
                  ? 'i-heroicons-heart-solid'
                  : 'i-heroicons-heart'
              "
              class="h-6 w-6 font-bold"
            />
          </button>

          <button
            name="Eliminar del carrito"
            type="button"
            class="text-red-600 hover:underline dark:text-red-500"
            @click="removeItemCar(item.id)"
          >
            <UIcon name="i-heroicons-trash" class="h-6 w-6 font-bold" />
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-8">
      <div class="mb-4">
        <UIcon name="i-heroicons-shopping-bag" class="h-12 w-12 text-gray-400" />
      </div>
      <p class="text-lg font-medium text-gray-900 dark:text-white">
        ¡Empieza un carrito de compras!
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Añade productos a tu carrito para verlos aquí.
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
import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";
const {
  items,
  removeItem: removeItemCar,
  decrementQuantity,
  incrementQuantity,
} = useCar();
const {
  addItem: addFavoriteItem,
  items: favoriteItems,
  removeItem,
} = useFavorite();

// Validate if item is in favorites or not
const isItemInFavorites = (id: number) => {
  return favoriteItems.value.some((item) => item.id === id); // Usando el alias de items
};

const handleFavoriteClick = (
  item: ProductsResponseApi | Item,
  event: Event
) => {
  event.stopPropagation();
  if (isItemInFavorites(item.id)) {
    removeItem(item.id); // Usando el método alias
    return;
  }
  addFavoriteItem(item); // Usando el método alias
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
