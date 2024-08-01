import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (!orderId) {
      dispatch(createPayment(planId));
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
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Handle post-transaction actions here
    });
  };

  if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
    return <div>PayPal client ID is not set</div>;
  }

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;