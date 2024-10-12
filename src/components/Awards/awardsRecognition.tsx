import React from 'react';
import Image from 'next/image';

const AwardsRecognition: React.FC = () => {
  return (
    <div className="p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* NASSCOM stars */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 rounded-full shadow-lg"></div>
              <Image
                src="/awards/NASSCOM.png"
                alt="NASSCOM stars"
                layout="fill"
                objectFit="contain"
                className="relative z-10"
              />
            </div>
            <h3 className="text-2xl text-white mb-2">NASSCOM stars</h3>
            <p className="text-base text-[#EEEEF0]">
                Accepted into Nasscom Warehouse in Gurugram
            </p>
          </div>

          {/* Industry Leaders */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">
              Embraced by Industry Leaders
            </h3>
            <div className="flex justify-center gap-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src={`/awards/MNC.png`}
                  alt="MNC"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Startup India */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 rounded-full shadow-lg glow-purple"></div>
              <Image
                src="/awards/Startup.png"
                alt="Startup India"
                layout="fill"
                objectFit="contain"
                className="relative z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Startup India</h3>
            <p className="text-sm">
              BotWat Received the Startup India Seal of Approval
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
