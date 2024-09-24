'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import PricingTier from './Tier';
import PayPalButton from './PayPalButton';
<<<<<<< HEAD
=======
import { RootState } from '@/redux/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlans } from '@/redux/actions/paymentActions';
>>>>>>> 1ed8ab6 (fix code error)

const PricingCard = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();
  const pathname = usePathname();
<<<<<<< HEAD
=======
  const dispatch = useDispatch();

  const { plans = [] } = useSelector((state: RootState) => state.payment.plans || {});

  console.log('plans',plans);

  useEffect(() => {
    dispatch(fetchPlans());
  } , []);
>>>>>>> 1ed8ab6 (fix code error)

  useEffect(() => {
    // Check if returning from PayPal
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setModalMessage('Processing your payment. Please wait...');
      setIsModalOpen(true);
    }
  }, []);

  const showFreeTrialButton = pathname
    ? ['/home', '/pricing'].includes(pathname)
    : false;
  const handlePaymentSuccess = () => {
    setIsPaymentSuccessful(true);
    setModalMessage('Payment successful! Your plan has been activated.');
    setIsModalOpen(true);
  };

<<<<<<< HEAD
=======
  // Default pricing tiers with placeholders for API data
>>>>>>> 1ed8ab6 (fix code error)
  const pricingTiers = [
    {
      title: 'Basic',
      price: '0.00',
      sessions: '100 Messages',
      features: [
        'Access to essential features for creating your AI chatbot.',
        'Suitable for up to 10,000 chat messages.',
        'Manage 2 Bot Profile with 2 Knowledge Base.',
        'Text uploads allowed for content.',
      ],
      backgroundColor: 'bg-pink-400',
    },
    {
<<<<<<< HEAD
      title: 'BotWot Starter',
      price: '29.99',
      sessions: '10,000 Messages',
      features: [
        'Advanced tools to create and manage your chatbot, featuring AI-generated responses',
        'Suitable for up to 10,000 chat messages.',
        'Manage 2 Bot Profiles with 2 Knowledge Bases.',
=======
      title: 'Starter', // This will be replaced by API data
      price: '29.99', // This will be replaced by API data
      sessions: '20,000 Messages',
      features: [
        'Advanced tools to create and manage your chatbot, featuring AI-generated responses.',
        'Suitable for up to 20,000 chat messages.',
        'Manage 3 Bot Profiles with 4 Knowledge Bases.',
>>>>>>> 1ed8ab6 (fix code error)
        'Text, PNG, JPEG uploads allowed for content.',
      ],
      backgroundColor: 'bg-indigo-500',
    },
    {
<<<<<<< HEAD
      title: 'BotWot Pro',
      price: '59.99',
      sessions: '20,000 Messages',
=======
      title: 'Pro', // This will be replaced by API data
      price: '59.99', // This will be replaced by API data
      sessions: '50,000 Messages',
>>>>>>> 1ed8ab6 (fix code error)
      features: [
        'Enhanced features for extensive chatbot needs with AI-generated responses.',
        'Suitable for up to 50,000 chat messages.',
        'Manage 5 Bot Profiles with 6 Knowledge Bases.',
        'Text, PNG, JPEG, PDF, Excel, and Word uploads allowed.',
      ],
      backgroundColor: 'bg-fuchsia-950',
    },
    {
<<<<<<< HEAD
      title: 'Enterprise',
=======
      title: 'Enterprise', // This will be replaced by API data
>>>>>>> 1ed8ab6 (fix code error)
      price: 'Contact Sales',
      sessions: 'Tailored Solutions',
      features: [
        'Bespoke solutions tailored to your business needs.',
        'Dedicated support and account management.',
        'Custom chatbot features and integrations.',
      ],
      backgroundColor: 'bg-[#261065]',
    },
  ];

<<<<<<< HEAD
=======
  const updatedTiers = pricingTiers.map((tier) => {
    if (tier.title !== 'Custom') {
      const apiPlan = plans?.find((plan: any) => plan.name.toLowerCase() === tier.title.toLowerCase());
      if (apiPlan) {
        return {
          ...tier,
          price: apiPlan.price.toFixed(2),
          planId: apiPlan.planId
        };
      }
    }
    return tier;
  });
  
>>>>>>> 1ed8ab6 (fix code error)
  const handleContactSales = () => {
    alert('Contact sales via this mail: botwot@gmail.com');
  };

  return (
    <div className="h-[100vh] text-gray-100">
      <div className="flex h-[100vh] flex-col justify-center">
        <div className="text-center mx-auto">
          <h1 className="text-6xl font-black">Flexible Pricing for Everyone</h1>
          <p className="mt-4 text-2xl">
            Unlock Your Creative Potential with Our Tailored Plans
          </p>
        </div>
        <div className="flex gap-5 justify-center py-6 mt-8 max-w-[1200px] mx-auto">
          {updatedTiers.map((tier, index) => (
            <PricingTier
              userId={''}
              key={index}
              {...tier}
              paypalButton={
                tier.title === 'Enterprise' ? (
                  <button
                    className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950 w-full"
                    onClick={handleContactSales}
                  >
                    Contact Sales
                  </button>
                ) : showFreeTrialButton ? (
                  <button
                    className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950 w-full"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Start For Free
                  </button>
                ) : (
                  <PayPalButton
                    planName={tier.title}
                    price={tier.price}
                    userId={'userId'}
                  />
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
