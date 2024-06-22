import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";
import type { Item } from "../interfaces/carInterfaces";
import { useNuxtApp } from "#app";
import type { Toast } from "@/types/toast";

/**
 * Store para manejar el carrito de compras.
 */
export const useCarStore = defineStore('car', () => {
  // Accede al contexto de Nuxt
  const nuxtApp = useNuxtApp();
  // Obtén la instancia de toast desde el contexto de Nuxt
  const toast = nuxtApp.$useToast as Toast;

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
    // Muestra una notificación
    toast.add({
      title: "Item añadido al carrito",
      description: item.title,
      color: "green",
    });
  };

  /**
   * Elimina un elemento del carrito de compras por su ID.
   * 
   * @param {number | string} id - El identificador del elemento a eliminar.
   */
  const removeItem = (id: number | string) => {
    const title = items.value.find((i) => i.id === id)?.title;
    items.value = items.value.filter((item) => item.id !== id);
    // Muestra una notificación
    toast.add({
      title: "Item eliminado del carrito",
      description: title,
      color: "red",
    });
  };

  /**
   * Limpia todos los elementos del carrito de compras.
   */
  const clearCar = () => {
    items.value = [];
    // Muestra una notificación
    toast.add({
      title: "Carrito limpiado",
      color: "orange",
    });
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
