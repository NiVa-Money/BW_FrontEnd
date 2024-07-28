'use client';

import React, { useEffect, useState } from 'react';
import ChatBotCard from './ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserBotProfileAction,
  deleteBotProfileServiceAction,
  exportBotProfileServiceAction,
} from '@/redux/actions/BotProfileActions';
import ConfirmModal from './modalDelete';
import { useRouter } from 'next/navigation';
import withAuth from '../withAuth';

interface ChatBot {
  botId?: any;
  botName: string;
  description: string;
  icon: string;
  botTone: string;
  file: string;
  botColor: string;
  createdAt: string;
  _id: string;
}

const ChatBotList: React.FC = () => {
  const botDataRedux = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.data
  );
  const botloader = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.loader
  );
  const [chatBotList, setChatBotList] = useState<ChatBot[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [botIdToDelete, setBotIdToDelete] = useState<string | null>(null);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const [userIdLocal, setUserIdLocal] = useState(userId);
  const dispatch = useDispatch();
  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const router = useRouter();

  // Function to handle edit action
  const handleEdit = (botId: string) => {
    router.push(`/editBot?id=${botId}`);
  };

  // Function to handle export action
  const handleExport = (botId: string) => {
    const botToExport = chatBotList.find(bot => bot._id === botId);
    if (botToExport && userId) {
      const payload = { botId: botToExport._id, userId };
      dispatch(exportBotProfileServiceAction(payload) as any);
      console.log(`Exporting bot: ${botToExport.botName}`);
    } else {
      console.error(`Bot with ID ${botId} not found or userId is undefined`);
    }
  };

  // Function to handle delete action
  const handleDelete = (botId: string) => {
    setBotIdToDelete(botId);
    setIsModalOpen(true);
  };

  // Confirm deletion
  const confirmDelete = () => {
    if (userId && botIdToDelete) {
      dispatch(
        deleteBotProfileServiceAction({ botId: botIdToDelete, userId: userId })
      );
      setIsModalOpen(false);
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setBotIdToDelete(null);
  };

  useEffect(() => {
    if (userId !== undefined) {
      if (userId?.length || pathName === '/MyChatBots') {
        dispatch(getUserBotProfileAction(userId));
      }
    }
  }, [userId, pathName, dispatch]);

  useEffect(() => {
    if (userId?.length) {
      setUserIdLocal(userId);
    }
  }, [userId]);

  useEffect(() => {
    console.log('botDataRedux:', botloader);
    if (botDataRedux && botDataRedux.length) {
      setChatBotList(botDataRedux);
    }
  }, [botDataRedux, botloader]);

  useEffect(() => {
    if (userIdLocal || pathName === '/MyChatBots') {
      dispatch(getUserBotProfileAction(userIdLocal));
    }
  }, [userIdLocal, pathName, dispatch]);

  return (
    <main className="flex flex-col mt-5">
      <header className="flex gap-2.5 px-5 max-md:flex-wrap">
        <h1 className="flex-1 my-auto text-3xl font-bold px-10 leading-6 text-white">
          My ChatBots
        </h1>
        <button className="flex gap-2 justify-center px-14 py-3 text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]">
          <Link href="/createBot">
            <span>Create Bot</span>
          </Link>
          <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
        </button>
      </header>
      <section className="mt-6 px-10">
        {chatBotList?.map((chatBot: ChatBot) => (
          <ChatBotCard
            key={chatBot._id}
            bot={chatBot}
            actions={{
              onDelete: () => handleDelete(chatBot._id),
              onEdit: () => handleEdit(chatBot._id),
              onExport: () => handleExport(chatBot._id),
            }}
          />
        ))}
      </section>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this chatbot?"
      />
    </main>
  );
};

export default withAuth(ChatBotList);