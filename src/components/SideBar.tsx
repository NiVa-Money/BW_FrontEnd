'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icon } from '@iconify/react';

interface SidebarItemProps {
  path?: string;
  icon?: string;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  hasDropdown?: boolean;
  subMenuItems?: { path?: string; title: string }[];
}

const SIDENAV_ITEMS: SidebarItemProps[] = [
  { icon: 'fa-comment', text: 'Chat', hasDropdown: true, subMenuItems: [{ title: 'Today' }, { title: 'Yesterday' }, { title: 'Previous 7 days' }] },
  { icon: 'fa-robot', text: 'Bots', hasDropdown: true, subMenuItems: [{ path: '/my-chatbots', title: 'My Chatbots' }, { path: '/bots/knowledge-base', title: 'Knowledge Base' }] },
  { icon: 'fa-user', text: 'Profile', path: '/profile' },
  { icon: 'fa-trash', text: 'Clear Conversations' },
  { icon: 'fa-crown', text: 'Membership' },
  { icon: 'fa-question-circle', text: 'Updates & FAQ', path: '/updates-faq' },
  { icon: 'fa-sign-out-alt', text: 'Log Out' }
];

const SideBar: React.FC = () => {
  return (
    <div className="w-64 p-4 flex flex-col h-screen">
      <button className="bg-[#1E1E2E] text-white rounded-full py-4 px-4 mb-8 flex items-center space-x-4">
        <i className="fas fa-plus"></i>
        <span>New Chat</span>
      </button>

      <div className="flex flex-col space-y-2">
        {SIDENAV_ITEMS.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ item }: { item: SidebarItemProps }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);

  return (
    <div>
      {item.hasDropdown ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex items-center space-x-3 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer ${pathname && pathname.includes(item.text.toLowerCase()) ? 'bg-white bg-opacity-10' : ''}`}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.text}</span>
            <div className={`${subMenuOpen ? 'rotate-180' : ''} ml-auto`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>
          {subMenuOpen && (
            <div className="ml-4">
              {item.subMenuItems?.map((subItem, idx) => (
                <Link key={idx} href={subItem.path ?? ''} className="text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer">
                    <div className={`flex items-center space-x-3 py-2 px-3 ${subItem.path === pathname ? 'font-bold' : ''}`}>
                      <span>{subItem.title}</span>
                    </div>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link href={item.path ?? ''} className={`flex items-center space-x-3 py-2 px-3 text-gray-300 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer ${item.path === pathname ? 'bg-white bg-opacity-10' : ''}`}>
            <i className={`fas ${item.icon}`}></i>
            <span>{item.text}</span>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
