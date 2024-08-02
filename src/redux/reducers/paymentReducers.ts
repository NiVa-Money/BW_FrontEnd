import initialState from './initialState';
import { 
  CREATE_PAYMENT_REQUEST, 
  CREATE_PAYMENT_SUCCESS, 
  CREATE_PAYMENT_FAILURE 
} from "../actions/actionTypes";

const paymentReducer = (state = initialState.payment, action: { type: any; payload: any; }) => {
  switch (action.type) {
      case CREATE_PAYMENT_REQUEST:
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
              error: null,
          };
      case CREATE_PAYMENT_FAILURE:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      default:
          return state;
  }
};

export default paymentReducer;
