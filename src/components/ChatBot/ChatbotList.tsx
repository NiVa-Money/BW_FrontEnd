'use client';

import React from 'react';
import ChatBotCard from './ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { deleteBotProfileServiceAction } from '@/redux/actions/BotProfileActions';
import { useDispatch } from 'react-redux';

interface ChatBot {
  botId?: any;
  name: string;
  description: string;
  icon: string;
  tone: string;
  file: string;
  color: string;
  createdAt: string;
}

const chatBots: ChatBot[] = [
  {
    name: 'TalentTalker',
    description: 'Chatbot for or Human Resources with a playful twist',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83ca9326c329ecba81bf2f6263aaec95e0712d60070b29a4af7f07b5ebeb0c93?apiKey=555c811dd3f44fc79b6b2689129389e8&',
    tone: 'Formal Tone',
    file: 'Fintech.PDF',
    color: 'Blue',
    createdAt: 'Jun 14, 2024 at 12:10 pm',
  },
  {
    name: 'MarketBot',
    description:
      'Provide comprehensive assistance in the field of market research',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9c775da8197f3375ae992ec7dd5a00c8e6aa140bdc20e55e78babc3bbfd5a1f?apiKey=555c811dd3f44fc79b6b2689129389e8&',
    tone: 'Formal Tone',
    file: 'Fintech.PDF',
    color: 'Pink',
    createdAt: 'Jun 14, 2024 at 12:10 pm',
  },
];

const ChatBotList: React.FC = () => {
  // Function to handle delete action
  const handleDelete = async (index: number) => {
    const dispatch = useDispatch(); 

   // Function to handle delete action
   const handleDelete = (index: number) => {
    const botToDelete = chatBots[index];

    // Prepare the request data
    const requestData = {
      botId: botToDelete.botId, // Replace with actual botId from your data structure
      userId: 'currentUserId', // Replace with actual userId from your authentication/session
    };

    // Dispatch the action
    dispatch(deleteBotProfileServiceAction(requestData));

    // Update local state to reflect the deletion
    const updatedBots = [...chatBots];
    updatedBots.splice(index, 1);
    // Update state or perform necessary actions
  };

  // Function to handle edit action
  const handleEdit = (index: number) => {
    // Navigate to the edit page with the botId as a query parameter
    window.location.href = `/editBot?botId=${chatBots[index].botId}`;
    console.log('navigating');
  };

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
        {chatBots.map((bot, index) => (
          <ChatBotCard
            key={index}
            bot={bot}
            actions={{
              onDelete: () => handleDelete(index),
              onEdit: () => handleEdit(index),
            }}
          />
        ))}
      </section>
    </main>
  );
};

export default ChatBotList;
