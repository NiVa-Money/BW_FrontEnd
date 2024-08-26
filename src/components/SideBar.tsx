'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import mainLogo from '@/public/assets/mainLogo.svg';
import ClearConversation from './clearConversation/clearConversation';
import { RootState } from '@/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserBotProfileAction,
  removeAdvanceFeature,
  removeFromReduxbot,
} from '@/redux/actions/BotProfileActions';
import { logoutUser } from '@/redux/actions/authActions';
import { botSessionId } from '@/redux/actions/userChatAction';
import { Modal } from '@mui/material';
import ModalDialog from './ModalDialog';

interface SidebarItemProps {
  path?: string;
  icon?: string;
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
  icon: 'fa-gauge-high',
  text: 'Dashboard',
  hasDropdown: false,
};

const initialSIDENAV_ITEMS: SidebarItemProps[] = [
  {
    icon: 'fa-comment',
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
    icon: 'fa-robot',
    text: 'Bots',
    hasDropdown: true,
    subMenuItems: [
      { path: '/mychatbots', title: 'My Chatbots' },
      { path: '/knowledgebase', title: 'Knowledge Base' },
    ],
  },
];

const SIDENAV_ITEMS2: SidebarItemProps[] = [
  { icon: 'fa-user', text: 'Profile', path: '/profile' },
  { icon: 'fa-crown', text: 'Membership', path: '/membership' },
  { icon: 'fa-question-circle', text: 'Help Center', path: '/faq' },
  { icon: 'fa-sign-out-alt', text: 'Log Out', path: '/' },
];

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SIDENAV_ITEMS, setSIDENAV_ITEMS] =
    useState<SidebarItemProps[]>(initialSIDENAV_ITEMS);
  const [isCollapsed, setIsCollapsed] = useState(false); // New state for collapsing sidebar
  const userData = useSelector((state: RootState) => state?.root.userData);
  const botProfiles = useSelector((state: RootState) => state.botProfile);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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
    <div className='flex items-center justify-between h-screen '>
      <div
        className={`flex flex-col h-screen bg-[#0B031E] p-4 transition-all duration-500 ${
          isCollapsed ? 'w-30 bg-[#1E1935] rounded-xl p-2 m-3 duration-500  h-[85vh]' : 'w-64'
        }`}
      >
        <button onClick={toggleCollapse} className=" flex item-center justify-center text-white mb-4">
          <Icon icon="mdi:menu" width="24" height="24" />
        </button>

        <Link
          href={'/dashboard'}
          className={`flex  justify-center w-full mt-[10px] ${isCollapsed && 'hidden'} mb-[20px]`}
        >
          <Image
            src={mainLogo.src}
            alt="logo"
            width={isCollapsed ? 50 : 90}
            height={80}
          />
        </Link>

        <button
          onClick={getUserBotProfiles}
          className="bg-[#1E1E2E] text-white rounded-full py-4 px-4 mb-8 flex items-center space-x-4 justify-center"
        >
          <i className="fas fa-plus"></i>
          {!isCollapsed && (
            <Link href={`/newchat`}>
              <span>Test your Bot</span>
            </Link>
          )}
        </button>

        <MenuItem
          item={DashboardItem}
          key={DashboardItem?.text}
          collapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <div className="flex flex-col h-[100%] justify-between overflow-y-scroll">
          <div className="flex flex-col space-y-2">
            {SIDENAV_ITEMS.map((item, idx) => (
              <MenuItem key={idx} item={item} collapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            ))}
          </div>

          <div className="flex flex-col space-y-2 mt-2">
            <button
              className="text-white rounded-full py-2 px-2 flex items-center space-x-4 justify-start"
              onClick={handleClickOpen}
            >
              <div className={`flex justify-start space-x-3 ${isCollapsed && 'hidden'} items-center`}>
                <Image
                  src="/images/mobile.svg"
                  width={20}
                  height={30}
                  alt="mobile"
                />
                {!isCollapsed && <span>Available on Android</span>}
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
                collapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />
            ))}
          </div>
        </div>

        {isModalOpen && <ClearConversation closeModal={closeModal} />}
        <ModalDialog open={open} onClose={handleClose} />
      </div>
    </div>
  );
};

interface MenuItemProps {
  item: SidebarItemProps;
  onClick?: () => void;
  collapsed?: boolean; 
  setIsCollapsed?: (value: boolean) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick, collapsed, setIsCollapsed }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuChildOpen, setSubMenuChildOpen] = useState<{
    [key: number]: boolean;
  }>({});
  const botProfiles = useSelector((state: RootState) => state.botProfile);
  const botSessionaa = useSelector((state: RootState) => state.userChat);
  const dispatch = useDispatch();

  const toggleSubMenu = () => {
    if (collapsed && !subMenuOpen) {
      setIsCollapsed!(false);  // Expand the sidebar if it's collapsed and a submenu is being opened
    }
    setSubMenuOpen(!subMenuOpen);
  };

  const toggleSubMenuChild = (idx: number) => {
    setSubMenuChildOpen((prevState) => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  const botSession = (botId: any, userId: any, botName:any) => {
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
            <i className={`fas ${item.icon}`} />
            {!collapsed && <span>{item.text}</span>}
            {!collapsed && (
              <i
                className={`fas fa-chevron-right transform transition-transform duration-200 ${
                  subMenuOpen ? 'rotate-90' : ''
                }`}
              />
            )}
          </button>

          {subMenuOpen && (
            <div className={`flex flex-col mt-2 space-y-1 ${collapsed && 'hidden'}`}>
              {item.subMenuItems?.map((subItem, idx) => (
                <div key={idx} className="ml-8">
                  <button
                    onClick={() =>
                      subItem.hasDropdown
                        ? toggleSubMenuChild(idx)
                        : subItem.title === 'Reports (coming soon)'
                        ? undefined
                        : subItem.title === 'My Chatbots'
                        ? botSession(botProfiles?.bot_profiles[0]?.id, botProfiles?.bot_profiles[0]?.user_id, botProfiles?.bot_profiles[0]?.name)
                        : onClick && onClick()
                    }
                    className="flex items-center space-x-2 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer"
                  >
                    {/* <i className={`fas ${subItem.icon}`} /> */}
                    <span>{subItem.title}</span>
                    {subItem.hasDropdown && (
                      <i
                        className={`fas fa-chevron-right transform transition-transform duration-200 ${
                          subMenuChildOpen[idx] ? 'rotate-90' : ''
                        }`}
                      />
                    )}
                  </button>

                  {subMenuChildOpen[idx] && (
                    <div className="flex flex-col mt-2 space-y-1 ml-4">
                      {subItem.subChildItems?.map((subChildItem:any, subChildIdx:any) => (
                        <Link href={subChildItem.path!} key={subChildIdx}>
                          <button className="flex items-center space-x-2 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer">
                            <i className={`fas ${subChildItem.icon}`} />
                            <span>{subChildItem.title}</span>
                          </button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link href={item.path!}>
          <button
            onClick={onClick}
            className={`flex items-center space-x-3 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer ${
              pathname === item.path ? 'bg-white bg-opacity-10' : ''
            }`}
          >
            <i className={`fas ${item.icon}`} />
            {!collapsed && <span>{item.text}</span>}
          </button>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
