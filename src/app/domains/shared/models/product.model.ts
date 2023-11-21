import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    creationAt: string;
    description: string;
    category: Category;
}