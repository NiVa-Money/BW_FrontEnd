'use client';
import { saveWhatsAppAction } from '@/redux/actions/socialIntegrations/whatsAppIntegration';
import { RootState } from '@/redux/configureStore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const WhatsAppIntegration = () => {
  const [formData, setFormData] = useState({
    provider: 'Meta',
    bot: 'Bot 1',
    whatsappNumber: '',
    appId: '',
    mobileNumberId: '',
    businessAccountId: '',
    accessToken: '',
  });
  const botDataRedux = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.data
  );

  const botloader = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.loader
  );
  const dispatch = useDispatch();
  const [transformedBotsData, setTransformedBotsData] = useState<any>([]);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  useEffect(() => {
    if (botDataRedux?.length) {
      const data = botDataRedux.map(
        ({ _id, botName }: { _id: string; botName: string }) => ({
          id: _id,
          botName: botName,
        })
      );
      setTransformedBotsData(data);
    }
  }, [botDataRedux, botloader]);
  const {
    provider,
    bot,
    whatsappNumber,
    appId,
    mobileNumberId,
    businessAccountId,
    accessToken,
  } = formData;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission (e.g., API call)
    const payload = {
      integrationType: 'whatsapp',
      botId: bot,
      appId: appId,
      phoneNumberId: mobileNumberId,
      whatsappBusinessAccountId: businessAccountId,
      phoneNumber: whatsappNumber,
      accessToken: accessToken,
    };
    dispatch(saveWhatsAppAction(payload));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-left mt-10">
        <h1 className="mt-5 flex gap-[5px] text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          <span>WhatsApp Integration</span>
          <Image
            alt="whatsapp"
            src="/images/whatsappimg.png"
            height={50}
            width={100}
          />
        </h1>
        <h2 className="mt-4 text-xl text-[#AEB9E1] text-left max-md:max-w-full max-md:text-lg">
          Please choose the bot you wish to implement for the WhatsApp
          Integration. <br />
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-24 mt-10 justify-start">
        <form onSubmit={handleSubmit} className=" w-[90%] flex-col">
          <div className="grid grid-cols-[repeat(2,_1fr)] gap-[15px] w-[100%]">
            <div className="mb-4 w-full">
              <label className="block text-white mb-2" htmlFor="provider">
                Choose your provider
              </label>
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
              <label className="block text-white mb-2" htmlFor="bot">
                Select Bot
              </label>
              <select
                id="bot"
                name="bot"
                value={formData.bot}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
              >
                {transformedBotsData.map(
                  ({ id, botName }: { id: string; botName: string }) => (
                    <option key={id} value={id}>
                      {botName}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="mb-4 w-full">
              <label className="block text-white mb-2" htmlFor="whatsappNumber">
                WhatsApp Number
              </label>
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
              <label className="block text-white mb-2" htmlFor="appId">
                App ID
              </label>
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
              <label className="block text-white mb-2" htmlFor="mobileNumberId">
                Mobile Number ID
              </label>
              <p className="text-gray-400 text-sm ">
                Enter your Meta Mobile number ID{' '}
              </p>
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
              <label
                className="block text-white mb-2"
                htmlFor="businessAccountId"
              >
                Business Account ID
              </label>
              <p className="text-gray-400 text-sm ">
                Enter your Meta business account ID
              </p>
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
              <label className="block text-white mb-2" htmlFor="accessToken">
                Permanent Access Token given by Meta
              </label>
              <p className="text-gray-400 text-sm ">
                If you don't know where to access this token you can{' '}
                <a href="#" className="underline">
                  CLICK HERE
                </a>{' '}
                to find it.
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
          <div className="col-span-ful flex justify-end">
            <button
              type="submit"
              className="w-[168px] bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/*     <WhatsAppSaveConfirmationModal
        isOpen={isExportModalOpen}
        onClose={closeExportModal}
        exportResponse={exportResponse}
      /> */}
    </>
  );
};

export default WhatsAppIntegration;
