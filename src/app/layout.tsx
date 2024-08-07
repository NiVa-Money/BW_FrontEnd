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

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routeWithoutHeader: string[] = [
    '/MyChatBots',
    '/createBot',
    '/editBot',
    '/knowledgeBase',
    '/profile',
    '/memberShip',
    '/faq',
    '/dashBoard',
    '/login',
    '/createKnowledgeBase',
    '/newchat',
    '/botSession',
    '/faq/questionsAns',
    '/faq/docs',
  ];
  const routeWithoutFooter: string[] = [
    '/MyChatBots',
    '/createBot',
    '/editBot',
    '/knowledgeBase',
    '/profile',
    '/memberShip',
    '/faq',
    '/dashBoard',
    '/login',
    '/createKnowledgeBase',
    '/newchat',
    '/botSession',
    '/faq/questionsAns',
    '/faq/docs',
  ];
  const routeWithoutSidebar: string[] = [
    '/createBot',
    '/editBot',
    '/aboutUs',
    '/pricing',
    '/blog',
    '/contactUs',
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
                {/* Toggle button to show/hide the sidebar */}
                <SidebarToggleButton
                  isVisible={isSidebarVisible}
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                />

                {/* Conditionally render the sidebar */}
                {isSidebarVisible && (
                  <ConditionalSideBar
                    routeWithoutSidebar={routeWithoutSidebar}
                  />
                )}
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

const SidebarToggleButton = ({ isVisible, onClick }: any) => {
  // Check if the current route is "/home" or "/botSession"
  const pathname = useSelector((state: RootState) => state.root?.pathName);
  const shouldShowButton = pathname !== '/home' && pathname !== '/botSession';
  return (
    shouldShowButton && (
      <button
        className="absolute top-4 left-0 m-4 p-2 w-8 h-8 bg-[rgb(192,13,200)] text-white rounded-full z-10 flex items-center justify-center"
        onClick={onClick}
      >
        {isVisible ? 'X' : '✓'}
      </button>
    )
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
