import {User} from '../../Models/User';


import * as userActions from '../actions/authAction';

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
  state = initialState, action: userActions.AuthAction
): AuthState {
  switch (action.type) {

    case userActions.REGISTER_USER:

      return {...state, authenticated: false, registered: false};

    case userActions.REGISTER_USER_SUCCESS:
      return { ...state , data: action.user, registered: true, authenticated: false};

    case userActions.REGISTER_USER_FAILURE:
      return {...state, registered: false, authenticated: false};

      case userActions.LOGIN_USER:
      return {...state, authenticated: false, registered: true};

    case userActions.LOGIN_USER_SUCCESS:
      return { ...state , data: action.payload, registered: false, authenticated: true};

    case userActions.LOGIN_USER_FAILURE:
      return {...state, registered: false, authenticated: false};

    default:
      return state;
  }
}


