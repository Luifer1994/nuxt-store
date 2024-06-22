import type { Category } from "@/modules/categories/interfaces/categoryInterfaces";

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  image?:      string;
  images:      string[];
  category:    string;
  quantity: number;
}
