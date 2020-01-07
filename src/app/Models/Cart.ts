import {Product} from './Product';

export interface Cart {

  CartId?: number;
  UserId?: number;
  Total?: number;
  Products?: Product[];

}
