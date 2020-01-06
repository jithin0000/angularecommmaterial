import {Action, createAction} from '@ngrx/store';
import {Category} from '../../Models/Category';



export const LOAD_CATEGORY =  ' [CATEGORY] Load Category ';
export const LOAD_CATEGORY_SUCCESS =  ' [CATEGORY] Load Category Success ';
export const LOAD_CATEGORY_FAILURE = ' [CATEGORY] Load Category Failure ';

// tslint:disable-next-line:class-name
export class LOAD_CATEGORIES implements Action {
  readonly type = LOAD_CATEGORY;
}

// tslint:disable-next-line:class-name
export class LOAD_CATEGORIES_SUCCESS  implements Action {
  readonly type = LOAD_CATEGORY_SUCCESS;
  constructor(public payload: Category[]) {
  }
}

// tslint:disable-next-line:class-name
export class LOAD_CATEGORIES_FAIL  implements Action {
  readonly type = LOAD_CATEGORY_FAILURE;
  constructor(public payload: any) {
  }
}


export type CategoryActions = LOAD_CATEGORIES | LOAD_CATEGORIES_SUCCESS | LOAD_CATEGORIES_FAIL;



