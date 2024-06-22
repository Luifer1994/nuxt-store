import { defineStore } from "pinia";
import type { ProductsResponseApi } from "../interfaces/productInterface";

export const useProductStore = defineStore("productStore", {
  // Define the state of the store
  state: () => ({
    products: [] as ProductsResponseApi[],
    selectedProduct: {} as ProductsResponseApi,
  }),

  // Define the mutations of the store
  actions: {
    setProducts(products: ProductsResponseApi[]) {
      this.products = products;
    },
    setSelectedProduct(product: ProductsResponseApi) {
      this.selectedProduct = product;
    },
  },
});
