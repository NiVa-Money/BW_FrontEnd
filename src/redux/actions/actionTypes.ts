export const SET_PATHNAME: any = 'SET_PATHNAME';
export const SET_PATHNAME_SUCCESS: any = 'SET_PATHNAME_SUCCESS';
export const SET_PATHNAME_FAILURE: any = 'SET_PATHNAME_FAILURE';

export const SET_USER: any = 'SET_USER';

export const LOGOUT_USER: any = 'LOGOUT_USER';

// actions.js or actions.ts
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';

export const PASSWORD_LOGIN = 'PASSWORD_LOGIN';
export const PASSWORD_LOGIN_SUCESS = 'PASSWORD_LOGIN_SUCESS';
export const PASSWORD_LOGIN_FAILURE = 'PASSWORD_LOGIN_FAILURE';

export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';
export const VERIFY_USER_OTP = 'VERIFY_USER_OTP';
export const VERIFY_USER_OTP_SUCCESS = 'VERIFY_USER_OTP_SUCCESS';
export const VERIFY_USER_OTP_FAILURE = 'VERIFY_USER_OTP_FAILURE';
export const REMOVE_OTP_MODAL = 'REMOVE_OTP_MODAL';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const VERIFY_USER_DATA = 'VERIFY_USER_DATA';
export const VERIFY_USER_DATA_SUCCESS = 'VERIFY_USER_DATA_SUCCESS';
export const VERIFY_USER_DATA_FAILURE = 'VERIFY_USER_DATA_FAILURE';
export const RESET_USER_DATA = 'RESET_USER_DATA';

export const SIGN_UP_DATA = 'SIGN_UP_DATA';
export const SIGN_UP_DATA_SUCCESS = 'SIGN_UP_DATA_SUCCESS';
export const SIGN_UP_DATA_FAILURE = 'SIGN_UP_DATA_FAILURE';

export const FETCH_USER_METRICTS = 'FETCH_USER_METRICTS';
export const FETCH_USER_METRICTS_SUCCESS = 'FETCH_USER_METRICTS_SUCCESS';
export const FETCH_USER_METRICTS_FAILURE = 'FETCH_USER_METRICTS_FAILURE';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
// bot profile
export const CREATE_BOT_PROFILE = 'CREATE_BOT_PROFILE';
export const CREATE_BOT_PROFILE_SUCCESS = 'CREATE_BOT_PROFILE_SUCCESS';
export const CREATE_BOT_PROFILE_FAILURE = 'CREATE_BOT_PROFILE_FAILURE';

export const EDIT_BOT_PROFILE = 'EDIT_BOT_PROFILE';
export const EDIT_BOT_PROFILE_SUCCESS = 'EDIT_BOT_PROFILE_SUCCESS';
export const EDIT_BOT_PROFILE_FAILURE = 'EDIT_BOT_PROFILE_FAILURE';

export const GET_USER_BOT_PROFILE = 'GET_USER_BOT_PROFILE';
export const GET_USER_BOT_PROFILE_SUCCESS = 'GET_USER_BOT_PROFILE_SUCCESS';
export const GET_USER_BOT_PROFILE_FAILURE = 'GET_USER_BOT_PROFILE_FAILURE';

export const EXPORT_BOT_PROFILE = 'EXPORT_BOT_PROFILE';
export const EXPORT_BOT_PROFILE_SUCCESS = 'EXPORT_BOT_PROFILE_SUCCESS';
export const EXPORT_BOT_PROFILE_FAILURE = 'EXPORT_BOT_PROFILE_FAILURE';

export const DELETE_BOT_PROFILE = 'DELETE_BOT_PROFILE';
export const DELETE_BOT_PROFILE_SUCCESS = 'DELETE_BOT_PROFILE_SUCCESS';
export const DELETE_BOT_PROFILE_FAILURE = 'DELETE_BOT_PROFILE_FAILURE';
// knowledge base
export const CREATE_KNOWLEDGE_BASE = 'CREATE_KNOWLEDGE_BASE';
export const CREATE_KNOWLEDGE_BASE_SUCCESS = 'CREATE_KNOWLEDGE_BASE_SUCCESS';
export const CREATE_KNOWLEDGE_BASE_FAILURE = 'CREATE_KNOWLEDGE_BASE_FAILURE';

export const GET_USER_KNOWLEDGE_BASE = 'GET_USER_KNOWLEDGE_BASE';
export const GET_USER_KNOWLEDGE_BASE_SUCCESS =
  'GET_USER_KNOWLEDGE_BASE_SUCCESS';
export const GET_USER_KNOWLEDGE_BASE_FAILURE =
  'GET_USER_KNOWLEDGE_BASE_FAILURE';

export const DELETE_USER_KNOWLEDGE_BASE = 'DELETE_USER_KNOWLEDGE_BASE';
export const DELETE_USER_KNOWLEDGE_BASE_SUCCESS =
  'DELETE_USER_KNOWLEDGE_BASE_SUCCESS';
