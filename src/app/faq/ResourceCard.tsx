import React from 'react';

interface ResourceCardProps {
  title: string;
  iconSrc: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, iconSrc }) => {
  return (
    <div className="flex flex-1 gap-2 justify-center p-3 rounded-lg border border-solid bg-white bg-opacity-10 border-zinc-800 max-md:px-5">
      <div className="my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">{title}</div>
      <div className="flex justify-center items-center p-2.5 w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
        <img loading="lazy" src={iconSrc} alt="" className="w-6 aspect-square" />
      </div>
    </div>
  );
};

export default ResourceCard;