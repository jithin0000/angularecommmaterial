import { Product } from './Product';

export interface Photo{
    id: number;
    imageUrl: string;
    isMain: boolean;
    productId: number;
    product?: Product;

}