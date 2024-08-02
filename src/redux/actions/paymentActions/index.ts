import { CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE, CAPTURE_PAYMENT_FAILURE, CAPTURE_PAYMENT_REQUEST, CAPTURE_PAYMENT_SUCCESS } from '../actionTypes';

export const createPaymentRequest = (paymentData: any) => ({
    type: CREATE_PAYMENT_REQUEST,
    payload: paymentData,
});

export const createPaymentSuccess = (response: any) => ({
    type: CREATE_PAYMENT_SUCCESS,
    payload: response,
});

export const createPaymentFailure = (error: any) => ({
    type: CREATE_PAYMENT_FAILURE,
    payload: error,
});


export const capturePaymentRequest = (paymentId: string) => ({
  type: CAPTURE_PAYMENT_REQUEST,
  payload: paymentId,
});

export const capturePaymentSuccess = (data: any) => ({
  type: CAPTURE_PAYMENT_SUCCESS,
  payload: data,
});

export const capturePaymentFailure = (error: any) => ({
  type: CAPTURE_PAYMENT_FAILURE,
  payload: error,
});