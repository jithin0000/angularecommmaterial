import {Action} from '@ngrx/store';
import {User} from '../../Models/User';
import {LoginRequest} from '../../Models/LoginRequest';


export const REGISTER_USER =  ' [USER] Register User ';
export const REGISTER_USER_SUCCESS =  ' [USER] Register User Success ';
export const REGISTER_USER_FAILURE = ' [USER] Register User Failure ';


export const LOGIN_USER =  ' [USER] Login User ';
export const LOGIN_USER_SUCCESS =  ' [USER] Login User Success ';
export const LOGIN_USER_FAILURE = ' [USER] Login User Failure ';

export const IS_AUTHENTICATED = ' [USER] Login User is authenticated ';


// tslint:disable-next-line:class-name
export class RegisterUser  implements Action {
  readonly type = REGISTER_USER;
  constructor(public user: User) {
  }
}

// tslint:disable-next-line:class-name
export class RegisterUserSuccess  implements Action {
  readonly type = REGISTER_USER_SUCCESS;
  constructor(public user: User) {
  }
}

// tslint:disable-next-line:class-name
export class RegisterUserFailure implements Action {
  readonly type = REGISTER_USER_FAILURE;
  constructor(public payload: any) {
  }
}



// tslint:disable-next-line:class-name
export class LoginUser  implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: LoginRequest) {
  }
}

// tslint:disable-next-line:class-name
export class LoginUserSuccess  implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor(public payload: any) {
  }
}

// tslint:disable-next-line:class-name
export class LoginUserFailure implements Action {
  readonly type = LOGIN_USER_FAILURE;
  constructor(public payload: any) {
  }
}

// tslint:disable-next-line:class-name
export class IsUserAuthenticated implements Action {
  readonly type = IS_AUTHENTICATED;
  constructor() {
  }
}


export type AuthAction = RegisterUser | RegisterUserSuccess | RegisterUserFailure |
  LoginUser | LoginUserSuccess | LoginUserFailure | IsUserAuthenticated ;
