'use client'

import * as React from "react";
import { Icon } from '@iconify/react';
import { useState } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button
    className={`px-8 py-4 text-xl font-medium text-gray-100 whitespace-nowrap bg-indigo-500 rounded-3xl ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

type ChatMessageProps = {
  sender: "user" | "assistant";
  content: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, content }) => (
  <div className={`flex gap-5 ${sender === "assistant" ? "justify-end px-6 py-6 mt-14 text-base leading-6 rounded-2xl shadow-sm bg-white bg-opacity-10" : "justify-between self-start mt-7 ml-3.5 text-base leading-6"} text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:mt-10`}>
    <img
      loading="lazy"
      src={sender === "assistant" ? "https://cdn.builder.io/api/v1/image/assets/TEMP/70aeda3f43abc58cdbb805e71e5a3fcd31393e99a847f802a71419e7386a44e6?apiKey=555c811dd3f44fc79b6b2689129389e8&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/5b9cc39eae43b8364603f83efe45988a57327bd81aa0d2b9cacddc4cb37cc743?apiKey=555c811dd3f44fc79b6b2689129389e8&"}
      alt={`${sender} avatar`}
      className="shrink-0 w-11 aspect-square"
    />
    <div className="flex-auto max-md:max-w-full">{content}</div>
  </div>
);

type ChatInputProps = {
  placeholder: string;
};

const ChatInput: React.FC<ChatInputProps> = ({ placeholder }) => (
  <div className="flex gap-5 px-px mt-7 text-base leading-7 text-neutral-300 max-md:flex-wrap">
    <div className="flex flex-auto gap-5 justify-center px-7 py-3 bg-white rounded-3xl border border-white border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <input
        type="text"
        className="flex-auto my-auto bg-transparent border-none outline-none"
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <Icon icon="fa-solid:upload" style={{ fontSize: '24px', color: '#000000' }} />
    </div>
    <Icon icon="fa-solid:paper-plane" className="shrink-0 my-auto" style={{ fontSize: '24px', color: '#7B71E2' }} />

  </div>
);

type PreviewQuestionProps = {
  question: string;
};

const PreviewQuestion: React.FC<PreviewQuestionProps> = ({ question }) => (
  <div className="justify-center items-start px-5 py-6 mt-4 max-w-full text-base leading-6 bg-white border border-solid border-zinc-300 rounded-[31px] w-[535px] max-md:px-5">
    {question}
  </div>
);

type ConversationStarterProps = {
    question: string;
    iconSrc: string;
  };
  
  const ConversationStarter: React.FC<ConversationStarterProps> = ({ question, iconSrc }) => (
    <div className="flex gap-5 text-gray-600 justify-center px-6 py-3.5 mt-6 w-full text-base leading-7 bg-gray-100 rounded-3xl border border-gray-100 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-auto my-auto">{question}</div>
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 aspect-square w-[26px]" />
    </div>
  );
  
  type KnowledgeBaseItemProps = {
    iconSrc: string;
    fileName: string;
  };
  
  const KnowledgeBaseItem: React.FC<KnowledgeBaseItemProps> = ({ iconSrc, fileName }) => (
    <div className="flex gap-5 justify-between self-center mt-11 w-full text-base leading-7 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5">
        <img loading="lazy" src={iconSrc} alt="" className="shrink-0 aspect-square rounded-[35px] w-[69px]" />
        <div className="flex-auto my-auto">{fileName}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f38115df9373ddb6d44fc82a87c2a38156b6798c1f68d845c5a995c65f4efde9?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="shrink-0 my-auto w-3.5 aspect-square fill-neutral-300" />
    </div>
  );
  

  

const BotMaker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create'); // State to track active tab
  const conversationStarters = [
    { question: "What subscription plans do you offer?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/aad13bdd4e88a17d62d0a2d1e8494118133ee0438113ccba6d5037fc9c3b25bb?apiKey=555c811dd3f44fc79b6b2689129389e8&" },
    { question: "How do I upgrade or downgrade my subscription?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/64859f3f1ee85d54a33603275a093054e7a08f6ff3268b42d4417297fe49eb0e?apiKey=555c811dd3f44fc79b6b2689129389e8&" },
    { question: "How do I cancel my subscription?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/aad13bdd4e88a17d62d0a2d1e8494118133ee0438113ccba6d5037fc9c3b25bb?apiKey=555c811dd3f44fc79b6b2689129389e8&" },
  ];
  const handleTabClick = (tab: 'create' | 'configure') => {
    setActiveTab(tab);
  };

  return (
    <main className="flex flex-col px-10 py-20 rounded-3xl shadow-sm bg-slate-950 max-md:px-5">
      <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 self-start max-md:flex-wrap">
          <Icon
            icon="bi:arrow-left" style={{ fontSize: '24px', color: '#ffffff' }}
            className="shrink-0 self-start mt-5"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccdadf5352a3257c0991b785a5614d34524944af55cc68a2c908c8cac52eeb42?apiKey=555c811dd3f44fc79b6b2689129389e8&"
            alt="BotWot Assistant Logo"
            className="shrink-0 w-14 aspect-[1.04]"
          />
          <h1 className="flex-auto my-auto text-2xl font-bold leading-9 text-white">
            BotWot Assistant
          </h1>
          <div className="justify-center self-start px-4 py-3 mt-3 text-lg leading-6 whitespace-nowrap bg-gray-100 rounded-lg text-zinc-400">
            Draft
          </div>
        </div>
        <Button>Save</Button>
      </header>

      <section className="self-center mt-7 w-full max-w-[1307px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-sm max-md:mt-10 max-md:max-w-full">
              <nav className="flex gap-0 justify-center self-start whitespace-nowrap bg-black bg-opacity-0 leading-[157%]">
                <a
                  href="#create"
                  className={`justify-center px-5 py-5 font-bold rounded ${
                    activeTab === 'create' ? 'bg-black bg-opacity-0 text-pink-600' : 'bg-opacity-0 text-neutral-300'
                  }`}
                  onClick={() => handleTabClick('create')}
                >
                  Create
                </a>
                <a
                  href="#configure"
                  className={`justify-center px-5 py-5 rounded ${
                    activeTab === 'configure' ? 'bg-black bg-opacity-0 text-pink-600' : 'bg-opacity-0 text-neutral-300'
                  }`}
                  onClick={() => handleTabClick('configure')}
                >
                  Configure
                </a>
              </nav>
              {activeTab === 'create' && (
                <>
                  <div className="flex gap-5 mt-9 leading-6 text-zinc-400 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b9cc39eae43b8364603f83efe45988a57327bd81aa0d2b9cacddc4cb37cc743?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                      alt=""
                      className="shrink-0 w-11 aspect-square"
                    />
                    <p className="flex-auto max-md:max-w-full">
                      Create a friendly customer support chatbot. You can answer questions
                      about our products.
                    </p>
                  </div>
                  <ChatMessage
                    sender="assistant"
                    content="Sure, I suggest calling this chatbot BotWot Assistant. Would that work or do you want to provide a name for your chatbot?"
                  />
                  <ChatMessage sender="user" content="Sounds great" />
                  <div className="flex flex-col py-7 pr-20 pl-4 mt-8 leading-6 rounded-2xl shadow-sm bg-white bg-opacity-10 text-zinc-400 max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 self-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67257ab4230062f78a02fbd5dbf4b603379b9ce6fcfc0948f5451477b319d2d1?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                        alt=""
                        className="shrink-0 aspect-[0.93] w-[41px]"
                      />
                      <p className="flex-auto my-auto">
                        I've created a profile picture for BotWot Assistant.
                        <br />
                        Do you like this design?
                      </p>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f4aa2fa1a08f6f1fd35e3f16caf3d1b02e990aeec20ac695666e267e48f419?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                      alt="BotWot Assistant profile picture"
                      className="self-center mt-8 max-w-full aspect-square w-[115px]"
                    />
                  </div>
                  <ChatInput placeholder="Message Custom Chat AI" />
                </>
              )}
             {activeTab === 'configure' && (
        <>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af020264e4d4e3bd20ccfea8635a3ee9ac109f4bd511034f13a53cca20377e26?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="BotWot Assistant" className="self-center max-w-full aspect-square w-[135px]" />
          <section className="flex flex-col justify-end pt-2 mt-6 w-full bg-black bg-opacity-0 max-md:max-w-full">
            <h2 className="w-full text-neutral-400 text-base font-bold leading-7 max-md:max-w-full">Name</h2>
            <div className="justify-center text-neutral-400 items-start px-5 py-5 mt-3.5 w-full text-base leading-6 rounded-3xl bg-white bg-opacity-10 max-md:max-w-full">
              BotWot Assistant
            </div>
          </section>
          <section className="mt-5 w-full max-md:max-w-full">
            <h2 className="text-base font-bold text-neutral-400 leading-7">System Prompt</h2>
            <div className="flex flex-col pt-3.5 pb-0.5 pl-3.5 mt-2 w-full text-base leading-6 rounded-3xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10 max-md:max-w-full">
              <p className="max-md:mr-0.5 max-md:max-w-full text-neutral-400">
                You're a helpful customer support chatbot with excellent product <br />
                knowledge. You assist customers with inquiries about our products, <br />
                including offers app functionality troubleshooting account management <br />
                and more.
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb14ee1bd1e24c302ee051f9830faefe42dd602e064b948c21bfb5ed0999356?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="self-end mt-20 w-3 aspect-square max-md:mt-10" />
            </div>
          </section>
          <section className="flex flex-col mt-7 w-full bg-black bg-opacity-0 max-md:max-w-full">
            <h2 className="w-full text-lg font-bold text-neutral-400 leading-7 max-md:max-w-full">Conversation starters (4)</h2>
            {conversationStarters.map((starter, index) => (
              <ConversationStarter key={index} question={starter.question} iconSrc={starter.iconSrc} />
            ))}
          </section>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ef2cea3e6277feeecf72028a4f856a2fd098a5196f9c7cfa5e1388d5a60bbc1?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="mt-6 max-w-full rounded-3xl aspect-[2.78] w-[140px]" />
          <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="text-lg font-bold leading-6">Knowledge Base</h2>
            <KnowledgeBaseItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fae1e92ffb1feaf23e360b2072bc51d4594f348affea6d089af46cb948ab831f?apiKey=555c811dd3f44fc79b6b2689129389e8&" fileName="Product's style guide.pdf" />
          </section>
          <button className="flex gap-2 justify-center self-start px-6 py-3 mt-10 text-base leading-7 text-white whitespace-nowrap bg-indigo-500 rounded-3xl max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f87054d2098ad8b3436beef10b93a6ff1f9d352bc1ca99e5a9aa10e97bffb94?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="shrink-0 aspect-square w-[29px]" />
            <span className="my-auto">Upload</span>
          </button>
        </>
      )}
            </div>
          </div>
          <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-6 pt-3.5 pb-7 mt-4 w-full bg-gray-100 rounded-2xl shadow-sm text-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between self-end max-w-full text-xl font-bold leading-7 text-black whitespace-nowrap w-[351px]">
                <h2 className="my-auto p-5">Preview</h2>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30bd15fdd4489632c223e7a24823d52aed6a1d9c38ab81c9de382066da0d3cdd?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                alt="BotWot Assistant"
                className="mt-5 max-w-full aspect-square w-[115px] max-md:mt-10"
              />
              <h3 className="mt-8 text-2xl font-bold leading-9 text-center text-black">
                BotWot Assistant
              </h3>
              <p className="mt-6 text-sm leading-6 text-center text-neutral-400 w-[344px]">
                I'm your customer support, ready to answer your
                <br />
                questions
              </p>
             
              <ChatInput placeholder="Message" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BotMaker;
