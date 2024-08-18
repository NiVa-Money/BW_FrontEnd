import BackgroundAnimation from '@/components/BackgroundAnimation/backgroundAnimation';
import router from 'next/router';
import React from 'react';

const onSuccess = () => {
  router.push('/membership');
};

const PaymentSuccess: React.FC = () => {
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
