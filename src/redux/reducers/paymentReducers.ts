import { CREATE_PAYMENT_REQUEST, CAPTURE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CAPTURE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE, CAPTURE_PAYMENT_FAILURE } from "../actions/actionTypes";
import initialState from "./initialState";

export default function paymentReducer(state = initialState.payment, action: any) {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
    case CAPTURE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PAYMENT_SUCCESS:
      console.log('Create Payment Success Payload:', action.payload);
      return {
        ...state,
        loading: false,
        paymentData: action.payload,
        paypalUrl: action.payload.paypalUrl, 
        error: null,
      };
    case CAPTURE_PAYMENT_SUCCESS:
      console.log('Capture Payment Success Payload:', action.payload);
      return {
        ...state,
        loading: false,
        paymentData: action.payload,
        error: null,
      };
    case CREATE_PAYMENT_FAILURE:
    case CAPTURE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}