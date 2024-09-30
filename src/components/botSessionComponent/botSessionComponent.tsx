'use client';
import { removeAdvanceFeature } from '@/redux/actions/BotProfileActions';
import { RootState } from '@/redux/configureStore';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../public/assets/chatBotSymbol.svg';
import mainLogo from '@/public/assets/mainLogo.svg';
import './botSession.css';
import { useSearchParams } from 'next/navigation';
import '../NewChat/newchat.css';
import {
  filteredSession,
  getAdvanceFeature,
  getAllSession,
  sendUserQuestion,
  sendUserQuestionOnly,
} from '@/redux/actions/userChatAction';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart } from '@tremor/react';
import withAuth from '../withAuth';
import { useEffect } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { fetchMembershipPlanRequest } from '@/redux/actions/paymentActions';

const BotSessionComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [isBotProfileOpen, setIsBotProfileOpen] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState<any>(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState<any>(false);
  const [activeBotIndex, setActiveBotIndex] = React.useState(null);
  const [botSessionsList, setBotSessionsList] = React.useState<any>([]);
  const [botId, setBotId] = React.useState<any>(null);
  const chatContainerRef = React.useRef<any>(null);
  const [sessionId, setSessionId] = React.useState<string>('');
  const [reasonDetails, setReasonDetails] = React.useState<string>('');
  const [summary, setSummary] = React.useState<string>('');
  const [continueAdv, setContinueAdv] = React.useState<any>(false);
  const [sentimentAnalysis, setSentimentAnalysis] = React.useState<any>({});
  const [nextSteps, setNextSteps] = React.useState<string>('');
  const [newMessage, setNewMessage] = React.useState<any>('');
  const [messages, setMessages] = React.useState<any>([]);
  const [botNameDropDown, setBotNameDropDown] = React.useState<string | null>(
    null
  );
  const pathName = useSelector((state: RootState) => state.root?.pathName);

  const botProfiles = useSelector((state: RootState) => state.botProfile);
  const { planName } = useSelector((state: RootState) => state.payment);
  const botIdRedux = useSelector(
    (state: RootState) => state.userChat?.botProfileSelect?.data
  );
  const userChatSessionsRedux = useSelector(
    (state: RootState) => state.userChat?.allSession?.data?.sessions
  );
  const [botIdLocal, setBotIdLocal] = React.useState<any>('');
  const userId: any = useSelector(
    (state: RootState) => state?.root?.userData?.user_id
  );
  const userChatMessagesRes = useSelector(
    (state: RootState) => state?.userChat?.allSession
  );
  const allSession = useSelector(
    (state: RootState) => state?.userChat?.allSession
  );
  const messagesLeft = useSelector(
    (state: RootState) => state?.root?.userMetric?.data?.sessionLeft
  );

  const advanceFeature = useSelector(
    (state: RootState) => state?.userChat?.advanceFeature
  );
  const [chatsData, setchatsData] = React.useState<any>([]);
  const [chartData, setChartData] = React.useState([
    {
      name: 'Negative',
      'Customer Sentiment': 0,
    },
    {
      name: 'Positive',
      'Customer Sentiment': 0,
    },
    {
      name: 'Neutral',
      'Customer Sentiment': 0,
    },
  ]);

  const searchParams = useSearchParams() as URLSearchParams;
  useEffect(() => {
    const name = searchParams.get('botName');

    if (name) {
      const decodedName = decodeURIComponent(name);
      setBotNameDropDown(decodedName);
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleBotClick = (index: any, botId: any, botName: any) => {
    setActiveBotIndex(index);
    const data = {
      filteredSessions: [],
      sessionId: null,
    };
    dispatch(filteredSession(data));
    setBotId(botId);
    setIsBotProfileOpen(!isBotProfileOpen);
  };

  const getChatHistory = () => {
    const data = {
      userId: userId,
      botId: botIdLocal,
    };
    dispatch(getAllSession(data));
  };

  const botSesssion = () => {
    if (sessionId) {
      dispatch(getAdvanceFeature(sessionId));
      setIsPopupOpen(false);
      setContinueAdv(false);
    } else {
      setContinueAdv(true);
    }
  };

  const sendMessage = (event: any) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      dispatch(sendUserQuestionOnly({ text: newMessage, sender: 'user' }));
      setNewMessage('');
      const data = {
        userId: userId,
        sessionId: sessionId,
        question: newMessage,
        subscriptionPlanId: 'subscriptionPlanId1',
        botId: botId,
      };
      dispatch(sendUserQuestion(data));
    }
  };

  const toggleBotProfile = () => {
    setIsBotProfileOpen(!isBotProfileOpen);
    setShowPopup(false);
  };
  const openPopup = () => setIsPopupOpen(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!botId) {
      setShowPopup(true);
    } else {
      sendMessage(e);
    }
  };
  const [leftWidth, setLeftWidth] = React.useState(71); // Initial width of left div in percentage
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: any) => {
    if (!isDragging) return;

    const container: any = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const newLeftWidth =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;

    if (newLeftWidth >= 50 && newLeftWidth <= 70) {
      setLeftWidth(newLeftWidth);
    }
  };

  React.useEffect(() => {
    // Fetch membership plan on component mount
    dispatch(fetchMembershipPlanRequest());
  } , []);

  const formattedPlanName = planName ? planName.charAt(0).toUpperCase() + planName.slice(1) : 'Free';

  React.useEffect(() => {
    if (sentimentAnalysis) {
      const parseValue = (value: any) => {
        return value ? parseFloat(value.replace('%', '')) : 0;
      };
      setChartData([
        {
          name: 'Negative',
          'Customer Sentiment': Number(parseValue(sentimentAnalysis?.negative)),
        },
        {
          name: 'Positive',
          'Customer Sentiment': Number(parseValue(sentimentAnalysis?.positive)),
        },
        {
          name: 'Neutral',
          'Customer Sentiment': Number(parseValue(sentimentAnalysis?.neutral)),
        },
      ]);
    }
  }, [sentimentAnalysis]);

  const dataFormatter = (value: any) => `${value}%`;

  React.useEffect(() => {
    if (botIdRedux.botId?.length) {
      setBotIdLocal(botIdRedux?.botId);
    }
  }, [botIdRedux?.botId]);

  React.useEffect(() => {
    const data = {
      filteredSessions: [],
      sessionId: null,
    };
    dispatch(removeAdvanceFeature());
    dispatch(filteredSession(data));
    if (botIdLocal?.length) {
      getChatHistory();
    }
  }, []);
  React.useEffect(() => {
    if (sessionId !== undefined) {
      const filteredList = userChatMessagesRes?.data?.sessions?.filter(
        (session: any) => session._id === sessionId
      );
      setchatsData(filteredList);
    }
  }, [userChatMessagesRes, sessionId]);
  React.useEffect(() => {
    setReasonDetails(advanceFeature?.data?.data?.cause);
    setSummary(advanceFeature?.data?.data?.summary);
    setSentimentAnalysis(advanceFeature?.data?.data?.sentiments);
    const formattedNextSteps = advanceFeature?.data?.data?.nextStep.replace(
      /\n/g,
      '<br />'
    );
    setNextSteps(formattedNextSteps);
  }, [advanceFeature]);

  React.useEffect(() => {
    if (botIdLocal?.length || pathName === '/botsession') {
      getChatHistory();
    }
  }, [botIdLocal, pathName, dispatch]);
  React.useEffect(() => {
    if (userChatSessionsRedux?.length) {
      const tempArray = userChatSessionsRedux;
      // tempArray.forEach((sessionData: any) => {
      //   let totalMessages = 0;

      //   sessionData.sessions.forEach((session: any) => {
      //     if (session.question) totalMessages++;
      //     if (session.answer) totalMessages++;
      //   });

      //   sessionData.totalMessages = totalMessages;
      // });

      setBotSessionsList(tempArray);
    }
  }, [userChatSessionsRedux]);

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex h-screen">
      <div className="w-80 h-[100%] flex flex-col">
        <div className="w-full mt-8 flex justify-center items-center">
          <Image src={mainLogo.src} alt="logo" width={90} height={80} />
        </div>
        <div className="text-white mt-[54px] mx-3">
          <Link
            href={'/dashboard'}
            className={`flex items-center space-x-3 py-2 px-3 text-[#AEB9E1] hover:bg-white' 
          }`}
          >
            <span>
              <i className="fas fa-gauge-high mr-3" />
              Dashboard
            </span>
          </Link>
        </div>
        <div className="text-white mt-[8px] flex justify-center items-center">
          <span className="text-[#6C6779]">Sessions History</span>
        </div>
        <div className="text-white m-auto w-full h-full mx-3 my-3 overflow-scroll flex flex-col">
          {botSessionsList?.map((item: any, id: any) => (
            <>
              <div
                key={id}
                className="flex flex-col px-3 py-3 bg-[#141218] w-[90%] "
                onClick={() => {
                  setSessionId(item._id);
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="cursor-pointer"> {id + 1}.Session</span>
                  <div className="relative">
                    <ChatBubbleOutlineIcon />
                    <span className="absolute left-[15px] bg-[#141118] rounded-[100%] p-[4px] -top-[10px]">
                      {item.totalMessages}
                    </span>
                  </div>
                </div>
                <span className="w-[100%] left-[43px] cursor-pointer ">
                  {item.sessions[item.sessions.length - 1]?.question}
                </span>
              </div>
              <div className="w-[90%] bg-[#ffffffb3] h-[2px]"></div>
            </>
          ))}
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative w-[100%] h-[100vh] flex justify-end items-center pl-10 py-10 bg-[#0B031E] min-h-screen max-md:px-5 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="absolute inset-0">
          <svg
            className="moving-svg"
            viewBox="0 0 1480 1774"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1440"
              height="1287"
              transform="translate(20 20)"
              fill="#0B031E"
            />
            <g filter="url(#filter0_f_180_721)" className="">
              <circle
                className="moving-circle"
                cx="300"
                cy="1022"
                r="252"
                fill="#C00DC8"
              />
            </g>
            <g filter="url(#filter1_f_180_721)" className="">
              <circle
                className="moving-circle"
                cx="1285"
                cy="150"
                r="252"
                fill="#C00DC8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_180_721"
                x="-66"
                y="270"
                width="1504"
                height="1504"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_180_721"
                />
              </filter>
              <filter
                id="filter1_f_180_721"
                x="533"
                y="-480"
                width="1504"
                height="1504"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_180_721"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col justify-between z-10"
          style={{ width: `${leftWidth}%`, height: '100%' }}
        >
          <div className="flex  justify-center items-center gap-1 h-[125px] max-md:flex-wrap max-md:max-w-full mb-5">
            <div className="flex flex-col self-stretch relative"></div>

            <div className="flex gap-3 flex-1 justify-center items-center">
              <div className="flex flex-col self-stretch relative">
                <div
                  className="flex gap-2.5 justify-center p-2.5 text-xl font-medium text-white rounded-t-lg cursor-pointer"
                  onClick={toggleBotProfile}
                >
                  <div>Bot Profile</div>
                </div>
                <div className="flex w-[8.5vw] h-[60px] justify-center items-center py-2.5 bg-[#1E1533] overflow-y-scroll  rounded p-1 border-gray-500 border-solid text-white">
                  <div>{botNameDropDown}</div>
                </div>
                {isBotProfileOpen && (
                  <div>
                    {botProfiles?.botProfiles?.data?.map(
                      (bot: any, index: any) => (
                        <div
                          key={index}
                          className={`mb-2 flex justify-center items-center cursor-pointer ${
                            activeBotIndex === index ? 'bg-[#3E3556]' : ''
                          }`}
                          onClick={() =>
                            handleBotClick(index, bot._id, bot.botName)
                          }
                        ></div>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="flex w-full md:w-[10vw] text-center flex-col bg-transparent py-2.5 px-1 rounded-xl border border-white border-solid">
                <div className="text-base text-[#AEB9E1]">Number of bots:</div>
                <div className="flex items-center justify-center mt-2.5 text-3xl font-semibold text-white">
                  {botProfiles?.botProfiles?.data?.length}
                </div>
              </div>
              <div className="flex w-full md:w-[10vw] text-center flex-col py-2.5 bg-transparent px-1 rounded-xl border border-white border-solid">
                <div className="text-base text-[#AEB9E1]">Messages left:</div>
                <div className="flex items-center justify-center mt-2.5 text-3xl font-semibold text-white">
                  {messagesLeft}
                </div>
              </div>
              <div className="flex w-full md:w-[10vw] text-center flex-col py-2.5 bg-transparent px-1 whitespace-nowrap rounded-xl border border-white border-solid">
                <div className="text-base text-[#AEB9E1]">Membership:</div>
                <div className="flex items-center justify-center mt-2.5 text-3xl font-semibold text-white">
                  {formattedPlanName}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full max-w-[930px] max-md:mt-10 max-md:max-w-full h-[61vh] rounded-lg relative">
            <div
              ref={chatContainerRef}
              className="flex flex-col gap-5 max-md:gap-0 h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
            >
              {chatsData &&
                chatsData[0]?.sessions?.map((message: any, index: any) => (
                  <div className="flex w-full mb-4" key={index}>
                    <div className="w-full max-md:w-full flex flex-col">
                      <div className="w-full flex justify-end py-2 gap-2 rounded text-white mb-2 text-right">
                        <span
                          className="block w-fit p-2 bg-[#3F2181] rounded-xl"
                          dangerouslySetInnerHTML={{
                            __html: message?.question
                              ?.replace(/\n/g, '<br />')
                              .replace(/\*(.*?)\*/g, '<b>$1</b>'),
                          }}
                        ></span>
                      </div>
                      <div className="w-full py-2 gap-2 rounded text-white text-left">
                        <span
                          className="block w-fit p-2 bg-[#2B243C] rounded-xl"
                          dangerouslySetInnerHTML={{
                            __html: message?.answer
                              ?.replace(/\n/g, '<br />')
                              .replace(/\*(.*?)\*/g, '<b>$1</b>'),
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {showPopup && (
            <div className="popup z-10">
              <p>Please select a bot profile</p>
            </div>
          )}
          <div className="flex gap-2.5 z-10 px-8 py-5 mt-2.5 w-[98%] h-[69px] text-base whitespace-nowrap bg-[#2D2640] rounded-xl max-w-[930px] text-[#AEB9E1] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <form onSubmit={handleSubmit} className="Input-container">
              <input
                type="text"
                placeholder="Enter your message..."
                className="flex-1 bg-transparent outline-none"
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
                disabled
              />
              <button
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#4A2E8B] transition-colors duration-300"
                aria-label="Send message"
                disabled
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
        <div
          className="z-10 bg-[#CECCD3] bg-opacity-40 cursor-ew-resize"
          style={{ width: '0.3%', height: '100vh' }}
          onMouseDown={handleMouseDown}
        ></div>
        <div
          className="flex justify-center items-center z-10"
          style={{ width: `${100 - leftWidth}%`, height: '100%' }}
        >
          <div className="w-[65%] h-[87%] adv-border-radius bg-[#FFFFFF] bg-opacity-10">
            <div className="mt-4 ">
              <h4 className="text-center custom-purple">Chat Analysis</h4>
            </div>
            <div className="p-5 ">
              <p className="text-center text-white">
                Instantly sort your chats into positive, negative, or neutral
                vibes—discover the tone of your interactions with ease!
              </p>
            </div>
            <div className="button-container">
              <button
                className="custom-button bg-[#FFFFFF] bg-opacity-10"
                onClick={openPopup}
              >
                Reason & Details
              </button>
              {reasonDetails ? (
                <div className="w-[80%] flex justify-center items-center mt-2 border-4 border-[#DB88DB] py-4 px-10 text-base  text-white">
                  {reasonDetails}
                </div>
              ) : (
                ''
              )}
              <button
                className="custom-button bg-[#FFFFFF] bg-opacity-10"
                onClick={openPopup}
              >
                Summary
              </button>
              {summary ? (
                <div className="w-[80%] flex justify-center items-center mt-2 border-4 border-[#DB88DB] py-4 px-10 text-base  text-white">
                  {summary}
                </div>
              ) : (
                ''
              )}
              <button
                className="custom-button bg-[#FFFFFF] bg-opacity-10 mt-5"
                onClick={openPopup}
              >
                Customer Sentiment
              </button>
              {sentimentAnalysis ? (
                <div className="w-[80%] flex justify-center items-center mt-2 border-4 border-[#DB88DB] text-base">
                  <BarChart
                    className="h-[150px] custom-bar-chart"
                    data={chartData}
                    index="name"
                    categories={['Customer Sentiment']}
                    colors={['blue']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={48}
                  />
                </div>
              ) : (
                ''
              )}
              <button
                className="custom-button bg-[#FFFFFF] bg-opacity-10 mt-5"
                onClick={openPopup}
              >
                Feedback / AI Recommendations
              </button>
              {nextSteps ? (
                <div
                  className="w-[80%] flex justify-center items-center mt-2 border-4 border-[#DB88DB] py-4 px-10 text-base text-white"
                  dangerouslySetInnerHTML={{
                    __html: nextSteps,
                  }}
                />
              ) : (
                ''
              )}
            </div>
            <div className="flex justify-center items-center mt-6 mb-3">
              <div>
                <Image src={icon} alt="logo" width={170} height={170} />
              </div>
            </div>
          </div>
        </div>
        {isPopupOpen && (
          <div className="popup-overlay">
            <div
              className="popup-content relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0">
                <svg
                  className="moving-svg"
                  viewBox="0 0 1480 660"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="1440"
                    height="1"
                    transform="translate(20 20)"
                    fill="#0B031E"
                  />
                  <g filter="url(#filter0_f_180_721)" className="">
                    <circle
                      className="moving-circle"
                      cx="300"
                      cy="1022"
                      r="252"
                      fill="#C00DC8"
                    />
                  </g>
                  <g filter="url(#filter1_f_180_721)" className="">
                    <circle
                      className="moving-circle"
                      cx="1285"
                      cy="150"
                      r="252"
                      fill="#C00DC8"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_180_721"
                      x="-66"
                      y="270"
                      width="1504"
                      height="1504"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="250"
                        result="effect1_foregroundBlur_180_721"
                      />
                    </filter>
                    <filter
                      id="filter1_f_180_721"
                      x="533"
                      y="-480"
                      width="1504"
                      height="1504"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="250"
                        result="effect1_foregroundBlur_180_721"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center z-10">
                <div className="flex bg-black rounded adv-fe-popup flex-col items-center text-white justify-center text-center">
                  <span>
                    You will lose 5 messages once you use advanced features.
                  </span>
                  <span>Still want to continue?</span>
                </div>
                {continueAdv && (
                  <div className="text-red-500">
                    Please select Session or chat first then use
                  </div>
                )}
                <button className="Continue-btn mt-4" onClick={botSesssion}>
                  Continue
                </button>
                <button
                  className="Continue-btn mt-4"
                  onClick={() => {
                    setIsPopupOpen(false);
                    setContinueAdv(false);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(BotSessionComponent);
