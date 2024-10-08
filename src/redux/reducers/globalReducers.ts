import {
  VERIFY_USER_DATA_FAILURE,
  VERIFY_USER_DATA_SUCCESS,
  FETCH_USER_METRICTS_FAILURE,
  FETCH_USER_METRICTS_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  SET_PATHNAME,
  SET_USER,
  SIGN_UP_DATA,
  SIGN_UP_DATA_FAILURE,
  SIGN_UP_DATA_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  REMOVE_OTP_MODAL,
  VERIFY_USER_OTP,
  VERIFY_USER_OTP_SUCCESS,
  VERIFY_USER_OTP_FAILURE,
  PASSWORD_LOGIN,
  PASSWORD_LOGIN_SUCESS,
  PASSWORD_LOGIN_FAILURE,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  SET_PATHNAME_SUCCESS,
} from '@/redux/actions/actionTypes';
import initialState from './initialState';
export default function globalReducers(state = initialState.root, action: any) {
  switch (action.type) {
    case SET_PATHNAME:
      return {
        ...state,
        pathName: action.payload,
        pageLoader: true,
      };
    case SET_PATHNAME_SUCCESS:
      return {
        ...state,
        pathName: action.payload,
        pageLoader: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return (state = initialState);

    case GOOGLE_LOGIN:
      return {
        ...state,
        GLoginData: { data: action.payload, loader: false },
        loader: true,
      };

    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        GLoginData: { data: action.payload, loader: false },
        userData: action.payload,
        loader: false,
      };

    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state,
        GLoginData: { data: action.payload, loader: false },
        loader: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userVerify: false,
        googleLogin: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        googleLogin: false,
        error: action.payload,
      };
    case PASSWORD_LOGIN:
      return {
        ...state,
        userData: action.payload.body,
        error: null,
      };
    case PASSWORD_LOGIN_SUCESS:
      localStorage.setItem('token', action.payload.body.token);
      localStorage.setItem('userId', action.payload.body.user_id);
      return {
        ...state,
        userData: action.payload.body,
        error: null,
      };
    case PASSWORD_LOGIN_FAILURE:
      return {
        ...state,
        userData: action.payload,
        error: action.payload,
      };
    case VERIFY_USER_OTP:
      return {
        ...state,
        otp: {
          ...state.otp,
          loader: true,
        },
      };
    case VERIFY_USER_OTP_SUCCESS:
      return {
        ...state,
        otp: {
          ...state.otp,
          data: action.payload,
          loader: false,
        },
        userData: action.payload,
      };
    case VERIFY_USER_OTP_FAILURE:
      return {
        ...state,
        otp: {
          ...state.otp,
          data: action.payload,
          loader: false,
        },
      };
    case SIGN_UP_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          emailId: action.payload.emailId,
        },
      };
    case SIGN_UP_DATA_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        userData: { ...action.payload, ...state.userData },
        userVerify: true,
      };
    case REMOVE_OTP_MODAL:
      return {
        ...state,

        userVerify: false,
      };
    case SIGN_UP_DATA_FAILURE:
      return {
        ...state,
        userData: { ...action.payload, ...state.userData },
        userVerify: false,
      };
    case VERIFY_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        userVerify: true,
      };
    case VERIFY_USER_DATA_FAILURE:
      return {
        ...state,
        userData: action.payload,
        userVerify: false,
      };

    case FETCH_USER_METRICTS_SUCCESS:
      return {
        ...state,
        userMetric: {
          ...state.userMetric,
          data: action.payload,
          loader: false,
        },
      };
    case FETCH_USER_METRICTS_FAILURE:
      return {
        ...state,
        userMetric: {
          ...state.userMetric,
          data: action.payload,
          loader: false,
        },
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loader: true,
        },
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          data: action.payload,
          loader: false,
        },
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          data: action.payload,
          loader: false,
        },
      };
    default:
      return state;
  }
}
