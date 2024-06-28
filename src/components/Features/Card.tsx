import * as React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow justify-center p-px rounded-lg shadow-lg">
    <div className="flex flex-col px-8 pt-6 pb-10 bg-black flex-1">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="w-16 aspect-square"
      />
      <h3 className="mt-3.5 text-2xl font-semibold tracking-tight leading-8 text-white">
        {title}
      </h3>
      <p className="mt-2 text-xl leading-5 text-neutral-400">{description}</p>
    </div>
  </article>
);

export default Card;
