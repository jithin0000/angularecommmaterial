import {Product} from '../../Models/Product';

import * as pdtAction from '../actions/product.action';
import {PaginatedResponseDto} from '../../Models/PaginatedResponseDto';

// tslint:disable-next-line:class-name
export interface ProductState {
  data: PaginatedResponseDto;
  loaded: boolean;
  loading: boolean;
  added: boolean;
  updated: boolean;
}

export const initialState: ProductState = {
  data: null , loading: false, loaded: false, added: false, updated: false
};

export function reducer(
  state = initialState, action: pdtAction.ProductActions
): ProductState {
  switch (action.type) {
    case pdtAction.LOAD_PRODUCT:
      return { ...state,  loading: true};

    case pdtAction.LOAD_PRODUCT_SUCCESS:
      return { ...state, data: action.payload, loading: false, loaded: true};

    case pdtAction.LOAD_PRODUCT_FAILURE:
      return { ...state,   loading: false, loaded: false};


    case pdtAction.FILTER_PRODUCT_BY_CATEGORY:
      return { ...state, data: { ...state.data,
          Products: state.data.Products.filter(item => item.CategoryId === action.categoryId)}  };

      case pdtAction.FILTER_PRODUCT_BY_NAME:
      return { ...state, data: { ...state.data,
          Products: state.data.Products.filter(item => item.name
            .toLowerCase().includes(action.name.toLowerCase()))}  };

    case pdtAction.CREATE_PRODUCT:
      return {...state, loaded: false, loading: true};

    case pdtAction.CREATE_PRODUCT_SUCCESS:
      return { ...state , data: {...state.data, Products: [...state.data.Products, action.product]}, loading: false, loaded: true};

    case pdtAction.CREATE_PRODUCT_FAILURE:
      return {...state, loading: false, loaded: false};

    case pdtAction.DELETE_PRODUCT:
      return {...state, loaded: false, loading: true};

    case pdtAction.DELETE_PRODUCT_SUCCESS:
      return { ...state , data: {
        ...state.data,
         Products: state.data.Products.filter(item => item.ProductId !== action.id)
        },
        loading: false, loaded: true};

    case pdtAction.DELETE_PRODUCT_FAILURE:
      return {...state, loading: false, loaded: false};
      case pdtAction.UPDATE_PRODUCT:
      return {...state, loaded: false, loading: true, updated: false, added: false};

    case pdtAction.UPDATE_PRODUCT_SUCCESS:
      return { ...state , updated: true};

    case pdtAction.UPDATE_PRODUCT_FAILURE:
      console.log(action.payload);
      return {...state, loading: false, loaded: false, updated: false};



    default:
      return state;
  }
}


