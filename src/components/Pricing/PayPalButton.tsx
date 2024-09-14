import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPaymentRequest,
  capturePaymentRequest,
} from '@/redux/actions/paymentActions';
import { RootState } from '@/redux/configureStore';
import { useRouter } from 'next/navigation';

type PayPalButtonProps = {
  planName: string;
  price: string;
  userId: string;
  onPaymentSuccess: () => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  price,
  onPaymentSuccess,
}) => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const planId = useSelector((state: RootState) => state.payment?._id);
  const planName = useSelector((state: RootState) => state.payment?.planName);
  const paypalUrl = useSelector((state: RootState) => state.payment?.paypalUrl);
  const paypalCreateLoader = useSelector(
    (state: RootState) => state.payment?.loading
  );
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      handlePayPalReturn(token);
    }
  }, []);

  useEffect(() => {
    if (isPaymentInitiated && paypalUrl?.length && !paypalCreateLoader) {
      window.location.href = paypalUrl;
    }
  }, [paypalUrl, paypalCreateLoader, isPaymentInitiated]);

  const handlePayPalReturn = async (token: string) => {
    try {
      const result = dispatch(capturePaymentRequest(token));
      if (result.type === 'CAPTURE_PAYMENT_SUCCESS') {
        onPaymentSuccess();
        window.location.href = '/membership-success'; // Redirect to success page
      } else {
        throw new Error('Payment capture failed');
      }
    } catch (error) {
      window.location.href = '/membership-failure'; // Redirect to failure page
    }
  };

  const createOrder = async () => {
    try {
      setIsPaymentInitiated(true);
      dispatch(
        createPaymentRequest({
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
