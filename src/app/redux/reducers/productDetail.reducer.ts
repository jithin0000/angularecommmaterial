import {Product} from '../../Models/Product';

import * as pdtDetailAction from '../actions/productDetail.action';

// tslint:disable-next-line:class-name
export interface ProductDetailState {
  data: Product;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductDetailState = {
  data: null , loading: false, loaded: false
};

export function reducer(
  state = initialState, action: pdtDetailAction.ProductDetailActions
): ProductDetailState {
  switch (action.type) {
    case pdtDetailAction.LOAD_PRODUCT_DETAIL:
      return { ...state,  loading: true};

    case pdtDetailAction.LOAD_PRODUCT_DETAIL_SUCCESS:
      return { ...state, data: action.payload,   loading: false, loaded: true};

    case pdtDetailAction.LOAD_PRODUCT_DETAIL_FAILURE:
      return { ...state,   loading: false, loaded: false};


    default:
      return state;
  }
}


