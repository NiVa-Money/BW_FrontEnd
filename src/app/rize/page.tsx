// 'use client'

// import React from 'react';
// import Link from 'next/link';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const RizePayment: React.FC = () => {
//   // function redirectToPayPal(): void {
//   //   window.location.href = 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3NP028129S240753FM3MBLWQ';
//   // }
//   function redirectToPayPal(): void {
//     const baseUrl = window.location.origin; // Gets the current domain (localhost, UAT, production)

//     const returnUrl = `${baseUrl}/membership-success`;
//     const cancelUrl = `${baseUrl}/membership-failure`;

//     // PayPal plan URL with dynamic return and cancel URLs
//     window.location.href = `https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3NP028129S240753FM3MBLWQ&return_url=${returnUrl}&cancel_url=${cancelUrl}`;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B031E] text-white text-center p-4">
//       <h1 className="text-5xl font-bold mb-8">Exclusive for<br />Razorpay Rize Members</h1>

//       <div className="bg-[#261065] flex flex-col justify-between items-center px-6 py-8 rounded-3xl shadow-2xl w-80 h-[500px] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_10px_rgba(181,43,186,0.7)] hover:scale-105">
//         <h3 className="text-3xl font-bold">BotWot Starter</h3>
//         <p className="mt-2 text-4xl font-black">$0.00/M</p>
//         <p className="mt-2 mb-4 text-xl">10,000 Messages</p>

//         <ul className="flex flex-col flex-1 text-base">
//           <li className="flex gap-2 mt-2 first:mt-0 w-full">
//             <CheckCircleOutlineIcon style={{ color: '#f2f2f2' }} className="w-5 h-5" />
//             Advanced tools to create and manage your chatbot, featuring AI-generated responses
//           </li>
//           <li className="flex gap-2 mt-2 first:mt-0 w-full">
//             <CheckCircleOutlineIcon style={{ color: '#f2f2f2' }} className="w-5 h-5" />
//             Suitable for up to 10,000 chat messages per month
//           </li>
//           <li className="flex gap-2 mt-2 first:mt-0 w-full">
//             <CheckCircleOutlineIcon style={{ color: '#f2f2f2' }} className="w-5 h-5" />
//             Manage 2 Bot Profiles with 2 Knowledge Bases
//           </li>
//           <li className="flex gap-2 mt-2 first:mt-0 w-full mb-4 ">
//             <CheckCircleOutlineIcon style={{ color: '#f2f2f2' }} className="w-5 h-5" />
//             Text, PNG, JPEG uploads allowed for content
//           </li>
//         </ul>

//         <button
//           onClick={redirectToPayPal}
//           className="py-2 px-6 text-base font-medium bg-white rounded-lg text-black w-full"
//         >
//           Pay with PayPal
//         </button>
//       </div>

//       <Link
//         href="/dashboard"
//         className="bg-[#1E1E2E] text-white text-2xl rounded-full py-2 px-4 mb-8 mt-10 flex items-center space-x-4 justify-center"
//       >
//         <span className="mr-2"></span> Go to dashboard
//       </Link>
//     </div>
//   );
// };

// export default RizePayment;

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // use this hook for navigation in Next.js
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const RizePayment: React.FC = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   // If no token, redirect to /home
  //   if (!token) {
  //     router.push('/home');
  //   }
  // }, [router]);

  function redirectToPayPal(): void {
    const baseUrl = window.location.origin; // Gets the current domain (localhost, UAT, production)

    const returnUrl = `${baseUrl}/membership-success`;
    const cancelUrl = `${baseUrl}/membership-failure`;

    // PayPal plan URL with dynamic return and cancel URLs
    window.location.href = `https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3NP028129S240753FM3MBLWQ&return_url=${returnUrl}&cancel_url=${cancelUrl}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B031E] text-white text-center p-4">
      <h1 className="text-5xl font-bold mb-8">
        Exclusive for
        <br />
        Razorpay Rize Members
      </h1>

      <div className="bg-[#261065] flex flex-col justify-between items-center px-6 py-8 rounded-3xl shadow-2xl w-80 h-[500px] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_10px_rgba(181,43,186,0.7)] hover:scale-105">
        <h3 className="text-3xl font-bold">BotWot Starter</h3>
        <p className="mt-2 text-4xl font-black">$0.00/M</p>
        <p className="mt-2 mb-4 text-xl">10,000 Messages</p>

        <ul className="flex flex-col flex-1 text-base">
          <li className="flex gap-2 mt-2 first:mt-0 w-full">
            <CheckCircleOutlineIcon
              style={{ color: '#f2f2f2' }}
              className="w-5 h-5"
            />
            Advanced tools to create and manage your chatbot, featuring
            AI-generated responses
          </li>
          <li className="flex gap-2 mt-2 first:mt-0 w-full">
            <CheckCircleOutlineIcon
              style={{ color: '#f2f2f2' }}
              className="w-5 h-5"
            />
            Suitable for up to 10,000 chat messages per month
          </li>
          <li className="flex gap-2 mt-2 first:mt-0 w-full">
            <CheckCircleOutlineIcon
              style={{ color: '#f2f2f2' }}
              className="w-5 h-5"
            />
            Manage 2 Bot Profiles with 2 Knowledge Bases
          </li>
          <li className="flex gap-2 mt-2 first:mt-0 w-full mb-4 ">
            <CheckCircleOutlineIcon
              style={{ color: '#f2f2f2' }}
              className="w-5 h-5"
            />
            Text, PNG, JPEG uploads allowed for content
          </li>
        </ul>

        <button
          onClick={redirectToPayPal}
          className="py-2 px-6 text-base font-medium bg-white rounded-lg text-black w-full"
        >
          Pay with PayPal
        </button>
      </div>

      <Link
        href="/dashboard"
        className="bg-[#1E1E2E] text-white text-2xl rounded-full py-2 px-4 mb-8 mt-10 flex items-center space-x-4 justify-center"
      >
        <span className="mr-2"></span> Go to dashboard
      </Link>
    </div>
  );
};

export default RizePayment;
