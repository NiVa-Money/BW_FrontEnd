import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_METRICTS,
  LOGOUT_USER,
  SET_USER,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_DATA,

} from '../actionTypes';

export const setUser = (user: any): any => console.log(user);
//     {
//     type: SET_USER,
//     payload: user,
//   }

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
});

export const signInSuccess = (user: any): any => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: any): any => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const fetchUserDataAction = (userData: any) => ({
  type: FETCH_USER_DATA,
  payload: userData,
});

export const fetchUserDataSuccess = (userData: any) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: userData,
});

export const signUpDataAction = (userData: any) => ({
  type: SIGN_UP_DATA,
  payload: userData,
});

export const fetchMetrictsAction = () => ({
  type: FETCH_USER_METRICTS,
});
