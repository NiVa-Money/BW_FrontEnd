import React from 'react';

const WhatsAppIntegration = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-left mt-10">
        <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          WhatsApp Integration
        </h1>
        <h2 className="mt-4 text-xl text-[#AEB9E1] text-left max-md:max-w-full max-md:text-lg">
          Please choose the bot you wish to implement for the WhatsApp
          Integration. <br />
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-24 mt-10 justify-center"></div>
    </>
  );
};

export default WhatsAppIntegration;
