import React from 'react';

interface TutorialCardProps {
  imageSrc: string;
  tag: string;
  title: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  imageSrc,
  tag,
  title,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-5">
        <div className="flex relative flex-col justify-center items-center p-2.5 w-full rounded-xl border border-solid aspect-[1.51] border-neutral-700 max-md:px-5">
          <video
            className="grow w-full rounded-xl border border-solid aspect-[1.52] border-neutral-700 max-md:mt-5"
            loop
            controls
            muted
          >
            <source src={imageSrc} type="video/mp4" />
          </video>
        </div>
        <div className="flex mt-2.5 text-white">
          <div className="p-2.5 text-sm whitespace-nowrap rounded-xl border border-solid border-neutral-500">
            {tag}
          </div>
          <div className="self-start p-2.5 text-base leading-4">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
