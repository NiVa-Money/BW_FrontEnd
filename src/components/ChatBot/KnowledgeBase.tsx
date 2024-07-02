import React from 'react';
import ChatbotCard, { ChatbotCardProps } from '../ChatBot/ChatBotCard'; // Adjust import path as per your project structure

const KnowledgeBase: React.FC = () => {
  const chatbots: ChatbotCardProps[] = [
    { icon: "/icons/talent.png", title: "TalentTalker", description: "Product's style guide.pdf" },
    { icon: "/icons/market.png", title: "MarketBot", description: "Product's style guide.pdf" },
    { icon: "/icons/promark.png", title: "ProMark", description: "Product's style guide.pdf" },
  ];

  return (
    <div className="flex-grow m-16 p-16 bg-[#13131F] rounded-3xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-white text-3xl font-bold">Knowledge Base</h1>
        <button className="bg-[#7B71E2] text-white text-base rounded-full py-2 px-4 flex items-center space-x-2">
          <i className="fas fa-plus"></i>
          <span>Create Knowledge Base</span>
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

export default KnowledgeBase;
