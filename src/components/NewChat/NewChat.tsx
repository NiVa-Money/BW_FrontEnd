'use client';
import { getUserBotProfileAction } from '@/redux/actions/BotProfileActions';
import { RootState } from '@/redux/configureStore';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './newchat.css';
import {
  getAllSession,
  sendUserQuestion,
  sendUserQuestionOnly,
} from '@/redux/actions/userChatAction';

const NewChatComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [isBotProfileOpen, setIsBotProfileOpen] = React.useState(false);
  const [isChatHistoryOpen, setIsChatHistoryOpen] = React.useState(false);
  const [activeBotIndex, setActiveBotIndex] = React.useState(null);
  const [sessionId, setSessionId] = React.useState<any>('');
  const [botId, setBotId] = React.useState<any>(null);
  const chatContainerRef = React.useRef<any>(null);
  const [question, setQuestion] = React.useState<any>({
    text: 'tell me about this pdf',
  });
  const [newMessage, setNewMessage] = React.useState<any>('');
  const [messages, setMessages] = React.useState<any>([]);

  const handleBotClick = (index: any, botId: any) => {
    setActiveBotIndex(index);
    console.log('Selected Bot ID:', botId);
    setBotId(botId);
    setIsBotProfileOpen(!isBotProfileOpen);
  };
  const botProfiles = useSelector((state: RootState) => state.botProfile);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const userChatMessagesRes = useSelector(
    (state: RootState) => state?.userChat?.sessionChat
  );
  const allSession = useSelector(
    (state: RootState) => state?.userChat?.allSession
  );

  // React.useEffect(()=>{
  //   console.log("userChatMessages",userChatMessagesRes)
  //   setSessionId(userChatMessagesRes?.data?.sessionId);
  //   if (userChatMessagesRes?.data?.chats && userChatMessagesRes?.data.chats.length > 0) {
  //     // const apiResponseMessage = {
  //     //   text: userChatMessagesRes.data.chats[userChatMessagesRes.data.chats.length-1].answer,
  //     //   sender: "other",
  //     // };
  //     // const apiResponseMessageQues = {
  //     //   text: userChatMessagesRes?.data?.chats[userChatMessagesRes.data.chats.length-1]?.question,
  //     //   sender: "user",
  //     // };
  //     // setMessages([...messages, apiResponseMessage , apiResponseMessageQues]);
  //     const newMessages = userChatMessagesRes.data.chats.flatMap((chat:any) => [
  //       {
  //         text: chat.question,
  //         sender: "user",
  //       },
  //       {
  //         text: chat.answer,
  //         sender: "other",
  //       }
  //     ]);

  //     setMessages([...newMessages]);
  //   }
  // },[userChatMessagesRes])

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const getChatHistory = () => {
    console.log('userId', userId);
    dispatch(getAllSession(userId));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log('botProfiles', newMessage);
    if (newMessage.trim() !== '') {
      console.log('botProfiles', newMessage);

      setQuestion(newMessage);
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      dispatch(sendUserQuestionOnly({ text: newMessage, sender: 'user' }));
      setNewMessage('');
      let data = {
        userId: userId,
        sessionId: sessionId,
        question: newMessage,
        subscriptionPlanId: 'subscriptionPlanId1',
        botId: botId,
      };
      console.log('data user chat', data);
      // sendDataToBackend(data);
      dispatch(sendUserQuestion(data));
    }
  };

  const toggleBotProfile = () => {
    setIsBotProfileOpen(!isBotProfileOpen);
  };

  const toggleChatHistory = () => {
    setIsChatHistoryOpen(!isChatHistoryOpen);
  };

  const getSession = (sessionId:any) => {
    const filteredSessions = allSession.data.sessions.filter((session :any)=> session._id === sessionId);
    console.log("filterSession",filteredSessions)
  }

  React.useEffect(() => {
    console.log('allSession', allSession.data.sessions);
  }, [allSession]);

  React.useEffect(() => {
    console.log('userChatMessagesRes', userChatMessagesRes);
    setSessionId(userChatMessagesRes?.sessionId);
    console.log('newMessage', newMessage);
    console.log('botProfiles', botProfiles);
  }, [userChatMessagesRes]);

  return (
    <div className="flex flex-col justify-end items-center px-20 py-12 bg-[#0B031E] min-h-screen max-md:px-5">
      <div className="flex gap-5 items-start w-full max-w-[905px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch relative">
          <div
            className="flex gap-2.5 justify-center p-2.5 text-xl font-medium bg-[#2D2640] text-white rounded-t-lg cursor-pointer"
            onClick={toggleBotProfile}
          >
            <div>Bot Profile</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfab022e56ef6ff0a58045a291327eda3e871d2c6c2576eee117363bc12ecf0?apiKey=555c811dd3f44fc79b6b2689129389e8&"
              className={`shrink-0 aspect-square w-[30px] transition-transform duration-300 ${
                isBotProfileOpen ? 'rotate-180' : ''
              }`}
              alt="Bot Profile"
            />
          </div>
          {isBotProfileOpen && (
            <div className="flex flex-col py-2 text-base tracking-wide leading-6 bg-[#1E1533] rounded-b-lg shadow max-w-[280px] absolute top-full left-0 right-0 z-10">
              {botProfiles?.botProfiles?.data?.map((bot: any, index: any) => (
                <div
                  key={index}
                  className={`mb-2  cursor-pointer ${
                    activeBotIndex === index ? 'bg-[#3E3556]' : ''
                  }`}
                  onClick={() => handleBotClick(index, bot._id)}
                >
                  <div className="justify-center px-3 py-2 text-white">
                    {bot.botName}
                  </div>
                  {/* <div className="mt-2 px-3 text-gray-400">MarketBot</div> */}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col self-stretch relative">
          <div
            className="flex gap-2.5 justify-center p-2.5 text-xl font-medium bg-[#2D2640] text-white rounded-t-lg cursor-pointer"
            onClick={toggleChatHistory}
          >
            <div>
              <button onClick={getChatHistory}>Chat History</button>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfab022e56ef6ff0a58045a291327eda3e871d2c6c2576eee117363bc12ecf0?apiKey=555c811dd3f44fc79b6b2689129389e8&"
              className={`shrink-0 aspect-square w-[30px] transition-transform duration-300 ${
                isChatHistoryOpen ? 'rotate-180' : ''
              }`}
              alt="Chat History"
            />
          </div>
          {isChatHistoryOpen && (
            <div className="flex w-full">
              <div className="flex flex-col py-2 text-base tracking-wide leading-6 bg-[#1E1533] rounded-b-lg shadow max-w-[280px] absolute top-full left-0 right-0 z-10">
                {allSession.data.sessions?.map(
                  (session: any, index: number) => (
                    <div className="px-3 py-2 text-white" key={index}>
                      <div><button onClick={()=>getSession(session._id)}>session Chat {index+1}</button></div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col py-2.5 px-4 rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Number of bots:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">
              {botProfiles?.botProfiles?.data?.length}
            </div>
          </div>
          <div className="flex flex-col py-2.5 px-4 rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Messages left:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">9765</div>
          </div>
          <div className="flex flex-col py-2.5 px-4 whitespace-nowrap rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Membership:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">
              Basic
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-80 w-full max-w-[930px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-24 text-xl font-medium text-white max-md:mt-10 max-md:max-w-full">
              <div className="justify-center p-2.5 bg-[#2D2640] rounded-xl max-md:max-w-full">
                Because it couldn't find the right "match"!
              </div>
              <div className="justify-center p-2.5 mt-32 bg-[#2D2640] rounded-xl max-md:mt-10 max-md:max-w-full">
                To optimize its path-finding algorithm! 🤖🚗
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xl font-medium text-white max-md:max-w-full">
              <div className="justify-center p-2.5 bg-[#5D39AD] rounded-xl max-md:max-w-full">
                Hey Botwot, why did the chatbot break up with its algorithm?
              </div>
              <div className="justify-center self-end p-2.5 mt-24 max-w-full bg-[#5D39AD] rounded-xl w-[446px] max-md:mt-10 max-md:max-w-full">
                Haha, good one! But seriously, why did the chatbot cross the
                road?
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-10 w-full max-w-[930px] max-md:mt-10 max-md:max-w-full h-[350px] rounded-lg relative">
        <div
          ref={chatContainerRef}
          className="flex flex-col gap-5 max-md:gap-0 h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
        >
          {userChatMessagesRes?.data?.map((message: any, index: any) => (
            <div className="flex w-full" key={index}>
              <div
                className={`flex ${
                  message?.sender === 'user' ? 'justify-end' : 'justify-start'
                } w-full`}
              >
                <div
                  className={`${
                    message?.sender === 'user'
                      ? 'text-right ml-auto'
                      : 'text-left mr-auto'
                  } max-md:w-full`}
                >
                  <div
                    className={`${
                      message?.sender === 'user'
                        ? 'text-xl font-medium text-white'
                        : 'grow text-xl font-medium text-white max-md:mt-10'
                    }`}
                  >
                    <div
                      className={`${
                        message?.sender === 'user'
                          ? 'p-2.5 bg-[#5D39AD] rounded-xl'
                          : 'p-2.5 bg-[#2D2640] rounded-xl chat-box-size'
                      }`}
                    >
                      {message?.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2.5 px-8 py-5 mt-2.5 w-full text-base whitespace-nowrap bg-[#2D2640] rounded-xl max-w-[930px] text-gray-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <form onSubmit={handleSubmit} className="Input-container">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 bg-transparent outline-none"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button
            className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#5D39AD] rounded-full hover:bg-[#4A2E8B] transition-colors duration-300"
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white transform rotate-45"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewChatComponent;
