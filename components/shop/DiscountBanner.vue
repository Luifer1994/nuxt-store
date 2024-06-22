<template>
  <div class="relative overflow-hidden rounded-lg shadow-lg group">
    <NuxtImg
      width="600"
      height="400"
      :src="banner.image"
      class="w-full h-64 object-cover transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125"
      :alt="banner.title"
      loading="lazy"
      @error="handleImageError"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="text-center text-white">
        <h2 class="text-3xl font-bold mb-2">{{ banner.title }}</h2>
        <p class="text-xl mb-4">{{ banner.subtitle }}</p>
        <p class="text-lg text-indigo-400 font-semibold mb-2">{{ banner.discountText }}</p>
        <p class="text-base mb-4">{{ banner.description }}</p>
        <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">{{ banner.buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  banner: {
    type: Object,
    required: true,
    default: () => ({
      image: 'https://picsum.photos/800/400',
      title: 'Frutas Frescas',
      subtitle: 'Productos Saludables',
      discountText: '30% de descuento en oferta ¡¡¡ Date prisa!!!',
      description: '',
      buttonText: 'Compra ahora'
    })
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
