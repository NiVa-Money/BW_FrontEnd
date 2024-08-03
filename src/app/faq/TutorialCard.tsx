import React from 'react';

interface TutorialCardProps {
  imageSrc: string;
  iconSrc: string;
  tag: string;
  title: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ imageSrc, iconSrc, tag, title }) => { return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-5">
        <div className="flex relative flex-col justify-center items-center p-2.5 w-full rounded-xl border border-solid aspect-[1.51] border-neutral-700 max-md:px-5">
          <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative justify-center items-center px-3 my-1.5 w-11 h-11 border border-solid bg-zinc-800 border-zinc-800 rounded-[32px]">
            <img loading="lazy" src={iconSrc} alt="" className="w-full aspect-square" />
          </div>
        </div>
        <div className="flex mt-2.5 text-white">
          <div className="p-2.5 text-sm whitespace-nowrap rounded-xl border border-solid border-neutral-500">{tag}</div>
          <div className="self-start p-2.5 text-base leading-4">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;