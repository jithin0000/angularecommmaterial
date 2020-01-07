import {Action} from '@ngrx/store';
import {User} from '../../Models/User';


export const LOAD_USER =  ' [USER] Load User ';
export const LOAD_USER_SUCCESS =  ' [USER] Load User Success ';
export const LOAD_USER_FAILURE = ' [USER] Load User Failure ';


export const FILTER_USER_BY_NAME =  ' [USER] Load User By NAME ';


export const CREATE_USER =  ' [USER] Create User ';
export const CREATE_USER_SUCCESS =  ' [USER] Create User Success ';
export const CREATE_USER_FAILURE = ' [USER] Create User Failure ';


export const DELETE_USER =  ' [USER] Delete User ';
export const DELETE_USER_SUCCESS =  ' [USER] Delete User Success ';
export const DELETE_USER_FAILURE = ' [USER] Delete User Failure ';

export const UPDATE_USER =  ' [USER] Update User ';
export const UPDATE_USER_SUCCESS =  ' [USER] Update User Success ';
export const UPDATE_USER_FAILURE = ' [USER] Update User Failure ';


// tslint:disable-next-line:class-name
export class LOAD_USERS implements Action {
  readonly type = LOAD_USER;

}

// tslint:disable-next-line:class-name
export class LOAD_USERS_SUCCESS  implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: User[]) {
  }
}

// tslint:disable-next-line:class-name
export class LOAD_USERS_FAIL  implements Action {
  readonly type = LOAD_USER_FAILURE;
  constructor(public payload: any) {
  }
}


// tslint:disable-next-line:class-name
export class FilterUsersByName implements Action {
  readonly type = FILTER_USER_BY_NAME;
  constructor(public name: string) {
  }
}


// tslint:disable-next-line:class-name
export class CreateUser  implements Action {
  readonly type = CREATE_USER;
  constructor(public payload: User) {
  }
}

// tslint:disable-next-line:class-name
export class CreateUserSuccess  implements Action {
  readonly type = CREATE_USER_SUCCESS;
  constructor(public product: User) {
  }
}

// tslint:disable-next-line:class-name
export class CreateUserFailure implements Action {
  readonly type = CREATE_USER_FAILURE;
  constructor(public payload: any) {
  }
}



// tslint:disable-next-line:class-name
export class DeleteUser  implements Action {
  readonly type = DELETE_USER;
  constructor(public id: number) {
  }
}

// tslint:disable-next-line:class-name
export class DeleteUserSuccess  implements Action {
  readonly type = DELETE_USER_SUCCESS;
  constructor(public id: number) {
  }
}

// tslint:disable-next-line:class-name
export class DeleteUserFailure implements Action {
  readonly type = DELETE_USER_FAILURE;
  constructor(public payload: any) {
  }
}


// tslint:disable-next-line:class-name
export class UpdateUser  implements Action {
  readonly type = UPDATE_USER;
  constructor(public id: number, public body: User) {
  }
}

// tslint:disable-next-line:class-name
export class UpdateUserSuccess  implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  constructor(public payload: User) {
  }
}

// tslint:disable-next-line:class-name
export class UpdateUserFailure implements Action {
  readonly type = UPDATE_USER_FAILURE;
  constructor(public payload: any) {
  }
}







export type UserActions = LOAD_USERS | LOAD_USERS_SUCCESS | LOAD_USERS_FAIL
  |  FilterUsersByName |
  CreateUser | CreateUserSuccess | CreateUserFailure |
  DeleteUser | DeleteUserSuccess | DeleteUserFailure |
  UpdateUser | UpdateUserSuccess | UpdateUserFailure ;




