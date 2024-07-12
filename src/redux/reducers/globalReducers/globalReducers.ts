import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_SUCCESS,
  LOGOUT_USER,
  SET_PATHNAME,
  SET_USER,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
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
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        userVerify: true,
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        userData: action.payload,
        userVerify: action.payload,
      };

    default:
      return state;
  }
}