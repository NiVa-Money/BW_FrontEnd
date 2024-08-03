// import initialState from './initialState';
// import { 
//   CREATE_PAYMENT_REQUEST, 
//   CREATE_PAYMENT_SUCCESS, 
//   CREATE_PAYMENT_FAILURE,
//   CAPTURE_PAYMENT_REQUEST,
//   CAPTURE_PAYMENT_SUCCESS,
//   CAPTURE_PAYMENT_FAILURE,
// } from "../actions/actionTypes";

// const paymentReducer = (state = initialState.payment, action: { type: any; payload: any; }) => {
//   switch (action.type) {
//       case CREATE_PAYMENT_REQUEST:
//           return {
//               ...state,
//               loading: true,
//               error: null,
//           };
//       case CREATE_PAYMENT_SUCCESS:
//           return {
//               ...state,
//               loading: false,
//               paymentData: action.payload,
//               error: null,
//           };
//       case CREATE_PAYMENT_FAILURE:
//           return {
//               ...state,
//               loading: false,
//               error: action.payload,
//           };
//       default:
//           return state;
//   }
// };

// export default paymentReducer;


import initialState from './initialState';
import { 
  CREATE_PAYMENT_REQUEST, 
  CREATE_PAYMENT_SUCCESS, 
  CREATE_PAYMENT_FAILURE,
  CAPTURE_PAYMENT_REQUEST,
  CAPTURE_PAYMENT_SUCCESS,
  CAPTURE_PAYMENT_FAILURE,
} from "../actions/actionTypes";

export default function paymentReducer(state = initialState.payment, action: any){
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
    case CAPTURE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PAYMENT_SUCCESS:
    case CAPTURE_PAYMENT_SUCCESS:
      console.log('Payment Success Payload:', action.payload);
      return {
        ...state,
        loading: false,
        paymentData: action.payload,
        _id: action.payload._id,
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
};
