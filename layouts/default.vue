<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
    <Navbar />
    <main class="mx-auto p-4 w-full max-w-7xl">
      <nuxt-page />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
