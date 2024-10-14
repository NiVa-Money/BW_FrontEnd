'use client';
import WhatsAppSaveConfirmationModal from '@/app/integration/whatsapp/whatsappSaveConfirmationModal';
import { deleteWhatsAppAction } from '@/redux/actions/socialIntegrations/whatsAppIntegration';
import { RootState } from '@/redux/configureStore';
import { List, ListItem, ListItemButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmModal from '../ChatBot/modalDelete';
// import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

interface whatsAppBotCardProps {
  phoneNumber: string;
  botName: string;
  botId: string;
}

const WhatsAppIntegrationCard: React.FC<whatsAppBotCardProps> = ({
  phoneNumber,
  botName,
  botId,
}) => {
  const [anchor, setAnchor] = React.useState<boolean | HTMLElement>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const whatsappIntegratedBots = useSelector(
    (state: RootState) => state.socialIntegrations?.whatsApp?.getWebhook?.data
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [botIdToDelete, setBotIdToDelete] = useState<string | null>(null);
  const [exportResponse, setExportResponse] = useState<{
    success: true;
    data: { webhookUrl: string; secretToken: string };
  } | null>(null);
  const dispatch=useDispatch()
  const closeExportModal = () => {
    setIsExportModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setBotIdToDelete(null);
  };
  const confirmDelete = () => {
    if (botId) {
      dispatch(
        deleteWhatsAppAction(botId)
      );
      
      setIsModalOpen(false);
      setBotIdToDelete(null);
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(!anchor);
  };
  const handleContactSupport = () => {
    window.location.href = 'mailto:support@botwot.io';
  };
  const handleExport = () => {
    console.log('handle')
    setIsExportModalOpen(true)
  };
  useEffect(() => {
    if(whatsappIntegratedBots?.length){
      const filteredBots = whatsappIntegratedBots.filter((item:any) => item.botId === botId)[0];
      setExportResponse({
        success:true,
        data:{
          webhookUrl: filteredBots?.webhookUrl, secretToken: filteredBots?.accessToken
        }
      })
    }
  }, [whatsappIntegratedBots]);
  useEffect(() => {
    if(whatsappIntegratedBots?.length){
      const filteredBots = whatsappIntegratedBots.filter((item:any) => item.botId === botId)[0];
      setExportResponse({
        success:true,
        data:{
          webhookUrl: filteredBots?.webhookUrl, secretToken: filteredBots?.accessToken
        }
      })
    }
  }, []);

  console.log('exportResponse',exportResponse)
   return (
    <>
    <div className="bg-[#1E1E1E] my-[30px] p-6 w-[90%] rounded-lg shadow-lg text-white flex flex-col  justify-between items-center">
      <div className="flex flex-col">
        {/* WhatsApp Integrated */}
        <div className="flex items-center justify-between relative  mb-4">
          <div className="flex gap-2">
            <Image
              alt="whatsapp"
              src="/images/whatsapp.png"
              height={50}
              width={50}
            />{' '}
            <div className="flex-col flex justify-start">
              <span className="text-lg font-semibold">WhatsApp Integrated</span>
              <span className=" text-sm text-green-400">
                {botName} activated
              </span>
            </div>
          </div>
          <div>
            <button type="button" onClick={handleClick}>
              <Image src="/images/menu.png" width={25} height={25} alt="menu" />
            </button>
          </div>
          {anchor && (
            <div className="bg-[black] width-[115px] text-white flex flex-col absolute top-[10px] right-[25px]">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link href={`/integration/editwhatsapp?id=${botId}`}>
                      {' '}
                      Edit
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>Delete</ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton><button onClick={()=>handleExport()}>Export</button> </ListItemButton>
                </ListItem>
              </List>
            </div>
          )}
        </div>

        {/* Business Account Number */}
        <div className="mb-2">
          <span className="text-sm text-gray-400">Business account number</span>
          <p className="text-lg font-semibold">{phoneNumber}</p>
        </div>

        {/* Description Text */}
        <p className="text-gray-300 text-sm mt-2">
          The WhatsApp integration has been successfully completed on your
          business account number, and Bot 1 is now activated. This means your
          business can now utilize Bot 1 to handle customer interactions,
          streamline communication, and improve response times through WhatsApp.
          This new feature should enhance your customer service experience and
          operational efficiency.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full justify-end mt-[30px] flex gap-4">
        <button
          className="flex   justify-center  text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px] w-[200px] items-center h-[40px]"
          onClick={handleContactSupport}
        >
          Contact Support
        </button>
      </div>
    </div>
    <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this chatbot?"
      />
    {exportResponse?.data.webhookUrl&&
          <WhatsAppSaveConfirmationModal
          isOpen={isExportModalOpen}
          onClose={closeExportModal}
          exportResponse={exportResponse}
        />}
        </>
  );
};

export default WhatsAppIntegrationCard;
