'use client';
import Image from 'next/image';
import React from 'react';
import BW_LOGO from '@/public/assets/logo.png';
// import { useAuthContext } from '@/context/AuthContext';

const CommunityBox: React.FC = () => {
  // const { handleSignIn } = useAuthContext();

  return (
    <header
      className="flex flex-col justify-center self-center px-8 py-14 w-full text-gray-100 border border-gray-100 border-solid max-w-[1200px] rounded-[30px]"
      style={{
        background: 'linear-gradient(to bottom right, #2B243C, #0B031E)',
      }}
    >
      <div className="flex justify-center items-center p-6 font-black max-md:px-5">
        <div className="flex flex-col items-center max-w-full w-[765px]">
          <div className="flex gap-2 justify-center px-1.5 py-2 text-3xl tracking-widest whitespace-nowrap">
            <Image src={BW_LOGO.src} alt="logo" width={50} height={50} />
            <div className="my-auto">BotWot</div>
          </div>
          <h1 className="self-stretch mt-10 text-6xl">
            Join the Community Now!
          </h1>
          <p className="mt-4 text-2xl text-center">
            Create your AI chatbot effortlessly with our no-code platform!
          </p>
        </div>
      </div>
      <button
        className="justify-center items-center self-center px-8 py-6 mt-8 w-60 max-w-full text-base font-medium shadow-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#B52BBA_4.666563235223293deg,#A12CBC_23.647727966308594deg,#8C2EBE_44.85525995492935deg,#792FBF_72.45651304721832deg,#6C30C0_82.50000178813934deg,#4B32C3_127.99007892608643deg,#5831C2_160.968976020813deg,#6330C1_178.45529437065125deg,#742FC0_189.47770357131958deg,#8D2DBE_202.95226335525513deg,#A62CBC_230.65982580184937deg,#B92ABA_251.35178089141846deg,#D029B8_276.4414644241333deg,#EC27B6_306.45145654678345deg,#C729B9_331.67617321014404deg)] rounded-[99px] max-md:px-5"
        // onClick={handleSignIn}
      >
        Sign in now
      </button>
    </header>
  );
};

export default CommunityBox;
