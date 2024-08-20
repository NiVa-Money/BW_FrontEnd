import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPaymentRequest,
  capturePaymentRequest,
} from '@/redux/actions/paymentActions';
import { RootState } from '@/redux/configureStore';
import { useRouter } from 'next/navigation';

type PayPalButtonProps = {
  planId: string;
  price: string;
  userId: string;
  onPaymentSuccess: () => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  planId,
  price,
  onPaymentSuccess,
}) => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const paypalUrl = useSelector((state: RootState) => state.payment?.paypalUrl);
  const paypalCreateLoader = useSelector(
    (state: RootState) => state.payment?.loading
  );
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      handlePayPalReturn(token);
    }
  }, []);

  useEffect(() => {
    if (paypalUrl?.length && !paypalCreateLoader) {
      window.location.href = paypalUrl;
    }
  }, [paypalUrl, paypalCreateLoader]);

  const handlePayPalReturn = async (token: string) => {
    try {
      const result = await dispatch(capturePaymentRequest(token));
      if (result.type === 'CAPTURE_PAYMENT_SUCCESS') {
        onPaymentSuccess();
        window.location.href = '/membership-success'; // Redirect to success page
      } else {
        throw new Error('Payment capture failed');
      }
    } catch (error) {
      console.error('Transaction failed:', error);
      window.location.href = '/membership-failure'; // Redirect to failure page
    }
  };

  const createOrder = async () => {
    console.log('Create order button clicked');
    try {
      dispatch(
        createPaymentRequest({
          userId,
          amount: Number(price),
          currency: 'USD',
          paymentGateway: 'paypal',
          planId,
        })
      );
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
