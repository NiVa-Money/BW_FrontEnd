import { CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE, CAPTURE_PAYMENT_REQUEST, CAPTURE_PAYMENT_SUCCESS, CAPTURE_PAYMENT_FAILURE, FETCH_PLANS_SUCCESS, FETCH_PLANS, FETCH_PLANS_FAILURE } from "../actionTypes";

export const fetchPlans = () => ({
  type: FETCH_PLANS
});

export const fetchPlansSuccess = (plans : any) => ({
  type: FETCH_PLANS_SUCCESS,
  payload: plans
});

export const fetchPlansFailure = (error : any) => ({
  type: FETCH_PLANS_FAILURE,
  payload: error
});


export const createPaymentRequest = (payload: { planId: string; data: any }) => ({
  type: CREATE_PAYMENT_REQUEST,
  payload
});

export const createPaymentSuccess = (response: any) => ({
  type: CREATE_PAYMENT_SUCCESS,
  payload: response,
});

export const createPaymentFailure = (error: any) => ({
  type: CREATE_PAYMENT_FAILURE,
  payload: error,
});

export const capturePaymentRequest = (_id: string) => ({
  type: CAPTURE_PAYMENT_REQUEST,
  payload: _id,
});
export const capturePaymentSuccess = (data: any, response: any) => ({
  type: CAPTURE_PAYMENT_SUCCESS,
  payload: data,
});

export const capturePaymentFailure = (error: any) => ({
  type: CAPTURE_PAYMENT_FAILURE,
  payload: error,
});