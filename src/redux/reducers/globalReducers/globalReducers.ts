import {
  LOGOUT_USER,
  SET_PATHNAME,
  SET_USER,
} from '@/redux/actions/actionTypes';
import initialState from '../initialState';

export default function globalReducers(state = initialState.root, action: any) {
  switch (action.type) {
    case SET_PATHNAME:
      return {
        ...state,
        pathName: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
