import {Product} from '../../Models/Product';

import * as pdtAction  from '../actions/product.action'

// tslint:disable-next-line:class-name
export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [] , loading: false, loaded: false
};

export function reducer(
  state = initialState, action: pdtAction.ProductActions
): ProductState {
  switch (action.type) {
    case pdtAction.LOAD_PRODUCT:
      return { ...state,  loading: true}

    case pdtAction.LOAD_PRODUCT_SUCCESS:
      return { ...state, data: action.payload,   loading: false, loaded: true}

    case pdtAction.LOAD_PRODUCT_FAILURE:
      return { ...state,   loading: false, loaded: false}


    default:
      return state;
  }
}

export const getProductLoading = (state: ProductState) => state.loading
export const getProductLoaded = (state: ProductState) => state.loaded
export const getProducts = (state: ProductState) => state.data

