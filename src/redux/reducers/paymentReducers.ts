import initialState from './initialState';

const paymentReducer = (state = initialState.payment, action: any) => {
  switch (action.type) {
    case 'CREATE_PAYMENT_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_PAYMENT_SUCCESS':
      return { ...state, loading: false, orderId: action.payload };
    case 'CREATE_PAYMENT_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
