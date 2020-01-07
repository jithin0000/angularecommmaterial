import {Action} from '@ngrx/store';
import {User} from '../../Models/User';

export const GET_USER =  ' [USER] Get User ';
export const GET_USER_SUCCESS =  ' [USER] Get User Success ';
export const GET_USER_FAILURE = ' [USER] Get User Failure ';



// tslint:disable-next-line:class-name
export class GetUser  implements Action {
  readonly type = GET_USER;

}

// tslint:disable-next-line:class-name
export class GetUserSuccess  implements Action {
  readonly type = GET_USER_SUCCESS;
  constructor(public payload: User) {
  }
}

// tslint:disable-next-line:class-name
export class GetUserFailure implements Action {
  readonly type = GET_USER_FAILURE;
  constructor(public payload: any) {
  }
}

export type userDetailActions = GetUser | GetUserSuccess | GetUserFailure ;
