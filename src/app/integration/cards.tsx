'use client';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  path: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subTitle,
  description,
  path,
}) => {
  const handleContactSupport = () => {
    window.location.href = 'mailto:support@botwot.io';
  };

  return (
    <div className="bg-black text-white rounded-lg p-6 md:p-8 w-full sm:w-80 md:w-96 shadow-lg border border-gray-500 mx-auto my-4">
      <div className="flex items-center mb-4">
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-[#AEB9E1]">{subTitle}</p>
        </div>
        <div className="ml-auto">
          <button className="text-[#AEB9E1]">...</button>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={`${title} icon`}
          className="h-24 object-contain"
        />
      </div>

      <p className="text-sm text-[#AEB9E1]">{description}</p>

      {/* Support Information */}
      <p className="text-sm text-[#AEB9E1] mt-4">
        For support, call us at{' '}
        <span className="font-semibold">+91 95824 74246</span>
      </p>

      <div className="flex justify-between mt-4">
        <button
          className="text-white text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-white bg-transparent"
          onClick={handleContactSupport}
        >
          Contact support
        </button>

        {/* Export button greyed out */}
        <Link
          href={`${path}`}
          className="text-[#AEB9E1] text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-700 "
        >
          Enable
        </Link>
      </div>
    </div>
  );
};

export default Card;
