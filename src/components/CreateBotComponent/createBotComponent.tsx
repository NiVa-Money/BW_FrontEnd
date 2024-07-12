'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CreateBotComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  const [botName, setBotName] = useState('BotWot Assistant');
  const [botTone, setBotTone] = useState('Formal Tone');
  const [chatColor, setChatColor] = useState('#3B82F6'); // Default blue color
  const [botProfile, setBotProfile] = useState(
    '/path/to/default/bot/image.png'
  );
  const [botIdentity, setBotIdentity] = useState(
    "You're a helpful customer support chatbot with excellent product knowledge. You assist customers with inquiries about our products, including offers app functionality troubleshooting account management and more."
  );
  const [knowledgeBase, setKnowledgeBase] = useState(['Assistant.pdf']);
  const [botLimit, setBotLimit] = useState('50-100');
  const [supportEmail, setSupportEmail] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [greetingMessage, setGreetingMessage] = useState(
    'Hi, How can I assist you today?'
  );

  const handleContinue = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep1 = () => (
    <>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Name</label>
        <input
          type="text"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
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
              onClick={() => setChatColor(color)}
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
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot profile</label>
        <div className="grid grid-cols-5 gap-2">
          {/* Add bot profile images here */}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Custom photo</label>
        <div className="flex items-center bg-gray-800 p-2 rounded">
          <span className="mr-2">Bot.png</span>
          <button className="ml-auto text-red-500">×</button>
        </div>
        <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
          Upload
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Greeting Message</label>
        <input
          type="text"
          value={greetingMessage}
          onChange={(e) => setGreetingMessage(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
        />
      </div>
    </>
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
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-200'
              }`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Bot Identity</label>
        <textarea
          value={botIdentity}
          onChange={(e) => setBotIdentity(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
          rows={4}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Knowledge base</label>
        <div className="flex items-center bg-gray-800 p-2 rounded">
          <span className="mr-2">Assistant.pdf</span>
          <button className="ml-auto text-red-500">×</button>
        </div>
        <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
          Upload
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">
          Bot limit per Message
        </label>
        <select
          value={botLimit}
          onChange={(e) => setBotLimit(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
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
          className="w-full bg-gray-800 text-white p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Support Phone Number</label>
        <input
          type="tel"
          value={supportPhone}
          onChange={(e) => setSupportPhone(e.target.value)}
          placeholder="Enter Your Phone Number"
          className="w-full bg-gray-800 text-white p-2 rounded"
        />
      </div>
    </>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button onClick={handleBack} className="text-2xl">
            ←
          </button>
          <h1 className="text-3xl font-bold">Create Bot</h1>
          <div className="flex items-center">
            <span className="mr-4">Step {step} of 2</span>
            <button
              onClick={
                step === 2 ? () => console.log('Save bot') : handleContinue
              }
              className="bg-indigo-600 text-white w-[287px] h-[60px] px-[32px] py-[16px] gap-[8px] custom-button"
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
              <div className="flex flex-col grow items-center px-6 pt-3.5 pb-7 mt-4 w-full bg-[#171029] rounded-2xl shadow-sm text-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between self-end max-w-full text-xl font-bold leading-7 text-black whitespace-nowrap w-[351px]">
                  <h2 className="my-auto p-5 text-white">Preview</h2>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30bd15fdd4489632c223e7a24823d52aed6a1d9c38ab81c9de382066da0d3cdd?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                  alt="BotWot Assistant"
                  className="mt-5 max-w-full aspect-square w-[115px] max-md:mt-10"
                />
                <h3 className="mt-8 text-2xl font-bold leading-9 text-center text-white">
                  BotWot Assistant
                </h3>
                <p className="mt-6 text-sm leading-6 text-white text-center text-neutral-400 w-[344px]">
                  I'm your customer support, ready to answer your
                  <br />
                  questions
                </p>
              </div>
              <div>hi</div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBotComponent;
