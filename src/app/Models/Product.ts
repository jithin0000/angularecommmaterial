import {Category} from './Category';

export interface Product {
  Category?: Category;

    ProductId: number;
    name?: string;
    price?: number;
    description?: string;
     imageurl?: string;
    stock?: number;
    size?: string;
    color?: string;
    discount?: number;
    status?: string;
    CategoryId?: number;
}
