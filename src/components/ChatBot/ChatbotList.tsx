import React from 'react';
import ChatbotCard, { ChatbotCardProps } from '../ChatBot/ChatBotCard'; // Adjust import path as per your project structure

const ChatbotList: React.FC = () => {
  const chatbots: ChatbotCardProps[] = [
    { icon: "/icons/plus.png", title: "Create Chatbot", description: "Create a version of chatbot for specific purpose", isNew: true },
    { icon: "/icons/talent.png", title: "TalentTalker", description: "Chatbot for or Human Resources with a playful twist" },
    { icon: "/icons/market.png", title: "MarketBot", description: "Provide comprehensive assistance in the field of market research" },
    { icon: "/icons/promark.png", title: "ProMark", description: "Cater to the needs of marketers" },
  ];

  return (
    <div className="flex-grow m-16 p-16 bg-[#13131F] rounded-3xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-white text-3xl font-bold">My Chatbots</h1>
        <button className="bg-[#7B71E2] text-white text-base rounded-full py-2 px-4 flex items-center space-x-2">
          <i className="fas fa-plus"></i>
          <span>Create Bot</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {chatbots.map((chatbot, index) => (
          <ChatbotCard key={index} {...chatbot} />
        ))}
      </div>
    </div>
  );
};

export default ChatbotList;
