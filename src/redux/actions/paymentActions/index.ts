import { CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE } from '../actionTypes';

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
