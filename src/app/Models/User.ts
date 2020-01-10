import {Cart} from './Cart';
import {Order} from './Order';

export interface User {
  token: string;
  phoneNumber?: number;
  id: number;
  email: string;
  userName: string;
  userRole?: any[];
  carts?: Cart[];
  orders?: Order[];

}
