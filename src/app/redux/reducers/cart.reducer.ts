import {Cart} from '../../Models/Cart';

import * as cartAction from '../actions/cart.action';

// tslint:disable-next-line:class-name
export interface CartState {
  data: Cart;
  loaded: boolean;
  loading: boolean;
  added: boolean;
  updated: boolean;
}

export const initialState: CartState = {
  data: null, loading: false, loaded: false, added: false, updated: false
};

export function reducer(
  state = initialState, action: cartAction.CartActions
): CartState {
  switch (action.type) {
    case cartAction.CREATE_CART:
      return {...state, loaded: false, added: false, loading: true};

    case cartAction.CREATE_CART_SUCCESS:
      return {...state, data: action.cart, added: true, loading: false, loaded: true};

    case cartAction.CREATE_CART_FAILURE:
      return {...state, loading: false, loaded: false};

    case cartAction.GET_CART:
      return {...state, loaded: false, added: false, loading: true};

    case cartAction.GET_CART_SUCCESS:
      return {...state, data: action.cart, added: true, loading: false, loaded: true};

    case cartAction.GET_CART_FAILURE:
      return {...state, loading: false, loaded: false};

    case cartAction.UPDATE_CART:
      return {...state, loaded: false, added: false, updated: false, loading: true};

    case cartAction.UPDATE_CART_SUCCESS:
      return {...state, data: action.cart, updated: true, loading: false, loaded: true};

    case cartAction.UPDATE_CART_FAILURE:
      return {...state, loading: false, loaded: false};

    case cartAction.ADD_TO_CART:
      return {...state};

    case cartAction.ADD_TO_CART_SUCCESS:
      return {...state, data: action.cart};

    case cartAction.ADD_TO_CART_FAILURE:
      return {...state, loading: false, loaded: false};


    default:
      return state;
  }
}


