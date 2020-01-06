import {Action} from '@ngrx/store';
import {Product} from '../../Models/Product';


export const LOAD_PRODUCT_DETAIL =  ' [PRODUCT_DETAIL] Load Product ';
export const LOAD_PRODUCT_DETAIL_SUCCESS =  ' [PRODUCT_DETAIL] Load Product Success ';
export const LOAD_PRODUCT_DETAIL_FAILURE = ' [PRODUCT_DETAIL] Load Product Failure ';


export const FILTER_PRODUCT_DETAIL_BY_CATEGORY =  ' [PRODUCT_DETAIL] Load Product By Category ';
export const FILTER_PRODUCT_DETAIL_BY_NAME =  ' [PRODUCT_DETAIL] Load Product By NAME ';


// tslint:disable-next-line:class-name
export class LoadProductDetail implements Action {
  readonly type = LOAD_PRODUCT_DETAIL;
  constructor(public productId: number) {
  }

}

// tslint:disable-next-line:class-name
export class LoadProductDetailSuccess  implements Action {
  readonly type = LOAD_PRODUCT_DETAIL_SUCCESS;
  constructor(public payload: Product) {
  }
}

// tslint:disable-next-line:class-name
export class LoadProductDetailFailure  implements Action {
  readonly type = LOAD_PRODUCT_DETAIL_FAILURE;
  constructor(public payload: any) {
  }
}


export type ProductDetailActions = LoadProductDetail |
  LoadProductDetailSuccess | LoadProductDetailFailure;



