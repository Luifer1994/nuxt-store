import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";
import type { Item } from "../interfaces/favoriteInterfaces";


export const useFavoriteStore = defineStore('favorite', () => {
  const items = ref<Item[]>([]);

  const initializeFavorite = () => {
    const storedItems = localStorage.getItem('favorite');
    if (storedItems !== null) {
      items.value = JSON.parse(storedItems) as Item[];
    } else {
      items.value = [];
      localStorage.setItem('favorite', JSON.stringify([]));
    }
  };

  const addItem = (item: Item) => {
    items.value.push(item);
  };

  const removeItem = (id: number | string) => {
    items.value = items.value.filter((item) => item.id !== id);
  };

  const clearFavorite = () => {
    items.value = [];
  };

  if (typeof window !== 'undefined') {
    onMounted(() => {
      initializeFavorite();

      watch(items, (newItems) => {
        localStorage.setItem('favorite', JSON.stringify(newItems));
      }, { deep: true });
    });
  }

  return {
    items,
    addItem,
    removeItem,
    clearFavorite,
  };
});
