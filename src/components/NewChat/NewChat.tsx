'use client'
import * as React from "react";

const NewChatComponent: React.FC = () => {
  const [isBotProfileOpen, setIsBotProfileOpen] = React.useState(false);
  const [isChatHistoryOpen, setIsChatHistoryOpen] = React.useState(false);

  const toggleBotProfile = () => {
    setIsBotProfileOpen(!isBotProfileOpen);
  };

  const toggleChatHistory = () => {
    setIsChatHistoryOpen(!isChatHistoryOpen);
  };

  return (
    <div className="flex flex-col justify-end items-center px-20 py-12 bg-[#0B031E] min-h-screen max-md:px-5">
      <div className="flex gap-5 items-start w-full max-w-[905px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch relative">
          <div 
            className="flex gap-2.5 justify-center p-2.5 text-xl font-medium bg-[#2D2640] text-white rounded-t-lg cursor-pointer"
            onClick={toggleBotProfile}
          >
            <div>Bot Profile</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfab022e56ef6ff0a58045a291327eda3e871d2c6c2576eee117363bc12ecf0?apiKey=555c811dd3f44fc79b6b2689129389e8&"
              className={`shrink-0 aspect-square w-[30px] transition-transform duration-300 ${isBotProfileOpen ? 'rotate-180' : ''}`}
              alt="Bot Profile"
            />
          </div>
          {isBotProfileOpen && (
            <div className="flex flex-col py-2 text-base tracking-wide leading-6 bg-[#1E1533] rounded-b-lg shadow max-w-[280px] absolute top-full left-0 right-0 z-10">
              <div className="justify-center px-3 py-2 text-white bg-[#3E3556]">
                TalentTalker
              </div>
              <div className="mt-2 px-3 text-gray-400">MarketBot</div>
            </div>
          )}
        </div>
        <div className="flex flex-col self-stretch relative">
          <div 
            className="flex gap-2.5 justify-center p-2.5 text-xl font-medium bg-[#2D2640] text-white rounded-t-lg cursor-pointer"
            onClick={toggleChatHistory}
          >
            <div>Chat History</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfab022e56ef6ff0a58045a291327eda3e871d2c6c2576eee117363bc12ecf0?apiKey=555c811dd3f44fc79b6b2689129389e8&"
              className={`shrink-0 aspect-square w-[30px] transition-transform duration-300 ${isChatHistoryOpen ? 'rotate-180' : ''}`}
              alt="Chat History"
            />
          </div>
          {isChatHistoryOpen && (
            <div className="flex flex-col py-2 text-base tracking-wide leading-6 bg-[#1E1533] rounded-b-lg shadow max-w-[280px] absolute top-full left-0 right-0 z-10">
              <div className="px-3 py-2 text-white">Recent Chat 1</div>
              <div className="px-3 py-2 text-white">Recent Chat 2</div>
              <div className="px-3 py-2 text-white">Recent Chat 3</div>
            </div>
          )}
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col py-2.5 px-4 rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Number of bots:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">2</div>
          </div>
          <div className="flex flex-col py-2.5 px-4 rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Messages left:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">9765</div>
          </div>
          <div className="flex flex-col py-2.5 px-4 whitespace-nowrap rounded-xl border border-gray-700 border-solid">
            <div className="text-base text-gray-300">Membership:</div>
            <div className="mt-2.5 text-3xl font-semibold text-white">Basic</div>
          </div>
        </div>
      </div>
      <div className="mt-80 w-full max-w-[930px] max-md:mt-10 max-md:max-w-full">
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
      </div>
      <div className="flex gap-2.5 px-8 py-5 mt-2.5 w-full text-base whitespace-nowrap bg-[#2D2640] rounded-xl max-w-[930px] text-gray-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <input
          type="text"
          placeholder="Message"
          className="flex-1 bg-transparent outline-none"
        />
        <button
          className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#5D39AD] rounded-full hover:bg-[#4A2E8B] transition-colors duration-300"
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white transform rotate-45"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NewChatComponent;