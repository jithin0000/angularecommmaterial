import {User} from '../../Models/User';


import * as authActions from '../actions/authAction';

// tslint:disable-next-line:class-name
export interface AuthState {
  data: User;
  registered: boolean;
  authenticated: boolean;
}

export const initialState: AuthState = {
  data: null , registered: false, authenticated: false
};

export function reducer(
  state = initialState, action: authActions.AuthAction
): AuthState {
  switch (action.type) {

    case authActions.REGISTER_USER:

      return {...state, registered: false};

    case authActions.REGISTER_USER_SUCCESS:
      return { ...state , data: action.user, registered: true};

    case authActions.REGISTER_USER_FAILURE:
      return {...state, data: action.payload, registered: false};

      case authActions.LOGIN_USER:
      return {...state, authenticated: false};

    case authActions.LOGIN_USER_SUCCESS:
      return { ...state , data: action.payload, authenticated: true};

    case authActions.LOGIN_USER_FAILURE:
      return {...state, authenticated: false};

    case authActions.IS_AUTHENTICATED:
      return {...state, authenticated: localStorage.getItem('token') !== null};

    default:
      return state;
  }
}


