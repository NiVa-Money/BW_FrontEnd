import * as React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow justify-center p-px rounded-lg shadow-lg">
    <div className="flex flex-col px-8 pt-6 pb-10 bg-black flex-1">
      <img loading="lazy" src={imageSrc} alt="" className="w-16 aspect-square" />
      <h3 className="mt-3.5 text-2xl font-semibold tracking-tight leading-8 text-white">{title}</h3>
      <p className="mt-2 text-xl leading-5 text-neutral-400">{description}</p>
    </div>
  </article>
);

const FeatureCard: React.FC = () => {
  const cardData: CardProps[] = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/30c3dcf530f0d28e1a2fc6e405e9a261362bf7e65601c2836b9cbfa74c9601ea?apiKey=555c811dd3f44fc79b6b2689129389e8&",
      title: "Launch in minutes",
      description: "Choose and deploy pre-built conversational modules tailored to your business instantly.",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d006b056253a94c02f38a4c31699e2dcc8f12d36941a5dce9355726884f17823?apiKey=555c811dd3f44fc79b6b2689129389e8&",
      title: "Seamless Integrations",
      description: "Effortlessly connect with your systems using our no-code, user-friendly platform.",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/322d66484845d31b97a3404d8a8c545cc34806a887e381a2fcd9d89d8888cbf7?apiKey=555c811dd3f44fc79b6b2689129389e8&",
      title: "Personalized Interactions",
      description: "Train your AI chatbot to embody your brand's personality for precise responses.",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center px-20 py-20 mt-20 max-md:px-5 max-md:mt-10 max-md:mr-0.5 ">
      <h3 className="self-start ml-16 text-5xl font-black text-gray-100">
        Learn more
      </h3>
      <p className="self-start ml-16 pt-2 text-base font-normal text-gray-500">Discover what's possible with BotWot</p>
      <section className="self-start  ml-16 pl-15 pr-10 mt-10 mb-2.5 w-full max-w-[1150px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {cardData.map((card, index) => (
            <div key={index} className="flex gap-4 flex-col w-[33%]">
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FeatureCard;