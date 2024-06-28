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

export default Cards;

