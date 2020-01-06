import {Action} from '@ngrx/store';
import {Product} from '../../Models/Product';


export const LOAD_PRODUCT =  ' [PRODUCT] Load Prdouct ';
export const LOAD_PRODUCT_SUCCESS =  ' [PRODUCT] Load Prdouct Success ';
export const LOAD_PRODUCT_FAILURE = ' [PRODUCT] Load Prdouct Failure ';


// tslint:disable-next-line:class-name
export class LOAD_PRODUCTS implements Action {
  readonly type = LOAD_PRODUCT;
}

// tslint:disable-next-line:class-name
export class LOAD_PRODUCTS_SUCCESS  implements Action {
  readonly type = LOAD_PRODUCT_SUCCESS;
  constructor(public payload:  Product[]) {
  }
}

// tslint:disable-next-line:class-name
export class LOAD_PRODUCTS_FAIL  implements Action {
  readonly type = LOAD_PRODUCT_FAILURE;
  constructor(public payload: any) {
  }
}


export type ProductActions = LOAD_PRODUCTS | LOAD_PRODUCTS_SUCCESS | LOAD_PRODUCTS_FAIL



