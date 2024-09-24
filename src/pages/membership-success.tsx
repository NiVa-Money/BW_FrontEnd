// import BackgroundAnimation from '@/components/BackgroundAnimation/backgroundAnimation';
// import { capturePaymentRequest } from '@/redux/actions/paymentActions';
// import { RootState } from '@/redux/configureStore';
// import router from 'next/router';
// import React, { useCallback, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const onSuccess = () => {
//   router.push('/membership');
// };




// const PaymentSuccess: React.FC = () => {

  
//   const subscriptionId = useSelector((state: RootState) => state.payment?.subscriptionId);
//   const handlePayPalReturn = useCallback(async (subscriptionId: string) => {
//     try {
//       console.log('Capturing payment for subscriptionId:', subscriptionId);
//       dispatch(capturePaymentRequest(subscriptionId));
//     } catch (error) {
//       console.error('Error during payment capture:', error);
//     }
//   }, [dispatch]);
  
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const subscriptionIdFromParams = params.get('subscriptionId');
    
//     const isSuccessOrFailurePage = pathname === '/membership-success' || pathname === '/membership-failure';
//     console.log('Checking conditions:', isSuccessOrFailurePage, subscriptionIdFromParams);
    
//     if (subscriptionIdFromParams && isSuccessOrFailurePage) {
//       console.log('Conditions met, calling handlePayPalReturn');
//       handlePayPalReturn(subscriptionIdFromParams);
//     }
//   }, [pathname, handlePayPalReturn]);


  
//   return (
//     <>
//       <div className="fixed bg-[#0B031E] inset-0 z-50 flex items-center justify-center">
//         <div className="flex flex-col gap-5 items-center justify-center z-10">
//           <div className="flex bg-black rounded flex-col items-center text-white justify-center text-center p-4">
//             <span className="mt-4 text-4xl font-black text-center text-gray-100 max-md:text-4xl">
//               "Your subscription is now active! 🎉 
//               <br/>Thank you for subscribing."
//             </span>
//           </div>
//           <button 
//             onClick={onSuccess} 
//             className="flex gap-4 justify-center px-6 py-4 mt-20 text-2xl text-white bg-black rounded-[90px] max-md:px-6 max-md:mt-10 border border-transparent bg-gradient-to-r from-[#B52BBA] via-[#A12CBC] to-[#4B32C3] hover:bg-gradient-to-r hover:from-[#B52BBA] hover:via-[#A12CBC] hover:to-[#4B32C3]">
//             Manage Subscription
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentSuccess;
// function dispatch(arg0: { type: string; payload: string; }) {
//   throw new Error('Function not implemented.');
// }



import BackgroundAnimation from '@/components/BackgroundAnimation/backgroundAnimation';
import { capturePaymentRequest } from '@/redux/actions/paymentActions';
import { RootState } from '@/redux/configureStore';
import { useRouter } from 'next/router'; // Correct use of Next.js router
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Use the correct `useDispatch`

const PaymentSuccess: React.FC = () => {
  const dispatch = useDispatch(); // Dispatch properly declared
  const router = useRouter(); // Use Next.js router
  const { pathname } = router; // Retrieve pathname from the router

  const subscriptionId = useSelector(
    (state: RootState) => state.payment?.subscriptionId
  );

  const handlePayPalReturn = useCallback(
    async (subscriptionId: string) => {
      try {
        console.log('Capturing payment for subscriptionId:', subscriptionId);
        dispatch(capturePaymentRequest(subscriptionId)); // Dispatching the action correctly
      } catch (error) {
        console.error('Error during payment capture:', error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (subscriptionId) {
      console.log('Conditions met, calling handlePayPalReturn');
      handlePayPalReturn(subscriptionId);
    }
  }, [pathname, handlePayPalReturn]);

  const onSuccess = () => {
    router.push('/membership'); // Navigate to membership on success
  };

  return (
    <>
      <div className="fixed bg-[#0B031E] inset-0 z-50 flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center z-10">
          <div className="flex bg-black rounded flex-col items-center text-white justify-center text-center p-4">
            <span className="mt-4 text-4xl font-black text-center text-gray-100 max-md:text-4xl">
              "Your subscription is now active! 🎉 
              <br/>Thank you for subscribing."
            </span>
          </div>
          <button 
            onClick={onSuccess} 
            className="flex gap-4 justify-center px-6 py-4 mt-20 text-2xl text-white bg-black rounded-[90px] max-md:px-6 max-md:mt-10 border border-transparent bg-gradient-to-r from-[#B52BBA] via-[#A12CBC] to-[#4B32C3] hover:bg-gradient-to-r hover:from-[#B52BBA] hover:via-[#A12CBC] hover:to-[#4B32C3]">
            Manage Subscription
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
