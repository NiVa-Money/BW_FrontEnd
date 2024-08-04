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
    '/faq/docs'
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
    '/faq/docs'
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
    '/botSession'
  ];
  
  let persistor = persistStore(store);
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <PathnameHandler />
            <ConditionalHeader routeWithoutHeader={routeWithoutHeader} />
            <div className="flex flex-grow">
              <ConditionalSideBar routeWithoutSidebar={routeWithoutSidebar} />
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
