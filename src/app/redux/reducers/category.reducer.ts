import {Category} from '../../Models/Category';
import * as categoryActions from '../actions/category.action';

export interface CategoryState {
  data: Category[] ;
  loading: boolean;
  loaded: boolean;
}

export const initialState: CategoryState = { data: [], loaded: false, loading: false};


export function reducer(
  state = initialState, action: categoryActions.CategoryActions
): CategoryState {
  switch (action.type) {
    case categoryActions.LOAD_CATEGORY:
      return { ...state,  loading: true}

    case categoryActions.LOAD_CATEGORY_SUCCESS:
      return { ...state, data: action.payload,   loading: false, loaded: true}

    case categoryActions.LOAD_CATEGORY_FAILURE:
      return { ...state,   loading: false, loaded: false}


    default:
      return state;
  }
}
