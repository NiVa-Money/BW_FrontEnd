import React from 'react';
import Link from 'next/link';
import notFoundImg from '@/public/assets/oops.svg';
import Image from 'next/image';
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white text-center">
      <h1 className="text-5xl font-bold mb-2">Oops!</h1>
      <p className="text-xl mb-4">You are lost</p>
      <div className="relative w-[605px] h-[486px] mb-8">
        <Image
          src={notFoundImg.src} // Replace with your image path
          alt="Lost"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Link href="/">
        <span className="mr-2"></span> Go Home
      </Link>
    </div>
  );
};

export default NotFound;
