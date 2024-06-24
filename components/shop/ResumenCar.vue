<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <dl class="flex items-center justify-between gap-4">
        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
          Sub Total
        </dt>
        <dd class="text-base font-medium text-gray-900 dark:text-white">
          $ {{ getTotalPrice() }}
        </dd>
      </dl>

      <!-- <dl class="flex items-center justify-between gap-4">
        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
          Ahorro
        </dt>
        <dd class="text-base font-medium text-green-600">-$299.00</dd>
      </dl> -->

     

     <!--  <dl class="flex items-center justify-between gap-4">
        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
          Impuestos
        </dt>
        <dd class="text-base font-medium text-gray-900 dark:text-white">
          $799
        </dd>
      </dl> -->
    </div>

    <dl
      class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700"
    >
      <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
      <dd class="text-base font-bold text-gray-900 dark:text-white">
        $ {{ getTotalPrice() }}
      </dd>
    </dl>
  </div>
</template>
<script setup lang="ts">
import { useCar } from '@/modules/car/composables/useCar';

const { getTotalPrice } = useCar();


</script>