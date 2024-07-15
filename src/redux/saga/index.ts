import { auth, provider } from '@/auth/firebase';
import { UserCredential, signInWithPopup } from 'firebase/auth';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { signInFailure, signInSuccess } from '../actions/authActions';
import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_METRICTS,
  FETCH_USER_METRICTS_FAILURE,
  FETCH_USER_METRICTS_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_UP_DATA,
  SIGN_UP_DATA_FAILURE,
  SIGN_UP_DATA_SUCCESS,
} from '../actions/actionTypes';
import { fetchUserData, fetchUserMetrics, signUpUserData } from '../services';
function* signInSaga() {
  try {
    const result: UserCredential = yield call(signInWithPopup, auth, provider);
    const user: any = result.user;
    const plainUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    yield put(signInSuccess(plainUser));
  } catch (error) {
    yield put(signInFailure(error));
  }
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
      type: FETCH_USER_DATA_SUCCESS,
      payload: verifyUser,
    });
  } catch (error: any) {
    yield put({
      type: FETCH_USER_DATA_FAILURE,
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

export default function* rootSaga() {
  yield takeLatest(SIGN_IN_REQUEST, signInSaga);
  yield takeLatest(FETCH_USER_DATA, verifyUserSaga);
  yield takeLatest(SIGN_UP_DATA, signUpUserSaga);
  yield takeLatest(FETCH_USER_METRICTS, fetchuserMetricSaga);
}
