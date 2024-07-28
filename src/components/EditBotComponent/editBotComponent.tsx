'use client';

import React, { useState,useEffect } from 'react';
import { editBotProfileAction } from '../../redux/actions/BotProfileActions'; 
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Link from 'next/link';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import { useRouter } from 'next/navigation';
import { botImageBaseUrl } from '@/utils/constant';

interface BotData {
  botId?: string;
  botName: string;
  botTone: string;
  botGreetingMessage: string;
  botSmartness: boolean;
  botIdentity: string;
  supportNumber: string;
  supportEmail: string;
  wordLimitPerMessage: any;
  userId: string;
}

const EditBotComponent: React.FC = () => {
  const botDataRedux = useSelector((state: RootState) => state.botProfile?.botProfiles?.data);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [botName, setBotName] = useState('BotWot Assistant');
  const [botTone, setBotTone] = useState('Formal Tone');
  const [botLimit, setBotLimit] = useState('50-100');
  const [botSmartnessVal, setbotSmartnessVal] = useState<any>(false);
  const [systemPrompt, setSystemPrompt] = useState(
    `You're a helpful customer support chatbot with excellent product
    knowledge. You assist customers with inquiries about our products,
    including offers app functionality troubleshooting account management
    and more.`
  );
  const [supportEmail, setSupportEmail] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState(['Assistant.pdf']);
  const [greetingMessage, setGreetingMessage] = useState(
    'Hi, How can I assist you today?'
  );
  const questionsSamples = [
    'What subscription plans do you offer?',
    'How do I upgrade or downgrade my subscription?',
    'How do I cancel my subscription?',
  ];
  const [botIdentity, setBotIdentity] = useState(
    "You're a helpful customer support chatbot with excellent product knowledge. You assist customers with inquiries about our products, including offers app functionality troubleshooting account management and more."
  );
  const [imageSrc, setImageSrc] = useState('');
  const [imagename, setImageName] = useState('');
  const [textVal, setTextVal] = useState('');
  const [filename, setFileName] = useState('');
  const [botIconType, setBotIconType] = useState('second');
  const [error, setError] = useState('');
  const [botIdToEdit, setBotIdToEdit] = useState<string | null>(null);
  const router = useRouter();

  const botSamples = [
    {
      imageUrl: `${botImageBaseUrl}bot1.svg`,
      iconType: 'bot1',
    },
    {
      imageUrl: `${botImageBaseUrl}bot2.svg`,
      iconType: 'bot2',
    },
    {
      imageUrl: `${botImageBaseUrl}bot3.svg`,
      iconType: 'bot3',
    },
    {
      imageUrl: `${botImageBaseUrl}bot4.svg`,
      iconType: 'bot4',
    },
    {
      imageUrl: `${botImageBaseUrl}bot5.svg`,
      iconType: 'bot5',
    },
    {
      imageUrl: `${botImageBaseUrl}bot6.svg`,
      iconType: 'bot6',
    },
    {
      imageUrl: `${botImageBaseUrl}bot7.svg`,
      iconType: 'bot7',
    },
    {
      imageUrl: `${botImageBaseUrl}bot8.svg`,
      iconType: 'bot8',
    },
    {
      imageUrl: `${botImageBaseUrl}bot9.svg`,
      iconType: 'bot9',
    },
    {
      imageUrl: `${botImageBaseUrl}bot10.svg`,
      iconType: 'bot10',
    },
    {
      imageUrl: `${botImageBaseUrl}bot11.svg`,
      iconType: 'bot11',
    },
    {
      imageUrl: `${botImageBaseUrl}bot12.svg`,
      iconType: 'bot12',
    },
    {
      imageUrl: `${botImageBaseUrl}bot13.svg`,
      iconType: 'bot13',
    },
    {
      imageUrl: `${botImageBaseUrl}bot14.svg`,
      iconType: 'bot14',
    },
    {
      imageUrl: `${botImageBaseUrl}bot15.svg`,
      iconType: 'bot15',
    },
  ];

  
  const handleBotSampleClick = (item: any) => {
    setImageSrc(item?.imageUrl);

    setBotIconType(item?.iconType);
  };


  // Function to handle file upload
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setImageName(file.name);
    const imageUrl = URL.createObjectURL(file); 
    setImageSrc(imageUrl);
  };

  const handleDocumentUpload = (event: any) => {
    const file = event.target.files[0];
    setFileName(file.name);
  };

  const handleContinue = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleDivClick = (text: any) => {
    setTextVal(text);
  };
  const userId = useSelector((state: RootState) => state.root?.userData?.user_id);
  const handleSave = () => {
    const botData: BotData = {
      botId: userId,
      botName,
      botTone,
      botGreetingMessage: greetingMessage,
      botSmartness: false,
      botIdentity,
      supportNumber : supportPhone,
      supportEmail :supportEmail,
      wordLimitPerMessage: botLimit,
      userId: userId,
    };
    dispatch(editBotProfileAction(botData));
    router.push('/MyChatBots');
  };
  useEffect(() => {
    if (botDataRedux) {
      const botToEdit = botDataRedux[0]; 
      if (botToEdit) {
        setBotName(botToEdit.botName);
        setBotTone(botToEdit.botTone);
        setGreetingMessage(botToEdit.botGreetingMessage);
        setbotSmartnessVal(botToEdit.botSmartness);
        setBotIdentity(botToEdit.botIdentity);
        setSupportEmail(botToEdit.supportEmail);
        setSupportPhone(botToEdit.supportNumber);
        setBotLimit(botToEdit.wordLimitPerMessage);
        // Set any other properties as needed
      }
    }
  }, [botDataRedux]);
 
  const renderStep1 = () => (
    <>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Name</label>
        <input
          type="text"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Tone</label>
        <div className="flex space-x-2">
          {['Formal Tone', 'Casual Tone', 'Enthusiastic Tone'].map((tone) => (
            <button
              key={tone}
              onClick={() => setBotTone(tone)}
              className={`px-4 py-2 rounded ${
                botTone === tone
                  ? 'bg-[#3F2181] text-white h-[Hug (38px)px] rounded-[24px]'
                  : 'text-gray-200'
              }`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot profile</label>
        <div className="grid grid-cols-5 gap-2">
          {/* Add bot profile images here */}
          {botSamples.map((item, idx) => (
            <img
              key={idx}
              src={item.imageUrl}
              alt="logo"
              width={90}
              height={80}
              onClick={() => handleBotSampleClick(item)}
            />
          ))}
        </div>
        {error.includes('icon') && (
          <div className="text-red-500 mb-4">{error}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Greeting Message</label>
        <input
          type="text"
          value={greetingMessage}
          onChange={(e) => setGreetingMessage(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
      </div>
      <div className="flex items-center mt-4 mb-6">
            <label className="block text-white mr-2">Enable Smartness</label>
            <Switch
              checked={Boolean(botSmartnessVal)}
              onChange={() => setbotSmartnessVal(!botSmartnessVal)}
            />
          </div>
        <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Identity</label>
        <textarea
          value={botIdentity}
          onChange={(e) => setBotIdentity(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
          rows={4}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">
          Bot limit per Message
        </label>
        <select
          value={botLimit}
          onChange={(e) => setBotLimit(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        >
          <option value="50-100">50-100</option>
          <option value="100-200">100-200</option>
          <option value="200-400">200-400</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Support email</label>
        <input
          type="email"
          value={supportEmail}
          onChange={(e) => setSupportEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Support Phone Number</label>
        <input
          type="tel"
          value={supportPhone}
          onChange={(e) => setSupportPhone(e.target.value)}
          placeholder="Enter Your Phone Number"
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Knowledge base</label>
        <div className="mb-4">
          <div className="relative mb-4">
            <div className="flex items-center bg-gray-800 p-2 w-full rounded-[12px] absolute ">
              <span className="mr-2">
                {filename?.length ? filename : 'Choose File'}
              </span>
              <button
                onClick={() => {
                  setImageName('');
                  setImageSrc('');
                }}
                className="ml-auto text-white"
              >
                ×
              </button>
            </div>
            <input
              type="file"
              onChange={handleDocumentUpload}
              accept="pdf/*"
              id="file-upload"
              className="absolute top-[0] opacity-0 -[12px]"
            />
          </div>
        </div>
        {/* <button className="rounded-[70px] bg-[#3F2181] mt-[66px]  text-white px-4 py-2 flex justify-center">
          <span>Upload</span>
          <FileUploadIcon />
        </button> */}
      </div>
    </>
  );

  return (
    <div className="text-white min-h-screen p-8">
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-[8px]">
            <Link href={`/MyChatBots`}>
              <ArrowBackIosNewIcon />
            </Link>
            <h1 className="text-3xl font-bold">Edit Bot</h1>
          </div>

          <div>
            <button
              onClick={step === 2 ? handleSave : handleContinue}
              className="bg-[#3F2181] w-[Hug (287px)px] rounded-[99px] text-white px-6 py-2 "
            >
              {step === 2 ? 'Save' : 'Continue'}
            </button>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="w-3/5">{renderStep1()}</div>
          <div className="w-2/5">
            <aside className="flex w-full flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-6 pt-3.5 pb-7 mt-4 w-full bg-[#171029] rounded-2xl shadow-sm text-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-center w-full max-w-full text-xl font-bold leading-7 text-black whitespace-nowrap w-[351px]">
                  <h2 className="my-auto p-5 text-white">Preview</h2>
                  <ZoomOutMapIcon style={{ color: 'white' }} />
                </div>
                {imageSrc ? (
                  <Image
                    width={200}
                    height={200}
                    src={imageSrc}
                    alt="Uploaded"
                    className="mr-2 h-200 w-200 rounded-full"
                  />
                ) : (
                  <span className="mr-2">Choose Profile</span>
                )}
                <h3 className="mt-4 text-2xl font-bold leading-9 text-center text-white">
                  {botName}
                </h3>
                <p className="mt-6 text-sm leading-6 mb-6 text-center text-neutral-400 w-[344px]">
                  I'm your customer support, ready to answer your
                  <br />
                  questions
                </p>
                <div className="flex flex-col w-full h-[17vh]">
                  {/* {questionsSamples.map((value, index) => (
                    <div
                      key={index}
                      className="clickable-div border-[1px] border-[solid] rounded-[12px] flex mt-2 mb-2 "
                      onClick={() => handleDivClick(value)}
                    >
                      <span className="p-[10px]"> {value}</span>
                    </div>
                  ))} */}
                </div>
                <input
                  type="text"
                  value={greetingMessage}
                  onChange={(e) => setGreetingMessage(e.target.value)}
                  className="w-full bg-[#171029] text-white p-2 rounded"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBotComponent;