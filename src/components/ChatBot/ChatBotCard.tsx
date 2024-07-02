import React from 'react';

export interface ChatbotCardProps {
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

export default ChatbotCard;
