import { storeToRefs } from "pinia";
import { useFavoriteStore } from "../stores/favoriteStore";
import type { Item } from "../interfaces/favoriteInterfaces";
import { useNuxtApp } from "#app";
import type { Toast } from "@/types/toast";

// Composable useFavorite
export const useFavorite = () => {
  // Accede al contexto de Nuxt
  const nuxtApp = useNuxtApp();
  // Obtén la instancia de toast desde el contexto de Nuxt
  const toast = nuxtApp.$useToast as Toast;

  // Obtén la tienda de favoritos usando Pinia
  const carStore = useFavoriteStore();
  // Desestructura las referencias reactivas de la tienda
  const { items } = storeToRefs(carStore);

  /**
   * Agrega un nuevo elemento a la lista de favoritos.
   * Si el elemento ya existe, no lo agrega.
   * Muestra una notificación al añadir un nuevo elemento.
   *
   * @param {Item} item - El objeto del elemento a agregar.
   */
  const addItem = (item: Item) => {
    // Verifica si el elemento ya existe en la lista
    const existingItem = items.value.find((i) => i.id === item.id);
    if (existingItem) {
      return;
    }
    // Agrega el elemento a la tienda
    carStore.addItem(item);
    // Muestra una notificación
    toast.add({
      title: "Item añadido al favorito",
      description: item.title,
      /* ui: {
        "progress": {
        "base": 'absolute bottom-0 end-0 start-0 h-1',
        "background": 'bg-red-100 dark:bg-red-100',
        }
      }, */
    });
  };

  /**
   * Elimina un elemento de la lista de favoritos por su ID.
   *
   * @param {number | string} id - El identificador del elemento a eliminar.
   */
  const removeItem = (id: number | string) => {
    const title = items.value.find((i) => i.id === id)?.title;
    carStore.removeItem(id);
    // Muestra una notificación
    toast.add({
      title: "Item eliminado de favoritos",
      description: title,
      color: "red",
    });
  };

  /**
   * Limpia todos los elementos de la lista de favoritos.
   */
  const clearFavorite = () => {
    carStore.clearFavorite();
    // Muestra una notificación
    toast.add({ title: "Todos los favoritos han sido eliminados", color: "orange" });
  };

  /**
   * Obtiene el número total de elementos en la lista de favoritos.
   *
   * @returns {number} - El número total de elementos en favoritos.
   */
  const getTotalItems = () => {
    return items.value.length;
  };

  // Retorna las propiedades y métodos del composable
  return {
    items,
    addItem,
    removeItem,
    clearFavorite,
    getTotalItems,
  };
};
