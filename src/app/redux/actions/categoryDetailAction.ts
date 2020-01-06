import {Action} from '@ngrx/store';
import {Category} from '../../Models/Category';


export const LOAD_CATEGORY_DETAIL =  ' [CATEGORY_DETAIL] Load Category ';
export const LOAD_CATEGORY_DETAIL_SUCCESS =  ' [CATEGORY_DETAIL] Load Category Success ';
export const LOAD_CATEGORY_DETAIL_FAILURE = ' [CATEGORY_DETAIL] Load Category Failure ';




// tslint:disable-next-line:class-name
export class LoadCategoryDetail implements Action {
  readonly type = LOAD_CATEGORY_DETAIL;
  constructor(public categoryId: number) {
  }

}

// tslint:disable-next-line:class-name
export class LoadCategoryDetailSuccess  implements Action {
  readonly type = LOAD_CATEGORY_DETAIL_SUCCESS;
  constructor(public payload: Category) {
  }
}

// tslint:disable-next-line:class-name
export class LoadCategoryDetailFailure  implements Action {
  readonly type = LOAD_CATEGORY_DETAIL_FAILURE;
  constructor(public payload: any) {
  }
}


export type CategoryDetailActions = LoadCategoryDetail |
  LoadCategoryDetailSuccess | LoadCategoryDetailFailure;



