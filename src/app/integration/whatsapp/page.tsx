"use client"
import React, { useState } from 'react';

const WhatsAppIntegration = () => {
  const [formData, setFormData] = useState({
    provider: "Meta",
    bot: "Bot 1",
    whatsappNumber: "",
    appId: "",
    mobileNumberId: "",
    businessAccountId: "",
    accessToken: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission (e.g., API call)
  };

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

      <div className="flex flex-col md:flex-row gap-24 mt-10 justify-start">
      <form onSubmit={handleSubmit} className=" w-[90%] flex-col">
      <div className='grid grid-cols-[repeat(2,_1fr)] gap-[15px] w-[100%]'>
        <div className="mb-4 w-full">
          <label className="block text-white mb-2" htmlFor="provider">Choose your provider</label>
          <select
            id="provider"
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          >
            <option value="Meta">Meta</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4 w-full">
          <label className="block text-white mb-2" htmlFor="bot">Select Bot</label>
          <select
            id="bot"
            name="bot"
            value={formData.bot}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          >
            <option value="Bot 1">Bot 1</option>
            <option value="Bot 2">Bot 2</option>
          </select>
        </div>

        <div className="mb-4 w-full">
          <label className="block text-white mb-2" htmlFor="whatsappNumber">WhatsApp Number</label>
          <input
            id="whatsappNumber"
            name="whatsappNumber"
            type="tel"
            placeholder="+91"
            value={formData.whatsappNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-white mb-2" htmlFor="appId">App ID</label>
          <input
            id="appId"
            name="appId"
            type="text"
            placeholder="Enter your Meta app ID"
            value={formData.appId}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-white mb-2" htmlFor="mobileNumberId">Mobile Number ID</label>
          <input
            id="mobileNumberId"
            name="mobileNumberId"
            type="text"
            placeholder="Enter your Meta Mobile number ID"
            value={formData.mobileNumberId}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-white mb-2" htmlFor="businessAccountId">Business Account ID</label>
          <input
            id="businessAccountId"
            name="businessAccountId"
            type="text"
            placeholder="Enter your Meta business account ID"
            value={formData.businessAccountId}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4 w-full col-span-full">
          <label className="block text-white mb-2" htmlFor="accessToken">Permanent Access Token given by Meta</label>
          <p className="text-gray-400 text-sm mt-1">
            If you don't know where to access this token you can <a href="#" className="underline">CLICK HERE</a> to find it.
          </p>
          <input
            id="accessToken"
            name="accessToken"
            type="text"
            placeholder="Enter your Meta access token"
            value={formData.accessToken}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
          />
        
        </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default WhatsAppIntegration;
