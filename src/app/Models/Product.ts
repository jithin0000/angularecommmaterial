import {Category} from './Category';

export interface Product {
  category?: Category;

    productId: number;
    name?: string;
    price?: number;
    description?: string;
     imageurl?: string;
    stock?: number;
    size?: string;
    color?: string;
    discount?: number;
    status?: string;
    categoryId?: number;
}
