import {User} from './User';
import {Cart} from './Cart';

export  interface Order {

  Id: number;
  OrderNumber: number;
  UserId: number;
  User: User;
  CartId: number;
  Cart: Cart;

  ShippingTotal: number;
  OrderTotal: number;

  AddresLine1: string;
  AddresLine2: string;
  Area: string;
  PostalCode: string;
  CountryCode: string;

}
