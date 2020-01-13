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
  item: Product,
}

export const initialState: ProductState = {
  data: { totalItems: 0, totalPages: 1 , products: [], pageIndex: 1 } , 
  loading: false, loaded: false, added: false, updated: false, item: null
};

export function reducer(
  state = initialState, action: pdtAction.ProductActions
): ProductState {
  switch (action.type) {
    case pdtAction.LOAD_PRODUCT:
      return { ...state,  loading: true, added: false};

    case pdtAction.LOAD_PRODUCT_SUCCESS:
      return { ...state, data: action.payload, loading: false, loaded: true};

    case pdtAction.LOAD_PRODUCT_FAILURE:
      return { ...state,   loading: false, loaded: false, added: false};


    case pdtAction.FILTER_PRODUCT_BY_CATEGORY:
      return { ...state, added: false, data: { ...state.data,
          products: state.data.products.filter(item => item.categoryId === action.categoryId)}  };
      case pdtAction.FILTER_PRODUCT_BY_NAME:
      return { ...state, loading: true, loaded: false,added: false, }

      case pdtAction.FILTER_PRODUCT_BY_NAME_SUCCESS:
      return { ...state, loading: false, loaded: true, data: action.payload }

      case pdtAction.FILTER_PRODUCT_BY_NAME_FAILURE:
        console.log("error", action.payload)
      return { ...state, loading: true, loaded: false }

    case pdtAction.CREATE_PRODUCT:
      return {...state, loaded: false, loading: true, added: false};

    case pdtAction.CREATE_PRODUCT_SUCCESS:
      return { ...state , added: true, item: action.product, data: {...state.data, products: [...state.data.products, action.product]}, loading: false, loaded: true};

    case pdtAction.CREATE_PRODUCT_FAILURE:
      return {...state, loading: false, loaded: false,added: false};

    case pdtAction.DELETE_PRODUCT:
      return {...state, loaded: false, loading: true,added: false,};

    case pdtAction.DELETE_PRODUCT_SUCCESS:
      return { ...state , data: {
        ...state.data,
         products: state.data.products.filter(item => item.productId !== action.id)
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


