<template>
  <header class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
    <div class="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav class="relative flex items-center justify-between h-16 lg:h-20">
          <NavbarLogo />
        <!--   <NavbarLinks /> -->
          <NavbarSearch />
          <NavbarIcons />
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
    <NavbarMobileMenu :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavbarLogo from "@/components/layout/NavbarLogo.vue";
/* import NavbarLinks from "@/components/layout/NavbarLinks.vue"; */
import NavbarSearch from "@/components/layout/NavbarSearch.vue";
import NavbarIcons from "@/components/layout/NavbarIcons.vue";
import NavbarMobileMenu from "@/components/layout/NavbarMobileMenu.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
