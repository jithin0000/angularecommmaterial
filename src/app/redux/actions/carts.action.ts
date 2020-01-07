import {Action} from '@ngrx/store';
import {Cart} from '../../Models/Cart';

export const GET_CARTS = '[CART] Get Cartss';
export const GET_CARTS_SUCCESS = '[CART] Get Carts Success';
export const GET_CARTS_FAILURE = '[CART] Get Carts Failure';



export class GetCarts implements Action{
  readonly type = GET_CARTS;
}

export class GetCartsSuccess implements Action {
  readonly type = GET_CARTS_SUCCESS;
  constructor(public cart: Cart[]) {
  }
}

export class GetCartsFailure implements Action {
  readonly type = GET_CARTS_FAILURE;
  constructor(public payload: any ) {
  }
}

export type CartsAction = GetCarts | GetCartsSuccess | GetCartsFailure;
