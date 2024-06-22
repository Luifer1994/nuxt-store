import type { Category } from "@/modules/categories/interfaces/categoryInterfaces";

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  quantity: number;
}
