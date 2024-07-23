'use client';
import { getUserBotProfileAction } from '@/redux/actions/BotProfileActions';
import { RootState } from '@/redux/configureStore';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './newchat.css';
import {
  filteredSession,
  getAllSession,
  sendUserQuestion,
  sendUserQuestionOnly,
} from '@/redux/actions/userChatAction';
import withAuth from '../withAuth';

const NewChatComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [isBotProfileOpen, setIsBotProfileOpen] = React.useState(false);
  const [isChatHistoryOpen, setIsChatHistoryOpen] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState<any>(false);
  const [activeBotIndex, setActiveBotIndex] = React.useState(null);
  // const [sessionId, setSessionId] = React.useState<any>('');
  const [botId, setBotId] = React.useState<any>(null);
  const chatContainerRef = React.useRef<any>(null);
  const [sessionId, setSessionId] = React.useState<string>('');
  const [question, setQuestion] = React.useState<any>({
    text: 'tell me about this pdf',
  });
  const [newMessage, setNewMessage] = React.useState<any>('');
  const [messages, setMessages] = React.useState<any>([]);

  const botProfiles = useSelector((state: RootState) => state.botProfile);
  const userId = useSelector(
    (state: RootState) => state?.root?.userData?.user_id
  );
  const userChatMessagesRes = useSelector(
    (state: RootState) => state?.userChat?.sessionChat
  );
  const allSession = useSelector(
    (state: RootState) => state?.userChat?.allSession
  );
  const messagesLeft = useSelector(
    (state: RootState) => state?.root?.userMetric?.data?.sessionLeft
  );

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleBotClick = (index: any, botId: any) => {
    setActiveBotIndex(index);
    // console.log('allSession', allSession.data.sessions);
    const data = {
      filteredSessions: [],
      sessionId: null,
    };
    dispatch(filteredSession(data));
    // console.log('Selected Bot ID:', botId);
    setBotId(botId);
    // setIsBotProfileOpen(!isBotProfileOpen);
  };

  const getChatHistory = () => {
    // console.log('userId', userId);
    dispatch(getAllSession(userId));
  };

  const sendMessage = (event: any) => {
    event.preventDefault();
    // console.log('botProfiles', newMessage);
    if (newMessage.trim() !== '') {
      // console.log('botProfiles', newMessage);

      setQuestion(newMessage);
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      dispatch(sendUserQuestionOnly({ text: newMessage, sender: 'user' }));
      setNewMessage('');
      // console.log("sessionId",sessionId)
      const data = {
        userId: userId,
        sessionId: sessionId,
        question: newMessage,
        subscriptionPlanId: 'subscriptionPlanId1',
        botId: botId,
      };
      // console.log('data user chat', data);
      // sendDataToBackend(data);
      dispatch(sendUserQuestion(data));
    }
  };

  const toggleBotProfile = () => {
    setIsBotProfileOpen(!isBotProfileOpen);
    setShowPopup(false);
  };

  const toggleChatHistory = () => {
    setIsChatHistoryOpen(!isChatHistoryOpen);
    setShowPopup(false);
  };

  const getSession = (sessionId: any) => {
    // setSessionId(sessionId)
    const filteredSessions = allSession?.data?.sessions?.filter(
      (session: any) => session._id === sessionId
    );
    // console.log("filterSession",filteredSessions[0].sessions)
    const data = {
      filteredSessions,
      sessionId,
    };
    dispatch(filteredSession(data));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!botId) {
      setShowPopup(true);
    } else {
      sendMessage(e);
    }
  };

  React.useEffect(() => {
    // console.log('allSession', allSession.data.sessions);
  }, [allSession]);

  React.useEffect(() => {
    // console.log('messagesLeft', messagesLeft);
    // console.log('allSession', allSession.data.sessions);
    const data = {
      filteredSessions: [],
      sessionId: null,
    };
    dispatch(filteredSession(data));
  }, []);

  React.useEffect(() => {
    // console.log('sessionId useEffect', sessionId);
  }, [sessionId]);

  React.useEffect(() => {
    // console.log('userChatMessagesRes', userChatMessagesRes);
    setSessionId(userChatMessagesRes?.sessionId);
    // console.log('newMessage', newMessage);
    // console.log('botProfiles', botProfiles);
  }, [userChatMessagesRes]);

  return (
    <div className="relative flex flex-col justify-end items-center px-10 py-10 bg-[#0B031E] min-h-screen max-md:px-5 overflow-hidden">
       <div className="absolute inset-0">
        <svg className="moving-svg" viewBox="0 0 1480 1774" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="1287" transform="translate(20 20)" fill="#0B031E" />
          <g filter="url(#filter0_f_180_721)" className=''>
            <circle className="moving-circle" cx="300" cy="1022" r="252" fill="#C00DC8" />
          </g>
          <g filter="url(#filter1_f_180_721)" className=''>
            <circle className="moving-circle" cx="1285" cy="150" r="252" fill="#C00DC8" />
          </g>
          <defs>
            <filter id="filter0_f_180_721" x="-66" y="270" width="1504" height="1504" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_180_721" />
            </filter>
            <filter id="filter1_f_180_721" x="533" y="-480" width="1504" height="1504" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_180_721" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="flex gap-1 max-md:flex-wrap max-md:max-w-full mb-12 z-10">
        <div className="flex flex-col self-stretch relative">
          <div
            className="flex gap-2.5 justify-center p-2.5 text-xl font-medium text-white rounded-t-lg cursor-pointer"
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
          {/* <div
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
                {allSession?.data?.sessions?.map(
                  (session: any, index: number) => (
                    <div className="px-3 py-2 text-white" key={index}>
                      <div><button onClick={()=>{
                        getSession(session._id)
                        setSessionId(session._id)
                      }}>session Chat {index+1}</button></div>
                    </div>
                  )
                )}
              </div>
            </div>
          )} */}
        </div>
        <div className="flex gap-3 flex-1 justify-between">
          <div className="flex w-[8vw] flex-col bg-[#B21888] py-2.5 px-1 rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Number of bots:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">
              {botProfiles?.botProfiles?.data?.length}
            </div>
          </div>
          <div className="flex w-[8vw] flex-col py-2.5 bg-[#2BCD94] px-1 rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Messages left:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">
              {messagesLeft}
            </div>
          </div>
          <div className="flex w-[8vw] flex-col py-2.5 bg-[#3F2181] px-1 whitespace-nowrap rounded-xl border border-gray-700 border-solid">
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

      {showPopup && (
        <div className="popup">
          <p>Please select a bot profile</p>
          {/* Add more bot options as needed */}
        </div>
      )}
      <div className="flex gap-2.5 z-10 px-8 py-5 mt-2.5 w-[98%] h-[69px] text-base whitespace-nowrap bg-[#2D2640] rounded-xl max-w-[930px] text-gray-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <form onSubmit={handleSubmit} className="Input-container">
          <input
            type="text"
            placeholder="Enter your message..."
            className="flex-1 bg-transparent outline-none"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#4A2E8B] transition-colors duration-300"
            aria-label="Send message"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0708 1.92961L9.40683 12.5936M2.27149 7.23529L18.8774 1.47406C19.9 1.11927 20.8811 2.1004 20.5264 3.12303L14.7651 19.7289C14.3704 20.8665 12.773 20.8977 12.3342 19.7764L9.69727 13.0377C9.56558 12.7011 9.29931 12.4348 8.96275 12.3031L2.22402 9.66625C1.10268 9.22746 1.13387 7.62997 2.27149 7.23529Z"
                stroke="#EEEEF0"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withAuth(NewChatComponent);
