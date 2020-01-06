import {Action} from '@ngrx/store';
import {Product} from '../../Models/Product';


export const LOAD_PRODUCT =  ' [PRODUCT] Load Product ';
export const LOAD_PRODUCT_SUCCESS =  ' [PRODUCT] Load Product Success ';
export const LOAD_PRODUCT_FAILURE = ' [PRODUCT] Load Product Failure ';


export const FILTER_PRODUCT_BY_CATEGORY =  ' [PRODUCT] Load Product By Category ';
export const FILTER_PRODUCT_BY_NAME =  ' [PRODUCT] Load Product By NAME ';


export const CREATE_PRODUCT =  ' [PRODUCT] Create Product ';
export const CREATE_PRODUCT_SUCCESS =  ' [PRODUCT] Create Product Success ';
export const CREATE_PRODUCT_FAILURE = ' [PRODUCT] Create Product Failure ';


export const DELETE_PRODUCT =  ' [PRODUCT] Delete Product ';
export const DELETE_PRODUCT_SUCCESS =  ' [PRODUCT] Delete Product Success ';
export const DELETE_PRODUCT_FAILURE = ' [PRODUCT] Delete Product Failure ';


// tslint:disable-next-line:class-name
export class LOAD_PRODUCTS implements Action {
  readonly type = LOAD_PRODUCT;

}

// tslint:disable-next-line:class-name
export class LOAD_PRODUCTS_SUCCESS  implements Action {
  readonly type = LOAD_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

// tslint:disable-next-line:class-name
export class LOAD_PRODUCTS_FAIL  implements Action {
  readonly type = LOAD_PRODUCT_FAILURE;
  constructor(public payload: any) {
  }
}

// tslint:disable-next-line:class-name
export class FilterProductsByCategory implements Action {
  readonly type = FILTER_PRODUCT_BY_CATEGORY;
  constructor(public categoryId: number) {
  }
}

// tslint:disable-next-line:class-name
export class FilterProductsByName implements Action {
  readonly type = FILTER_PRODUCT_BY_NAME;
  constructor(public name: string) {
  }
}


// tslint:disable-next-line:class-name
export class CreateProduct  implements Action {
  readonly type = CREATE_PRODUCT;
  constructor(public payload: Product) {
  }
}

// tslint:disable-next-line:class-name
export class CreateProductSuccess  implements Action {
  readonly type = CREATE_PRODUCT_SUCCESS;
  constructor(public product: Product) {
  }
}

// tslint:disable-next-line:class-name
export class CreateProductFailure implements Action {
  readonly type = CREATE_PRODUCT_FAILURE;
  constructor(public payload: any) {
  }
}



// tslint:disable-next-line:class-name
export class DeleteProduct  implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public id: number) {
  }
}

// tslint:disable-next-line:class-name
export class DeleteProductSuccess  implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
  constructor(public id: number) {
  }
}

// tslint:disable-next-line:class-name
export class DeleteProductFailure implements Action {
  readonly type = DELETE_PRODUCT_FAILURE;
  constructor(public payload: any) {
  }
}





export type ProductActions = LOAD_PRODUCTS | LOAD_PRODUCTS_SUCCESS | LOAD_PRODUCTS_FAIL
  | FilterProductsByCategory | FilterProductsByName |
  CreateProduct | CreateProductSuccess | CreateProductFailure |
  DeleteProduct | DeleteProductSuccess | DeleteProductFailure ;



