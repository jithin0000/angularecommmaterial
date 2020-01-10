import {Product} from './Product';

export interface PaginatedResponseDto {
  totalItems: number;

  products: Product[];
  pageIndex: number;
  totalPages: number;
}
