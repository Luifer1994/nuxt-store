<template>
  <div class="container mx-auto px-4 mb-5">
    <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div class="lg:col-span-3 lg:row-end-1">
        <div class="lg:flex lg:items-start">
          <div class="lg:order-2 lg:ml-5">
            <div class="max-w-xl overflow-hidden rounded-lg group">
              <NuxtImg
                v-if="cleanedImages.length > 0"
                :src="cleanedImages[currentImageIndex]"
                :alt="product.title"
                class="h-full w-full max-w-full object-cover transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125"
                @error="handleImageError"
              />
              <div
                v-else
                class="h-full w-full max-w-full object-cover bg-gray-200 animate-pulse"
              ></div>
            </div>
          </div>

          <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div class="flex flex-row items-start lg:flex-col">
              <button
                v-for="(image, index) in cleanedImages"
                :key="index"
                type="button"
                class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 group"
                :class="index === currentImageIndex ? 'border-gray-900' : 'border-transparent'"
                @click="currentImageIndex = index"
              >
                <NuxtImg
                  class="h-full w-full object-cover transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125"
                  :src="image"
                  :alt="`Image ${index + 1}`"
                  @error="handleImageError"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          {{ product.title }}
        </h1>

        <h2 class="mt-8 text-base">Coffee Type</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <label class="">
            <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
            <p class="peer-checked:bg-indigo-600 peer-checked:text-white rounded-lg border px-6 py-2 font-bold">Powder</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Whole Bean" class="peer sr-only" />
            <p class="peer-checked:bg-indigo-600 peer-checked:text-white rounded-lg border px-6 py-2 font-bold">Whole Bean</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Groud" class="peer sr-only" />
            <p class="peer-checked:bg-indigo-600 peer-checked:text-white rounded-lg border px-6 py-2 font-bold">Groud</p>
          </label>
        </div>

        <h2 class="mt-8 text-base">Choose subscription</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <label class="">
            <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
            <p class="peer-checked:bg-indigo-600 peer-checked:text-white rounded-lg border px-6 py-2 font-bold">4 Months</p>
            <span class="mt-1 block text-center text-xs">$80/mo</span>
          </label>
          <label class="">
            <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
            <p class="peer-checked:bg-indigo-600 peer-checked:text-white rounded-lg border px-6 py-2 font-bold">8 Months</p>
            <span class="mt-1 block text-center text-xs">$60/mo</span>
          </label>
          <label class="">
            <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
            <p class="peer-checked:bg-indigo-600 peer-checked:text-white rounded-lg border px-6 py-2 font-bold">12 Months</p>
            <span class="mt-1 block text-center text-xs">$40/mo</span>
          </label>
        </div>

        <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div class="flex items-end">
            <h1 class="text-3xl font-bold">$60.50</h1>
            <span class="text-base">/month</span>
          </div>

          <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-indigo-600 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>

      <div class="lg:col-span-3">
        <div class="border-b border-gray-300">
          <nav class="flex gap-4">
            <a
              href="#"
              title=""
              class="border-b-2 border-gray-900 py-4 text-sm font-medium hover:border-gray-400 hover:text-gray-800"
            >
              Descripción
            </a>
          </nav>
        </div>

        <div class="mt-8 flow-root sm:mt-12">
          <h1 class="text-3xl font-bold">
            {{ product.title }}
          </h1>
          <p class="mt-4">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watchEffect } from "vue";
import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";
import { validateImageUrl } from "@/utils/validateImageUrl";

const props = defineProps<{
  product: ProductsResponseApi;
}>();

const currentImageIndex = ref(0);
const cleanedImages = ref<string[]>([]);
const currentImageSrc = ref("");

watchEffect(async () => {
  if (props.product.images.length > 0) {
    currentImageIndex.value = 0;
    cleanedImages.value = await Promise.all(
      props.product.images.map(async (image) => {
        const cleanUrl = image.replace(/[\[\]"]/g, "").trim();
        const isValid = await validateImageUrl(cleanUrl);
        return isValid ? cleanUrl : "/default-img.jpg";
      })
    );
    currentImageSrc.value = cleanedImages.value[0];
  }
});

const handleImageError = (event: Event) => {
  (event.target as HTMLImageElement).src = "/default-img.jpg";
};
</script>

<style scoped>
.group:hover .object-cover {
  transform: rotate(-3deg) scale(1.25);
  transition: all 0.3s;
}
</style>
