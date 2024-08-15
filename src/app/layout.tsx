'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Provider, useSelector } from 'react-redux';
import SideBar from '@/components/SideBar';
import PathnameHandler from '@/components/PathNameHandler/pathNameHandler';
import store, { RootState } from '@/redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Toast from '@/components/Toaster/toast';
import React from 'react';
import cancelImg from '../../public/images/icons8-cancel-64.png';
import menuImg from '../../public/images/icons8-menu-64.png';
import Image from 'next/image';

interface cancelImg {
  img: string;
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routeWithoutHeader: string[] = [
    '/mychatbots',
    '/createbot',
    '/editbot',
    '/knowledgebase',
    '/profile',
    '/membership',
    '/faq',
    '/dashboard',
    '/login',
    '/createknowledgebase',
    '/newchat',
    '/botSession',
    '/faq/questionsAns',
    '/faq/docs',
  ];
  const routeWithoutFooter: string[] = [
    '/mychatbots',
    '/createbot',
    '/editbot',
    '/knowledgebase',
    '/profile',
    '/membership',
    '/faq',
    '/dashboard',
    '/login',
    '/createknowledgebase',
    '/newchat',
    '/botSession',
    '/faq/questionsAns',
    '/faq/docs',
  ];
  const routeWithoutSidebar: string[] = [
    '/createbot',
    '/editbot',
    '/aboutus',
    '/pricing',
    '/blog',
    '/contactus',
    '/login',
    '/home',
    '/botSession',
  ];
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  let persistor = persistStore(store);
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <PathnameHandler />
            <ConditionalHeader routeWithoutHeader={routeWithoutHeader} />
            <div className="flex flex-grow relative">
              <div className="">
                <SidebarToggleButton
                  isVisible={isSidebarVisible}
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                  routeWithoutSidebar={routeWithoutSidebar}
                />
                <div
                  className={`relative transition-transform duration-800 ease-in ${
                    isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
                  }`}
                >
                  {isSidebarVisible && (
                    <ConditionalSideBar
                      routeWithoutSidebar={routeWithoutSidebar}
                    />
                  )}
                </div>
              </div>
              <main className="flex-grow">{children}</main>
            </div>
            <ConditionalFooter routeWithoutFooter={routeWithoutFooter} />
          </PersistGate>
          <Toast />
        </Provider>
      </body>
    </html>
  );
}

const SidebarToggleButton = ({
  isVisible,
  onClick,
  routeWithoutSidebar,
}: any) => {
  const pathname = useSelector((state: RootState) => state.root?.pathName);
  // const shouldShowButton = pathname !== '/home' && pathname !== '/botSession';

  return !routeWithoutSidebar.includes(pathname) ? (
    <button
      className={`absolute ${
        isVisible ? 'top-4' : 'top-2'
      } left-0 m-4 p-2 w-8 h-8 bg-[rgb(192,13,200)] text-white rounded-full z-10 flex items-center justify-center`}
      onClick={onClick}
    >
      {isVisible ? (
        <Image
          src={cancelImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      ) : (
        <Image
          src={menuImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      )}
    </button>
  ) : (
    ''
  );
};

// Move ConditionalHeader outside of RootLayout
function ConditionalHeader({
  routeWithoutHeader,
}: {
  routeWithoutHeader: string[];
}) {
  const pathName = useSelector((state: RootState) => state.root.pathName);
  return <>{!routeWithoutHeader.includes(pathName) ? <Header /> : null}</>;
}
function ConditionalFooter({
  routeWithoutFooter,
}: {
  routeWithoutFooter: string[];
}) {
  const pathName = useSelector((state: RootState) => state.root.pathName);
  return <>{!routeWithoutFooter.includes(pathName) ? <Footer /> : null}</>;
}
function ConditionalSideBar({
  routeWithoutSidebar,
}: {
  routeWithoutSidebar: string[];
}) {
  const pathName = useSelector((state: RootState) => state.root.pathName);
  return <>{!routeWithoutSidebar.includes(pathName) ? <SideBar /> : null}</>;
}
