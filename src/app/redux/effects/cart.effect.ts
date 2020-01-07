import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as cartActions from '../actions/cart.action';

import {CartService} from '../../cart.service';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {Cart} from '../../Models/Cart';


// @ts-ignore
@Injectable()
export class CartEffect {

  constructor(private actions$: Actions, private cartService: CartService) {}


  @Effect()
  createCart$ = this.actions$.pipe(
    ofType(cartActions.CREATE_CART),
    switchMap((payload: {cart: Cart}) => {
      return this.cartService.create(payload.cart).pipe(
        map(cart => new cartActions.CreateCartSuccess(cart)),
        catchError(err => of(new cartActions.CreateCartFailure(err)))
      );
    })
  );

  @Effect()
  getCart$ = this.actions$.pipe(
    ofType(cartActions.GET_CART),
    switchMap((payload: {id: number}) => {
      return this.cartService.getById(payload.id).pipe(
        map(cart => new cartActions.GetCartSuccess(cart)),
        catchError(err => of(new cartActions.GetCartFailure(err)))
      );
    })
  );

  @Effect()
  updateCart$ = this.actions$.pipe(
    ofType(cartActions.UPDATE_CART),
    switchMap((payload: {id: number, cart: Cart}) => {
      return this.cartService.update(payload.id, payload.cart).pipe(
        map(cart => new cartActions.UpdateCartSuccess(cart)),
        catchError(err => of(new cartActions.UpdateCartFailure(err)))
      );
    })
  );





}
