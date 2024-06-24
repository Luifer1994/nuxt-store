import { storeToRefs } from "pinia";
import { useCarStore } from "../stores/carStore";
import type { Item } from "../interfaces/carInterfaces";
import { useNuxtApp } from "#app";
import type { Toast } from "@/types/toast";

/**
 * Composable para manejar operaciones relacionadas con el carrito de compras.
 */
export const useCar = () => {
  // Accede al contexto de Nuxt
  const nuxtApp = useNuxtApp();
  // Obtén la instancia de toast desde el contexto de Nuxt
  const toast = nuxtApp.$useToast as Toast;

  // Obtiene el store del carrito de compras
  const carStore = useCarStore();

  // Extrae las referencias de los elementos del carrito desde el store
  const { items } = storeToRefs(carStore);

  /**
   * Añade un elemento al carrito.
   * @param {Item} item - El elemento a añadir al carrito.
   */
  const addItem = (item: Item) => {
    //si el item ya existe en el carrito, aumenta la cantidad
    const existingItem = items.value.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
      return;
    }
    carStore.addItem(item);
    // Muestra una notificación
    toast.add({
      title: "Item añadido al carrito",
      description: item.title,
      color: "green",
    });
  };

  /**
   * Elimina un elemento del carrito por su ID.
   * @param {number | string} id - El ID del elemento a eliminar.
   */
  const removeItem = (id: number | string) => {
    const title = items.value.find((i) => i.id === id)?.title;
    carStore.removeItem(id);
    // Muestra una notificación
    toast.add({
      title: "Item eliminado del carrito",
      description: title,
      color: "red",
    });
  };

  /**
   * Limpia todos los elementos del carrito.
   */
  const clearCar = () => {
    carStore.clearCar();
    // Muestra una notificación
    toast.add({
      title: "Carrito limpiado",
      color: "orange",
    });
  };

  /**
   * Disminuye la cantidad de un elemento en el carrito.
   * @param {number | string} id - El ID del elemento a actualizar.
   */
  const decrementQuantity = (id: number | string) => {
    const item = items.value.find((i) => i.id === id);
    if (item) {
      if (item.quantity <= 1) return;
      item.quantity -= 1;
    }
  };

  /**
   * Aumenta la cantidad de un elemento en el carrito.
   * @param {number | string} id - El ID del elemento a actualizar.
   */
  const incrementQuantity = (id: number | string) => {
    const item = items.value.find((i) => i.id === id);
    if (item) {
      item.quantity += 1;
    }
  };

  /**
   * Devuelve el total de elementos en el carrito.
   * @returns {number} - El total de elementos en el carrito.
   */
  const getTotalItems = () => {
    return items.value.reduce((acc, item) => acc + item.quantity, 0);
  };

  /**
   * Devuelve el total de la compra.
   * @returns {number} - El total de la compra.
   */
  const getTotalPrice = () => {
    return items.value.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  /**
   * Agregar varios elementos al carrito.
   *
   * @param {Item[]} items - Los elementos a añadir al carrito.
   */
  const addItems = (items: Item[]) => {
    items.forEach((item) => {
      const existingItem = carStore.items.find((i) => i.id === item.id);
      if (existingItem) return;
      if (item.quantity <= 0) return;
      carStore.addItem(item);
    });

    // Muestra una notificación
    toast.add({
      title: "Items añadidos al carrito",
      color: "green",
    });
  };

  return {
    items,
    addItem,
    removeItem,
    clearCar,
    getTotalItems,
    decrementQuantity,
    incrementQuantity,
    getTotalPrice,
    addItems,
  };
};
