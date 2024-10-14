'use client';
import React, { useEffect, useState } from 'react';
import WhatsAppIntegrationCard from './whatsAppIntegrationCard';
import { useDispatch, useSelector } from 'react-redux';
import { getWhatsAppWebhookAction } from '@/redux/actions/socialIntegrations/whatsAppIntegration';
import { RootState } from '@/redux/configureStore';
const MyIntegrations = () => {
  const whatsappIntegratedBots = useSelector(
    (state: RootState) => state.socialIntegrations?.whatsApp?.getWebhook?.data
  );
  const [whatsAppBotsData, setwhatsAppBotsData] = useState([]);

  useEffect(() => {
    if (whatsappIntegratedBots?.length) {
      setwhatsAppBotsData(whatsappIntegratedBots);
    }
  }, [whatsappIntegratedBots]);

  console.log('whatsAppBotsReduxData', whatsAppBotsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWhatsAppWebhookAction(''));
  }, []);
  console.log('whatsAppBotsData', whatsAppBotsData);
  return (
    <>
      <div className="flex flex-col justify-center items-left mt-10">
        <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          My Integrations 🤝
        </h1>
        <h2 className="mt-4 text-xl text-[#AEB9E1] text-left max-md:max-w-full max-md:text-lg">
          Get your chatbot seamlessly connected to other systems or platforms,
          allowing it to perform specific tasks beyond just answering user
          queries.
        </h2>
      </div>
      <div className="mt-[50px]">
        {whatsAppBotsData &&
          whatsAppBotsData.map((item: any) => (
            <WhatsAppIntegrationCard
              phoneNumber={item.phoneNumber}
              botName={item.botName}
              botId={item.botId}
              integrationId={item._id}
            />
          ))}
      </div>
    </>
  );
};

export default MyIntegrations;
