import {Category} from '../../Models/Category';

import * as categoryDetailAction from '../actions/categoryDetailAction';

// tslint:disable-next-line:class-name
export interface CategoryDetailState {
  data: Category;
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryDetailState = {
  data: null , loading: false, loaded: false
};

export function reducer(
  state = initialState, action: categoryDetailAction.CategoryDetailActions
): CategoryDetailState {
  switch (action.type) {
    case categoryDetailAction.LOAD_CATEGORY_DETAIL:
      return { ...state,  loading: true};

    case categoryDetailAction.LOAD_CATEGORY_DETAIL_SUCCESS:
      return { ...state, data: action.payload,   loading: false, loaded: true};

    case categoryDetailAction.LOAD_CATEGORY_DETAIL_FAILURE:
      return { ...state,   loading: false, loaded: false};


    default:
      return state;
  }
}


