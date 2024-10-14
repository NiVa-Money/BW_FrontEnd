'use client';
import {
  getWhatsAppWebhookAction,
  saveWhatsAppAction,
  editWhatsAppAction
} from '@/redux/actions/socialIntegrations/whatsAppIntegration';
import { RootState } from '@/redux/configureStore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import withAuth from '../withAuth';
import WhatsAppSaveConfirmationModal from '@/app/integration/whatsapp/whatsappSaveConfirmationModal';
import {  useRouter, useSearchParams } from 'next/navigation';

const EditWhatsAppIntegration = () => {
  const [formData, setFormData] = useState({
    provider: 'Meta',
    bot: '',
    whatsappNumber: '',
    appId: '',
    mobileNumberId: '',
    businessAccountId: '',
    accessToken: '',
    botId:''
  });
  const botDataRedux = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.data
  );
  const searchParams = useSearchParams() as URLSearchParams;
  const [botParam, setBotParam] = useState<string>('');
  const botloader = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.loader
  );
  const whatsappIntegratedBots = useSelector(
    (state: RootState) => state.socialIntegrations?.whatsApp?.getWebhook?.data
  );
  const whatsappIntegrationEditRedux = useSelector(
    (state: RootState) => state.socialIntegrations?.whatsApp?.editWebhook?.data
  );
  const whatsappIntegrationLoader = useSelector(
    (state: RootState) =>
      state.socialIntegrations?.whatsApp?.editWebhook?.loader
  );
  const dispatch = useDispatch();
  const router=useRouter()
  const [transformedBotsData, setTransformedBotsData] = useState<any>([]);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportResponse, setExportResponse] = useState<{
    success: boolean;
    data: { webhookUrl: string; secretToken: string };
  } | null>(null);
  const closeExportModal = () => {
    setIsExportModalOpen(false);
    setExportResponse(null);
    // if(whatsappIntegrationEditRedux?.secretToken){
    //   router.push('/myintegrations')
    // }
  };
  useEffect(() => {
    if(whatsappIntegratedBots.length && botParam.length){
      const filteredBots = whatsappIntegratedBots.filter((item:any) => item.botId === botParam)[0];
      if(botDataRedux?.length){
      const bots = botDataRedux.filter((item:any) => item._id === botParam)[0];
      setFormData({
        ...formData,
        bot: bots?.botName,
        appId:filteredBots?.appId,
        provider: 'Meta',
        whatsappNumber: filteredBots?.phoneNumber,
        mobileNumberId: filteredBots?.phoneNumberId,
        businessAccountId: filteredBots?.whatsappBusinessAccountId,
        accessToken: filteredBots?.accessToken,
        botId:filteredBots?.botId

      });}
    }
  }, [ whatsappIntegratedBots,botParam,botDataRedux]);
  useEffect(() => {
    if (whatsappIntegrationEditRedux?.webhookUrl) {
      setExportResponse({
        success: true,
        data: {
          webhookUrl: whatsappIntegrationEditRedux?.webhookUrl,
          secretToken: whatsappIntegrationEditRedux?.secretToken,
        },
      });
      if(!whatsappIntegrationLoader){
        console.log('whatsappIntegrationEditRedux',whatsappIntegrationEditRedux)
      setIsExportModalOpen(true);}
    }
  }, [whatsappIntegrationEditRedux, whatsappIntegrationLoader]);

 console.log('isExportModalOpen',isExportModalOpen)
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setBotParam(id);
    }
  }, [searchParams]);

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
    dispatch(editWhatsAppAction(payload))
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
              <input
                id="bot"
                name="bot"
                type="text"
                value={formData.bot}
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white"
              />
             
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
      <WhatsAppSaveConfirmationModal
        isOpen={isExportModalOpen}
        onClose={closeExportModal}
        exportResponse={exportResponse}
      />
    </>
  );
};

export default withAuth(EditWhatsAppIntegration);
