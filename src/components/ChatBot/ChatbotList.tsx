

import React, { useEffect } from 'react';

import ChatBotCard from './ChatBotCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

// import { getUserKnowledgeBaseAction } from '@/redux/actions/knowledgeBaseActions';
import { getUserBotProfileAction, deleteBotProfileServiceAction } from '@/redux/actions/BotProfileActions';
import ConfirmModal from './modalDelete';


interface ChatBot {
  _id?: any;
  botName: string;
  description: string;
  icon: string;
  botTone: string;
  file: string;
  botColor: string;
  createdAt: string;
}

const ChatBotList: React.FC = () => {

  const botDataRedux = useSelector((state: RootState) => state.botProfile?.botProfiles?.data);
  const [chatBotList, setChatBotList] = useState<ChatBot[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [botIdToDelete, setBotIdToDelete] = useState<string | null>(null);
  const userIdRex = useSelector((state: RootState) => state.root?.userData?.user_id);
  const [userIdLocal, setuserIdLocal] = useState(userIdRex)
  const dispatch = useDispatch();
  const pathName = useSelector((state: RootState) => state.root?.pathName);

  // Function to handle edit action
  const handleEdit = (index: number) => {
    // Navigate to the edit page with the botId as a query parameter
    window.location.href = `/editBot?botId=${chatBotList[index]._id}`;
  };

  // Function to handle delete action
  const handleDelete = (index: number) => {
    setBotIdToDelete(chatBotList[index]._id);
    setIsModalOpen(true);
  };

  // Confirm deletion
  const confirmDelete = () => {
    if (botIdToDelete && userIdRex) {
      dispatch(deleteBotProfileServiceAction({ botId: botIdToDelete, userIdRex }));
      setIsModalOpen(false);
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setBotIdToDelete(null);

  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const pathName = useSelector((state: RootState) => state.root?.pathName);

  // Function to handle delete action
  // const handleDelete = async (index: number) => {
  //   const botToDelete = chatBots[index];

  //   // Prepare the request data
  //   const requestData = {
  //     botId: botToDelete.botId, // Replace with actual botId from your data structure
  //     userId: 'currentUserId', // Replace with actual userId from your authentication/session
  //   };

  //   try {
  //     // Make the API request
  //     const response = await fetch('/user/deleteBotProfile', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(requestData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to delete bot');
  //     }

  //     // Assuming success, update state or perform necessary actions
  //     const updatedBots = [...chatBots];
  //     updatedBots.splice(index, 1);
  //     // Update state or perform necessary actions
  //   } catch (error) {
  //     console.error('Error deleting bot:', error);
  //     // Handle error, show message, retry logic, etc.
  //   }
  // };

  // Function to handle edit action
  const handleEdit = (index: number) => {
    // Navigate to the edit page with the botId as a query parameter
    window.location.href = `/editBot?botId=${chatBots[index].botId}`;
    console.log('navigating');

  };
  useEffect(() => {
    if (userId !== undefined) {
      if (userId?.length || pathName === '/MyChatBots') {
        dispatch(getUserBotProfileAction(userId));
      }
    }
  }, [userId, pathName]);

  useEffect(() => {
    if(userIdRex?.length ){
      setuserIdLocal(userIdRex)
    }
  }, [userIdRex])


  useEffect(() => {
    if (botDataRedux && botDataRedux.length) {
      setChatBotList(botDataRedux);
    }
  }, [botDataRedux]);

  useEffect(() => {
    // const storedUserId = localStorage.getItem('user_id');
    // const idToUse = userIdRex !== null && userIdRex !== undefined ? userIdRex : storedUserId;
    // console.log("hello", userIdRex !== null && userIdRex !== undefined ? userIdRex : storedUserId)
    if (userIdLocal || pathName === '/MyChatBots') {
      dispatch(getUserBotProfileAction(userIdLocal));
    }
  }, [userIdRex, pathName]);
  //notes - userIdRex === undefined in that case then take userIdRex from local storage if route
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
        {chatBotList.map((chatBot, index) => (
          <ChatBotCard
            key={index}
            bot={chatBot}
            actions={{
              // onDelete: () => handleDelete(index),
              onEdit: () => handleEdit(index),
            }}
          />
        ))}
      </section>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this chatbot?"
      />
    </main>
  );
};

export default ChatBotList;