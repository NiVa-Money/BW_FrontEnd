import {
  VERIFY_USER_DATA,
  VERIFY_USER_DATA_SUCCESS,
  FETCH_USER_METRICTS,
  LOGOUT_USER,
  SIGN_UP_DATA,
} from '../actionTypes';

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const verifyUserDataAction = (userData: any) => ({
  type: VERIFY_USER_DATA,
  payload: userData,
});

export const fetchUserDataSuccess = (userData: any) => ({
  type: VERIFY_USER_DATA_SUCCESS,
  payload: userData,
});

export const signUpDataAction = (userData: any) => ({
  type: SIGN_UP_DATA,
  payload: userData,
});

export const fetchMetricsAction = (user_id: any) => ({
  type: FETCH_USER_METRICTS,
  payload: user_id,
});
export const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
export const logoutRequest = () => ({ type: 'LOGOUT_REQUEST' });
