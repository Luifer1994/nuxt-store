<template>
  <div>
    <ProductDetail v-if="selectedProduct?.id" :product="selectedProduct" />
    <div v-else-if="loading" class="skeleton-container">
      <SkeletonProduct />
    </div>
    <div v-else class="alert-container">
      <div
        class="flex flex-col items-center justify-center p-6 mb-4 text-lg text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-6 h-6 mb-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div class="text-center">
          <span class="font-medium">¡Alerta de peligro!</span> Producto no
          encontrado o falla al cargar. Redirigiendo a la página principal...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductDetail from "@/components/shop/ProductDetail.vue";
import SkeletonProduct from "@/components/ui/SkeletonProduct.vue";
import { useProduct } from "@/modules/products/composables/useProduct";
import { useAsyncData } from "nuxt/app";
import { useHead } from "@vueuse/head";

const route = useRoute();
const router = useRouter();
const { getProductById, selectedProduct } = useProduct();
const loading = ref(true);
const error = ref<Error | null>(null);

const { id } = route.params as { id: string | number };

const { data, error: fetchError } = await useAsyncData(`product:${id}`, () =>
  getProductById(id)
);

if (fetchError.value) {
  error.value = fetchError.value;
  loading.value = false; // Set loading to false to show the alert
  setTimeout(() => {
    router.push("/");
  }, 4000); // Redirigir después de 4 segundos
} else {
  loading.value = false;
  useHead({
    title: selectedProduct.value.title+" | " +useRuntimeConfig().public.titleTemplate,
    meta: [
      { name: "description", content: selectedProduct.value.description },
      { property: "og:title", content: selectedProduct.value.title },
      { property: "og:description", content: selectedProduct.value.description },
      { property: "og:image", content: selectedProduct.value.images[0] || '/default-img.jpg' },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: selectedProduct.value.title },
      { name: "twitter:description", content: selectedProduct.value.description },
      { name: "twitter:image", content: selectedProduct.value.images[0] || '/default-img.jpg' },
    ]
  });
}
</script>

<style scoped>
.skeleton-container {
  text-align: center;
  padding: 2rem;
}

.alert-container {
  text-align: center;
  padding: 2rem;
}

.alert-container .alert {
  font-size: 1.125rem; /* Tamaño de fuente más grande (text-lg) */
}
</style>