export const DELETE_USER_KNOWLEDGE_BASE_FAILURE =
  'DELETE_USER_KNOWLEDGE_BASE_FAILURE';

// payment actions
export const FETCH_PLANS = 'FETCH_PLANS';
export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS';
export const FETCH_PLANS_FAILURE = 'FETCH_PLANS_FAILURE';

export const CREATE_PAYMENT_REQUEST = 'CREATE_PAYMENT_REQUEST';
export const CREATE_PAYMENT_SUCCESS = 'CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_FAILURE = 'CREATE_PAYMENT_FAILURE';

export const CAPTURE_PAYMENT_REQUEST = 'CAPTURE_PAYMENT_REQUEST';
export const CAPTURE_PAYMENT_SUCCESS = 'CAPTURE_PAYMENT_SUCCESS';
export const CAPTURE_PAYMENT_FAILURE = 'CAPTURE_PAYMENT_FAILURE';

export const FETCH_MEMBERSHIP_PLAN_REQUEST = 'FETCH_MEMBERSHIP_PLAN_REQUEST';
export const FETCH_MEMBERSHIP_PLAN_SUCCESS = 'FETCH_MEMBERSHIP_PLAN_SUCCESS';
export const FETCH_MEMBERSHIP_PLAN_FAILURE = 'FETCH_MEMBERSHIP_PLAN_FAILURE';

// user chat data
export const USER_CHAT_DATA = 'USER_CHAT_DATA';
export const GET_USER_CHAT_SUCCESS = 'GET_USER_CHAT_SUCCESS';
export const GET_USER_CHAT_FAILURE = 'GET_USER_CHAT_FAILURE';
export const USER_ALL_SESSION = 'USER_ALL_SESSION';
export const GET_USER_All_SESSION_SUCCESS = 'GET_USER_All_SESSION_SUCCESS';
export const GET_USER_All_SESSION_FAILURE = 'GET_USER_All_SESSION_FAILURE';
export const USER_OUESTION_SESSION = 'USER_OUESTION_SESSION';
export const USER_SESSION_HISTORY = 'USER_SESSION_HISTORY';
export const ADVANCE_FEATURE = 'ADVANCE_FEATURE';
export const ADVANCE_FEATURE_SUCCESS = 'ADVANCE_FEATURE_SUCCESS';
export const ADVANCE_FEATURE_FAILURE = 'ADVANCE_FEATURE_FAILURE';
export const REMOVE_BOT_PROFILES = 'REMOVE_BOT_PROFILES';
export const REMOVE_ADVANCE_FEATURE = 'REMOVE_ADVANCE_FEATURE';
export const BOTSESSION_ID = 'BOTSESSION_ID';

//whatsapp integration
export const SAVE_WHATSAPP_INTEGRATION = 'SAVE_WHATSAPP_INTEGRATION';
export const SAVE_WHATSAPP_INTEGRATION_SUCCESS =
  'SAVE_WHATSAPP_INTEGRATION_SUCCESS';
export const SAVE_WHATSAPP_INTEGRATION_FAILURE =
  'SAVE_WHATSAPP_INTEGRATION_FAILURE';

export const EDIT_WHATSAPP_INTEGRATION = 'EDIT_WHATSAPP_INTEGRATION';
export const EDIT_WHATSAPP_INTEGRATION_SUCCESS =
  'EDT_WHATSAPP_INTEGRATION_SUCCESS';
export const EDIT_WHATSAPP_INTEGRATION_FAILURE =
  'EDIT_WHATSAPP_INTEGRATION_FAILURE';

export const DELETE_WHATSAPP_INTEGRATION = 'DELETE_WHATSAPP_INTEGRATION';
export const DELETE_WHATSAPP_INTEGRATION_SUCCESS =
  'DELETE_WHATSAPP_INTEGRATION_SUCCESS';
export const DELETE_WHATSAPP_INTEGRATION_FAILURE =
  'DELETE_WHATSAPP_INTEGRATION_FAILURE';
export const GET_WHATSAPP_WEBHOOK = 'GET_WHATSAPP_WEBHOOK';
export const GET_WHATSAPP_WEBHOOK_SUCCESS = 'GET_WHATSAPP_WEBHOOK_SUCCESS';
export const GET_WHATSAPP_WEBHOOK_FAILURE = 'GET_WHATSAPP_WEBHOOK_FAILURE';
export const USER_ALL_SESSION_LIVE = 'USER_ALL_SESSION_LIVE';
export const GET_USER_All_SESSION_SUCCESS_LIVE =
  'GET_USER_All_SESSION_SUCCESS_LIVE';
export const GET_USER_All_SESSION_FAILURE_LIVE =
  'GET_USER_All_SESSION_FAILURE_LIVE';
