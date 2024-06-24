<template>
  <div class="container mx-auto mb-5 mt-5">
    <div class="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
      <div class="w-full lg:w-2/3">
        <ItemsCar />
      </div>
      <div class="w-full lg:w-1/3">
        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div
            class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
          >
            <p class="text-xl font-semibold text-gray-900 dark:text-white">
              Resumen de la compra
            </p>

            <ResumenCar />

            <nuxt-link
              :class="{ disabled: !items.length }"
              to="/checkout"
              class="flex w-full items-center justify-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Pasar a pagar
            </nuxt-link>

            <div class="flex items-center justify-center gap-2">
              <nuxt-link
                to="/"
                title="Seguin comprando"
                class="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 underline hover:no-underline dark:text-indigo-500"
              >
                Seguir comprando
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCar } from "@/modules/car/composables/useCar";
import ResumenCar from "@/components/shop/ResumenCar.vue";
import ItemsCar from "@/components/shop/ItemsCar.vue";

const { items } = useCar();
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
