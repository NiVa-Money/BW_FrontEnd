import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ExportIcon from '@mui/icons-material/Upload';
import Link from 'next/link';
import { formatedDate } from '@/utils/commonFunctions';
import Image from 'next/image';
import { blue, green } from '@mui/material/colors';

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
  botCard?: boolean;
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
const ChatBotCard: React.FC<ChatBotCardProps> = ({ bot, actions, botCard }) => {
  const botColor = bot.botColor?.toLowerCase() || 'default';
  return (
    <article className="flex gap-7 justify-between px-8 py-5 mb-6 w-full bg-gray-900 rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex gap-2.5 self-start">
          {botCard ? (
            <div className="w-[75px] h-[75px] relative overflow-hidden">
              <Image
                src={bot.botURL}
                alt={`${bot.botName} icon`}
                className="shrink-0 w-[35%]"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : null}

          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-100">{bot.botName}</h2>
            <p className="mt-1.5 text-base leading-3 text-zinc-400">
              {bot.description}
            </p>
          </div>
        </div>
        <div
          className={`flex gap-5 ${
            botCard ? 'px-20' : ''
          } mt-6 max-md:flex-wrap max-md:px-5`}
        >
          <div className="flex gap-5 justify-between pt-2.5 pr-2.5">
            {botCard ? (
              <div className="flex flex-col justify-between text-neutral-400">
                <span className="self-start ml-3 text-base max-md:ml-2.5">
                  Tone
                </span>

                <span className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-full">
                  {bot.botTone}
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col justify-between pt-3 whitespace-nowrap text-neutral-400">
            <span className="self-start ml-3 text-base max-md:ml-2.5">
              File
            </span>

            <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/216ef81b1307e56bac33de96edb3047cf27218916242cd7c47a7551edb14a929?apiKey=555c811dd3f44fc79b6b2689129389e8&"
                alt=""
                className="shrink-0 w-6 aspect-square"
              />

              <span className="my-auto">{bot.docName}</span>
            </div>
          </div>
          {botCard ? (
            <div className="flex flex-col justify-between pt-3 whitespace-nowrap text-neutral-400">
              <span className="self-start ml-2.5 text-base">Color</span>
              <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 rounded-full">
                <div
                  className={`shrink-0 w-6 h-6 ${getBackgroundColor(botColor)}`}
                />

                <span className="my-auto">{bot.botColor || ''}</span>
              </div>
            </div>
          ) : null}
          <div className="flex flex-col justify-between pt-3 whitespace-nowrap text-neutral-400">
            <span className="text-base">Created at</span>

            <span className="flex gap-2.5 pl-0 p-2.5 mt-4 text-sm leading-5 text-center rounded-full">
              {formatedDate(bot.createdAt)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        {actions?.onDelete && (
          <IconButton
            aria-label="Delete bot"
            color="error"
            onClick={actions.onDelete}
            sx={{
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'transparent', // Prevent background color change on hover
                opacity: 1, // Maintain opacity on hover
              },
            }}
          >
            <DeleteIcon />
            <span>Delete</span>
          </IconButton>
        )}
        {actions?.onEdit && (
          <IconButton
            aria-label="Edit bot"
            onClick={actions.onEdit}
            sx={{
              fontSize: '1rem',
              color: blue[300],
              '&:hover': {
                backgroundColor: 'transparent', // Prevent background color change on hover
                opacity: 1, // Maintain opacity on hover
              },
            }}
          >
            <EditIcon />
            <Link href={`/editbot`}>
              <span>Edit</span>
            </Link>
          </IconButton>
        )}
        {actions?.onDownload && (
          <button
            aria-label="Download bot"
            className="text-green-500"
            onClick={actions.onDownload}
          >
            <DownloadIcon />
            <span>Download</span>
          </button>
        )}
        {actions?.onExport && (
          <IconButton
            aria-label="Export bot"
            onClick={actions.onExport}
            sx={{
              fontSize: '1rem',
              color: green[300],
              '&:hover': {
                backgroundColor: 'transparent', // Prevent background color change on hover
                opacity: 1, // Maintain opacity on hover
              },
            }}
          >
            <ExportIcon />
            <span>Export</span>
          </IconButton>
        )}
      </div>
    </article>
  );
};

export default ChatBotCard;
