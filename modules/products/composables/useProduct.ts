import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";
import { getProductApi } from "../repositories/productRepository";

export const useProduct = () => {
  // Define use store
  const productStore = useProductStore();
  // Extract the state of the store
  const { products, selectedProduct } = storeToRefs(productStore);

  /**
   * Get product by id.
   *
   * @param {number | string} id - The ID of the product to retrieve.
   * @returns {Promise<void>}
   */
  const getProductById = async (id: number | string): Promise<void> => {
    try {
      const data = await getProductApi(id);
      const product = {
        ...data,
        images: [data.image],
      };
      productStore.setSelectedProduct(product);
    } catch (err) {
      throw new Error("Error al obtener el producto");
    }
  };

  return {
    products,
    selectedProduct,
    getProductById,
  };
};
