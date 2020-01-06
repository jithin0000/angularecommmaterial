import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as productActions from '../actions/product.action';
import {switchMap} from 'rxjs-compat/operator/switchMap';
import {ProductService} from '../../product.service';


@Injectable()
export class ProductEffect {

  constructor(private actions$: Actions, private productService: ProductService) {}

  @Effect()
  loadProduct$ = this.actions$.pipe(
    ofType(productActions.LOAD_PRODUCT),
  );

}
