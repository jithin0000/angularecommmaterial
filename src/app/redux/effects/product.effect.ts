import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as productActions from '../actions/product.action';
import * as productDetailActions from '../actions/productDetail.action';

import {ProductService} from '../../product.service';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of, Subject} from 'rxjs';
import {Product} from '../../Models/Product';


// @ts-ignore
@Injectable()
export class ProductEffect {

  constructor(private actions$: Actions, private productService: ProductService) {}

  @Effect()
  loadProduct$ = this.actions$.pipe(
    ofType(productActions.LOAD_PRODUCT),
    switchMap((payload: { sortBy: string,
       pageNumber: number, pageSize: number}) => {
      console.log(payload)
      return this.productService
        .getAllBySortedAndFilteredAndPaginated(payload.sortBy,
          payload.pageNumber, payload.pageSize).pipe(
        map(product => new productActions.LOAD_PRODUCTS_SUCCESS(product)),
        catchError(err => of(new productActions.LOAD_PRODUCTS_FAIL(err)))
      );
    })
  );

  @Effect()
  filterProductByName$ = this.actions$.pipe(
    ofType(productActions.FILTER_PRODUCT_BY_NAME),
    switchMap((payload: { name: Subject<string>}) => {
      return this.productService
        .filterPaginatedProductByname(payload.name).pipe(
        map(product => new productActions.FilterProductsByNameSuccess(product)),
        catchError(err => of(new productActions.FilterProductsByNameFailure(err)))
      );
    })
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(productActions.CREATE_PRODUCT),
    switchMap((payload: {payload: Product}) => {
      return this.productService.create(payload.payload).pipe(
        map(product => new productActions.CreateProductSuccess(product)),
        catchError(err => of(new productActions.CreateProductFailure(err)))
      );
    })
  );


  @Effect()
  deleteProduct = this.actions$.pipe(
    ofType(productActions.DELETE_PRODUCT),
    switchMap((payload: {id: number}) => {
      return this.productService.deleteById(payload.id).pipe(
        map(product => new productActions.DeleteProductSuccess(product.productId)),
        catchError(err => of(new productActions.DeleteProductFailure(err)))
      );
    })
  );


  @Effect()
  loadProductDetail$ = this.actions$.pipe(
    ofType(productDetailActions.LOAD_PRODUCT_DETAIL),
    switchMap((payload: {productId: number}) => {
      return this.productService.getById(payload.productId).pipe(
        map(product => new productDetailActions.LoadProductDetailSuccess(product)),
        catchError(err => of(new productDetailActions.LoadProductDetailFailure(err)))
      );
    })
  );

  @Effect()
  updateProduct = this.actions$.pipe(
    ofType(productActions.UPDATE_PRODUCT),
    switchMap((payload: {id: number, body: Product}) => {
      return this.productService.update(payload.id, payload.body).pipe(
        map(product => new productActions.UpdateProductSuccess(product)),
        catchError(err => of(new productActions.UpdateProductFailure(err)))
      );
    })
  );




}
