'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  editBotProfileAction,
  getUserBotProfileAction,
} from '../../redux/actions/BotProfileActions';
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
import { HexColorPicker } from 'react-colorful';
import { useSearchParams } from 'next/navigation';
import withAuth from '../withAuth';

interface BotData {
  botId?: string;
  botName: string;
  botColor: string;
  botTone: string;
  botGreetingMessage: string;
  botSmartness: boolean;
  botIdentity: string;
  supportNumber: string;
  supportEmail: string;
  wordLimitPerMessage: any;
  userId: string;

  docType: string;
  _id: any;
}
interface KnowledgeBaseFile {
  _id: string;
  botId: string;
  createdAt: string;
  docName: string;
  docType: string;
  fileLocationS3: string;
  status: string;
  updatedAt: string;
  userId: string;
  knowledgeBaseId: string;
}

const EditBotComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const [botId, setBotId] = useState<string | null>(null);
  useEffect(() => {
    if (searchParams) {
      const id = searchParams.get('id');
      if (id) {
        setBotId(id);
        console.log('Bot ID from URL:', id);
      } else {
        console.log('ID not found in search params');
      }
    } else {
      console.log('SearchParams is null');
    }
  }, [searchParams]);

  const botDataRedux = useSelector(
    (state: RootState) => state.botProfile?.botProfiles?.data
  );

  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );

  const knowledgeBaseData = useSelector(
    (state: RootState) => state.KnowledgeBase?.user?.data
  );

  console.log('knowledgeBaseData', knowledgeBaseData);

  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [botName, setBotName] = useState('BotWot Assistant');
  const [botTone, setBotTone] = useState('Formal Tone');
  const [botLimit, setBotLimit] = useState<any>();
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
  const [imageName, setImageName] = useState('');
  const [textVal, setTextVal] = useState('');
  const [filename, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const [knowledgeBaseIdDoc, setknowledgeBaseIdDoc] = useState<string>('');
  const [botImageS3Urldata, setbotImageS3Url] = useState<string>('');
  const [botIconType, setBotIconType] = useState('second');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const viewerRef = useRef(null);
  const [error, setError] = useState('');
  const [showColorPicker, setShowColorPicker] = useState<any>(false);
  const [colorPicker, setColorPicker] = useState<any>(false);
  const [botIdToEdit, setBotIdToEdit] = useState<string | null>(null);
  const router = useRouter();
  const [chatColor, setChatColor] = useState('#3B82F6');
  const [base64Image, setBase64Image] = useState('');
  const [selectedFileImage, setSelectedFileImage] = useState<File | null>(null);
  const [docName, setDocName] = useState<string>('');
  const [docType, setDocType] = useState<string>('');
  const [knowledgeBaseId, setKnowledgeBaseId] = useState<string>('');
  const imgViewerRef = useRef(null);

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
  ];

  useEffect(() => {
    if (botDataRedux && botId) {
      const botToEdit = botDataRedux.find(
        (bot: { _id: string }) => bot._id === botId
      );
      if (botToEdit) {
        setFileType(botToEdit.docType);
        setknowledgeBaseIdDoc(botToEdit._id);
        setbotImageS3Url(botToEdit.botURL);
      }
    }
  }, [botDataRedux, botId]);
  

  const handleBotSampleClick = async (item: any) => {
    setImageSrc(item?.imageUrl);
    const response = await fetch(item?.imageUrl);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });
    setSelectedFileImage(file);
  };

  // Function to handle file upload
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setImageName(file.name);
    if (file && file.size <= 10 * 1024 * 1024) {
      setBase64Image(file);
    } else {
      alert('File must be less than 10MB');
    }
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

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

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
      alert('File must be a PDF and less than 10MB');
    }
  };

  const selectedKnowledgeBase = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedFile = knowledgeBaseData.find(
      (file: KnowledgeBaseFile) => file.fileLocationS3 === event.target.value
    );

    if (selectedFile) {
      // Update the state with the selected file's data
      setDocName(selectedFile.docName);
      setDocType(selectedFile.docType);
      setKnowledgeBaseId(selectedFile._id);
    }
  };


  const handleSave = async () => {
    if (botId && userId) {
      const formData = new FormData();
      const imageFile: any =
        base64Image || selectedFileImage || botImageS3Urldata;
      formData.append('botId', botId);
      formData.append('botName', botName);
      formData.append('botTone', botTone);
      formData.append('botColor', chatColor);
      formData.append('customBotImage', imageFile);
      formData.append('botGreetingMessage', greetingMessage);
      formData.append('botSmartness', botSmartnessVal);
      formData.append('botIdentity', botIdentity);
      formData.append('supportNumber', supportPhone);
      formData.append('supportEmail', supportEmail);
      formData.append('wordLimitPerMessage', botLimit);
      formData.append('docName', docName);
      formData.append('docType',  docType);
      formData.append('docId',  knowledgeBaseId);
      formData.append('userId', userId);

      dispatch(editBotProfileAction(formData));

      router.push('/mychatbots');
    } else {
      console.error('Bot ID is not available.');
    }
  };

  useEffect(() => {
    if (searchParams) {
      const id = searchParams.get('id');
      if (id) {
        setBotId(id);
        console.log('Bot ID from URL:', id);
      } else {
        console.log('ID not found in search params');
      }
    } else {
      console.log('SearchParams is null');
    }
  }, [searchParams]);

  useEffect(() => {
    if (botDataRedux && botId) {
      const botToEdit = botDataRedux.find(
        (bot: { _id: string }) => bot._id === botId
      );
      if (botToEdit) {
        setBotName(botToEdit.botName);
        setChatColor(botToEdit.botColor);
        setBotTone(botToEdit.botTone);
        setGreetingMessage(botToEdit.botGreetingMessage);
        setbotSmartnessVal(botToEdit.botSmartness);
        setBotIdentity(botToEdit.botIdentity);
        setFileName(botToEdit.docName);
        setSupportEmail(botToEdit.supportEmail);
        setSupportPhone(botToEdit.supportNumber);
        setBotLimit(botToEdit.wordLimitPerMessage);
        const botSample = botSamples.find(
          (bot) => bot.iconType === botToEdit?.botIconType
        );
        if (botSample) {
          setImageSrc(botSample.imageUrl);
        }
      }
    }
  }, [botDataRedux, botId]);

  const renderStep1 = () => (
    <div onClick={() => (showColorPicker ? setShowColorPicker(false) : '')}>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Name</label>
        <input
          type="text"
          value={botName}
          onChange={(e) => {
            setBotName(e.target.value);
            console.log(e.target.value);
          }}
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
      <div className="flex flex-col mb-4">
        {/* <label className="block text-gray-200 mb-2">
          Select Knowledge Base
        </label>
        <div className="relative mb-4">
          <select
            className="block appearance-none w-full bg-gray-800 text-white p-2 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select a file
            </option>
            {knowledgeBaseData &&
              knowledgeBaseData.map((file: KnowledgeBaseFile) => (
                <option key={file._id} value={file.fileLocationS3}>
                  {file.docName}
                </option>
              ))}
          </select>
        </div> */}
        <label className="block text-gray-200 mb-2">
          Select Knowledge Base
        </label>
        <div className="relative mb-4">
          {knowledgeBaseData && knowledgeBaseData.length > 0 ? (
            <select
              className="block appearance-none w-full bg-gray-800 text-white p-2 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
              onChange={selectedKnowledgeBase}
            >
              <option value="" disabled>
                Select a file
              </option>
              {knowledgeBaseData.map(
                (file: {
                  knowledgeBaseId: React.Key | null | undefined;
                  fileLocationS3:
                    | string
                    | number
                    | readonly string[]
                    | undefined;
                  docName:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                }) => (
                  <option
                    key={file.knowledgeBaseId}
                    value={file.fileLocationS3}
                  >
                    {file.docName}
                  </option>
                )
              )}
            </select>
          ) : (
            <Link href="/createknowledgebase" legacyBehavior>
              <a className="flex px-8 py-1 gap-2 bg-blue-500 text-white rounded-[12px] hover:bg-blue-600">
                <span>Create Knowledge Base</span>
              </a>
            </Link>
          )}
        </div>
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
        <label className="block text-gray-200 mb-2">Support email</label>
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
    <div className="text-white min-h-screen p-8">
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-[8px]">
            {step == 2 ? (
              <button onClick={handleBack} className="text-2xl">
                <ArrowBackIosNewIcon />
              </button>
            ) : (
              <Link href={`/mychatbots`}>
                <ArrowBackIosNewIcon />
              </Link>
            )}
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
          <div className="w-3/5">
            {step === 1 ? renderStep1() : renderStep2()}
          </div>
          <div className="w-2/5">
            <aside className="flex w-full flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div
                className={`flex flex-col grow items-center px-3 rounded pt-3.5 pb-7 mt-4 w-full bg-[#171029] rounded-2xl shadow-sm text-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full`}
              >
                <div
                  className="flex gap-5 justify-between rounded items-center w-full max-w-full text-xl font-bold leading-7 text-black whitespace-nowrap"
                  style={{
                    backgroundColor:
                      chatColor !== 'rainbow' ? chatColor : undefined,
                  }}
                >
                  <h2 className="my-auto p-5 text-white">Preview</h2>
                  <div className="p-5">
                    <ZoomOutMapIcon style={{ color: 'white' }} />
                  </div>
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
                  <span className="mr-2 mt-5">Choose Profile</span>
                )}
                <h3 className="mt-4 text-2xl font-bold leading-9 text-center text-white">
                  {botName}
                </h3>
                <p className="mt-6 text-sm leading-6 mb-6 w-full text-center text-center text-neutral-400 w-[344px]">
                  I'm your customer support, ready to answer your questions
                </p>
                <div className="flex flex-col w-full h-[17vh]"></div>
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

export default withAuth(EditBotComponent);
