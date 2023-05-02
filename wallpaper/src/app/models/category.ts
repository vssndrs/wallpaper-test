import { Image } from "./image";

export interface Category {
    id: number;
    name: string;
    images: Image[];
}
