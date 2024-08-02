

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createPayment } from '@/redux/actions/paymentActions';

type PayPalButtonProps = {
  planId: string;
  price: string;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({ planId, price }) => {
  const dispatch = useDispatch();
  const { orderId, loading, error } = useSelector((state: any) => state.payment);
  const [modalOpen, setModalOpen] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 
  const [isError, setIsError] = useState(false); 

  useEffect(() => {
    if (!orderId) {
      console.log('orderID' , orderId)
      dispatch(createPayment(planId));
      console.log('orderID' , planId)
    }
  }, [dispatch, planId, orderId]);

  const createOrder = (data: any, actions: any) => {
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
    return actions.order.capture().then((details: any) => {
      setModalMessage('Transaction completed by ' + details.payer.name.given_name);
      setIsError(false); 
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
        }} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;