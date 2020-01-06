import {Category} from '../../Models/Category';
import * as categoryActions from '../actions/category.action';

export interface CategoryState {
  data: Category[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: CategoryState = {data: [], loaded: false, loading: false};


export function reducer(
  state = initialState, action: categoryActions.CategoryActions
): CategoryState {
  switch (action.type) {
    case categoryActions.LOAD_CATEGORY:
      return {...state, loading: true};

    case categoryActions.LOAD_CATEGORY_SUCCESS:
      return {...state, data: action.payload, loading: false, loaded: true};

    case categoryActions.LOAD_CATEGORY_FAILURE:
      return {...state, loading: false, loaded: false};

    case categoryActions.CREATE_CATEGORY:
      return {...state, loaded: false, loading: true};

    case categoryActions.CREATE_CATEGORY_SUCCESS:
      return {...state, data: [...state.data, action.product], loading: false, loaded: true};

    case categoryActions.CREATE_CATEGORY_FAILURE:
      return {...state, loading: false, loaded: false};

    case categoryActions.DELETE_CATEGORY:
      return {...state, loaded: false, loading: true};

    case categoryActions.DELETE_CATEGORY_SUCCESS:
      return {
        ...state, data: state.data.filter(item => item.CategoryId !== action.id),
        loading: false, loaded: true
      };

    case categoryActions.DELETE_CATEGORY_FAILURE:
      return {...state, loading: false, loaded: false};


    case categoryActions.UPDATE_CATEGORY:
      return {...state, loaded: false, loading: true};

    case categoryActions.UPDATE_CATEGORY_SUCCESS:
      return {
        loading: false, loaded: true,
        data: state.data.map(item => {
          if (item.CategoryId === action.payload.CategoryId) {
          item.categoryname = action.payload.categoryname;
          item.description = action.payload.description;
          return item;
          }
        })
      };

    case categoryActions.UPDATE_CATEGORY_FAILURE:
      return {...state, loading: false, loaded: false};


    default:
      return state;
  }
}
