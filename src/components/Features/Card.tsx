import * as React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow justify-center p-px">
    <div className="flex flex-col px-8 pt-6 pb-10 bg-black flex-1 rounded-3xl hover:shadow-[0_0_20px_10px_rgba(181,43,186,0.7)]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="w-6 aspect-square"
      />
      <h3 className="mt-3.5 text-2xl font-semibold tracking-tight leading-8 text-white">
        {title}
      </h3>
      <p className="mt-2 text-xl leading-5 text-neutral-400">{description}</p>
    </div>
  </article>
);

export default Card;
