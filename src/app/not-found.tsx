import React from 'react';
import Link from 'next/link';
import notFoundImg from '@/public/assets/oops.svg';
import Image from 'next/image';
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white text-center">
      <h1 className="text-5xl font-bold mb-2">Oops!</h1>
      <p className="text-xl mb-4">Error 404</p>
      <div className="relative w-[605px] h-[486px] mb-8">
        <Image
          src={notFoundImg.src} 
          alt="Lost"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Link
        href="/"
        className="bg-[#1E1E2E] text-white rounded-full py-2 px-4 mb-8 flex items-center space-x-4 justify-center"
      >
        <span className="mr-2"></span> Go Home
      </Link>
    </div>
  );
};

export default NotFound;
