import {Cart} from './Cart';
import {Order} from './Order';

export interface User {
  token: string;
  PhoneNumber?: number;
  Id: number;
  Email: string;
  UserName: string;
  UserRole?: any[];
  Carts?: Cart[];
  Orders?: Order[];

}
