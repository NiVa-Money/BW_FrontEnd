// 'use client';
// import React, { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import PricingTier from './Tier';
// import PayPalButton from './PayPalButton';
// import PlanModal from './basicPlanModal';

// const PricingCard = () => {
//   const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const handlePaymentSuccess = () => {
//     setIsPaymentSuccessful(true);
//   };

//   const showFreeTrialButton = pathname ? ['/home', '/pricing'].includes(pathname) : false;

//   const pricingTiers = [
//     {
//       title: 'Basic',
//       price: '0.00',
//       sessions: '100 Sessions',
//       features: [
//         'Access to essential features for creating your AI chatbot.',
//         'Suitable for up to 100 chat messages per month.',
//         'Manage 1 Bot Profile with 1 Knowledge Base.',
//         'Text uploads allowed for content.',
//       ],
//       backgroundColor: 'bg-emerald-400',
//     },
//     {
//       title: 'BotWot Exclusive',
//       price: '4.99',
//       sessions: '10,000 Sessions',
//       features: [
//         'Advanced tools for building and managing your chatbot.',
//         'Suitable for up to 10,000 chat messages per month.',
//         'Manage 2 Bot Profiles with 2 Knowledge Bases.',
//         'Text uploads allowed for content.',
//       ],
//       backgroundColor: 'bg-indigo-500',
//     },
//     {
//       title: 'Starter',
//       price: '34.99',
//       sessions: '20,000 Sessions',
//       features: [
//         'Enhanced features for more extensive chatbot needs.',
//         'Suitable for up to 20,000 chat messages per month.',
//         'Manage 3 Bot Profiles with 4 Knowledge Bases.',
//         'Text, PNG, and JPEG uploads allowed.',
//       ],
//       backgroundColor: 'bg-fuchsia-950',
//     },
//     {
//       title: 'Professional',
//       price: '69.99',
//       sessions: '50,000 Sessions',
//       features: [
//         'Inclusive tools for high-volume chatbot interactions.',
//         'Suitable for up to 50,000 chat messages per month.',
//         'Manage 5 Bot Profiles with 6 Knowledge Bases.',
//         'Text, PNG, JPEG, PDF, Excel, and Word uploads allowed.',
//       ],
//       backgroundColor: 'bg-pink-400',
//     },
//   ];

//   const handleBasicFreeTrial = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-center px-8 pt-16 pb-9 text-gray-100">
//       <div className="text-center max-w-[1200px] mx-auto">
//         <h1 className="text-6xl font-black">Flexible Pricing for Everyone</h1>
//         <p className="mt-4 text-2xl">
//           Unlock Your Creative Potential with Our Tailored Plans
//         </p>
//       </div>
//       <div className="flex gap-5 justify-center py-6 mt-8 max-w-[1200px] mx-auto">
//         {pricingTiers.map((tier, index) => (
//           <PricingTier
//             userId={''}
//             key={index}
//             {...tier}
//             paypalButton={
//               showFreeTrialButton && tier.title !== 'Basic' ? (
//                 <button
//                   className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950 w-full"
//                   onClick={() => router.push('/login')}
//                 >
//                   Start Free Trial
//                 </button>
//               ) : (
//                 tier.title !== 'Basic' && (
//                   <PayPalButton
//                     planId={tier.title}
//                     price={tier.price}
//                     userId={"userId"}
//                     isPaymentSuccessful={isPaymentSuccessful}
//                     onPaymentSuccess={handlePaymentSuccess}
//                   />
//                 )
//               )
//             }
//           />
//         ))}
//       </div>
//       <PlanModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title="Congratulations"
//         message="Free trial is started. Make some creative chatbots!"
//       />
//     </div>
//   );
// };

// export default PricingCard;

'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import PricingTier from './Tier';
import PayPalButton from './PayPalButton';
import PlanModal from './basicPlanModal';

const PricingCard = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handlePaymentSuccess = () => {
    setIsPaymentSuccessful(true);
  };

  const showFreeTrialButton = pathname ? ['/home', '/pricing'].includes(pathname) : false;

  const pricingTiers = [
    {
      title: 'Basic',
      price: '0.00',
      sessions: '100 Messages',
      features: [
        'Access to essential features for creating your AI chatbot.',
        'Suitable for up to 100 chat messages.',
        'Manage 1 Bot Profile with 1 Knowledge Base.',
        'Text uploads allowed for content.',
      ],
      // backgroundColor: 'bg-emerald-400',
      backgroundColor: 'bg-pink-400',
    },
    {
      title: 'BotWot Starter',
      price: '29.99',
      sessions: '10,000 Messages',
      features: [
        "Advanced tools to create and manage your chatbot, featuring AI-generated responses",
        'Suitable for up to 10,000 chat messages.',
        'Manage 2 Bot Profiles with 2 Knowledge Bases.',
        'Text , PNG , JPEG uploads allowed for content.',
      ],
      backgroundColor: 'bg-indigo-500',
    },
    {
      title: 'BotWot Pro',
      price: '59.99',
      sessions: '20,000 Messages',
      features: [
        'Enhanced features for extensive chatbot needs with AI-generated responses.',
        'Suitable for up to 20,000 chat messages.',
        'Manage 4 Bot Profiles with 4 Knowledge Bases.',
        'Text, PNG, JPEG, PDF, Excel, and Word uploads allowed.',
      ],
      backgroundColor: 'bg-fuchsia-950',
    },
    // {
    //   title: 'Professional',
    //   price: '69.99',
    //   sessions: '50,000 Sessions',
    //   features: [
    //     'Inclusive tools for high-volume chatbot interactions.',
    //     'Suitable for up to 50,000 chat messages per month.',
    //     'Manage 5 Bot Profiles with 6 Knowledge Bases.',
    //     'Text, PNG, JPEG, PDF, Excel, and Word uploads allowed.',
    //   ],
    //   backgroundColor: 'bg-pink-400',
    // },
  ];

  const handleBasicFreeTrial = () => {
    // Open modal only if on /memberShip
    if (pathname === '/memberShip') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center px-8 pt-16 pb-9 text-gray-100">
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-6xl font-black">Flexible Pricing for Everyone</h1>
        <p className="mt-4 text-2xl">
          Unlock Your Creative Potential with Our Tailored Plans
        </p>
      </div>
      <div className="flex gap-5 justify-center py-6 mt-8 max-w-[1200px] mx-auto">
        {pricingTiers.map((tier, index) => (
          <PricingTier
            userId={''}
            key={index}
            {...tier}
            paypalButton={
              showFreeTrialButton ? (
                tier.title === 'Basic' ? (
                  <button
                    className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950 w-full"
                    onClick={handleBasicFreeTrial} // Open modal for Basic plan
                  >
                    Start a Free Trial
                  </button>
                ) : (
                  <button
                    className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950 w-full"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Start Free Trial
                  </button>
                )
              ) : (
                tier.title !== 'Basic' && (
                  <PayPalButton
                    planId={tier.title}
                    price={tier.price}
                    userId={'userId'}
                    isPaymentSuccessful={isPaymentSuccessful}
                    onPaymentSuccess={handlePaymentSuccess}
                  />
                )
              )
            }
          />
        ))}
      </div>
      <PlanModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Congratulations"
        message="Free trial is started. Make some creative chatbots!"
      />
    </div>
  );
};

export default PricingCard;
