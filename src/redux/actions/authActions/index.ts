import {
  VERIFY_USER_DATA,
  VERIFY_USER_DATA_SUCCESS,
  FETCH_USER_METRICTS,
  GET_USER_PROFILE,
  LOGOUT_USER,
  SIGN_UP_DATA,
  REMOVE_OTP_MODAL
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
export const removeModalOtp = () => ({
  type: REMOVE_OTP_MODAL,
 
});
export const resetUserDataAction = () => ({
  type: SIGN_UP_DATA,
 
});

export const fetchMetricsAction = (user_id: any) => ({
  type: FETCH_USER_METRICTS,
  payload: user_id,
});

export const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
export const logoutRequest = () => ({ type: 'LOGOUT_REQUEST' });

export const getUserProfileAction = (userData: any) => ({
  type: GET_USER_PROFILE,
  payload: userData,
});
