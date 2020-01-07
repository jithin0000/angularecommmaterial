import {createSelector} from '@ngrx/store';
import {AppState} from '../../Models/AppState';
import {CartState} from '../reducers/cart.reducer';

export const appCart = (state: AppState) => state.cart

export const cartSelector = createSelector(
  appCart,
(state: CartState) => state.data
)
