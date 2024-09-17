import { auth, provider } from '@/auth/firebase';
import { UserCredential, signInWithPopup } from 'firebase/auth';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  VERIFY_USER_DATA,
  VERIFY_USER_DATA_FAILURE,
  VERIFY_USER_DATA_SUCCESS,
  FETCH_USER_METRICTS,
  FETCH_USER_METRICTS_FAILURE,
  FETCH_USER_METRICTS_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  SIGN_UP_DATA,
  SIGN_UP_DATA_FAILURE,
  SIGN_UP_DATA_SUCCESS,
  GET_USER_PROFILE,
  CREATE_BOT_PROFILE_FAILURE,
  EDIT_BOT_PROFILE_SUCCESS,
  EDIT_BOT_PROFILE_FAILURE,
  EXPORT_BOT_PROFILE,
  EXPORT_BOT_PROFILE_SUCCESS,
  EXPORT_BOT_PROFILE_FAILURE,
  GET_USER_BOT_PROFILE_SUCCESS,
  GET_USER_BOT_PROFILE_FAILURE,
  DELETE_BOT_PROFILE_SUCCESS,
  DELETE_BOT_PROFILE_FAILURE,
  CREATE_BOT_PROFILE,
  EDIT_BOT_PROFILE,
  DELETE_BOT_PROFILE,
  GET_USER_BOT_PROFILE,
  CREATE_KNOWLEDGE_BASE_SUCCESS,
  CREATE_KNOWLEDGE_BASE_FAILURE,
  GET_USER_KNOWLEDGE_BASE_SUCCESS,
  GET_USER_KNOWLEDGE_BASE_FAILURE,
  DELETE_USER_KNOWLEDGE_BASE_SUCCESS,
  DELETE_USER_KNOWLEDGE_BASE_FAILURE,
  GET_USER_KNOWLEDGE_BASE,
  CREATE_KNOWLEDGE_BASE,
  DELETE_USER_KNOWLEDGE_BASE,
  USER_CHAT_DATA,
  GET_USER_CHAT_SUCCESS,
  GET_USER_CHAT_FAILURE,
  USER_ALL_SESSION,
  GET_USER_All_SESSION_SUCCESS,
  GET_USER_All_SESSION_FAILURE,
  CREATE_BOT_PROFILE_SUCCESS,
  ADVANCE_FEATURE,
  ADVANCE_FEATURE_SUCCESS,
  ADVANCE_FEATURE_FAILURE,
  VERIFY_USER_OTP,
  VERIFY_USER_OTP_SUCCESS,
  VERIFY_USER_OTP_FAILURE,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  PASSWORD_LOGIN,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  CAPTURE_PAYMENT_REQUEST,
  SET_PATHNAME_SUCCESS,
  SET_PATHNAME_FAILURE,
  SET_PATHNAME,
  FETCH_PLANS,
} from '../actions/actionTypes';

import {
  createKnowledgeBaseService,
  createUserBotProfileService,
  deleteBotProfileService,
  deleteUserKnowledgeBaseService,
  editUserBotProfileService,
  exportBotProfileService,
  fetchUserData,
  fetchUserMetrics,
  getAdvanceFeatureService,
  getUserAllSessionService,
  getUserBotProfileService,
  getUserChatService,
  getUserKnowledgeBaseService,
  getUserProfileService,
  LoginUserData,
  signUpGoogleUserData,
  signUpUserData,
  processPayPalPaymentService,
  verifyOtpUserData,
  capturePaymentService,
  fetchPlansApi,
} from '../services';
import { notifyError, notifySuccess } from '@/components/Toaster/toast';
import {
  capturePaymentFailure,
  capturePaymentSuccess,
  createPaymentFailure,
  createPaymentSuccess,
  fetchPlansFailure,
  fetchPlansSuccess,
} from '../actions/paymentActions';
interface BotData {
  userChat: any;
}
export function* verifyUserSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    // Api call
    const verifyUser = yield call(fetchUserData, payload);
    yield put({
      type: VERIFY_USER_DATA_SUCCESS,
      payload: verifyUser,
    });
  } catch (error: any) {
    yield put({
      type: VERIFY_USER_DATA_FAILURE,
      payload: false,
    });
  }
}

