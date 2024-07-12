import React from 'react';
import ChatBotCard from './ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface ChatBot {
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
          <ChatBotCard key={index} bot={bot} />
        ))}
      </section>
    </main>
  );
};

export default ChatBotList;
