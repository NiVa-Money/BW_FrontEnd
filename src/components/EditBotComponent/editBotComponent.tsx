'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBotProfileAction } from '../../redux/actions/BotProfileActions'; // Adjust the import path according to your project structure
import Image from 'next/image';
import bot1 from '@/public/assets/bot1.svg';
import bot2 from '@/public/assets/bot2.svg';
import bot3 from '@/public/assets/bot3.svg';
import bot4 from '@/public/assets/bot4.svg';
import bot5 from '@/public/assets/bot5.svg';
import bot6 from '@/public/assets/bot6.svg';
import bot7 from '@/public/assets/bot7.svg';
import bot8 from '@/public/assets/bot8.svg';
import bot9 from '@/public/assets/bot9.svg';
import bot10 from '@/public/assets/bot10.svg';
import bot11 from '@/public/assets/bot11.svg';
import bot12 from '@/public/assets/bot12.svg';
import bot13 from '@/public/assets/bot13.svg';
import bot14 from '@/public/assets/bot14.svg';
import bot15 from '@/public/assets/bot15.svg';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Link from 'next/link';


interface BotData {
  botId: string;
  botName: string;
  botTone: string;
  botGreetingMessage: string;
  botSmartness: boolean;
  botIdentity: string;
  supportNumber: string;
  supportEmail: string;
  wordLimitPerMessage: string;
  userId: string;
}

const EditBotComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [botName, setBotName] = useState('BotWot Assistant');
  const [botTone, setBotTone] = useState('Formal Tone');
  const [botLimit, setBotLimit] = useState('50-100');
  const [chatColor, setChatColor] = useState('#3B82F6'); // Default blue color
  const [botProfile, setBotProfile] = useState('/path/to/default/bot/image.png');
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

  // Function to handle file upload
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setImageName(file.name);
    const imageUrl = URL.createObjectURL(file); // Creates a blob URL
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

  const handleSave = () => {
    const botData: BotData = {
      botId: '6669870ee3403661eda80e58',
      botName,
      botTone,
      botGreetingMessage: greetingMessage,
      botSmartness: false,
      botIdentity,
      supportNumber : supportPhone,
      supportEmail,
      wordLimitPerMessage: botLimit,
      userId: '6669870ee3403661eda80e58',
    };

    dispatch(editBotProfileAction(botData));
    // You can also redirect or show a success message here if needed
  };

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
      {/* <div className="mb-4">
        <label className="block text-gray-200 mb-2">System Prompt</label>
        <textarea
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
          rows={4}
        />
      </div> */}
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
      {/* <div className="flex flex-col w-full">
        <label className="block text-gray-200 mb-2">
          Conversation Starters(4)
        </label>

        {questionsSamples.map((value, index) => (
          <div
            key={index}
            className="clickable-div border-[1px] border-[solid] bg-[#171029] rounded-[12px] flex mt-2 mb-2 "
            onClick={() => handleDivClick(value)}
          >
            <span className="p-[10px]"> {value}</span>
          </div>
        ))}
      </div> */}
      {/* <button className="rounded-[70px] bg-[#3F2181] mt-4  text-white px-4 py-2 flex justify-center">
        <span>Add</span>
        <AddIcon />
      </button> */}
      {/* <div className="mb-4 mt-4">
        <label className="block text-gray-200 mb-2">Knowledge Base</label>
        <div className="relative mb-8 mt-8">
          <div className="flex items-center bg-[#171029] p-2 w-full rounded-[12px] absolute ">
            <span className="mr-2">
              {fileName?.length ? fileName : 'Choose File'}
            </span>
            <button
              onClick={() => {
                setFileName('');
              }}
              className="ml-auto text-white"
            >
              ×
            </button>
          </div>
          <input
            type="file"
            onChange={handleFileUpload}
            accept="image/*"
            id="file-upload"
            className="absolute top-[0] opacity-0 "
          />
        </div>
        <button className="rounded-[70px] bg-[#3F2181] mt-18  text-white px-4 py-2 flex justify-center">
          <span>Upload</span>
          <FileUploadIcon />
        </button>
      </div> */}
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
        <button className="rounded-[70px] bg-[#3F2181] mt-[66px]  text-white px-4 py-2 flex justify-center">
          <span>Upload</span>
          <FileUploadIcon />
        </button>
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
                <div className="flex flex-col w-full">
                  {questionsSamples.map((value, index) => (
                    <div
                      key={index}
                      className="clickable-div border-[1px] border-[solid] rounded-[12px] flex mt-2 mb-2 "
                      onClick={() => handleDivClick(value)}
                    >
                      <span className="p-[10px]"> {value}</span>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={textVal}
                  onChange={(e) => setTextVal(e.target.value)}
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
