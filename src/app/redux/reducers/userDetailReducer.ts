import {User} from '../../Models/User';


import * as authActions from '../actions/userDetailAction';

// tslint:disable-next-line:class-name
export interface UserDetailState {
  data: User;
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserDetailState = {
  data: null , loading: false, loaded: false
};

export function reducer(
  state = initialState, action: authActions.userDetailActions
): UserDetailState {
  switch (action.type) {

    case authActions.GET_USER:
      return {...state};

    case authActions.GET_USER_SUCCESS:
      return {...state, data: action.payload};

    case authActions.GET_USER_FAILURE:
      return {...state, data: action.payload};
    default:
      return state;
  }
}


