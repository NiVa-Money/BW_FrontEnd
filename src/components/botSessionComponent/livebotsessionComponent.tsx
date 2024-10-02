'use client';
import { RootState } from '@/redux/configureStore';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainLogo from '@/public/assets/mainLogo.svg';
import './botSession.css';
import { useSearchParams } from 'next/navigation';
import '../NewChat/newchat.css';
import {
    filteredSession,
    getAllSessionLive,

} from '@/redux/actions/userChatAction';
import Image from 'next/image';
import Link from 'next/link';
import withAuth from '../withAuth';
import { useEffect } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { fetchMembershipPlanRequest } from '@/redux/actions/paymentActions';
import io from 'socket.io-client';
const BotSessionComponent: React.FC = () => {


    // const socket = io('http://localhost:8000');

    const dispatch = useDispatch();
    const [isBotProfileOpen, setIsBotProfileOpen] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState<any>(false);
    const [activeBotIndex, setActiveBotIndex] = React.useState(null);
    const [botSessionsList, setBotSessionsList] = React.useState<any>([]);
    const [botId, setBotId] = React.useState<any>(null);
    const chatContainerRef = React.useRef<any>(null);
    const [sessionId, setSessionId] = React.useState<string>('');
    const [botIdLive, setBotIdLive] = React.useState<string>('');
    const [userIdLive, setBotUserIdLive] = React.useState<string>('');
    const [isChatEnabled, setIsChatEnabled] = React.useState(false);
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
        (state: RootState) => state.userChat?.allSessionLive?.data?.sessions
    );


    const [botIdLocal, setBotIdLocal] = React.useState<any>('');
    const userId: any = useSelector(
        (state: RootState) => state?.root?.userData?.user_id
    );
    const userChatMessagesRes = useSelector(
        (state: RootState) => state?.userChat?.allSessionLive
    );


    const messagesLeft = useSelector(
        (state: RootState) => state?.root?.userMetric?.data?.sessionLeft
    );


    const [chatsData, setchatsData] = React.useState<any>([]);
    const [socket, setSocket] = React.useState<any>(null);

    React.useEffect(() => {
        if (sessionId && botIdLive && userIdLive) {
            const newSocket = io("http://localhost:8000", {
                query: {
                    isWidget: "false",
                    chatRoom: sessionId,
                    botId: botIdLive,
                    userId: userIdLive,
                },
            });

            newSocket.on('message', () => {
                console.log('Connected to socket server');
            });

            newSocket.on('message', (message) => {
                console.log('Received message:', message);
                setMessages((prevMessages: any) => [...prevMessages, {
                    text: message.answer,
                    sender: 'bot'
                }]);
            });

            setSocket(newSocket);

            return () => {
                newSocket.disconnect();
            };
        }
    }, [sessionId, botIdLive, userIdLive]);
    const botIdForConnection = "66fc3bfb1f9e230493e5b75c";
    const userIdForConnection = "66fc3afa1f9e230493e5b733";
    let chatRoom;
      // Establish Socket.IO connection

    
    React.useEffect(() => {
        if (sessionId !== undefined) {
            const filteredList = userChatMessagesRes?.data?.sessions?.filter(
                (session: any) => session._id === sessionId
            );
            setchatsData(filteredList);
        }
    }, [userChatMessagesRes, sessionId]);

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
        dispatch(getAllSessionLive(data));
    };

    const sendMessage = (event: any) => {
        event.preventDefault();
        if (!newMessage.trim() || !socket) return;

        const messageObj = {
            text: newMessage,
            sender: 'user'
        };

        setMessages((prevMessages: any) => [...prevMessages, messageObj]);
        
        socket.emit('joinAdmin', {
            chatRoom: sessionId,
            userId: userIdLive,
            botId: botIdLive,
            question: newMessage
        });

        setNewMessage('');
    };

    const toggleBotProfile = () => {
        setIsBotProfileOpen(!isBotProfileOpen);
        setShowPopup(false);
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();       
            sendMessage(e);
    };

    const [leftWidth, setLeftWidth] = React.useState(71);
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
    }, [dispatch]);

    const formattedPlanName = planName ? planName.charAt(0).toUpperCase() + planName.slice(1) : '';

    React.useEffect(() => {
        if (botIdRedux.botId?.length) {
            setBotIdLocal(botIdRedux?.botId);
        }
    }, [botIdRedux?.botId]);




    React.useEffect(() => {
        if (botIdLocal?.length || pathName === '/botsession') {
            getChatHistory();
        }
    }, [botIdLocal, pathName, dispatch]);

    React.useEffect(() => {
        if (userChatSessionsRedux?.length) {
            const tempArray = userChatSessionsRedux;
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


    const handleToggle = () => {
        setIsChatEnabled(prevState => !prevState); 
    };
    const renderMessages = () => {
        return messages.map((message: any, index: number) => (
            <div key={index} className={`flex w-full mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-fit max-w-[75%] p-2 rounded-xl ${
                    message.sender === 'user' ? 'bg-[#3F2181]' : 'bg-[#2B243C]'
                }`}>
                    <span className="text-white">{message.text}</span>
                </div>
            </div>
        ));
    };
    return (
        <div className="flex h-screen">
            <div className="w-80 h-[100%] flex flex-col">
                <div className="w-full mt-8 flex justify-center items-center">
                    <Image src={mainLogo.src} alt="logo" width={90} height={80} />
                </div>
                <div className="text-white mt-[54px] mx-3">
                    <Link
                        href={'/dashboard'}
                        className={`flex items-center space-x-3 py-2 px-3 text-gray-300 hover:bg-white' 
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
                                className="flex flex-col px-3 py-3 bg-[#141218] w-[90%]"
                                onClick={() => {
                                    setBotIdLive(item.botId);
                                    setBotUserIdLive(item.userId);
                                    setSessionId(item._id);
                                    
                                }} >
                                <div className="flex justify-between items-center">
                                    <span className="cursor-pointer"> {id + 1}. Session</span>
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
                    style={{ width: `90%`, height: '100%' }}>
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
                                                    className={`mb-2 flex justify-center items-center cursor-pointer ${activeBotIndex === index ? 'bg-[#3E3556]' : ''
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
                                <div className="text-base text-gray-300">Number of bots:</div>
                                <div className="flex items-center justify-center mt-2.5 text-3xl font-semibold text-white">
                                    {botProfiles?.botProfiles?.data?.length}
                                </div>
                            </div>
                            <div className="flex w-full md:w-[10vw] text-center flex-col py-2.5 bg-transparent px-1 rounded-xl border border-white border-solid">
                                <div className="text-base text-gray-300">Messages left:</div>
                                <div className="flex items-center justify-center mt-2.5 text-3xl font-semibold text-white">
                                    {messagesLeft}
                                </div>
                            </div>
                            <div className="flex w-full md:w-[10vw] text-center flex-col py-2.5 bg-transparent px-1 whitespace-nowrap rounded-xl border border-white border-solid">
                                <div className="text-base text-gray-300">Membership:</div>
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
                                {renderMessages()}
                        </div>
                    </div>


                    <div className="flex gap-2.5 z-10 px-8 py-5 mt-2.5 w-[98%] h-[69px] text-base whitespace-nowrap bg-[#2D2640] rounded-xl text-gray-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full justify-end items-center">
                        <button
                            onClick={handleToggle}
                            className={`mr-4 px-4 py-2 rounded-full ${isChatEnabled ? 'bg-green-500' : 'bg-gray-500'} text-white`}
                        >
                            {isChatEnabled ? 'Turn off' : 'Turn on to chat now'}
                        </button>
                        {isChatEnabled && (
                            <form onSubmit={handleSubmit} className="flex items-center flex-1 ml-4">
                                <input
                                    type="text"
                                    placeholder="Enter your message..."
                                    className="flex-1 bg-transparent outline-none text-gray-300 rounded-sm"
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                />
                                <button
                                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#4A2E8B] transition-colors duration-300 ml-2"
                                    aria-label="Send message"
                                    type="submit"
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
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                <div
                    className="z-10 bg-[#CECCD3] bg-opacity-40 cursor-ew-resize"
                    style={{ width: '0.3%', height: '100vh' }}
                    onMouseDown={handleMouseDown}
                ></div>


            </div>
        </div>
    );
};

export default withAuth(BotSessionComponent);
