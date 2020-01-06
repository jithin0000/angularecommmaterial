import {AuthAction, AuthActionTypes} from '../actions/authAction';

const initialState = {
  data: "just for fun"
};

export function AuthReducer(
  state = initialState,
  action: AuthAction
) {

  switch (action.type) {

    case AuthActionTypes.REGISTER_USER:
      return {...state, data: "hello user"};

    default:
      return state;

  }

}
