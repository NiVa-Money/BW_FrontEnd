import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPaymentRequest,
  capturePaymentRequest,
} from '@/redux/actions/paymentActions';
import { RootState } from '@/redux/configureStore';

type PayPalButtonProps = {
  planName: string;
  price: number;
  userId: string;
  onPaymentSuccess: () => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  planName,
  price,
  onPaymentSuccess,
}) => {
  const dispatch = useDispatch();
  const plans = useSelector((state: RootState) => state.payment.plans.plans);
  const approvalUrl = useSelector((state: RootState) => state.payment?.approvalUrl);
  const paypalCreateLoader = useSelector((state: RootState) => state.payment?.loading);
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);

  console.log('Available plans:', plans);

  // Find the correct plan based on name and price
  const selectedPlan = plans.find((plan: { name: string; price: string; }) => 
    plan.name.toLowerCase() === planName.toLowerCase() 
  );
  const planId = selectedPlan?.planId;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      handlePayPalReturn(token);
    }
  }, []);

  useEffect(() => {
    if (isPaymentInitiated && approvalUrl?.length && !paypalCreateLoader) {
      window.location.href = approvalUrl;
    }
  }, [approvalUrl, paypalCreateLoader, isPaymentInitiated]);

  const handlePayPalReturn = async (token: string) => {
    try {
      const result = await dispatch(capturePaymentRequest(token));
      if (result.type === 'CAPTURE_PAYMENT_SUCCESS') {
        onPaymentSuccess();
        window.location.href = '/membership-success';
      } else {
        throw new Error('Payment capture failed');
      }
    } catch (error) {
      window.location.href = '/membership-failure';
    }
  };

  const createOrder = async () => {
    try {
      if (!planId) {
        console.error('Plan ID is not set. Selected plan:', selectedPlan);
        return;
      }
      setIsPaymentInitiated(true);
      dispatch(createPaymentRequest({ planId, approvalUrl }));
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };
  
  return (
        <button
          onClick={createOrder}
          className="py-2 px-6 text-base font-medium bg-white rounded-lg text-black w-full"
        >
          Pay with PayPal
        </button>
      );
};

export default PayPalButton;
