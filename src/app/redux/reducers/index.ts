import * as fromProducts from './product.reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';

export interface ProductState {

  products : fromProducts.ProductState;
}


export const reducers: ActionReducerMap<ProductState> = {

  products: fromProducts.reducer
};



