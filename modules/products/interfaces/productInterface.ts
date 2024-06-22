import type { Category } from "@/modules/categories/interfaces/categoryInterfaces";

export interface ProductsResponseApi {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
    category:    Category;
}