import React from 'react';

interface CardProps {
  title: string;
  content: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => (
  <div
    className={`flex flex-col justify-center px-4 py-6 w-full rounded-xl bg-white bg-opacity-10 border border-[#4C465B] min-h-[250px] ${className}`}
  >
    <div className="text-2xl text-[#EEEEF0]">{title}</div>
    <div className="mt-2.5 text-xl text-[#8D8997]">{content}</div>
  </div>
);

const CodingFactor: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center py-12 pr-10 pl-16 max-md:px-5">
      <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[246px]">
        <div className="text-5xl font-medium text-[#EEEEF0] max-md:text-4xl">
          No Coding.
          <br />
          Just Results
        </div>
        <div className="text-base mt-2 text-[#8D8997]">
          Here are concise statements outlining <br /> how BotWot addresses the
          five key <br /> problems faced by businesses
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[400px]">
          <Card
            title="User-Friendly No-Code Platform"
            content="BotWot offers a user-friendly, no-code platform that simplifies the process of creating and deploying chatbots."
          />
          <Card
            className="mt-12"
            title="Scalable Solutions for Growing Businesses"
            content="BotWot's platform is designed to scale your business, ensuring that your chatbot can handle increased demand."
          />
          <Card
            className="mt-12"
            title="Enhanced Efficiency with 24/7 Support"
            content="BotWot can improve your overall efficiency by streamlining your operations and providing 24/7 customer support."
          />
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[400px]">
          <Card
            title="Affordable AI for All Business Sizes"
            content="BotWot provides affordable pricing plans that make AI accessible to businesses of all sizes."
          />
          <Card
            className="mt-12"
            title="Task Automation for Strategic Focus"
            content="BotWot can automate routine tasks, freeing up your time to focus on more strategic activities."
          />
        </div>
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </div>
  );
};

export default CodingFactor;
