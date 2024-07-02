import React from 'react';

interface ChatbotCardProps {
  icon: string;
  title: string;
  description: string;
  isNew?: boolean;
}

const ChatbotCard: React.FC<ChatbotCardProps> = ({ icon, title, description, isNew }) => (
  <div className="bg-[#EEEEF0] rounded-xl p-4 flex items-start space-x-4">
    <img src={icon} alt={title} className="w-12 h-12 rounded-full" />
    <div className="flex-grow">
      <h3 className="text-black text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-base font-medium">{description}</p>
    </div>
    {!isNew && (
      <button className="text-black">
        <i className="fas fa-trash" style={{ fontSize: '35px'}}></i>
      </button>
    )}
  </div>
);

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
      <div className="grid grid-row-1 gap-10">
        {chatbots.map((chatbot, index) => (
          <ChatbotCard key={index} {...chatbot} />
        ))}
      </div>
    </div>
  );
};

export default ChatbotList;
