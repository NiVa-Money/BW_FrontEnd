// import React from 'react';
// import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// interface ChatBot {
//   name: string;
//   description: string;
//   icon: string;
//   tone?: string;
//   file: string;
//   color?: string;
//   createdAt: string;
// }

// interface ChatBotCardProps {
//   bot: ChatBot;
// }

// const ChatBotCard: React.FC<ChatBotCardProps> = ({ bot }) => {
//   const botColor = bot.color?.toLowerCase() || 'default';

//   return (
//     <article className="flex gap-7 justify-between px-8 py-5 mb-6 w-full bg-gray-900 rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-col max-md:max-w-full">
//         <div className="flex gap-2.5 self-start">
//           <img loading="lazy" src={bot.icon} alt={`${bot.name} icon`} className="shrink-0 aspect-[1.04] w-[70px]" />
//           <div className="flex flex-col">
//             <h2 className="text-xl font-medium text-gray-100">{bot.name}</h2>
//             <p className="mt-1.5 text-base leading-3 text-zinc-400">{bot.description}</p>
//           </div>
//         </div>
//         <div className="flex gap-5 px-20 mt-6 max-md:flex-wrap max-md:px-5">
//           <div className="flex gap-5 justify-between pt-2.5 pr-2.5">
//             <div className="flex flex-col whitespace-nowrap">
//               <div className="flex gap-5 justify-between text-base text-neutral-400">
//                 <span>Icon</span>
//                 <span>Name</span>
//               </div>
//               <div className="flex gap-5 justify-between mt-7 text-sm leading-5 text-gray-100">
//                 <img loading="lazy" src={bot.icon} alt={`${bot.name} small icon`} className="shrink-0 aspect-[0.97] w-[35px]" />
//                 <span className="my-auto">{bot.name}</span>
//               </div>
//             </div>
//             <div className="flex flex-col self-start text-neutral-400">
//               <span className="self-start ml-3 text-base max-md:ml-2.5">Tone</span>
//               <span className="mt-8 text-sm leading-5 text-center">{bot.tone}</span>
//             </div>
//           </div>
//           <div className="flex flex-col justify-end pt-3 whitespace-nowrap text-neutral-400">
//             <span className="self-start ml-2.5 text-base">File</span>
//             <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-xl">
//               <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/216ef81b1307e56bac33de96edb3047cf27218916242cd7c47a7551edb14a929?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="shrink-0 w-6 aspect-square" />
//               <span className="my-auto">{bot.file}</span>
//             </div>
//           </div>
//           <div className="flex flex-col justify-end pt-3 whitespace-nowrap text-neutral-400">
//             <span className="self-start ml-2.5 text-base">Color</span>
//             <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-full">
//               <div className={`shrink-0 w-6 h-6 ${botColor === 'blue' ? 'bg-blue-500' : botColor === 'fuchsia' ? 'bg-fuchsia-600' : 'bg-gray-500'}`} />
//               <span className="my-auto">{bot.color || ''}</span>
//             </div>
//           </div>
//           <div className="flex flex-col justify-end pt-4 pb-2.5 text-neutral-400">
//             <span className="text-base">Created at</span>
//             <span className="mt-7 text-sm leading-5 text-center">{bot.createdAt}</span>
//           </div>
//         </div>
//       </div>
//       {/* <div className="flex gap-6">
//         <button aria-label="Delete bot" className="text-red-500">
//           <FontAwesomeIcon icon={faTrash} />
//           <span>Delete</span>
//         </button>
//         <button aria-label="Edit bot" className="text-blue-500">
//           <FontAwesomeIcon icon={faPencilAlt} />
//           <span>Edit</span>
//         </button>
//       </div> */}
//     </article>
//   );
// }

// export default ChatBotCard;

import React from 'react';
import { faPencilAlt, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ChatBot {
  name: string;
  description: string;
  icon: string;
  tone?: string;
  file: string;
  color?: string;
  createdAt: string;
}

interface ChatBotCardProps {
  bot: ChatBot;
  actions?: {
    onDelete?: () => void;
    onEdit?: () => void;
    onDownload?: () => void;
  };
}

const ChatBotCard: React.FC<ChatBotCardProps> = ({ bot, actions }) => {
  const botColor = bot.color?.toLowerCase() || 'default';

  return (
    <article className="flex gap-7 justify-between px-8 py-5 mb-6 w-full bg-gray-900 rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex gap-2.5 self-start">
          <img loading="lazy" src={bot.icon} alt={`${bot.name} icon`} className="shrink-0 aspect-[1.04] w-[70px]" />
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-100">{bot.name}</h2>
            <p className="mt-1.5 text-base leading-3 text-zinc-400">{bot.description}</p>
          </div>
        </div>
        <div className="flex gap-5 px-20 mt-6 max-md:flex-wrap max-md:px-5">
          <div className="flex gap-5 justify-between pt-2.5 pr-2.5">
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex gap-5 justify-between text-base text-neutral-400">
                <span>Icon</span>
                <span>Name</span>
              </div>
              <div className="flex gap-5 justify-between mt-7 text-sm leading-5 text-gray-100">
                <img loading="lazy" src={bot.icon} alt={`${bot.name} small icon`} className="shrink-0 aspect-[0.97] w-[35px]" />
                <span className="my-auto">{bot.name}</span>
              </div>
            </div>
            <div className="flex flex-col self-start text-neutral-400">
              <span className="self-start ml-3 text-base max-md:ml-2.5">Tone</span>
              <span className="mt-8 text-sm leading-5 text-center">{bot.tone}</span>
            </div>
          </div>
          <div className="flex flex-col justify-end pt-3 whitespace-nowrap text-neutral-400">
            <span className="self-start ml-2.5 text-base">File</span>
            <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-xl">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/216ef81b1307e56bac33de96edb3047cf27218916242cd7c47a7551edb14a929?apiKey=555c811dd3f44fc79b6b2689129389e8&" alt="" className="shrink-0 w-6 aspect-square" />
              <span className="my-auto">{bot.file}</span>
            </div>
          </div>
          <div className="flex flex-col justify-end pt-3 whitespace-nowrap text-neutral-400">
            <span className="self-start ml-2.5 text-base">Color</span>
            <div className="flex gap-2.5 p-2.5 mt-4 text-sm leading-5 text-center rounded-full">
              <div className={`shrink-0 w-6 h-6 ${botColor === 'blue' ? 'bg-blue-500' : botColor === 'fuchsia' ? 'bg-fuchsia-600' : 'bg-gray-500'}`} />
              <span className="my-auto">{bot.color || ''}</span>
            </div>
          </div>
          <div className="flex flex-col justify-end pt-4 pb-2.5 text-neutral-400">
            <span className="text-base">Created at</span>
            <span className="mt-7 text-sm leading-5 text-center">{bot.createdAt}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        {actions?.onDelete && (
          <button aria-label="Delete bot" className="text-red-500" onClick={actions.onDelete}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete</span>
          </button>
        )}
        {actions?.onEdit && (
          <button aria-label="Edit bot" className="text-blue-500" onClick={actions.onEdit}>
            <FontAwesomeIcon icon={faPencilAlt} />
            <span>Edit</span>
          </button>
        )}
        {actions?.onDownload && (
          <button aria-label="Download bot" className="text-green-500" onClick={actions.onDownload}>
            <FontAwesomeIcon icon={faDownload} />
            <span>Download</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default ChatBotCard;

