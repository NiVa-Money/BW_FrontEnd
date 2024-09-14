import ChatBotList from '@/components/ChatBot/ChatbotList';
import React from 'react';

const MyChatBots: React.FC = () => {
  return (
    <>
      <div className="relative text-white h-[100%] overflow-hidden p-8">
        <ChatBotList />
      </div>
    </>
  );
};

export default MyChatBots;
