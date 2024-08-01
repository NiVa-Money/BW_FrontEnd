import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS } from "../actionTypes";

export const createPayment = (planId: string) => ({
  type: CREATE_PAYMENT_REQUEST,
  payload: { planId },
});

export const createPaymentSuccess = (orderId: string) => ({
  type: CREATE_PAYMENT_SUCCESS,
  payload: { orderId },
});

export const createPaymentFailure = (error: any) => ({
  type: CREATE_PAYMENT_FAILURE,
  payload: { error },
});
