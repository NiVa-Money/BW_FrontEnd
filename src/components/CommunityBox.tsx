'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
const CommunityBox: React.FC = () => {
  const { handleSignIn } = useAuthContext();
  return (
    <header
      className="flex flex-col justify-center self-center px-8 py-14 w-full text-gray-100 border border-gray-100 border-solid max-w-[1200px] rounded-[30px]"
      style={{
        background: 'linear-gradient(to bottom right, #2B243C, #0B031E)',
      }}
    >
      <div className="flex justify-center items-center p-6 font-black max-md:px-5">
        <div className="flex flex-col items-center max-w-full w-[765px]">
          <div className="flex gap-2 justify-center px-1.5 py-2 text-3xl tracking-widest whitespace-nowrap"></div>
          <video controls loop muted>
            <source src="/images/3.mp4" />
          </video>
        </div>
      </div>
    </header>
  );
};

export default CommunityBox;
