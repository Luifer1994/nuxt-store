import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";
import type { Item } from "../interfaces/carInterfaces";

/**
 * Store para manejar el carrito de compras.
 */
export const useCarStore = defineStore('car', () => {
  // Inicializar el estado del carrito desde localStorage
  const items = ref<Item[]>([]);

  // Inicializa el carrito desde el localStorage
  const initializeCar = () => {
    const storedItems = localStorage.getItem('car');
    if (storedItems !== null) {
      items.value = JSON.parse(storedItems) as Item[];
    } else {
      items.value = [];
      localStorage.setItem('car', JSON.stringify([]));
    }
  };

  /**
   * Agrega un nuevo elemento al carrito de compras.
   * 
   * @param {Item} item - El objeto del elemento a agregar.
   */
  const addItem = (item: Item) => {
    items.value.push(item);
  };

  /**
   * Elimina un elemento del carrito de compras por su ID.
   * 
   * @param {number | string} id - El identificador del elemento a eliminar.
   */
  const removeItem = (id: number | string) => {
    items.value = items.value.filter((item) => item.id !== id);
  };

  /**
   * Limpia todos los elementos del carrito de compras.
   */
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