export function* verifyOtpUserSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    // Api call
    const verifyUser = yield call(verifyOtpUserData, payload);
    notifySuccess('login Successful');
    yield put({
      type: VERIFY_USER_OTP_SUCCESS,
      payload: verifyUser,
    });

    const userProfileData = yield call(getUserProfileService, payload?.emailId);
    yield put({
      type: GET_USER_PROFILE_SUCCESS,
      payload: userProfileData,
    });
  } catch (error: any) {
    yield put({
      type: VERIFY_USER_OTP_FAILURE,
      payload: false,
    });
  }
}

export function* signUpGoogleUserSagaData({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const verifyUser = yield call(signUpGoogleUserData, payload);
    notifySuccess('login Successful');
    yield put({
      type: GOOGLE_LOGIN_SUCCESS,
      payload: verifyUser,
    });
  } catch (error: any) {
    yield put({
      type: GOOGLE_LOGIN_FAILURE,
      payload: false,
    });
  }
}

export function* signUpUserSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const signUpUser = yield call(signUpUserData, payload);
    yield put({
      type: SIGN_UP_DATA_SUCCESS,
      payload: signUpUser,
    });
  } catch (error: any) {
    yield put({
      type: SIGN_UP_DATA_FAILURE,
    });
    notifyError(`${error}`);
  }
}
export function* fetchuserMetricSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const fetchuserMetricData = yield call(fetchUserMetrics, payload);
    yield put({
      type: FETCH_USER_METRICTS_SUCCESS,
      payload: fetchuserMetricData,
    });
  } catch (error: any) {
    yield put({
      type: FETCH_USER_METRICTS_FAILURE,
    });
  }
}
function* loginSaga({ payload }: any) {
  try {
    const result: UserCredential = yield call(signInWithPopup, auth, provider);
    const resObject: any = {
      displayName: result?.user?.displayName,
      email: result?.user?.email,
    };
    yield put({ type: 'LOGIN_SUCCESS', payload: resObject });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload });
    notifyError(`${error}`);
  }
}
function* passwordLoginSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const result: any = yield call(LoginUserData, payload);

    if (result?.success) {
      yield put({ type: 'PASSWORD_LOGIN_SUCESS', payload: result });

      const userProfileData = yield call(getUserProfileService, payload?.email);
      yield put({
        type: GET_USER_PROFILE_SUCCESS,
        payload: userProfileData,
      });
    } else {
      notifyError(`${result?.error}`);
      yield put({ type: 'PASSWORD_LOGIN_FAILURE', payload: result });
    }
  } catch (error) {
    yield put({ type: 'PASSWORD_LOGIN_FAILURE', payload });
    notifyError(`${error}`);
  }
}

