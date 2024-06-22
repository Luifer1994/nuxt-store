<template>
  <div class="container mx-auto">
    <Carousel :items="largeCarouselItems" type="large" />
    <div class="container mt-5">
      <CategoryCarousel :items="categoryCarouselItems" />

      <h2 class="text-3xl font-semibold sm:text-3xl my-10">
        Productos destacados
      </h2>
      <div class="mt-10">
        <div class="flex items-center justify-center lg:justify-between">
          <div class="hidden lg:flex">
            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
            >
              Check all items
              <svg
                class="w-5 h-5 ml-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <CarouselProducts
          :items="items.slice(9, 17)"
          :interval="3000"
          refDom="category"
          @productClick="handleProductClick"
        />

        <div class="mt-12 text-center lg:hidden">
          <a
            href="#"
            title=""
            class="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
          >
            Check all items
            <svg
              class="w-5 h-5 ml-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-8">
      <DiscountBanner :banner="bannerData" />
    </div>

    <div class="container mt-5">
      <h2 class="text-3xl font-semibold sm:text-3xl my-10">
        Productos recien llegados
      </h2>
      <div class="mt-10">
        <div class="flex items-center justify-center lg:justify-between">
          <div class="hidden lg:flex">
            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
            >
              Check all items
              <svg
                class="w-5 h-5 ml-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <CarouselProducts
          :items="items.slice(0, 8)"
          :interval="3000"
          refDom="category"
          @productClick="handleProductClick"
        />

        <div class="mt-12 text-center lg:hidden">
          <a
            href="#"
            title=""
            class="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
          >
            Check all items
            <svg
              class="w-5 h-5 ml-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <DiscountBanner :banner="bannerData" />
      <DiscountBanner :banner="bannerData" />
    </div>

    <div
      class="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <CardInfo
        title="Free Shipping"
        description="Free shipping on all orders over $200 in the US."
        icon="i-heroicons-truck"
      />
      <CardInfo
        title="24/7 Support"
        description="Contact us 24 hours a day, 7 days a week."
        icon="i-heroicons-device-phone-mobile"
      />
      <CardInfo
        title="30 Days Return"
        description="Simply return it within 30 days for an exchange."
        icon="i-heroicons-arrow-path"
      />
      <CardInfo
        title="Secure Payment"
        description="We ensure secure payment with PEV."
        icon="i-heroicons-currency-dollar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import Carousel from "@/components/ui/Carousel.vue";
import CategoryCarousel from "@/components/shop/CategoryCarousel.vue";
import DiscountBanner from "@/components/shop/DiscountBanner.vue";
import CardInfo from "@/components/shop/CardInfo.vue";
import { getProductsApi } from "@/modules/products/repositories/productRepository";
import CarouselProducts from "@/components/shop/CarouselProducts.vue";
import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";

const route = useRoute();

const items = ref(([] as ProductsResponseApi[]) || []);
const getProducts = await getProductsApi();
//create property in item images to push product image
items.value = getProducts.map((item) => {
  return {
    ...item,
    images: [item.image],
  };
});

useHead({
  title: "Título de la página específica",
  meta: [
    { name: "description", content: "Descripción de la página específica" },
  ],
});

const handleProductClick = (id: number | string) => {
  navigateTo(`/products/${id}`);
};

const largeCarouselItems = [
  {
    src: "https://www.apple.com/co/product-red/images/meta/og_world_aids__ccal5yhp82b6_day.png?202311281022",
    title: "Starting at $20.00",
    description: "Organic & healthy vegetables",
    buttonText: "Shop Now",
  },
  {
    src: "https://cdn.thewirecutter.com/wp-content/media/2022/03/primedayapple-2048px-2686-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    title: "Bakery Products",
    description: "Freshly baked everyday",
    buttonText: "Order Now",
  },
  {
    src: "https://kompiuterioremontas.lt/wp-content/uploads/2022/10/Apple-MacBook-ipad-imac-Kompiuteriu-remontas-vilniuje.jpg",
    title: "Dairy Products",
    description: "Quality dairy products",
    buttonText: "Get Now",
  },
];

const categoryCarouselItems = [
  {
    title: "Fashion",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-1.png",
    link: "#",
  },
  {
    title: "Electronics",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-2.png",
    link: "#",
  },
  {
    title: "Home & Garden",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-3.png",
    link: "#",
  },
  {
    title: "Sports",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-4.png",
    link: "#",
  },
  {
    title: "Toys",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-5.png",
    link: "#",
  },
];

const bannerData = {
  image:
    "https://img.freepik.com/fotos-premium/volando-frutas-bayas-aisladas-sobre-fondo-blanco_88281-2199.jpg?w=2000",
  title: "Frutas Frescas",
  subtitle: "Productos Saludables",
  discountText: "30% de descuento en oferta ¡¡¡ Date prisa!!!",
  description:
    "Aprovecha nuestras ofertas de temporada con los mejores productos frescos.",
  buttonText: "Compra ahora",
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
