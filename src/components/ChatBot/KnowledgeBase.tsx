// import React from 'react';
// import ChatBotCard from './ChatBotCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// interface KnowledgeBaseCardProps {
//   name: string;
//   description: string;
//   icon: string;
//   tone?: string;
//   file: string;
//   color?: string;
//   createdAt: string;
// }

// const knowledgebase: KnowledgeBaseCardProps[] = [
//   {
//     name: "TalentTalker",
//     description: "Chatbot for Human Resources with a playful twist",
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83ca9326c329ecba81bf2f6263aaec95e0712d60070b29a4af7f07b5ebeb0c93?apiKey=555c811dd3f44fc79b6b2689129389e8&",
//     file: "Fintech.PDF",
//     createdAt: "Jun 14, 2024 at 12:10 pm"
//   },
//   {
//     name: "MarketBot",
//     description: "Provides comprehensive assistance in the field of market research",
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9c775da8197f3375ae992ec7dd5a00c8e6aa140bdc20e55e78babc3bbfd5a1f?apiKey=555c811dd3f44fc79b6b2689129389e8&",
//     file: "Fintech.PDF",
//     createdAt: "Jun 14, 2024 at 12:10 pm"
//   }
// ];

// const KnowledgeBase: React.FC = () => {
//   return (
//     <main className="flex flex-col">
//       <header className="flex gap-2.5 px-5 max-md:flex-wrap">
//         <h1 className="flex-1 my-auto text-3xl font-bold px-10 leading-6 text-white">
//           My Knowledge Base
//         </h1>
//         <button className="flex gap-2 justify-center px-14 py-3 text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]">
//         <Link href={`/createKnowledgeBase`}>
//             <span>Create Knowledge Base</span>
//           </Link>
//           <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
//         </button>
//       </header>
//       <section className="mt-12 px-10">
//         {knowledgebase.map((bot, index) => (
//           <ChatBotCard key={index} bot={bot} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default KnowledgeBase;


import React, { useEffect, useState } from 'react';
import ChatBotCard from '../ChatBot/ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface KnowledgeBaseCardProps {
  docId: any;
  name: string;
  description: string;
  icon: string;
  tone?: string;
  file: string;
  color?: string;
  createdAt: string;
}

const KnowledgeBase: React.FC = () => {
  const [knowledgebase, setKnowledgebase] = useState<KnowledgeBaseCardProps[]>([]);

  useEffect(() => {
    const fetchKnowledgeBase = async () => {
      try {
        const userId = 'YOUR_USER_ID'; // Replace with actual userId
        const response = await fetch(`/user/getUserKnowledgeBase?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch knowledge base');
        }
        const data = await response.json();
        setKnowledgebase(data);
      } catch (error) {
        console.error('Error fetching knowledge base:', error);
      }
    };

    fetchKnowledgeBase();
  }, []);

  const handleDelete = async (index: number) => {
    try {
      const docId = knowledgebase[index].docId; // Assuming docId is part of knowledgebase entry
      const userId = 'YOUR_USER_ID'; // Replace with actual userId

      const response = await fetch(`/user/deleteUserKnowledgeBase?docId=${docId}&userId=${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete knowledge base entry');
      }

      // Update state or handle UI after successful deletion
      const updatedKnowledgeBase = [...knowledgebase];
      updatedKnowledgeBase.splice(index, 1);
      setKnowledgebase(updatedKnowledgeBase);

      console.log('Knowledge base entry deleted successfully');
    } catch (error) {
      console.error('Error deleting knowledge base entry:', error);
    }
  };

  const handleDownload = (index: number) => {
    // Implement download functionality
    console.log(`Download bot at index ${index}`);
  };

  return (
    <main className="flex flex-col">
      <header className="flex gap-2.5 px-5 max-md:flex-wrap">
        <h1 className="flex-1 my-auto text-3xl font-bold px-10 leading-6 text-white">
          My Knowledge Base
        </h1>
        <button className="flex gap-2 justify-center px-14 py-3 text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]">
          <Link href={`/createKnowledgeBase`}>
            <span>Create Knowledge Base</span>
          </Link>
          <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
        </button>
      </header>
      <section className="mt-12 px-10">
        {knowledgebase.map((bot, index) => (
          <ChatBotCard
            key={index}
            bot={bot}
            actions={{
              onDelete: () => handleDelete(index),
              onDownload: () => handleDownload(index),
            }}
          />
        ))}
      </section>
    </main>
  );
}

export default KnowledgeBase;
