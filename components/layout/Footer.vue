<!-- components/Footer.vue -->
<template>
  <footer class="bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 pb-8 sm:pt-16 lg:pt-20">
      <div class="grid grid-cols-2 gap-16 lg:grid-cols-6 xl:gap-x-20">
        <div class="col-span-2">
          <a href="#" class="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300">
            <NuxtImg width="600" height="400" loading="lazy" class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg" alt="" />
          </a>
          <ul class="mt-8 space-y-6">
            <li class="flex items-center">
              <span class="text-base font-medium text-gray-500 dark:text-gray-400"> Call us: </span>
              <span class="inline-flex ml-1 text-base font-medium text-gray-900 dark:text-gray-100"> +1-304-4983 </span>
            </li>
            <li class="flex items-center">
              <span class="text-base font-medium text-gray-500 dark:text-gray-400"> Email: </span>
              <span class="inline-flex ml-1 text-base font-medium text-gray-900 dark:text-gray-100"> support@rareblocks.xyz </span>
            </li>
            <li class="flex items-start">
              <span class="text-base font-medium text-gray-500 dark:text-gray-400"> Address: </span>
              <span class="inline-flex ml-1 text-base font-medium text-gray-900 dark:text-gray-100"> 2118 Thornridge Cir. Syracuse, Connecticut 35624, USA </span>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-xs font-bold tracking-widest text-gray-900 dark:text-gray-100 uppercase">Company</p>
          <ul class="mt-8 space-y-5">
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">About</a></li>
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Features</a></li>
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Works</a></li>
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Career</a></li>
          </ul>
        </div>
        <div>
          <p class="text-xs font-bold tracking-widest text-gray-900 dark:text-gray-100 uppercase">Help</p>
          <ul class="mt-8 space-y-5">
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Customer Support</a></li>
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Delivery Details</a></li>
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Terms & Conditions</a></li>
            <li><a href="#" class="inline-flex text-sm font-normal text-gray-900 dark:text-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:translate-x-1">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-span-2">
          <p class="text-xs font-bold tracking-widest text-gray-900 dark:text-gray-100 uppercase">Popular items</p>
          <ul class="mt-8 space-y-6">
            <li class="relative flex items-start">
              <div class="flex-shrink-0 w-12 h-12 overflow-hidden border border-gray-100 dark:border-gray-700 rounded-lg">
                <NuxtImg width="600" height="400" loading="lazy" class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/3/product.png" alt="" />
              </div>
              <div class="ml-4">
                <p class="text-sm font-bold text-gray-900 dark:text-gray-100">
                  <a href="#" class="rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300">Apple Watch Series 7</a>
                </p>
                <p class="mt-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">$349</p>
              </div>
            </li>
            <li class="relative flex items-start">
              <div class="flex-shrink-0 w-12 h-12 overflow-hidden border border-gray-100 dark:border-gray-700 rounded-lg">
                <NuxtImg width="600" height="400" loading="lazy" class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/3/product.png" alt="" />
              </div>
              <div class="ml-4">
                <p class="text-sm font-bold text-gray-900 dark:text-gray-100">
                  <a href="#" class="rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300">Apple Watch Series 7</a>
                </p>
                <p class="mt-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">$349</p>
              </div>
            </li>
          </ul>
          <div class="mt-7">
            <a href="#" class="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300 hover:text-gray-900 dark:hover:text-gray-100">See more items</a>
          </div>
        </div>
      </div>
      <hr class="mt-12 border-gray-200 dark:border-gray-700 sm:mt-16 lg:mt-20" />
      <div class="flex flex-col mt-8 sm:items-center sm:flex-row sm:justify-between">
        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">© Copyright 2022. All Rights Reserved</p>
        <div class="mt-6 sm:mt-0">
          <NuxtImg width="600" height="400" loading="lazy" class="w-auto h-6" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/3/payment-methods.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
