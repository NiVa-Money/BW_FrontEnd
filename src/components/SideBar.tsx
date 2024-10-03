'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import ClearConversation from './clearConversation/clearConversation';
import ModalDialog from './ModalDialog';
import { RootState } from '@/redux/configureStore';
import {
  getUserBotProfileAction,
  removeAdvanceFeature,
  removeFromReduxbot,
} from '@/redux/actions/BotProfileActions';
import { logoutUser } from '@/redux/actions/authActions';
import { botSessionId } from '@/redux/actions/userChatAction';

// Import MUI icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddIcon from '@mui/icons-material/Add';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    hasDropdown?: boolean | any;
    subChildItems?: any[] | any;
  }[];
}

const DashboardItem: SidebarItemProps = {
  path: '/dashboard',
  icon: <DashboardIcon />,
  text: 'Dashboard',
  hasDropdown: false,
};

const initialSIDENAV_ITEMS: SidebarItemProps[] = [
  {
    icon: <ChatIcon />,
    text: 'Chat',
    hasDropdown: true,
    subMenuItems: [
      {
        title: 'All Chats',
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
    icon: <IntegrationInstructionsIcon />,
    text: 'Integration',
    path: '/integration',
  },
];

const SIDENAV_ITEMS2: SidebarItemProps[] = [
  { icon: <AccountCircleIcon />, text: 'Profile', path: '/profile' },
  { icon: <AttachMoneyIcon />, text: 'Membership', path: '/membership' },
  { icon: <HelpIcon />, text: 'Help Center', path: '/faq' },
  { icon: <ExitToAppIcon />, text: 'Log Out', path: '/' },
];

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SIDENAV_ITEMS, setSIDENAV_ITEMS] =
    useState<SidebarItemProps[]>(initialSIDENAV_ITEMS);
  const userData = useSelector((state: RootState) => state?.root.userData);
  const botProfiles = useSelector((state: RootState) => state.botProfile);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [open, setOpen] = useState<any>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose: any = (): void => {
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

  useEffect(() => {}, [botProfiles]);

  return (
    <div className="w-64 p-4 bg-[#0B031E] flex flex-col h-screen relative">
      <Link
        href={'/dashboard'}
        className="flex justify-center w-full mt-[10px] mb-[20px]"
      >
        <Image src="/images/mainLogo.svg" alt="logo" width={90} height={80} />
      </Link>
      <button
        onClick={getUserBotProfiles}
        className="bg-[#1E1E2E] text-white rounded-full py-4 px-4 mb-8 flex items-center space-x-4 justify-center"
      >
        <AddIcon />
        <Link href={`/newchat`}>
          <span>Test your Bot</span>
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
            className="text-white rounded-full py-2 px-2  flex items-center space-x-4 justify-start"
            onClick={handleClickOpen}
          >
            <div className="flex justify-start space-x-3 items-center">
              <PhoneAndroidIcon />
              <span>Available on Android</span>
            </div>
          </button>
          {SIDENAV_ITEMS2.map((item, idx) => (
            <MenuItem
              key={idx}
              item={item}
              onClick={
                item.text === 'Clear Conversations'
                  ? openModal
                  : item.text === 'Log Out'
                  ? LogoutButton
                  : undefined
              }
            />
          ))}
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

  const botSession = (botId: any, userId: any, botName: any) => {
    const data = {
      botId,
      userId,
    };
    dispatch(botSessionId(data));
    router.push(`/botsession?botName=${encodeURIComponent(botName)}`);
  };

  useEffect(() => {}, [botSessionaa]);

  return (
    <div>
      {item.hasDropdown ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex items-center space-x-3 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer ${
              pathname && pathname.includes(item.text.toLowerCase())
                ? 'bg-white bg-opacity-10'
                : ''
            }`}
          >
            {item.icon}
            <span>{item.text}</span>
            <div className={`${subMenuOpen ? 'rotate-180' : ''} ml-auto`}>
              <ExpandMoreIcon />
            </div>
          </button>
          {subMenuOpen && (
            <div className="ml-4">
              {item.subMenuItems?.map((subItem, idx) => (
                <div key={idx}>
                  {subItem.path ? (
                    <Link
                      href={subItem.path}
                      className="text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer"
                      onClick={onClick}
                    >
                      <div
                        className={`flex items-center space-x-3 py-2 px-3 ${
                          subItem.path === pathname ? 'font-bold' : ''
                        }`}
                      >
                        <div>{subItem.title}</div>
                        {subItem.hasDropdown && (
                          <div
                            className={`${
                              subMenuChildOpen[idx] ? 'rotate-180' : ''
                            } ml-auto`}
                          >
                            <ExpandMoreIcon />
                          </div>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleSubMenuChild(idx)}
                      className="text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer"
                    >
                      <div
                        className={`flex items-center space-x-3 py-2 px-3 ${
                          subItem.path === pathname ? 'font-bold' : ''
                        }`}
                      >
                        <div>{subItem.title}</div>
                        {subItem.hasDropdown && (
                          <div
                            className={`${
                              subMenuChildOpen[idx] ? 'rotate-180' : ''
                            } ml-auto`}
                          >
                            <ExpandMoreIcon />
                          </div>
                        )}
                      </div>
                    </button>
                  )}
                  {subItem.hasDropdown && subMenuChildOpen[idx] && (
                    <div className="ml-4">
                      {botProfiles &&
                        botProfiles?.botProfiles?.data?.map(
                          (bot: any, childIdx: any) => (
                            <div key={childIdx}>
                              <div
                                className={`text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer`}
                                onClick={() =>
                                  botSession(bot._id, bot.userId, bot.botName)
                                }
                              >
                                <button className="flex items-center space-x-3 py-2 px-3">
                                  <span>{bot.botName}</span>
                                </button>
                              </div>
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
          className={`flex items-center space-x-3 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer ${
            item.path === pathname ? 'bg-white bg-opacity-10' : ''
          }`}
          onClick={onClick}
        >
          {item.icon}
          <span>{item.text}</span>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
