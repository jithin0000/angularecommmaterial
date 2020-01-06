import * as fromProducts from './product.reducer';
import {ActionReducerMap} from '@ngrx/store';
import * as fromCategories from './category.reducer';
import * as fromProductDetail from './productDetail.reducer';
import * as fromCategoryDetail from './categoryDetail.reducer';
import * as auth from './authReducer';
import {AppState} from '../../Models/AppState';


export const reducers: ActionReducerMap<AppState> = {

  products: fromProducts.reducer,
  categories: fromCategories.reducer,
  productDetail : fromProductDetail.reducer,
  categoryDetail: fromCategoryDetail.reducer,
  auth: auth.reducer
};



