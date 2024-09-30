// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { useDispatch, useSelector } from 'react-redux';
// import ClearConversation from './clearConversation/clearConversation';
// import ModalDialog from './ModalDialog';
// import mainLogo from '@/public/assets/mainLogo.svg';
// import { RootState } from '@/redux/configureStore';
// import {
//   getUserBotProfileAction,
//   removeAdvanceFeature,
//   removeFromReduxbot,
// } from '@/redux/actions/BotProfileActions';
// import { logoutUser } from '@/redux/actions/authActions';
// import { botSessionId } from '@/redux/actions/userChatAction';

// // Import MUI icons
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import ChatIcon from '@mui/icons-material/Chat';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
// import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
// import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
// import colors from 'tailwindcss/colors';

// interface SidebarItemProps {
//   path?: string;
//   icon?: React.ReactNode;
//   text: string;
//   onClick?: () => void;
//   isActive?: boolean;
//   hasDropdown?: boolean;
//   subMenuItems?: {
//     path?: string;
//     title: string;
//     hasDropdown?: boolean | any;
//     subChildItems?: any[] | any;
//     onClick?: () => void;
//   }[];
// }

// const DashboardItem: SidebarItemProps = {
//   path: '/dashboard',
//   icon: <HomeRoundedIcon />,
//   text: 'Dashboard',
//   hasDropdown: false,
// };

// const initialSIDENAV_ITEMS: SidebarItemProps[] = [
//   {
//     icon: <ChatIcon />,
//     text: 'Chats',
//     hasDropdown: true,
//     subMenuItems: [
//       {
//         title: 'All Chats',
//         hasDropdown: true,
//         subChildItems: [{ title: 'hey', path: '/mychatbots' }],
//       },
//       { title: 'Reports (coming soon)' },
//     ],
//   },
//   {
//     icon: <SmartToyIcon />,
//     text: 'Bots',
//     hasDropdown: true,
//     subMenuItems: [
//       { path: '/mychatbots', title: 'My Chatbots' },
//       { path: '/knowledgebase', title: 'Knowledge Base' },
//     ],
//   },
//   {
//     icon: <AttachMoneyIcon />,
//     text: 'Pricing',
//     path: '/membership',
//   },
//   {
//     icon: <IntegrationInstructionsIcon />,
//     text: 'Integration',
//     path: '/integration',
//   },
//   {
//     icon: <SettingsRoundedIcon />,
//     text: 'Settings',
//     hasDropdown: true,
//     subMenuItems: [
//       { onClick: openModal, title: 'Clear Conversation' },
//       { path: '/faq', title: 'Help Center' },
//       { title: 'Log out', onClick: LogoutButton },
//     ],
//   },
//   { icon: <AccountCircleIcon />, text: 'Profile', path: '/profile' },
// ];

// const [SIDENAV_ITEMS, setSIDENAV_ITEMS] = useState<SidebarItemProps[]>(initialSIDENAV_ITEMS); 

