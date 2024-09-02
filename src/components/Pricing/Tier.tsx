import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlanModal from './basicPlanModal';
type PricingTierProps = {
  title: string;
  price: string;
  sessions?: string;
  features: string[];
  backgroundColor: string;
  paypalButton?: React.ReactNode;
  userId?: string;
  planName?: string;
};

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  sessions,
  features,
  backgroundColor,
  paypalButton,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    // If payment was successful, you might want to redirect or update UI
  };
  return (
    <>
      <section
        className={`flex flex-col justify-between items-center px-6 py-8 ${backgroundColor} rounded-3xl shadow-2xl w-72 h-[500px] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_10px_rgba(181,43,186,0.7)] hover:scale-105`}
      >
        <div className="flex flex-col items-center pb-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-4xl font-black text-center">
            {price === 'Contact Sales' ? price : `$${price}`}
          </p>
          {sessions && <p className="mt-2 text-xl">{sessions}</p>}
        </div>
        <ul className="flex flex-col items-center justify-center flex-1 text-base">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 mt-2 first:mt-0 w-full">
              <CheckCircleOutlineIcon
                style={{ color: '#f2f2f2' }}
                className="w-5 h-5"
              />

              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-5 w-full">
          {paypalButton ? (
            <div className="w-full">{paypalButton}</div>
          ) : (
            <button
              className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950 w-full"
              onClick={() => setIsModalOpen(true)}
            >
              Start For Frees
            </button>
          )}
        </div>
      </section>
      <PlanModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Congratulations"
        message={
          'Congratulations !! Start your free trial today and\n begin creating powerful bots with ease!'
        }
      />
    </>
  );
};

export default PricingTier;
