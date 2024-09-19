// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   createPaymentRequest,
//   capturePaymentRequest,
// } from '@/redux/actions/paymentActions';
// import { RootState } from '@/redux/configureStore';

// type PayPalButtonProps = {
//   planName: string;
//   price: number;
//   userId: string;
//   onPaymentSuccess: () => void;
// };

// const PayPalButton: React.FC<PayPalButtonProps> = ({
//   planName,
//   price,
//   onPaymentSuccess,
// }) => {
//   const dispatch = useDispatch();
//   const plans = useSelector((state: RootState) => state.payment?.plans?.plans);
//   const approvalUrl = useSelector((state: RootState) => state.payment?.approvalUrl);
//   const paypalCreateLoader = useSelector((state: RootState) => state.payment?.loading);
//   const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);

//   console.log('Available plans:', plans);

//   // Find the correct plan based on name and price
//   const selectedPlan = plans?.find((plan: { name: string; price: string; }) =>
//     plan.name.toLowerCase() === planName.toLowerCase()
//   );
//   const planId = selectedPlan?.planId;

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     if (token) {
//       handlePayPalReturn(token);
//     }
//   }, []);

//   useEffect(() => {
//     if (isPaymentInitiated && approvalUrl?.length && !paypalCreateLoader) {
//       window.location.href = approvalUrl;
//     }
//   }, [approvalUrl, paypalCreateLoader, isPaymentInitiated]);

//   const handlePayPalReturn = async (token: string) => {
//     try {
//       const result = dispatch(capturePaymentRequest(token));
//       if (result.type === 'CAPTURE_PAYMENT_SUCCESS') {
//         onPaymentSuccess();
//         window.location.href = '/membership-success';
//       } else {
//         throw new Error('Payment capture failed');
//       }
//     } catch (error) {
//       window.location.href = '/membership-failure';
//     }
//   };

//   const createOrder = async () => {
//     try {
//       if (!planId) {
//         console.error('Plan ID is not set. Selected plan:', selectedPlan);
//         return;
//       }
//       setIsPaymentInitiated(true);
//       console.log('Creating payment with Plan ID:', planId);
//       dispatch(createPaymentRequest({ planId }));
//     } catch (error) {
//       console.error('Failed to create order:', error);
//     }
//   };

//   return (
//         <button
//           onClick={createOrder}
//           className="py-2 px-6 text-base font-medium bg-white rounded-lg text-black w-full"
//         >
//           Pay with PayPal
//         </button>
//       );
// };

// export default PayPalButton;

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
  price: number;
  userId: string;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  planName,
  price,
}) => {
  const dispatch = useDispatch();
  const plans = useSelector((state: RootState) => state.payment?.plans?.plans);
  const approvalUrl = useSelector(
    (state: RootState) => state.payment?.approvalUrl
  );
  const subscriptionId = useSelector((state: RootState) => state.payment?._id);
  const paypalCreateLoader = useSelector(
    (state: RootState) => state.payment?.loading
  );
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);
  const router = useRouter();

  console.log('Available plans:', plans);

  // Find the correct plan based on name and price
  const selectedPlan = plans?.find(
    (plan: { name: string; price: string }) =>
      plan.name.toLowerCase() === planName.toLowerCase()
  );
  const planId = selectedPlan?.planId;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const subscriptionIdFromUrl = urlParams.get('subscriptionId');
    if (subscriptionIdFromUrl) {
      handlePayPalReturn(subscriptionIdFromUrl); // Pass subscriptionId directly as a string
    }
  }, []);

  useEffect(() => {
    if (isPaymentInitiated && approvalUrl?.length && !paypalCreateLoader) {
      console.log('Redirecting to PayPal approval URL:', approvalUrl);
      router.replace(approvalUrl);
    }
  }, [approvalUrl, paypalCreateLoader, isPaymentInitiated]);

  const handlePayPalReturn = async (subscriptionId: string) => {
    try {
      // Dispatch the capture payment action with subscriptionId as a string
      const resultAction = dispatch(capturePaymentRequest(subscriptionId));
      const result = resultAction.payload;
      console.log('Capture payment result:', result);

      if (result === 'CAPTURE_PAYMENT_SUCCESS') {
        console.log('Payment captured successfully');
        // Redirect to success page
        router.push('/membership-success');
      } else {
        throw new Error('Payment capture failed');
      }
    } catch (error) {
      console.error('Error during payment capture:', error);
      // Redirect to failure page
      router.push('/membership-failure');
    }
  };


  const createOrder = async () => {
    console.log('Creating order');
    try {
      if (!planId) {
        console.error('Plan ID is not set. Selected plan:', selectedPlan);
        return;
      }
      setIsPaymentInitiated(true);
      console.log('Creating payment with Plan ID:', planId);
      const paymentData = {
        planId: planId,
        amount: price,
        planName: planName,
      };
      const action = createPaymentRequest({ planId, data: paymentData });
      console.log('Dispatching action:', action);
      dispatch(action);
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
