import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createPaymentRequest } from '@/redux/actions/paymentActions';

type PayPalButtonProps = {
  planId: string;
  price: string;
  userId: string; // Add userId prop
};

const PayPalButton: React.FC<PayPalButtonProps> = ({ planId, price, userId }) => {
  const dispatch = useDispatch();
  const { orderId, loading, error } = useSelector((state: any) => state.payment);
  const [modalOpen, setModalOpen] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 
  const [isError, setIsError] = useState(false); 

  useEffect(() => {
    dispatch(createPaymentRequest({ userId, amount: Number(price), currency: 'USD', paymentGateway: 'paypal' }));
  }, [dispatch, orderId, price, userId]);

  const createOrder = async (data: any, actions: any) => {
    // Dispatch the createPaymentRequest action when creating the order
    // dispatch(createPaymentRequest({ userId, amount: Number(price), currency: 'USD', paymentGateway: 'paypal' }));
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
      // Optionally, dispatch a success action here
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
      />
      {/* Modal to show transaction result */}
      {modalOpen && (
        <div className={`modal ${isError ? 'error' : 'success'}`}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
