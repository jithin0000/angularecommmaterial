import {Action} from '@ngrx/store';
import {User} from '../../Models/User';

export enum AuthActionTypes {
  REGISTER_USER= '[REGISTER]  register user',
  REGISTER_USER_SUCCESS= '[REGISTER SUCCESS ]  register user success',
  REGISTER_USER_FAILURE= '[REGISTER FAILURE ]  register user failure',

}


export class RegisterUser implements Action {

  readonly type = AuthActionTypes.REGISTER_USER

  constructor(public  payload ) {
  }

}


export type AuthAction = RegisterUser ;
