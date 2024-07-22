

'use client'

import React, { useEffect, useState } from 'react';
import ChatBotCard from './ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBotProfileAction, deleteBotProfileServiceAction } from '@/redux/actions/BotProfileActions';
import ConfirmModal from './modalDelete';

interface ChatBot {
  _id?: any;
  botName: string;
  description: string;
  icon: string;
  botTone: string;
  file: string;
  botColor: string;
  createdAt: string;
}

const ChatBotList: React.FC = () => {
  const botDataRedux = useSelector((state: RootState) => state.botProfile?.botProfiles?.data);
  const [chatBotList, setChatBotList] = useState<ChatBot[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [botIdToDelete, setBotIdToDelete] = useState<string | null>(null);
  const userIdRex = useSelector((state: RootState) => state.root?.userData?.user_id);
  const [userIdLocal, setUserIdLocal] = useState(userIdRex);
  const dispatch = useDispatch();
  const pathName = useSelector((state: RootState) => state.root?.pathName);

  // Function to handle edit action
  const handleEdit = (index: number) => {
    // Navigate to the edit page with the botId as a query parameter
    window.location.href = `/editBot?botId=${chatBotList[index]._id}`;
  };

  // Function to handle delete action
  const handleDelete = (index: number) => {
    setBotIdToDelete(chatBotList[index]._id);
    setIsModalOpen(true);
  };

  // Confirm deletion
  const confirmDelete = () => {
    if (botIdToDelete && userIdRex) {
      dispatch(deleteBotProfileServiceAction({ botId: botIdToDelete, userId: userIdRex }));
      setIsModalOpen(false);
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setBotIdToDelete(null);
  };

  useEffect(() => {
    if (userIdRex !== undefined) {
      if (userIdRex?.length || pathName === '/MyChatBots') {
        dispatch(getUserBotProfileAction(userIdRex));
      }
    }
  }, [userIdRex, pathName, dispatch]);

  useEffect(() => {
    if (userIdRex?.length) {
      setUserIdLocal(userIdRex);
    }
  }, [userIdRex]);

  useEffect(() => {
    if (botDataRedux && botDataRedux.length) {
      setChatBotList(botDataRedux);
    }
  }, [botDataRedux]);

  useEffect(() => {
    if (userIdLocal || pathName === '/MyChatBots') {
      dispatch(getUserBotProfileAction(userIdLocal));
    }
  }, [userIdLocal, pathName, dispatch]);

  return (
    <main className="flex flex-col">
      <header className="flex gap-2.5 px-5 max-md:flex-wrap">
        <h1 className="flex-1 my-auto text-3xl font-bold px-10 leading-6 text-white">
          My ChatBots
        </h1>
        <button className="flex gap-2 justify-center px-14 py-3 text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]">
          <Link href={`/createBot`}>
            <span>Create Bot</span>
          </Link>
          <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
        </button>
      </header>
      <section className="mt-12 px-10">
        {chatBotList.map((chatBot, index) => (
          <ChatBotCard
            key={index}
            bot={chatBot}
            actions={{
              onDelete: () => handleDelete(index),
              onEdit: () => handleEdit(index),
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

export default ChatBotList;