import { CREATE_PAYMENT_REQUEST, CAPTURE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CAPTURE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE, CAPTURE_PAYMENT_FAILURE, FETCH_PLANS, FETCH_PLANS_FAILURE, FETCH_PLANS_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function paymentReducer(
  state = initialState.payment,
  action: any
) {
  switch (action.type) {
    case FETCH_PLANS:
      return { ...state, 
        plans: {
        ...state.plans,
        loading: true,
      },};
    case FETCH_PLANS_SUCCESS:
      return { ...state, 
        plans: {
          ...state.plans,
          loading: false,
          plans: action.payload,  // Update the `plans` array
        },
      };
    case FETCH_PLANS_FAILURE:
      return { ...state, 
        plans: {
          ...state.plans,
          loading: false,
          error: action.payload,
        },
       };
    case CREATE_PAYMENT_REQUEST:
    case CAPTURE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentData: action.payload,
        approvalUrl: action.payload.approvalUrl,
        subscriptionId: action.payload.subscriptionId,
        data: action.payload.data,
        error: null,
      };
    case CAPTURE_PAYMENT_SUCCESS:
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
