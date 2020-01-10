import {User} from './User';
import {Cart} from './Cart';

export  interface Order {

  Id?: number;
  orderNumber: number;
  userId: number;
  user: User;
  cartId: number;
  cart: Cart;

  shippingTotal?: number;
  orderTotal?: number;

  addresLine1: string;
  addresLine2: string;
  area: string;
  postalCode: string;
  countryCode: string;

}
