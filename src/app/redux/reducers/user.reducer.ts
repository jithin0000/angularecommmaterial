import {User} from '../../Models/User';

import * as userAction from '../actions/user.action';

// tslint:disable-next-line:class-name
export interface UserState {
  data: User[];
  loaded: boolean;
  loading: boolean;
  added: boolean;
  updated: boolean;
}

export const initialState: UserState = {
  data: [] , loading: false, loaded: false, added: false, updated: false
};

export function reducer(
  state = initialState, action: userAction.UserActions
): UserState {
  switch (action.type) {
    case userAction.LOAD_USER:
      return { ...state,  loading: true};

    case userAction.LOAD_USER_SUCCESS:
      return { ...state, data: action.payload, loading: false, loaded: true};

    case userAction.LOAD_USER_FAILURE:
      return { ...state,   loading: false, loaded: false};


      case userAction.FILTER_USER_BY_NAME:
      return { ...state, data: state.data
          .filter(item => item.UserName.toLowerCase().includes(action.name.toLowerCase()))};

    case userAction.CREATE_USER:
      return {...state, loaded: false, loading: true};

    case userAction.CREATE_USER_SUCCESS:
      return { ...state , data: [...state.data, action.product], loading: false, loaded: true};

    case userAction.CREATE_USER_FAILURE:
      return {...state, loading: false, loaded: false};

    case userAction.DELETE_USER:
      return {...state, loaded: false, loading: true};

    case userAction.DELETE_USER_SUCCESS:
      return { ...state , data: state.data.filter(item => item.Id !== action.id),
        loading: false, loaded: true};

    case userAction.DELETE_USER_FAILURE:
      return {...state, loading: false, loaded: false};
      case userAction.UPDATE_USER:
      return {...state, loaded: false, loading: true, updated: false, added: false};

    case userAction.UPDATE_USER_SUCCESS:
      console.log(action.payload);
      return { ...state , updated: true};

    case userAction.UPDATE_USER_FAILURE:
      console.log(action.payload);
      return {...state, loading: false, loaded: false, updated: false};



    default:
      return state;
  }
}


