"use client"
import React from 'react';
import PricingTier from './Tier';
import { useAuthContext } from '@/context/AuthContext';

const PricingCard: React.FC = () => {
  const { handleSignIn } = useAuthContext();

  const pricingTiers = [
    {
      title: 'Basic',
      price: 'Free',
      sessions: '100 Sessions',
      features: [
        'Access to essential features for creating your AI chatbot.',
        'Suitable for up to 100 chat messages per month.',
        'Manage 1 Bot Profile with 1 Knowledge Base.',
        'Text uploads allowed for content.',
      ],
      buttonText: 'Start 7 Days Free Trial',
      backgroundColor: 'bg-emerald-400',
      handleSignIn, // Pass handleSignIn to the component
    },
    {
      title: 'BotWot Exclusive',
      price: '$4.99/M',
      sessions: '10,000 Sessions',
      features: [
        'Advanced tools for building and managing your chatbot.',
        'Suitable for up to 10,000 chat messages per month.',
        'Manage 2 Bot Profiles with 2 Knowledge Bases.',
        'Text uploads allowed for content.',
      ],
      buttonText: 'Start 7 Days Free Trial',
      backgroundColor: 'bg-indigo-500',
      handleSignIn, // Pass handleSignIn to the component
    },
    {
      title: 'Starter',
      price: '$34.9/M',
      sessions: '20,000 Sessions',
      features: [
        'Enhanced features for more extensive chatbot needs.',
        'Suitable for up to 20,000 chat messages per month.',
        'Manage 3 Bot Profiles with 4 Knowledge Bases.',
        'Text, PNG, and JPEG uploads allowed.',
      ],
      buttonText: 'Start 7 Days Free Trial',
      backgroundColor: 'bg-fuchsia-950',
      handleSignIn, // Pass handleSignIn to the component
    },
    {
      title: 'Professional',
      price: '$69.9/M',
      sessions: '50,000 Sessions',
      features: [
        'Comprehensive tools for high-volume chatbot interactions.',
        'Suitable for up to 50,000 chat messages per month.',
        'Manage 5 Bot Profiles with 6 Knowledge Bases.',
        'Text, PNG, JPEG, PDF, Excel, and Word uploads allowed.',
      ],
      buttonText: 'Start 7 Days Free Trial',
      backgroundColor: 'bg-pink-400',
      handleSignIn, // Pass handleSignIn to the component
    },
  ];

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
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