// const SideBar: React.FC = () => {
//   const dispatch = useDispatch();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userData = useSelector((state: RootState) => state?.root.userData);
//   const botProfiles = useSelector((state: RootState) => state.botProfile);
//   const pathname = usePathname(); 
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const [open, setOpen] = useState<any>(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose: any = (): void => {
//     setOpen(false);
//   };

//   const LogoutButton = () => {
//     localStorage.removeItem('user_id');
//     localStorage.removeItem('token');
//     dispatch(logoutUser());
//     dispatch(removeFromReduxbot());
//     dispatch(removeAdvanceFeature());
//   };

//   const getUserBotProfiles = () => {
//     dispatch(getUserBotProfileAction(userData?.user_id));
//   };

//   useEffect(() => {
//     getUserBotProfiles();
//   }, [userData?.user_id]);

//   useEffect(() => {}, [botProfiles]);
 


//   return (
//     <div className="w-64 p-4 bg-[#0B031E] flex flex-col h-screen relative">
//       <Link
//         href={'/dashboard'}
//         className="flex justify-center w-full mt-[10px] mb-[20px]"
//       >
//         <Image src={mainLogo.src} alt="logo" width={90} height={80} />
//       </Link>
//       <button
//         onClick={getUserBotProfiles}
//         className="bg-white bg-opacity-10 border border-[#343B4F] rounded-md text-white font-semibold py-3 px-2 mt-4 mb-8 flex justify-start"
//       >
//         <Link href={`/newchat`}>
//           <span> Test your Bot</span>
//         </Link>
//       </button>
//       <MenuItem item={DashboardItem} key={DashboardItem?.text} />
//       <div className="flex flex-col h-[100%] justify-between overflow-y-scroll">
//         <div className="flex flex-col space-y-2">
//           {SIDENAV_ITEMS.map((item, idx) => (
//             <MenuItem key={idx} item={item} />
//           ))}
//         </div>

//         <div className="flex flex-col space-y-2 mt-2">
//           <button
//             className="text-white rounded-md py-2 px-2  flex items-center space-x-4 justify-start"
//             onClick={handleClickOpen}
//           >
//             <div className="flex justify-start space-x-3 items-center">
//               <PhoneAndroidRoundedIcon />
//               <span>Available on Android</span>
//             </div>
//           </button>
//           {initialSIDENAV_ITEMS.map((item, idx) => (
//             <MenuItem
//               key={idx}
//               item={item}
//               onClick={
//                 item.text === 'Clear Conversations'
//                   ? openModal
//                   : item.text === 'Log Out'
//                   ? LogoutButton
//                   : undefined
//               }
//             />
//           ))}
//         </div>
//       </div>
//       {isModalOpen && <ClearConversation closeModal={closeModal} />}
//       <ModalDialog open={open} onClose={handleClose} />
//     </div>
//   );
// };

// interface MenuItemProps {
//   item: SidebarItemProps;
//   onClick?: () => void;
// }

// const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [subMenuOpen, setSubMenuOpen] = useState(false);
//   const [subMenuChildOpen, setSubMenuChildOpen] = useState<{
//     [key: number]: boolean;
//   }>({});
//   const botProfiles = useSelector((state: RootState) => state.botProfile);
//   const botSessionaa = useSelector((state: RootState) => state.userChat);
//   const dispatch = useDispatch();
//   const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);
//   const toggleSubMenuChild = (idx: number) => {
//     setSubMenuChildOpen((prevState) => ({
//       ...prevState,
//       [idx]: !prevState[idx],
//     }));
//   };

//   const botSession = (botId: any, userId: any, botName: any) => {
//     const data = {
//       botId,
//       userId,
//     };
//     dispatch(botSessionId(data));
//     router.push(`/botsession?botName=${encodeURIComponent(botName)}`);
//   };

//   useEffect(() => {}, [botSessionaa]);

//   const isActive = (path: string) => {
//     return pathname === path || (pathname && pathname.includes(path));
//   };

//   const menuItemClasses = `flex items-center space-x-3 py-2 px-3 rounded-md cursor-pointer w-full
//     ${
//       isActive(item.path || item.text.toLowerCase())
//         ? 'bg-[#081028] text-white'
//         : 'text-[#AEB9E1] hover:bg-[#081028] hover:text-white'
//     }`;

//   return (
//     <div>
//       {item.hasDropdown ? (
//         <>
//           <button onClick={toggleSubMenu} className={menuItemClasses}>
//             <div className="w-6">{item.icon}</div>
//             <span className="flex-grow text-left">{item.text}</span>
//             <div
//               className={`transition-transform duration-200 ${
//                 subMenuOpen ? 'rotate-90' : ''
//               }`}
//             >
//               <KeyboardArrowRightRoundedIcon />
//             </div>
//           </button>
//           {subMenuOpen && (
//             <div className="ml-6 mt-1">
//               {item.subMenuItems?.map((subItem, idx) => (
//                 <div key={idx}>
//                   {subItem.path ? (
//                     <Link
//                       href={subItem.path}
//                       onClick={onClick}
//                       className={menuItemClasses}
//                     >
//                       <span className="flex-grow">{subItem.title}</span>
//                       {subItem.hasDropdown && (
//                         <div
//                           className={`transition-transform duration-200 ${
//                             subMenuChildOpen[idx] ? 'rotate-90' : ''
//                           }`}
//                         >
//                           <KeyboardArrowRightRoundedIcon />
//                         </div>
//                       )}
//                     </Link>
//                   ) : (
//                     <button
//                       onClick={() => toggleSubMenuChild(idx)}
//                       className={menuItemClasses}
//                     >
//                       <span className="flex-grow text-left">
//                         {subItem.title}
//                       </span>
//                       {subItem.hasDropdown && (
//                         <div
//                           className={`transition-transform duration-200 ${
//                             subMenuChildOpen[idx] ? 'rotate-90' : ''
//                           }`}
//                         >
//                           <KeyboardArrowRightRoundedIcon />
//                         </div>
//                       )}
//                     </button>
//                   )}
//                   {subItem.hasDropdown && subMenuChildOpen[idx] && (
//                     <div className="ml-6 mt-1">
//                       {botProfiles?.botProfiles?.data?.map(
//                         (bot: any, childIdx: any) => (
//                           <div
//                             key={childIdx}
//                             className={menuItemClasses}
//                             onClick={() =>
//                               botSession(bot._id, bot.userId, bot.botName)
//                             }
//                           >
//                             <span>{bot.botName}</span>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       ) : (
//         <Link
//           href={item.path ?? ''}
//           className={menuItemClasses}
//           onClick={onClick}
//         >
//           <div className="w-6">{item.icon}</div>
//           <span className="flex-grow">{item.text}</span>
//         </Link>
//       )}
//     </div>
//   );
// };

// export default SideBar;


'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import ClearConversation from './clearConversation/clearConversation';
import ModalDialog from './ModalDialog';
import mainLogo from '@/public/assets/mainLogo.svg';
import { RootState } from '@/redux/configureStore';
import {
  getUserBotProfileAction,
  removeAdvanceFeature,
  removeFromReduxbot,
} from '@/redux/actions/BotProfileActions';
import { logoutUser } from '@/redux/actions/authActions';
import { botSessionId } from '@/redux/actions/userChatAction';

// Import MUI icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatIcon from '@mui/icons-material/Chat';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

interface SidebarItemProps {
  path?: string;
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  hasDropdown?: boolean;
  subMenuItems?: {
    path?: string;
    title: string;
    hasDropdown?: boolean;
    subChildItems?: any[];
    onClick?: () => void;
  }[];
}

const DashboardItem: SidebarItemProps = {
  path: '/dashboard',
  icon: <HomeRoundedIcon />,
  text: 'Dashboard',
  hasDropdown: false,
};

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector((state: RootState) => state?.root.userData);
  const botProfiles = useSelector((state: RootState) => state.botProfile);
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const LogoutButton = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    dispatch(logoutUser());
    dispatch(removeFromReduxbot());
    dispatch(removeAdvanceFeature());
  };

  const getUserBotProfiles = () => {
    dispatch(getUserBotProfileAction(userData?.user_id));
  };

  useEffect(() => {
    getUserBotProfiles();
  }, [userData?.user_id]);

  const [SIDENAV_ITEMS, setSIDENAV_ITEMS] = useState<SidebarItemProps[]>([
    {
      icon: <ChatIcon />,
      text: 'Chats',
      hasDropdown: true,
      subMenuItems: [
        {
          title: 'All Chats',
          hasDropdown: true,
          subChildItems: [{ title: 'hey', path: '/mychatbots' }],
        },
        {
          title: 'Live Chats',
          hasDropdown: true,
          subChildItems: [{ title: 'hey', path: '/mychatbots' }],
        },
        { title: 'Reports (coming soon)' },
      ],
    },
    {
      icon: <SmartToyIcon />,
      text: 'Bots',
      hasDropdown: true,
      subMenuItems: [
        { path: '/mychatbots', title: 'My Chatbots' },
        { path: '/knowledgebase', title: 'Knowledge Base' },
      ],
    },
    {
      icon: <AttachMoneyIcon />,
      text: 'Pricing',
      path: '/membership',
    },
    {
      icon: <IntegrationInstructionsIcon />,
      text: 'Integration',
      path: '/integration',
    },
    {
      icon: <SettingsRoundedIcon />,
      text: 'Settings',
      hasDropdown: true,
      subMenuItems: [
        { onClick: openModal, title: 'Clear Conversation' },
        { path: '/faq', title: 'Help Center' },
        { title: 'Log out', onClick: LogoutButton },
      ],
    },
    { icon: <AccountCircleIcon />, text: 'Profile', path: '/profile' },
  ]);

  return (
    <div className="w-64 p-4 bg-[#0B031E] flex flex-col h-screen relative">
      <Link
        href={'/dashboard'}
        className="flex justify-center w-full mt-[10px] mb-[20px]"
      >
        <Image src={mainLogo.src} alt="logo" width={90} height={80} />
      </Link>
      <button
        onClick={getUserBotProfiles}
        className="bg-white bg-opacity-10 border border-[#343B4F] rounded-md text-white font-semibold py-3 px-2 mt-4 mb-8 flex justify-start"
      >
        <Link href={`/newchat`}>
          <span> Test your Bot</span>
        </Link>
      </button>
      <MenuItem item={DashboardItem} key={DashboardItem?.text} />
      <div className="flex flex-col h-[100%] justify-between overflow-y-scroll">
        <div className="flex flex-col space-y-2">
          {SIDENAV_ITEMS.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>

        <div className="flex flex-col space-y-2 mt-2">
          <button
            className="text-white rounded-md py-2 px-2 flex items-center space-x-4 justify-start"
            onClick={handleClickOpen}
          >
            <div className="flex justify-start space-x-3 items-center">
              <PhoneAndroidRoundedIcon />
              <span>Available on Android</span>
            </div>
          </button>
        </div>
      </div>
      {isModalOpen && <ClearConversation closeModal={closeModal} />}
      <ModalDialog open={open} onClose={handleClose} />
    </div>
  );
};

interface MenuItemProps {
  item: SidebarItemProps;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuChildOpen, setSubMenuChildOpen] = useState<{
    [key: number]: boolean;
  }>({});
  const botProfiles = useSelector((state: RootState) => state.botProfile);
  const botSessionaa = useSelector((state: RootState) => state.userChat);
  const dispatch = useDispatch();

  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);
  const toggleSubMenuChild = (idx: number) => {
    setSubMenuChildOpen((prevState) => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  const botSession = (botId: string, userId: string, botName: string) => {
    const data = {
      botId,
      userId,
    };
    dispatch(botSessionId(data));
    router.push(`/livechat?botName=${encodeURIComponent(botName)}`);
  };

  useEffect(() => {}, [botSessionaa]);

  const isActive = (path: string) => {
    return pathname === path || (pathname && pathname.includes(path));
  };

  const menuItemClasses = `flex items-center space-x-3 py-2 px-3 rounded-md cursor-pointer w-full
    ${
      isActive(item.path || item.text.toLowerCase())
        ? 'bg-[#081028] text-white'
        : 'text-[#AEB9E1] hover:bg-[#081028] hover:text-white'
    }`;

  return (
    <div>
      {item.hasDropdown ? (
        <>
          <button onClick={toggleSubMenu} className={menuItemClasses}>
            <div className="w-6">{item.icon}</div>
            <span className="flex-grow text-left">{item.text}</span>
            <div
              className={`transition-transform duration-200 ${
                subMenuOpen ? 'rotate-90' : ''
              }`}
            >
              <KeyboardArrowRightRoundedIcon />
            </div>
          </button>
          {subMenuOpen && (
            <div className="ml-6 mt-1">
              {item.subMenuItems?.map((subItem, idx) => (
                <div key={idx}>
                  {subItem.path ? (
                    <Link
                      href={subItem.path}
                      onClick={onClick}
                      className={menuItemClasses}
                    >
                      <span className="flex-grow">{subItem.title}</span>
                      {subItem.hasDropdown && (
                        <div
                          className={`transition-transform duration-200 ${
                            subMenuChildOpen[idx] ? 'rotate-90' : ''
                          }`}
                        >
                          <KeyboardArrowRightRoundedIcon />
                        </div>
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        toggleSubMenuChild(idx);
                        subItem.onClick && subItem.onClick();
                      }}
                      className={menuItemClasses}
                    >
                      <span className="flex-grow text-left">
                        {subItem.title}
                      </span>
                      {subItem.hasDropdown && (
                        <div
                          className={`transition-transform duration-200 ${
                            subMenuChildOpen[idx] ? 'rotate-90' : ''
                          }`}
                        >
                          <KeyboardArrowRightRoundedIcon />
                        </div>
                      )}
                    </button>
                  )}
                  {subItem.hasDropdown && subMenuChildOpen[idx] && (
                    <div className="ml-6 mt-1">
                      {botProfiles?.botProfiles?.data?.map(
                        (bot: any, childIdx: number) => (
                          <div
                            key={childIdx}
                            className={menuItemClasses}
                            onClick={() =>
                              botSession(bot._id, bot.userId, bot.botName)
                            }
                          >
                            <span>{bot.botName}</span>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path ?? ''}
          className={menuItemClasses}
          onClick={onClick}
        >
          <div className="w-6">{item.icon}</div>
          <span className="flex-grow">{item.text}</span>
        </Link>
      )}
    </div>
  );
};

export default SideBar;