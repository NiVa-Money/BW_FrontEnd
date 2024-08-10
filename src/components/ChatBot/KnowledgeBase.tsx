'use client';

import React, { useEffect, useState } from 'react';
import ChatBotCard from '../ChatBot/ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserKnowledgeBaseAction,
  deleteUserKnowledgeBaseAction,
} from '@/redux/actions/knowledgeBaseActions';
import ConfirmModal from './modalDelete';

interface KnowledgeBaseCardProps {
  _id: string;
  bots: string;
  docId: any;
  name: string;
  botName: string;
  description: string;
  icon: string;
  tone?: string;
  file: string;
  color?: string;
  createdAt: string;
  docName: string;
  botURL: string;
  fileLocationS3: string;
}

const KnowledgeBase: React.FC = () => {
  const knowledgeBaseData = useSelector(
    (state: RootState) => state.KnowledgeBase?.user?.data
  );
  console.log('knowledgeBaseData', knowledgeBaseData);
  const [knowledgebase, setKnowledgebase] = useState<KnowledgeBaseCardProps[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [docIdToDelete, setDocIdToDelete] = useState<string | null>(null);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const dispatch = useDispatch();
  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const knowledgeBaseRedux = useSelector(
    (state: RootState) => state.KnowledgeBase?.create?.loader
  );
  const knowledgeBaseDataRedux = useSelector(
    (state: RootState) => state.KnowledgeBase?.user?.loader
  );
  const knowledgeBaseDeleteRedux = useSelector(
    (state: RootState) => state.KnowledgeBase?.delete?.loader
  );

  const [userIdLocal, setUserIdLocal] = useState(userId);
  useEffect(() => {
    if (userId?.length) {
      setUserIdLocal(userId);
    }
  }, [userId]);
  // Fetch knowledge base data
  useEffect(() => {
    if (
      userIdLocal ||
      pathName === '/knowledgeBase' ||
      !knowledgeBaseRedux ||
      !knowledgeBaseDeleteRedux
    ) {
      dispatch(getUserKnowledgeBaseAction(userIdLocal));
    }
  }, [userIdLocal, pathName, dispatch, knowledgeBaseRedux]);

  // Set local state with Redux state
  useEffect(() => {
    setKnowledgebase(knowledgeBaseData);
  }, [knowledgeBaseData, knowledgeBaseDeleteRedux, knowledgeBaseDataRedux]);
  useEffect(() => {
    if (!knowledgeBaseDeleteRedux) {
      dispatch(getUserKnowledgeBaseAction(userId));
      setKnowledgebase(knowledgeBaseData);
    }
  }, [knowledgeBaseDeleteRedux]);

  // Handle delete action
  const handleDelete = (index: number) => {
    // const deletePayload: any = {
    //   docId: knowledgebase[index]?.docId,
    //   userId: userIdLocal,
    // };
    // console.log('del', deletePayload);
    setDocIdToDelete(knowledgebase[index]._id);
    setIsModalOpen(true);
  };

  // Confirm deletion
  const confirmDelete = () => {
    if (docIdToDelete && userId) {
      dispatch(deleteUserKnowledgeBaseAction({ docId: docIdToDelete, userId }));
      setIsModalOpen(false);
      // dispatch(getUserKnowledgeBaseAction(userId ));
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setDocIdToDelete(null);
  };

  // Handle download action (implement download logic here)
  const handleDownload = (index: number) => {
    const fileURL = knowledgebase[index].fileLocationS3;

    const link = document.createElement('a');
    link.href = fileURL;
    link.target = '_blank';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <main className="flex flex-col">
      <header className="flex gap-2.5 px-5 max-md:flex-wrap">
        <h1 className="flex-1 my-auto text-3xl font-bold px-10 leading-6 text-white">
          My Knowledge Base
        </h1>
        <button className="flex gap-2 justify-center px-14 py-3 text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]">
          <Link href="/createKnowledgeBase" className="flex px-8 py-1 gap-2">
            <span>Create Knowledge Base</span>
          </Link>
          <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
        </button>
      </header>
      <section className="mt-12 px-10">
        {knowledgebase?.map((bot, index) => (
          <ChatBotCard
            key={index}
            botCard={false}
            bot={{
              ...bot,
              docName: bot.docName || 'Default Doc Name', // Ensure these fields exist
              botURL: bot.botURL || 'Default URL', // Ensure these fields exist
            }}
            actions={{
              onDelete: () => handleDelete(index),
              onDownload: () => handleDownload(index),
            }}
          />
        ))}
      </section>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this knowledge base entry?"
      />
    </main>
  );
};

export default KnowledgeBase;
