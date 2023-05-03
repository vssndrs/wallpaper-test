import { Category } from "./category";

export interface Image {
    id: number;
    name: string;
    url: string;
    categoryId: number;
    category: Category;
    orientation: string;
    size: number;
}
