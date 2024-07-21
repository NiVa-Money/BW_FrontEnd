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

'use client';

import React, { useEffect } from 'react';
import ChatBotCard from '../ChatBot/ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserKnowledgeBaseAction, getUserKnowledgeBaseAction } from '@/redux/actions/knowledgeBaseActions';

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
  const knowledgebase = useSelector((state: RootState) => state.root.KnowledgeBase.user.data) || [];
  const userId = useSelector((state: RootState) => state.root?.userData?.user_id);
  const dispatch = useDispatch();
  const pathName = useSelector((state: RootState) => state.root?.pathName);

  useEffect(() => {
    if (userId?.length || pathName === '/knowledgeBase') {
      dispatch(getUserKnowledgeBaseAction(userId));
    }
  }, [userId, pathName, dispatch]);

  const handleDelete = (docId: string) => {
    if (confirm('Are you sure you want to delete this entry?')) {
      dispatch(deleteUserKnowledgeBaseAction(docId));
      // You may need to handle state update directly in your reducer or use an effect to update the UI
      alert('Knowledge base entry deleted successfully');
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
        {Array.isArray(knowledgebase) && knowledgebase.length > 0 ? (
          knowledgebase.map((bot: KnowledgeBaseCardProps, index: number) => (
            <ChatBotCard
              key={bot.docId} // Prefer using a unique identifier rather than index
              bot={bot}
              actions={{
                onDelete: () => handleDelete(bot.docId),
                onDownload: () => handleDownload(index),
              }}
            />
          ))
        ) : (
          <p>No knowledge base entries available.</p>
        )}
      </section>
    </main>
  );
};

export default KnowledgeBase;


