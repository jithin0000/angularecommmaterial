import {Product} from './Product';

export interface PaginatedResponseDto {
  TotalItems: number;

  Products: Product[];
  PageIndex: number;
  TotalPages: number;
}
