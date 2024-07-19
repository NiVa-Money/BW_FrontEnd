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
} from '../actions/actionTypes';

import {
  createKnowledgeBaseService,
  createUserBotProfileService,
  deleteBotProfileService,
  deleteUserKnowledgeBaseService,
  editUserBotProfileService,
  fetchUserData,
  fetchUserMetrics,
  getUserBotProfileService,
  getUserKnowledgeBaseService,
  getUserProfileService,
  signUpUserData,
} from '../services';

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
    console.log('re', result);
    const resObject: any = {
      displayName: result?.user?.displayName,
      email: result?.user?.email,
    };
    yield put({ type: 'LOGIN_SUCCESS', payload: resObject });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload });
  }
}

function* logoutSaga({ payload }: any) {
  const signOut: any = () => auth.signOut();
  try {
    yield call(signOut, auth);
    yield put({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
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
    const createBot = yield call(createUserBotProfileService, payload);
    yield put({
      type: CREATE_BOT_PROFILE_FAILURE,
      payload: createBot,
    });
  } catch (error: any) {
    yield put({
      type: CREATE_BOT_PROFILE_FAILURE,
    });
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
    yield put({
      type: EDIT_BOT_PROFILE_SUCCESS,
      payload: editBot,
    });
  } catch (error: any) {
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
    yield put({
      type: GET_USER_BOT_PROFILE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
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
    yield put({
      type: DELETE_BOT_PROFILE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    yield put({
      type: DELETE_BOT_PROFILE_FAILURE,
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
    yield put({
      type: CREATE_KNOWLEDGE_BASE_SUCCESS,
      payload: knowledgebase,
    });
  } catch (error: any) {
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
    yield put({
      type: DELETE_USER_KNOWLEDGE_BASE_SUCCESS,
      payload: botProfiles,
    });
  } catch (error: any) {
    yield put({
      type: DELETE_USER_KNOWLEDGE_BASE_FAILURE,
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
  yield takeEvery(GET_USER_BOT_PROFILE, getBotProfilesSaga);
  yield takeEvery(GET_USER_KNOWLEDGE_BASE, getUserKnowledgeBaseSaga);
  yield takeEvery(CREATE_KNOWLEDGE_BASE, createKnowledgeBaseSaga);
  yield takeEvery(DELETE_USER_KNOWLEDGE_BASE, deleteUserKnowledgeBaseSaga);
}
