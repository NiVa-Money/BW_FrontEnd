'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//redux post
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { v4 as uuidv4 } from 'uuid';
import {
  createBotProfileAction,
  getUserBotProfileAction,
} from '@/redux/actions/BotProfileActions';
import Switch from '@mui/material/Switch';
import { botImageBaseUrl } from '@/utils/constant';
import { HexColorPicker } from 'react-colorful';
import { BackgroundCss } from '../BackgroundAnimation/backgroundCss';
const CreateBotComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  const [botName, setBotName] = useState('');
  const [botTone, setBotTone] = useState('Formal Tone');
  const [chatColor, setChatColor] = useState('#5D39AD'); 
  const [botProfile, setBotProfile] = useState(
    '/path/to/default/bot/image.png'
  );
  //
  const viewerRef = useRef(null);
  const imgViewerRef = useRef(null);
  const [botIdentity, setBotIdentity] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState(['Assistant.pdf']);
  const [botLimit, setBotLimit] = useState<any>(200);
  // const [botIdentity, setBotIdentity] = useState('sales');
  const [botSmartnessVal, setbotSmartnessVal] = useState<any>(false);
  const [showColorPicker, setShowColorPicker] = useState<any>(false);
  const [colorPicker, setColorPicker] = useState<any>(false);
  const [supportEmail, setSupportEmail] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [greetingMessage, setGreetingMessage] = useState(
    'Hi, How can I assist you today?'
  );
  const questionsSamples = [
    'What subscription plans do you offer?',
    'How do I upgrade or downgrade my subscription?',
    'How do I cancel my subscription?',
  ];
  const [imageSrc, setImageSrc] = useState('');
  const [imageName, setImageName] = useState('');
  const [filename, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileImage, setSelectedFileImage] = useState<File | null>(null);
  const dispatch = useDispatch();
  const [textVal, setTextVal] = useState('');
  const [error, setError] = useState('');
  const [base64Image, setBase64Image] = useState('');
  
  const [botIconType, setBotIconType] = useState('second');
  const router = useRouter();
  // Function to handle file upload

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (
      file &&
      file.size <= 2 * 1024 * 1024
    ) {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      alert('File must be a PDF and less than 2MB');
    }
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const imagePath = URL.createObjectURL(file);
    setImageSrc(imagePath)
    setImageName(file.name);
    if (
      file &&
      file.size <= 2 * 1024 * 1024
    ) {
      setBase64Image(file);
    } else {
      alert('File must be less than 2MB');
    }
  };


  const handleBotSampleClick = async(item: any) => {

    setImageSrc(item?.imageUrl)

    console.log("ImagesCustom",item.imageUrl)

    const response = await fetch(item?.imageUrl);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: blob.type });
            setSelectedFileImage(file);
   
  };



  const handleDocumentUpload = (event: any) => {
    const file = event.target.files[0];
    // setFileName(file.name);
  };
  const validateStep1 = () => {
    if (!botName) {
      setError('Please enter a bot name.');
      return false;
    }


    if (!imageSrc && !base64Image) {
    setError('Please select a bot profile or upload a custom bot profile.');
    return false;
  }


    if (!validateGreetingMessage(greetingMessage)) {
      setError('Please enter a valid greeting message.');
      return false;
    }

    setError('');
    return true;
  };

  const validateGreetingMessage = (message: string) => {
    return message.trim().length > 0;
  };

  const handleContinue = () => {
    if (validateStep1()) {
      setStep(step + 1);
    }
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

  const validatePDFFile = (file: any) => {
    const allowedExtensions = /(\.pdf)$/i;
    return allowedExtensions.exec(file.name);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    // Example: Phone number must be 10 digits
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleSave = async () => {
    if (!botName) {
      setError('Please enter a bot name.');
      return;
    }

    // if (!imageSrc) {
    //   setError('Please select a icon.');
    //   return;
    // }

    if (!selectedFile) {
      setError('please select pdf file');
      return;
    }

    if (!validateEmail(supportEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePhoneNumber(supportPhone)) {
      setError('Please enter a valid phone number with 10 digits.');
      return;
    }
  
    const formData = new FormData();
    const imageFile:any = base64Image ? base64Image : selectedFileImage
    formData.append('botName', botName);
    formData.append('botTone', botTone);
    formData.append('botColor', chatColor);
    formData.append('botGreetingMessage', greetingMessage);
    formData.append('botSmartness', botSmartnessVal);
    formData.append('botIdentity', botIdentity);
    formData.append('supportNumber', supportPhone);
    formData.append('supportEmail', supportEmail);
    formData.append('wordLimitPerMessage', botLimit);
    formData.append('docName', filename);
    formData.append('docType', knowledgeBase.length > 0 ? 'pdf' : '');
    formData.append('customBotImage', imageFile);
    formData.append('userId', userId);
    // formData.append('botURL', imageSrc);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    dispatch(createBotProfileAction(formData));
    // dispatch(getUserBotProfileAction(userId));
    router.push('/MyChatBots');
  };

  const botSamples = [
    {
      imageUrl: `/images/bot1.svg`,
    },
    {
      imageUrl: `/images/bot2.svg`,
    },
    {
      imageUrl: `/images/bot3.svg`,
    },
    {
      imageUrl: `/images/bot4.svg`,
    },
    {
      imageUrl: `/images/bot5.svg`,
    },

  ];


 

  // Path to your SVG file
 
  


  const handleColorClick = (color: any) => {
    if (color === 'rainbow') {
      setColorPicker(true);
      // setChatColor(color);
      setShowColorPicker(true);
    } else {
      setColorPicker(false);
      setChatColor(color);
      setShowColorPicker(false);
    }
  };

  const renderStep1 = () => (
    <div onClick={() => (showColorPicker ? setShowColorPicker(false) : '')}>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Name</label>
        {/* need to give name */}
        <input
          name="botName"
          type="text"
          value={botName}
          placeholder="Please enter bot name"
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
              }${chatColor === color ? 'border-4 border-gray-400' : ''}`}
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
      <div className="flex flex-col mb-4">
        <label className="block text-gray-200 mb-2">Custom Bot Profile</label>
        <div className="mb-4">
          <div className="relative mb-4">
            <div className="flex items-center bg-gray-800 p-2 w-full rounded-[12px] absolute ">
              <span className="mr-2">
                {imageName?.length ? imageName : 'Choose File'}
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
              onChange={handleFileUpload}
              ref={imgViewerRef}
              accept="image/*"
              id="file-upload-image"
              className="absolute top-[0] opacity-0 -[12px] cursor-pointer"
            />
          </div>
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
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
          placeholder="Type your instructions or questions here (e.g., 'Help me with my order' or 'What are the product features?')"
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
          rows={4}
        />
      </div>
      <div className="flex flex-col mb-4">
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
  
              id="file-upload"
              className="absolute top-[0] opacity-0 -[12px] cursor-pointer"
            />
          </div>
        </div>
        {error.includes('pdf') && (
          <div className="relative mt-5 z-10 text-red-500">{error}</div>
        )}
        <div className="flex items-center space-x-4 mt-5">

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
          min={200}
          max={700}
          type="number"
          value={botLimit}
          onChange={(e) => setBotLimit(Number(e.target.value))}
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Support Email</label>
        <input
          type="email"
          value={supportEmail}
          onChange={(e) => setSupportEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="w-full bg-[#171029] text-white p-2 rounded-[12px]"
        />
        {error.includes('email') && (
          <div className="text-red-500 mb-4">{error}</div>
        )}
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
        {error.includes('phone') && (
          <div className="text-red-500 mb-4">{error}</div>
        )}
      </div>
    </>
  );

  return (
    <div className="relative text-white h-[100%] overflow-hidden p-8">
      <BackgroundCss />
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
            <button
              onClick={step === 2 ? () => handleSave() : handleContinue}
              className="flex gap-2 justify-center px-14 py-3 text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]"
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
            <aside
              className={`flex w-full flex-col ml-5 max-md:ml-0 max-md:w-full`}
            >
              <div
                className={`flex flex-col grow items-center px-3 pt-3.5 pb-7 mt-4 w-full bg-[#171029] rounded-2xl shadow-sm text-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full`}
              >
                <div
                  className="flex gap-5 justify-between rounded items-center w-full max-w-full text-xl font-bold leading-7 text-black whitespace-nowrap"
                  style={{
                    backgroundColor:
                      chatColor !== 'rainbow' ? chatColor : undefined,
                  }}
                >
                  <h2 className="my-auto p-5 text-white">Preview</h2>

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
                  <span className="mr-2 mt-4">Choose Profile</span>
                )}{' '}

                <h3 className="mt-1 text-2xl font-bold leading-9 text-center text-white">
                  {botName}
                </h3>
                <p className="mt-6 text-sm leading-6 text-[#8D8997] mb-6 text-center w-[344px]">
                  I'm your customer support, ready to answer your
                  <br />
                  questions
                </p>
                <div className="flex flex-col w-full h-[17vh]">
                
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
