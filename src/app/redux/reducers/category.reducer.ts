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
      return {...state};

    case categoryActions.CREATE_CATEGORY_SUCCESS:
      return {...state, data: [...state.data, action.product]};

    case categoryActions.CREATE_CATEGORY_FAILURE:
      return {...state};

    case categoryActions.DELETE_CATEGORY:
      return {...state};

    case categoryActions.DELETE_CATEGORY_SUCCESS:
      return {
        ...state, data: state.data.filter(item => item.categoryId !== action.id)
      };

    case categoryActions.DELETE_CATEGORY_FAILURE:
      return {...state};


    case categoryActions.UPDATE_CATEGORY:
      return {...state};

    case categoryActions.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        data: state.data.map(item => {
          if (item.categoryId === action.payload.categoryId) {
          item.categoryname = action.payload.categoryname;
          item.description = action.payload.description;
          return item;
          }
        })
      };

    case categoryActions.UPDATE_CATEGORY_FAILURE:
      return {...state};


    default:
      return state;
  }
}
