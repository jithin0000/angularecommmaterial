import {Action} from '@ngrx/store';
import {Cart} from '../../Models/Cart';
import {AddToCartRequestDto} from '../../Models/AddToCartRequestDto';
import {AddToCartResponse} from '../../Models/AddToCartResponse';

export const CREATE_CART = '[CART] Create Cart';
export const CREATE_CART_SUCCESS = '[CART] Create Cart Success';
export const CREATE_CART_FAILURE = '[CART] Create Cart Failure';



export class CreateCart implements Action{
  readonly type = CREATE_CART;
  constructor(public cart: Cart) {
  }
}

export class CreateCartSuccess implements Action {
  readonly type = CREATE_CART_SUCCESS;
  constructor(public cart: Cart) {
  }
}

export class CreateCartFailure implements Action {
  readonly type = CREATE_CART_FAILURE;
  constructor(public payload: any ) {
  }
}

export const GET_CART = '[CART] Get Cart';
export const GET_CART_SUCCESS = '[CART] Get Cart Success';
export const GET_CART_FAILURE = '[CART] Get Cart Failure';



export class GetCart implements Action{
  readonly type = GET_CART;
  constructor(public id: number) {
  }
}

export class GetCartSuccess implements Action {
  readonly type = GET_CART_SUCCESS;
  constructor(public cart: Cart) {
  }
}

export class GetCartFailure implements Action {
  readonly type = GET_CART_FAILURE;
  constructor(public payload: any ) {
  }
}


export const UPDATE_CART = '[CART] Update Cart';
export const UPDATE_CART_SUCCESS = '[CART] Update Cart Success';
export const UPDATE_CART_FAILURE = '[CART] Update Cart Failure';

export class UpdateCart implements Action {
  readonly type = UPDATE_CART;
  constructor(public id: number, public cart: Cart) {
  }
}

export class UpdateCartSuccess implements Action {
  readonly type = UPDATE_CART_SUCCESS;
  constructor(public cart: Cart) {
  }
}

export class UpdateCartFailure implements Action {
  readonly type = UPDATE_CART_FAILURE;
  constructor(public payload: any ) {
  }
}

export const ADD_TO_CART = '[CART] AddTo Cart';
export const ADD_TO_CART_SUCCESS = '[CART] AddTo Cart Success';
export const ADD_TO_CART_FAILURE = '[CART] AddTo Cart Failure';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public id: number, public body: AddToCartRequestDto) {
  }
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;
  constructor(public cart: AddToCartResponse) {
  }
}


export class AddToCartFailure implements Action {
  readonly type = ADD_TO_CART_FAILURE;
  constructor(public payload: any ) {
  }
}




export type CartActions = CreateCart | CreateCartFailure | CreateCartSuccess |
  GetCart | GetCartSuccess |GetCartFailure |
  UpdateCart | UpdateCartSuccess |UpdateCartFailure |
  AddToCart | AddToCartSuccess |AddToCartFailure ;
