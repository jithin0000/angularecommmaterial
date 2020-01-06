import {Action, createAction} from '@ngrx/store';
import {Category} from '../../Models/Category';

export const LOAD_CATEGORY =  ' [CATEGORY] Load Category ';
export const LOAD_CATEGORY_SUCCESS =  ' [CATEGORY] Load Category Success ';
export const LOAD_CATEGORY_FAILURE = ' [CATEGORY] Load Category Failure ';


export const CREATE_CATEGORY =  ' [CATEGORY] Create Category ';
export const CREATE_CATEGORY_SUCCESS =  ' [CATEGORY] Create Category Success ';
export const CREATE_CATEGORY_FAILURE = ' [CATEGORY] Create Category Failure ';


export const DELETE_CATEGORY =  ' [CATEGORY] Delete Category ';
export const DELETE_CATEGORY_SUCCESS =  ' [CATEGORY] Delete Category Success ';
export const DELETE_CATEGORY_FAILURE = ' [CATEGORY] Delete Category Failure ';


export const UPDATE_CATEGORY =  ' [CATEGORY] Update Category ';
export const UPDATE_CATEGORY_SUCCESS =  ' [CATEGORY] Update Category Success ';
export const UPDATE_CATEGORY_FAILURE = ' [CATEGORY] Update Category Failure ';



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



// tslint:disable-next-line:class-name
export class CreateCategory  implements Action {
  readonly type = CREATE_CATEGORY;
  constructor(public payload: Category) {
  }
}

// tslint:disable-next-line:class-name
export class CreateCategorySuccess  implements Action {
  readonly type = CREATE_CATEGORY_SUCCESS;
  constructor(public product: Category) {
  }
}

// tslint:disable-next-line:class-name
export class CreateCategoryFailure implements Action {
  readonly type = CREATE_CATEGORY_FAILURE;
  constructor(public payload: any) {
  }
}



// tslint:disable-next-line:class-name
export class DeleteCategory  implements Action {
  readonly type = DELETE_CATEGORY;
  constructor(public id: number) {
  }
}

// tslint:disable-next-line:class-name
export class DeleteCategorySuccess  implements Action {
  readonly type = DELETE_CATEGORY_SUCCESS;
  constructor(public id: number) {
  }
}

// tslint:disable-next-line:class-name
export class DeleteCategoryFailure implements Action {
  readonly type = DELETE_CATEGORY_FAILURE;
  constructor(public payload: any) {
  }
}

// tslint:disable-next-line:class-name
export class UpdateCategory  implements Action {
  readonly type = UPDATE_CATEGORY;
  constructor(public id: number, public body: Category) {
  }
}

// tslint:disable-next-line:class-name
export class UpdateCategorySuccess  implements Action {
  readonly type = UPDATE_CATEGORY_SUCCESS;
  constructor(public payload: Category) {
  }
}

// tslint:disable-next-line:class-name
export class UpdateCategoryFailure implements Action {
  readonly type = UPDATE_CATEGORY_FAILURE;
  constructor(public payload: any) {
  }
}



export type CategoryActions = LOAD_CATEGORIES | LOAD_CATEGORIES_SUCCESS | LOAD_CATEGORIES_FAIL|

  CreateCategory | CreateCategorySuccess | CreateCategoryFailure |
  DeleteCategory | DeleteCategorySuccess | DeleteCategoryFailure |
  UpdateCategory | UpdateCategorySuccess | UpdateCategoryFailure ;



