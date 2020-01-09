import {Cart} from '../../Models/Cart';

import * as cartAction from '../actions/cart.action';

// tslint:disable-next-line:class-name
export interface CartState {
  data: Cart;
  added: boolean;
  removed: boolean;
  updated: boolean;
}

export const initialState: CartState = {
  data: null, removed: false, added: false, updated: false
};

export function reducer(
  state = initialState, action: cartAction.CartActions
): CartState {
  switch (action.type) {
    case cartAction.CREATE_CART:
      return {...state};

    case cartAction.CREATE_CART_SUCCESS:
      return {...state, data: action.cart};

    case cartAction.CREATE_CART_FAILURE:
      return {...state, removed: false, added: false};

    case cartAction.GET_CART:
      return {...state};

    case cartAction.GET_CART_SUCCESS:
      return {...state, data: action.cart};

    case cartAction.GET_CART_FAILURE:
      return {...state, removed: false, added: false};

    case cartAction.UPDATE_CART:
      return {...state};

    case cartAction.UPDATE_CART_SUCCESS:
      return {...state, data: action.cart};

    case cartAction.UPDATE_CART_FAILURE:
      return {...state};

    case cartAction.ADD_TO_CART:
      return {...state, added: false, data: state.data};

    case cartAction.ADD_TO_CART_SUCCESS:
      return {...state, data: action.cart.Cart , added: action.cart.Added };

    case cartAction.ADD_TO_CART_FAILURE:
      return {...state, removed: false, added: false};


    default:
      return state;
  }
}















