import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";
import type { Item } from "../interfaces/carInterfaces";

/**
 * Store para manejar el carrito de compras.
 */
export const useCarStore = defineStore('car', () => {
  // Inicializar el estado del carrito desde localStorage
  const items = ref<Item[]>([]);

  const initializeCar = () => {
    const storedItems = localStorage.getItem('car');
    if (storedItems !== null) {
      items.value = JSON.parse(storedItems) as Item[];
    } else {
      items.value = [];
      localStorage.setItem('car', JSON.stringify([]));
    }
  };

  const addItem = (item: Item) => {
    items.value.push(item);
  };

  const removeItem = (id: number | string) => {
    items.value = items.value.filter((item) => item.id !== id);
  };

  const clearCar = () => {
    items.value = [];
  };

  if (typeof window !== 'undefined') {
    onMounted(() => {
      initializeCar();

      watch(items, (newItems) => {
        localStorage.setItem('car', JSON.stringify(newItems));
      }, { deep: true });
    });
  }

  return {
    items,
    addItem,
    removeItem,
    clearCar,
  };
});
