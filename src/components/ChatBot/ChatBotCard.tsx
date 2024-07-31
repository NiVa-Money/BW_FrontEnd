import React from 'react';
import {
  faPencilAlt,
  faTrash,
  faDownload,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface ChatBot {
  botId?: string;
  botName: string;
  description: string;
  icon: string;
  botTone?: string;
  file: string;
  botColor?: string;
  createdAt: string;
  docName: string;
  botURL: string;
}

interface ChatBotCardProps {
  bot: ChatBot;
  actions?: {
    onDelete?: () => void;
    onEdit?: () => void;
    onDownload?: () => void;
    onExport?: () => void;
  };
}

const getBackgroundColor = (color: string): string => {
  switch (color.toLowerCase()) {
    case '#3b82f6':
      return 'bg-blue-500';
    case '#ec4899':
      return 'bg-pink-500';
    case '#eab308':
      return 'bg-yellow-500';
    case '#4b5563':
      return 'bg-gray-500';
    case '#22c55e':
      return 'bg-green-500';
    case 'rainbow':
      return 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500';
    default:
      return 'bg-gray-500';
  }
};
const ChatBotCard: React.FC<any> = ({ bot, actions }) => {
  const botColor = bot.botColor?.toLowerCase() || 'default';
  console.log('File name', bot.botURL);
  return (
    <article className="flex gap-7 justify-between px-8 py-5 mb-6 w-full bg-gray-900 rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex gap-2.5 self-start">
          <img
            loading="lazy"
            src={bot.botURL}
            alt={`${bot.botName} icon`}
            className="shrink-0 w-[35%]"
          />

          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-100">{bot.botName}</h2>
            <p className="mt-1.5 text-base leading-3 text-zinc-400">
              {bot.description}
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-20 mt-6 max-md:flex-wrap max-md:px-5">
          <div className="flex gap-5 justify-between pt-2.5 pr-2.5">
            <div className="flex flex-col whitespace-nowrap">
              {/* <div className="flex gap-5 justify-between text-base text-neutral-400">
                <span>Icon</span>
                <span>Name</span>
              </div> */}
              <div className="flex gap-5 justify-between mt-7 text-sm leading-5 text-gray-100">
                {/* <img loading="lazy" src={bot.icon} alt={`${bot.botName} small icon`} className="shrink-0 aspect-[0.97] w-[35px]" /> */}
                {/* <span className="my-auto">{bot.botName}</span> */}
              </div>
            </div>
            <div className="flex flex-col justify-between text-neutral-400">
              <span className="self-start ml-3 text-base max-md:ml-2.5">
                Tone
              </span>

              <span className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-full">
                {bot.botTone}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-3 whitespace-nowrap text-neutral-400">
            <span className="self-start ml-3 text-base max-md:ml-2.5">
              File
            </span>
            {/* <span className="self-start ml-2.5 text-base">File</span> */}

            <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/216ef81b1307e56bac33de96edb3047cf27218916242cd7c47a7551edb14a929?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                alt=""
                className="shrink-0 w-6 aspect-square"
              />

              <span className="my-auto">{bot.docName}</span>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-3 whitespace-nowrap text-neutral-400">
            <span className="self-start ml-2.5 text-base">Color</span>
            <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 rounded-full">
              <div
                className={`shrink-0 w-6 h-6 ${getBackgroundColor(botColor)}`}
              />

              <span className="my-auto">{bot.botColor || ''}</span>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-3 whitespace-nowrap text-neutral-400">
            <span className="text-base">Created at</span>

            <span className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-full">
              {bot.createdAt}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        {actions?.onDelete && (
          <button
            aria-label="Delete bot"
            className="text-red-500"
            onClick={actions.onDelete}
          >
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete</span>
          </button>
        )}
        {actions?.onEdit && (
          <button
            aria-label="Edit bot"
            className="text-blue-500"
            onClick={actions.onEdit}
          >
            <FontAwesomeIcon icon={faPencilAlt} />
            <Link href={`/editBot`}>
              <span>Edit</span>
            </Link>
          </button>
        )}
        {actions?.onDownload && (
          <button
            aria-label="Download bot"
            className="text-green-500"
            onClick={actions.onDownload}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download</span>
          </button>
        )}
        {actions?.onExport && (
          <button
            aria-label="Export bot"
            className="text-green-500"
            onClick={actions.onExport}
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span>Export</span>
          </button>
        )}
      </div>
    </article>
  );
};

export default ChatBotCard;
