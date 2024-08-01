import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex gap-5 justify-between mt-12 w-full text-white leading-[110%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-3xl">{title}</h2>
      <div className="flex gap-1.5 justify-center p-2.5 text-base">
        <div className="my-auto">View all tutorials</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d8c34a34d517293052a8f9c72362cd9b32ea0e07fc8a290fd0dd5cddf521b16?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </div>
  );
};

export default SectionHeader;