function* logoutSaga({ payload }: any) {
  const signOut: any = () => auth.signOut();
  try {
    yield call(signOut, auth);
    notifySuccess('signOut successful');
    yield put({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    notifyError(`${error}`);
    yield put({ type: 'LOGOUT_FAILURE', payload });
  }
}

export function* getUserProfileSaga({
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const userProfileData = yield call(getUserProfileService, payload);
    yield put({
      type: GET_USER_PROFILE_SUCCESS,
      payload: userProfileData,
    });
  } catch (error: any) {
    yield put({
      type: GET_USER_PROFILE_FAILURE,
    });
  }
}
//bot profile sagas
export function* createBotProfileSaga({
  payload,
}: {
  type: any;
  payload: any;
}): Generator<any> {
  try {
    const createBot: any = yield call(createUserBotProfileService, payload);
    if (createBot.success) {
      notifySuccess('Bot created successfully');
    } else {
      notifyError(`${createBot.error}`);
    }
    yield put({
      type: CREATE_BOT_PROFILE_SUCCESS,
      payload: createBot,
    });
    let userId = null;
    for (const [key, value] of payload.entries()) {
      if (key === 'userId') {
        userId = value;
        break;
      }
    }

    const botProfiles = yield call(getUserBotProfileService, userId);
    yield put({
      type: GET_USER_BOT_PROFILE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    yield put({
      type: CREATE_BOT_PROFILE_FAILURE,
    });
    notifyError(`${error}`);
  }
}

export function* editBotProfileSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const editBot = yield call(editUserBotProfileService, payload);
    notifySuccess('botProfile edited successfully');
    yield put({
      type: EDIT_BOT_PROFILE_SUCCESS,
      payload: editBot,
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: EDIT_BOT_PROFILE_FAILURE,
    });
  }
}

export function* getBotProfilesSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const botProfiles = yield call(getUserBotProfileService, payload);
    // notifySuccess('botProfiles fetched successfully');
    yield put({
      type: GET_USER_BOT_PROFILE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    // notifyError(`${error}`)
    yield put({
      type: GET_USER_BOT_PROFILE_FAILURE,
    });
  }
}

export function* deleteBotProfilesSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const botProfiles = yield call(deleteBotProfileService, payload);
    notifySuccess('botProfile deleted successfully');
    yield put({
      type: DELETE_BOT_PROFILE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: DELETE_BOT_PROFILE_FAILURE,
    });
  }
}

export function* exportBotProfileSaga({
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const exportedBotProfile = yield call(exportBotProfileService, payload);
    yield put({
      type: EXPORT_BOT_PROFILE_SUCCESS,
      payload: exportedBotProfile,
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: EXPORT_BOT_PROFILE_FAILURE,
    });
  }
}

//knowledge base sagas

export function* createKnowledgeBaseSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const knowledgebase: any = yield call(createKnowledgeBaseService, payload);
    if (knowledgebase.success) {
      notifySuccess('knowledge base created successfully');
    } else {
      notifyError(`${knowledgebase.error}`);
    }
    yield put({
      type: CREATE_KNOWLEDGE_BASE_SUCCESS,
      payload: knowledgebase,
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: CREATE_KNOWLEDGE_BASE_FAILURE,
    });
  }
}

export function* getUserKnowledgeBaseSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const botProfiles = yield call(getUserKnowledgeBaseService, payload);
    yield put({
      type: GET_USER_KNOWLEDGE_BASE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    yield put({
      type: GET_USER_KNOWLEDGE_BASE_FAILURE,
    });
  }
}

export function* deleteUserKnowledgeBaseSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const botProfiles = yield call(deleteUserKnowledgeBaseService, payload);
    notifySuccess('knowledge base deleted successfully');
    yield put({
      type: DELETE_USER_KNOWLEDGE_BASE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: DELETE_USER_KNOWLEDGE_BASE_FAILURE,
    });
  }
}

//userchat with bot
export function* getUserChatSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const userChat: any = yield call(getUserChatService, payload);
    const answerOfQuestion = userChat.chats[userChat.chats.length - 1].answer;
    yield put({
      type: GET_USER_CHAT_SUCCESS,
      payload: {
        text: answerOfQuestion,
        sender: 'other',
        sessionId: userChat.sessionId,
      },
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: GET_USER_CHAT_FAILURE,
    });
  }
}

export function* getUserAllSessionSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const userChat = yield call(getUserAllSessionService, payload);
    yield put({
      type: GET_USER_All_SESSION_SUCCESS,
      payload: userChat,
    });
  } catch (error: any) {
    yield put({
      type: GET_USER_All_SESSION_FAILURE,
    });
  }
}

export function* getAdvanceFeatureSaga({
  payload,
  type,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const data = {
      sessionId: payload,
    };
    const userChat = yield call(getAdvanceFeatureService, data);
    yield put({
      type: ADVANCE_FEATURE_SUCCESS,
      payload: userChat,
    });
  } catch (error: any) {
    notifyError(`${error}`);
    yield put({
      type: ADVANCE_FEATURE_FAILURE,
    });
  }
}


