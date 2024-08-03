import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { capturePaymentRequest, createPaymentRequest } from '@/redux/actions/paymentActions';
import PaymentModal from '../Pricing/paymentModal'; // Import the PaymentModal component
import { RootState } from '@/redux/configureStore';

type PayPalButtonProps = {
  planId: string;
  price: string;
  userId: string; 
  isPaymentSuccessful: boolean;
  onPaymentSuccess: () => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({ planId, price , 
  onPaymentSuccess  }) => {
  const dispatch = useDispatch();
  // const { _id: paymentId } = useSelector((state: RootState) => state.payment.paymentData); 
  const paymentData = useSelector((state: RootState) => state.payment.paymentData);
  const paymentId = paymentData ? paymentData._id : '';
  const { orderId } = useSelector((state: RootState) => state.payment);
  const [modalOpen, setModalOpen] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const [isError, setIsError] = useState(false); 
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // New state for payment status


  const createOrder = async (data: any, actions: any) => {
    dispatch(createPaymentRequest({ userId, amount: Number(price), currency: 'USD', paymentGateway: 'paypal' }));
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = async (data: any, actions: any) => {
    console.log('paymentID' , paymentId);
    dispatch(capturePaymentRequest(paymentId)); 
    return actions.order.capture().then((details: any) => {
      setModalMessage('Transaction completed by ' + details.payer.name.given_name);
      setIsError(false); 
      onPaymentSuccess(); 
      setIsPaymentSuccessful(true); // Set payment status to successful
      setModalOpen(true); 
    });
  };

  const onError = (err: any) => {
    setModalMessage('Transaction failed: ' + (err.message || 'Unknown error'));
    setIsError(true); 
    setModalOpen(true); 
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
    return <div>PayPal client ID is not set</div>;
  }

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
      <PayPalButtons 
        createOrder={createOrder} 
        onApprove={onApprove}   
        onError={onError}   
        fundingSource="paypal"  
        style={{
          layout: 'horizontal',
          color: 'white',
          shape: 'rect',
          label: 'paypal',
        }} 
        disabled={isPaymentSuccessful} // Disable buttons if payment is successful
      />
      {/* Only one PaymentModal to show transaction result */}
      <PaymentModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        message={modalMessage} 
        isError={isError} 
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;

