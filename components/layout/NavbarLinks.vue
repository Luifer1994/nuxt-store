<template>
    <div class="hidden lg:flex lg:items-center lg:space-x-10 lg:ml-10">
      <nuxt-link
        to="/"
        exact
        active-class="text-blue-600 dark:text-indigo-600"
        class="text-base font-medium text-black dark:text-white"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/about"
        exact
        active-class="text-blue-600 dark:text-indigo-600"
        class="text-base font-medium text-black dark:text-white"
      >
        About
      </nuxt-link>
    </div>
  </template>
  