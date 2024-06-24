<template>
    <nav v-if="isMenuOpen" class="fixed inset-0 bg-white dark:bg-gray-900 z-50 lg:hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between py-4">
          <nuxt-link to="/" class="flex">
            <NuxtImg width="600" height="400"
              class="w-auto h-8 lg:h-10"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt="Logo"
              loading="lazy"
            />
          </nuxt-link>
          <button
            type="button"
            class="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="$emit('toggle-menu')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6">
          <!-- <div class="flex flex-col space-y-2">
            <nuxt-link
              to="/"
              exact
              active-class="text-blue-600 dark:text-blue-400"
              class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 dark:text-white dark:focus:text-blue-400"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/about"
              exact
              active-class="text-blue-600 dark:text-blue-400"
              class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 dark:text-white dark:focus:text-blue-400"
            >
              About
            </nuxt-link>
          </div> -->
          <hr class="my-4 border-gray-200 dark:border-gray-700" />
          <div class="flex flex-col space-y-2">
            <a
              href="#"
              class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 dark:text-white dark:focus:text-blue-400"
            >
              Sign up
            </a>
            <a
              href="#"
              class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 dark:text-white dark:focus:text-blue-400"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isMenuOpen: Boolean
  });
  
  const emit = defineEmits(['toggle-menu']);
  </script>
  