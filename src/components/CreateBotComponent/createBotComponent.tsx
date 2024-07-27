'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

//redux post
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { createUserBotProfileService, getUserBotProfileService } from '@/redux/services';
import { v4 as uuidv4 } from 'uuid';
import { createBotProfileAction, getUserBotProfileAction } from '@/redux/actions/BotProfileActions';
import Switch from '@mui/material/Switch';
import { botImageBaseUrl } from '@/utils/constant';
import { HexColorPicker } from 'react-colorful';
const CreateBotComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  const [botName, setBotName] = useState('BotWot Assistant');
  const [botTone, setBotTone] = useState('Formal Tone');
  const [chatColor, setChatColor] = useState('#3B82F6'); // Default blue color
  const [botProfile, setBotProfile] = useState(
    '/path/to/default/bot/image.png'
  );
  //
  const viewerRef = useRef(null);
  const [botIdentity, setBotIdentity] = useState(
    "You're a helpful customer support chatbot with excellent product knowledge. You assist customers with inquiries about our products, including offers app functionality troubleshooting account management and more."
  );
  const [knowledgeBase, setKnowledgeBase] = useState(['Assistant.pdf']);
  const [botLimit, setBotLimit] = useState<any>(50);
  // const [botIdentity, setBotIdentity] = useState('sales');
  const [botSmartnessVal, setbotSmartnessVal] = useState<any>(false);
  const [showColorPicker, setShowColorPicker] = useState<any>(false);
  const [supportEmail, setSupportEmail] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [greetingMessage, setGreetingMessage] = useState(
    'Hi, How can I assist you today?'
  );
  const [initiateConversation] = useState('Hi, How can I assist you today?');
  const questionsSamples = [
    'What subscription plans do you offer?',
    'How do I upgrade or downgrade my subscription?',
    'How do I cancel my subscription?',
  ];
  const [imageSrc, setImageSrc] = useState('');
  const [imagename, setImageName] = useState('');
  const [filename, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const [textVal, setTextVal] = useState('');
  const [error, setError] = useState('');

  const [botIconType, setBotIconType] = useState('second');
  const router = useRouter();
  // Function to handle file upload

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (
      file &&
      file.size <= 2 * 1024 * 1024 &&
      file.type === 'application/pdf'
    ) {
      setSelectedFile(file);
      setFileName(file.name);
      // await handleSave()
    } else {
      alert('File must be a PDF and less than 2MB');
    }
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    console.log('img', file);
    setImageName(file.name);

    // Read file as binary string
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryString = reader.result as string;
    };

    reader.readAsBinaryString(file);
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

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    // Example: Phone number must be 10 digits
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleSave = async () => {
    
    const docId = uuidv4();
    const formData = new FormData();
    formData.append('botName', botName);
    formData.append('botTone', botTone);
    formData.append('botColor', chatColor);
    formData.append('botIconType', botIconType);
    formData.append('botGreetingMessage', greetingMessage);
    formData.append('botSmartness', botSmartnessVal);
    formData.append('botIdentity', botIdentity);
    formData.append('supportNumber', supportPhone);
    formData.append('supportEmail', supportEmail);
    formData.append('wordLimitPerMessage', botLimit);
    formData.append('docName', filename);
    formData.append('docType', knowledgeBase.length > 0 ? 'pdf' : '');
    formData.append('docId', docId);
    formData.append('userId', userId);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }else {
      console.error('No file selected');
    }

    if (!validateEmail(supportEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePhoneNumber(supportPhone)) {
      setError('Please enter a valid phone number with 10 digits.');
      return;
    }

    dispatch(createBotProfileAction(formData))
    // dispatch(getUserBotProfileAction(userId));
    router.push('/MyChatBots')
  };

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

  // const handleColorClick = (color:any) => {
  //   console.log("color",color)
  //   setChatColor(color);
  //   console.log("chatcolor",chatColor)
  // };

  const handleColorClick = (color:any) => {
    if (color === 'rainbow') {
      setShowColorPicker(true);
    } else {
      setChatColor(color);
      setShowColorPicker(false);
    }
  };

  const renderStep1 = () => (
    <div onClick={()=> showColorPicker ? setShowColorPicker(false) : ''}>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Name</label>
        {/* need to give name */}
        <input
          name="botName"
          type="text"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Chat Color</label>
        <div className="flex space-x-2">
        {[
        '#3B82F6',
        '#EC4899',
        '#EAB308',
        '#4B5563',
        '#22C55E',
        'rainbow',
      ].map((color) => (
        <button
          key={color}
          onClick={() => handleColorClick(color)}
          className={`w-8 h-8 rounded-full ${
            color === 'rainbow'
              ? 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500'
              : ''
          }`}
          style={{
            backgroundColor: color !== 'rainbow' ? color : undefined,
          }}
        />
      ))}
       {showColorPicker && (
        <div className="absolute z-10 mt-2">
          <HexColorPicker color={chatColor} onChange={setChatColor} />
        </div>
      )}
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
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Custom photo</label>
        <div className="relative mb-4"></div>
        <div className="flex items-start">
          <button
            disabled
            className="rounded-[70px] bg-[#3F2181] mt-0  text-white px-4 py-2 flex justify-center"
          >
            <span>Upload</span>
            <FileUploadIcon />
          </button>
          <span className="text-white mb-2 ml-6">Coming Soon..</span>
        </div>
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
    </div>
  );

  const renderStep2 = () => (
    <>
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
        <label className="block text-gray-200 mb-2">Bot Instruction</label>
        <textarea
          value={botIdentity}
          onChange={(e) => setBotIdentity(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
          rows={4}
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
              onChange={handleFileChange}
              ref={viewerRef}
              accept="pdf/*"
              id="file-upload"
              className="absolute top-[0] opacity-0 -[12px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-[66px]">
          {/* <button className="rounded-[70px] bg-[#3F2181] text-white px-4 py-2 flex items-center justify-center">
            <span>Upload</span>
            <FileUploadIcon />
          </button> */}
          <div className="flex items-center">
            <label className="block text-white mr-2">Enable Smartness</label>
            <Switch
              checked={Boolean(botSmartnessVal)}
              onChange={() => setbotSmartnessVal(!botSmartnessVal)}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">
          Bot limit per Message
        </label>
        <input
          type="number"
          value={botLimit}
          onChange={(e) => setBotLimit(Number(e.target.value))}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
        {/* <select
          value={botLimit}
          onChange={(e) => setBotLimit(Number(e.target.value))}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        >
          <option value={50}>50-100</option>
          <option value={100}>100-200</option>
          <option value={200}>200-400</option>
        </select> */}
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Identity</label>
        <select
          value={botLimit}
          onChange={(e) => setBotSmartness(e.target.value)}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        >
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
          <option value="Support">Support</option>
        </select>
      </div> */}
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
    </>
  );

  return (
    <div className="text-white min-h-screen p-8">
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-[8px]">
            {step == 2 ? (
              <button onClick={handleBack} className="text-2xl">
                <ArrowBackIosNewIcon />
              </button>
            ) : (
              <Link href={`/MyChatBots`}>
                <ArrowBackIosNewIcon />
              </Link>
            )}
            <h1 className="text-3xl font-bold">Create Bot</h1>
          </div>
          <div className="flex items-center">
            <span className="mr-4">Step {step} of 2</span>
          </div>
          <div>
            {/* onclick => on save button need to give a object that take all the value of all fields object into a single object */}
            <button
              onClick={step === 2 ? () => handleSave() : handleContinue}
              className="bg-[#3F2181] text-white px-4 py-2 rounded"
            >
              {step === 2 ? 'Save' : 'Continue'}
            </button>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="w-3/5">
            {step === 1 ? renderStep1() : renderStep2()}
          </div>
          <div className="w-2/5">
            <aside className={`flex w-full flex-col ml-5 max-md:ml-0 max-md:w-full`}>
              <div className={`flex flex-col grow items-center px-6 pt-3.5 pb-7 mt-4 w-full rounded-2xl shadow-sm text-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full`}  style={{ backgroundColor: chatColor !== 'rainbow' ? chatColor : undefined }}>
                <div className="flex gap-5 justify-between items-center w-full max-w-full text-xl font-bold leading-7 text-black whitespace-nowrap">
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
                )}{' '}
                {/* <img
                  loading="lazy"
                  src=""
                  alt="BotWot Assistant"
                  className="mt-5 max-w-full aspect-square w-[115px] max-md:mt-10"
                /> */}
                <h3 className="mt-1 text-2xl font-bold leading-9 text-center text-white">
                  {botName}
                </h3>
                <p className="mt-6 text-sm leading-6 text-[#8D8997] mb-6 text-center w-[344px]">
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
                <div
                  className="flex items-center justify-start mt-[50px] mb-4 w-full h-[Hug (57px)px] bg-[#2B243C] rounded-[12px] p-[10px]"
                  onClick={() => {
                    setTextVal(initiateConversation);
                  }}
                >
                  {imageSrc?.length ? (
                    <Image src={imageSrc} height={50} width={50} alt="logo" />
                  ) : null}
                  <span>{initiateConversation}</span>
                </div>
                <input
                  type="text"
                  value={greetingMessage}
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
export default CreateBotComponent;
