import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";
import { useFetchAPI } from "@/utils/http";

/**
 * Retrieves all products from the API.
 *
 * @returns {Promise<ProductsResponseApi[]>} A promise that resolves to an array of product data.
 */
export const getProductsApi = async (): Promise<ProductsResponseApi[]> => {
  const { data, error } = await useFetchAPI<ProductsResponseApi[]>("/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data.value ?? ([] as ProductsResponseApi[]);
};

/**
 * Retrieves a product by its ID from the API.
 *
 * @param {number | string} id - The ID of the product to retrieve.
 * @returns {Promise<ProductsResponseApi>} A promise that resolves to the product data.
 */
export const getProductApi = async (id: number | string): Promise<ProductsResponseApi> => {
  const { data, error } = await useFetchAPI<ProductsResponseApi>(`/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(!data.value) {
    throw new Error("Error al obtener el producto");
  }

  return data.value ?? ({} as ProductsResponseApi);
};
