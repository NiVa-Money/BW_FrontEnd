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
  SIGN_IN_REQUEST,
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
  signUpUserData,
  verifyOtpUserData,
} from '../services';
import { useRouter } from 'next/navigation';
import { notifyError, notifySuccess } from '@/components/Toaster/toast';
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
    // notifySuccess('API call successful fetchUserData');
  } catch (error: any) {
    yield put({
      type: VERIFY_USER_DATA_FAILURE,
      payload: false,
    });
    // notifyError(`${error}`);
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
    notifySuccess("login Successful")
    yield put({
      type: VERIFY_USER_OTP_SUCCESS,
      payload: verifyUser,
    });
    // notifySuccess('API call successful fetchUserData');
  } catch (error: any) {
    yield put({
      type: VERIFY_USER_OTP_FAILURE,
      payload: false,
    });
    // notifyError(`${error}`);
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
    // notifySuccess('signUp successful');
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
    // notifySuccess('api successful for getting UserMetrics');
  } catch (error: any) {
    yield put({
      type: FETCH_USER_METRICTS_FAILURE,
    });
    // notifyError(`${error}`);
  }
}
function* loginSaga({ payload }: any) {
  try {
    const result: UserCredential = yield call(signInWithPopup, auth, provider);
    // console.log('re', result);
    const resObject: any = {
      displayName: result?.user?.displayName,
      email: result?.user?.email,
    };
    // notifySuccess('login successful');
    yield put({ type: 'LOGIN_SUCCESS', payload: resObject });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload });
    notifyError(`${error}`)
  }
}

function* logoutSaga({ payload }: any) {
  const signOut: any = () => auth.signOut();
  try {
    yield call(signOut, auth);
    notifySuccess('signOut successful');
    yield put({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    notifyError(`${error}`)
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
    // notifySuccess('successfully getting userProfileData');
    yield put({
      type: GET_USER_PROFILE_SUCCESS,
      payload: userProfileData,
    });
  } catch (error: any) {
    // notifyError(`${error}`)
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
    const createBot = yield call(createUserBotProfileService, payload);
    if(createBot.success){
       notifySuccess('Bot created successfully');
    }else{
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
    // notifySuccess('api successful for getting botProfiles');
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
    // notifySuccess('botProfile edited successfully');
    yield put({
      type: EDIT_BOT_PROFILE_SUCCESS,
      payload: editBot,
    });
  } catch (error: any) {
    notifyError(`${error}`)
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
    const botProfiles = yield call(deleteBotProfileService, payload)
    // notifySuccess('botProfile deleted successfully');
    yield put({
      type: DELETE_BOT_PROFILE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    notifyError(`${error}`)
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
    // notifySuccess('Bot profile exported successfully');
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
    const knowledgebase = yield call(createKnowledgeBaseService, payload);
    // notifySuccess('knowledge base created successfully');
    yield put({
      type: CREATE_KNOWLEDGE_BASE_SUCCESS,
      payload: knowledgebase,
    });
  } catch (error: any) {
    notifyError(`${error}`)
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
    // notifySuccess('knowledge base fetched successfully');
    yield put({
      type: GET_USER_KNOWLEDGE_BASE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    // notifyError(`${error}`)
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
    // notifySuccess('knowledge base deleted successfully');
    yield put({
      type: DELETE_USER_KNOWLEDGE_BASE_SUCCESS,
      payload: botProfiles,
    });

    try {
      const botProfiles = yield call(getUserKnowledgeBaseService, payload);
      // notifySuccess('knowledge base fetched successfully');
      yield put({
        type: GET_USER_KNOWLEDGE_BASE_SUCCESS,
        payload: botProfiles,
      });
    } catch (error: any) {
      notifyError(`${error}`)
      yield put({
        type: GET_USER_KNOWLEDGE_BASE_FAILURE,
      });
    }
  } catch (error: any) {
    notifyError(`${error}`)
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
    // console.log('api userChat with bot payload  --->', payload);
    const userChat: any = yield call(getUserChatService, payload);
    const answerOfQuestion = userChat.chats[userChat.chats.length - 1].answer;
    // notifySuccess('knowledge base fetched successfully');
    yield put({
      type: GET_USER_CHAT_SUCCESS,
      payload: {
        text: answerOfQuestion,
        sender: 'other',
        sessionId: userChat.sessionId,
      },
    });
  } catch (error: any) {
    notifyError(`${error}`)
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
    // console.log("payload",payload)

    // console.log("getSession ",data)
    // console.log('p', payload);
    const userChat = yield call(getUserAllSessionService, payload);
    // notifySuccess('UserAllSession fetched successfully');
    // console.log("api userChat with bot res All session",userChat)
    yield put({
      type: GET_USER_All_SESSION_SUCCESS,
      payload: userChat,
    });
  } catch (error: any) {
    // notifyError(`${error}`)
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
    // console.log("payload",payload)
    const data = {
      sessionId: payload,
    };
    // console.log("getSession ",data)
    const userChat = yield call(getAdvanceFeatureService, data);
    // notifySuccess('Successfully fetched advance feature')
    // console.log("api userChat with bot res All session",userChat)
    yield put({
      type: ADVANCE_FEATURE_SUCCESS,
      payload: userChat,
    });
  } catch (error: any) {
    notifyError(`${error}`)
    yield put({
      type: ADVANCE_FEATURE_FAILURE,
    });
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
  yield takeEvery(VERIFY_USER_OTP,verifyOtpUserSaga);
}
