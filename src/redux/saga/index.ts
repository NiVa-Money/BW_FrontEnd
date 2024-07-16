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
} from '../actions/actionTypes';
import {
  fetchUserData,
  fetchUserMetrics,
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
  type,
  payload,
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
  type,
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
export default function* rootSaga() {
  yield takeLatest(VERIFY_USER_DATA, verifyUserSaga);
  yield takeLatest(SIGN_UP_DATA, signUpUserSaga);
  yield takeLatest(FETCH_USER_METRICTS, fetchuserMetricSaga);
  yield takeLatest('LOGIN_REQUEST', loginSaga);
  yield takeEvery('LOGOUT_REQUEST', logoutSaga);
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
