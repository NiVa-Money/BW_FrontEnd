
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
  backgroundColor
}) => (
  <section className={`flex flex-col justify-between items-center px-6 py-8 ${backgroundColor} rounded-3xl shadow-2xl w-72 h-[500]`}>
    <header className="flex flex-col items-center pb-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-4xl font-black text-center">
        {price}
      </p>
      {sessions && <p className="mt-2 text-xl">{sessions}</p>}
    </header>
    <ul className="flex flex-col items-center justify-center flex-1 text-base">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-2 mt-2 first:mt-0 w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a967d6b262918ca21f2212dc4e36c3bbc1cb3a100ce53d260188117cc5ebf09?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="w-5 h-5" />
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

const PricingCard: React.FC = () => {
  const pricingTiers = [
    {
      title: "Basic",
      price: "Free",
      sessions: "100 Sessions",
      features: [
        "Access to essential features for creating your AI chatbot.",
        "Suitable for up to 100 chat messages per month.",
        "Manage 1 Bot Profile with 1 Knowledge Base.",
        "Text uploads allowed for content."
      ],
      buttonText: "Start 7 Days Free Trial",
      backgroundColor: "bg-emerald-400"
    },
    {
      title: "BotWot Exclusive",
      price: "$4.99/M",
      sessions: "10,000 Sessions",
      features: [
        "Advanced tools for building and managing your chatbot.",
        "Suitable for up to 10,000 chat messages per month.",
        "Manage 2 Bot Profiles with 2 Knowledge Bases.",
        "Text uploads allowed for content."
      ],
      buttonText: "Start 7 Days Free Trial",
      backgroundColor: "bg-indigo-500"
    },
    {
      title: "Starter",
      price: "$34.9/M",
      sessions: "20,000 Sessions",
      features: [
        "Enhanced features for more extensive chatbot needs.",
        "Suitable for up to 20,000 chat messages per month.",
        "Manage 3 Bot Profiles with 4 Knowledge Bases.",
        "Text, PNG, and JPEG uploads allowed."
      ],
      buttonText: "Start 7 Days Free Trial",
      backgroundColor: "bg-fuchsia-950"
    },
    {
      title: "Professional",
      price: "$69.9/M",
      sessions: "50,000 Sessions",
      features: [
        "Comprehensive tools for high-volume chatbot interactions.",
        "Suitable for up to 50,000 chat messages per month.",
        "Manage 5 Bot Profiles with 6 Knowledge Bases.",
        "Text, PNG, JPEG, PDF, Excel, and Word uploads allowed."
      ],
      buttonText: "Start 7 Days Free Trial",
      backgroundColor: "bg-pink-400"
    }
  ];

  return (
    <main className="flex flex-col items-center px-8 pt-16 pb-9 text-gray-100">
      <header className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-6xl font-black">Flexible Pricing for Everyone</h1>
        <p className="mt-4 text-2xl">Unlock Your Creative Potential with Our Tailored Plans</p>
      </header>
      <section className="flex gap-5 justify-center py-6 mt-8 max-w-[1200px] mx-auto">
        {pricingTiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </section>
    </main>
  );
};

export default PricingCard;