function* fetchPlansSaga(): Generator<any, void, any> {
  try {
    const response: { name: string, price: number, _id: string }[] = yield call(fetchPlansApi); // Call the API function
    
    // Ensure response is an array and not empty
    if (!Array.isArray(response) || response.length === 0) {
      throw new Error('No plans found or invalid data format');
    }

    console.log('API response data:', response);
    
    // Process data
    const filteredData = response.map((plan: { name: string; price: number; _id: string }) => ({
      name: plan.name,
      price: plan.price,
      planId: plan._id,
    }));
    console.log('Filtered data:', filteredData);

    yield put(fetchPlansSuccess(filteredData)); // Dispatch success action
  } catch (error) {
    console.error('Fetch plans failed with error:', error);
    yield put(fetchPlansFailure('Plans fetch failed')); // Dispatch failure action 
  }
}

export function* payPalPaymentSaga({ payload }: { type: string; payload: { planId: string; data: any } }): Generator<any> {
  try {
    const { planId, data } = payload;
    const response: any = yield call(processPayPalPaymentService, planId, data);
    
    yield put(createPaymentSuccess(response));
    notifySuccess('Payment processed successfully');
  } catch (error: any) {
    yield put(createPaymentFailure(error.message));
    notifyError('Payment processing failed');
  }
}

export function* capturePaymentSaga({
  payload,
}: {
  type: string;
  payload: string;
}): Generator<any> {
  try {
    const response = yield call(capturePaymentService, payload);
    const subscriptionId = (response as { _id: string })._id;
    // // Save the captured payment response in Redux
    yield put(capturePaymentSuccess(response));
    notifySuccess('Payment captured successfully');
  } catch (error: any) {
    yield put(capturePaymentFailure(error.message));
    notifyError('Payment capture failed');
  }
}
export function* pathnameSaga({
  payload,
}: {
  type: string;
  payload: string;
}): Generator<any> {
  try {
    yield put({ type: SET_PATHNAME_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: SET_PATHNAME_FAILURE, error });
  }
}
export default function* rootSaga() {
  yield takeLatest(VERIFY_USER_DATA, verifyUserSaga);
  yield takeLatest(SIGN_UP_DATA, signUpUserSaga);
  yield takeLatest(FETCH_USER_METRICTS, fetchuserMetricSaga);
  yield takeLatest('LOGIN_REQUEST', loginSaga);
  yield takeEvery('LOGOUT_REQUEST', logoutSaga);
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
  yield takeEvery(CREATE_BOT_PROFILE, createBotProfileSaga);
  yield takeEvery(EDIT_BOT_PROFILE, editBotProfileSaga);
  yield takeEvery(DELETE_BOT_PROFILE, deleteBotProfilesSaga);
  yield takeEvery(EXPORT_BOT_PROFILE, exportBotProfileSaga);
  yield takeEvery(GET_USER_BOT_PROFILE, getBotProfilesSaga);
  yield takeEvery(GET_USER_KNOWLEDGE_BASE, getUserKnowledgeBaseSaga);
  yield takeEvery(CREATE_KNOWLEDGE_BASE, createKnowledgeBaseSaga);
  yield takeEvery(DELETE_USER_KNOWLEDGE_BASE, deleteUserKnowledgeBaseSaga);
  yield takeEvery(USER_CHAT_DATA, getUserChatSaga);
  yield takeEvery(USER_ALL_SESSION, getUserAllSessionSaga);
  yield takeEvery(ADVANCE_FEATURE, getAdvanceFeatureSaga);
  yield takeEvery(VERIFY_USER_OTP, verifyOtpUserSaga);
  yield takeEvery(GOOGLE_LOGIN, signUpGoogleUserSagaData);
  yield takeEvery(PASSWORD_LOGIN, passwordLoginSaga);
  yield takeEvery(FETCH_PLANS, fetchPlansSaga);
  yield takeEvery(CREATE_PAYMENT_REQUEST, payPalPaymentSaga);
  yield takeLatest(CAPTURE_PAYMENT_REQUEST, capturePaymentSaga);
  yield takeLatest(SET_PATHNAME, pathnameSaga);
}
