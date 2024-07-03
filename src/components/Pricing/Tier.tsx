import React from 'react';

type PricingTierProps = {
  title: string;
  price: string;
  sessions?: string;
  features: string[];
  buttonText: string;
  backgroundColor: string;
};

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  sessions,
  features,
  buttonText,
  backgroundColor,
}) => (
  <section
    className={`flex flex-col justify-between items-center px-6 py-8 ${backgroundColor} rounded-3xl shadow-2xl w-72 h-[500]`}
  >
    <div className="flex flex-col items-center pb-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-4xl font-black text-center">{price}</p>
      {sessions && <p className="mt-2 text-xl">{sessions}</p>}
    </div>
    <ul className="flex flex-col items-center justify-center flex-1 text-base">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-2 mt-2 first:mt-0 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a967d6b262918ca21f2212dc4e36c3bbc1cb3a100ce53d260188117cc5ebf09?apiKey=555c811dd3f44fc79b6b2689129389e8&"
            alt=""
            className="w-5 h-5"
          />
          <span className="flex-1">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="flex justify-center mt-5 w-full">
      <button className="py-2 px-6 text-base font-medium bg-gray-100 rounded-lg text-slate-950">
        {buttonText}
      </button>
    </div>
  </section>
);

export default PricingTier;