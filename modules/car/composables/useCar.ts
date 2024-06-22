import { storeToRefs } from "pinia";
import { useCarStore } from "../stores/carStore";
import type { Item } from "../interfaces/carInterfaces";

/**
 * Composable para manejar operaciones relacionadas con el carrito de compras.
 */
export const useCar = () => {
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
  };

  /**
   * Elimina un elemento del carrito por su ID.
   * @param {number | string} id - El ID del elemento a eliminar.
   */
  const removeItem = (id: number | string) => {
    carStore.removeItem(id);
  };

  /**
   * Limpia todos los elementos del carrito.
   */
  const clearCar = () => {
    carStore.clearCar();
  };

  /**
   * Devuelve el total de elementos en el carrito.
   * @returns {number} - El total de elementos en el carrito.
   */
  const getTotalItems = () => {
    return items.value.reduce((acc, item) => acc + item.quantity, 0);
  };

  return {
    items,
    addItem,
    removeItem,
    clearCar,
    getTotalItems,
  };
};
