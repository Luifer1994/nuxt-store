<template>
    <div class="flex items-center space-x-3 xs:ml-5 ml-4 lg:ml-10 ">
      <button
        type="button"
        class="relative p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span
          class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"
          >2</span
        >
      </button>
      <button
        type="button"
        class="relative p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21C7.4 18.36 4 15.28 4 11.28 4 8.19 6.19 6 9.28 6c1.54 0 3.04.81 3.72 2.09C14.68 6.81 16.18 6 17.72 6 20.81 6 23 8.19 23 11.28c0 4-3.4 7.08-8 9.72L12 21z"
          />
        </svg>
        <span
          class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"
          >6</span
        >
      </button>
      <button
        @click="toggleDarkMode"
        type="button"
        class="p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.07 19.07l.707.707M1 12h1M22 12h1M4.22 19.07l.707-.707M19.07 4.22l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
      >
        <NuxtImg width="600" height="400"
          class="object-cover bg-gray-300 rounded-full w-9 h-9"
          src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/horizontal-menu/3/avatar-male.png"
          alt=""
        />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDarkModeStore } from "@/stores/darkModeStore";
  const { toggleDarkMode } = useDarkModeStore();
  </script>
  