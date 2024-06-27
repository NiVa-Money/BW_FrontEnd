import React from "react";

type FactorsCardProps = {
  title: string;
  description: string;
};

const Cards: React.FC<FactorsCardProps> = ({ title, description }) => (
  <section className="flex flex-col px-5 py-6 bg-slate-900 rounded">
    <h2 className="text-3xl font-bold leading-10 text-white uppercase">{title}</h2>
    <p className="mt-2 text-lg leading-7 text-zinc-400">{description}</p>
  </section>
);

const features: FactorsCardProps[] = [
  {
    title: "Key Factors & Functionalities",
    description: "Botwot simplifies AI chatbot creation, empowering businesses to boost service and spur growth effortlessly.",
  },
  {
    title: "Competitive Pricing Model",
    description: "Botwot offers a competitive pricing model, making AI chatbots accessible to businesses of all sizes.",
  },
  {
    title: "Advanced AI & ML",
    description: "Botwot leverages advanced AI and machine learning to optimize chatbot performance and customer interactions.",
  },
  {
    title: "Data Security & Privacy",
    description: "Botwot prioritizes data security and privacy, ensuring safe and reliable interactions between businesses and customers.",
  },
];

const FactorsCard: React.FC = () => {
  return (
    <main className="flex gap-5 justify-between py-16 mt-10 w-full text-center bg-black">
      {features.map((feature, index) => (
        <Cards key={index} title={feature.title} description={feature.description} />
      ))}
    </main>
  );
};

export default FactorsCard;