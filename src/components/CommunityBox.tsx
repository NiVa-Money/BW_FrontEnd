'use client';
import Image from 'next/image';
import React from 'react';
const CommunityBox: React.FC = () => {
  return (
    <header
      className="flex flex-col justify-center self-center px-4 py-14 w-full text-gray-100 border-t border-l border-r border-gray-500 border-solid max-w-[1200px] rounded-[20px]"
      style={{
        background: 'linear-gradient(to bottom right, #2B243C, #0B031E)',
      }}
    >
      <div className="flex justify-center items-center p-6 font-black max-md:px-5">
        <div className="flex flex-col items-center ">
         <Image
            src="/images/Presentation.png"
            alt="Presentation"
            width={800} 
            height={600}
            layout="responsive" 
          />
        </div>
      </div>
    </header>
  );
};

export default CommunityBox;
