'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Provider, useSelector } from 'react-redux';
import SideBar from '@/components/SideBar';
import PathnameHandler from '@/components/PathNameHandler/pathNameHandler';
import store, { RootState } from '@/redux/configureStore';
import { persistStore } from 'redux-persist';
import Toast from '@/components/Toaster/toast';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NotFound from './not-found';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathnameBrowser: any = usePathname();

  const routeWithoutHeader: string[] = [
    '/mychatbots',
    '/createbot',
    '/editbot',
    '/knowledgebase',
    '/profile',
    '/rize',
    '/membership',
    '/membership-failure',
    '/membership-success',
    '/faq',
    '/dashboard',
    '/login',
    '/createknowledgebase',
    '/newchat',
    '/botsession',
    '/faq/questionsAns',
    '/faq/docs',
    '/data-deletion',

    '/integration',
  ];
  const routeWithoutFooter: string[] = [
    '/mychatbots',
    '/createbot',
    '/editbot',
    '/knowledgebase',
    '/profile',
    '/rize',
    '/membership',
    '/membership-failure',
    '/membership-success',
    '/faq',
    '/dashboard',
    '/login',
    '/createknowledgebase',
    '/newchat',
    '/botsession',
    '/faq/questionsAns',
    '/faq/docs',
    '/privacy',
    '/terms',
    '/data-deletion',

    '/integration',
  ];
  const routeWithoutSidebar: string[] = [
    '/createbot',
    '/editbot',
    '/aboutus',
    '/pricing',
    '/rize',
    '/blog',
    '/contactus',
    '/membership-failure',
    '/membership-success',
    '/login',
    '/',
    '/botsession',
    '/privacy',
    '/terms',
    '/data-deletion',
  ];
  const knownRoutes: string[] = [
    ...routeWithoutSidebar,
    ...routeWithoutFooter,
    '/mychatbots',
    '/knowledgebase',
    '/profile',
    '/membership',
    '/faq',
    '/dashboard',
    '/login',
    '/createknowledgebase',
    '/newchat',
    '/aboutus',
    '/pricing',
    '/blog',
    '/rize',
    '/contactus',
    '/',
    '/privacy',
    '/terms',
  ];

  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {knownRoutes.includes(pathnameBrowser) ? (
          <Provider store={store}>
            <PathnameHandler />
            <ConditionalHeader
              routeWithoutHeader={routeWithoutHeader}
              pathnameBrowser={pathnameBrowser}
            />
            <div className="flex flex-grow relative">
              <div className="h-screen">
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
                      pathnameBrowser={pathnameBrowser}
                    />
                  )}
                </div>
              </div>
              <main
                className={`flex-grow ${
                  isSidebarVisible && 'h-screen overflow-y-scroll'
                }`}
              >
                {children}
              </main>
            </div>
            <ConditionalFooter
              routeWithoutFooter={routeWithoutFooter}
              pathnameBrowser={pathnameBrowser}
            />
            <Toast />
          </Provider>
        ) : (
          <NotFound />
        )}
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
  // const shouldShowButton = pathname !== '/home' && pathname !== '/botsession';
  return (
    !routeWithoutSidebar.includes(pathname) && (
      <button
        className={`absolute ${
          isVisible ? 'top-4' : 'top-2'
        } left-0 m-4 p-2 w-8 h-8 bg-[rgb(192,13,200)] text-white rounded-full z-10 flex items-center justify-center`}
        onClick={onClick}
      >
        {isVisible ? (
          <Image
            src="/images/icons8-cancel-64.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        ) : (
          <Image
            src="/images/icons8-menu-64.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        )}
      </button>
    )
  );
};

// Move ConditionalHeader outside of RootLayout
function ConditionalHeader({
  routeWithoutHeader,
  pathnameBrowser,
}: {
  routeWithoutHeader: string[];
  pathnameBrowser: string;
}) {
  const pathName = useSelector((state: RootState) => state.root.pathName);
  return (
    <>{!routeWithoutHeader.includes(pathnameBrowser) ? <Header /> : null}</>
  );
}
function ConditionalFooter({
  routeWithoutFooter,
  pathnameBrowser,
}: {
  routeWithoutFooter: string[];
  pathnameBrowser: string;
}) {
  const pathName = useSelector((state: RootState) => state.root.pathName);
  return (
    <>{!routeWithoutFooter.includes(pathnameBrowser) ? <Footer /> : null}</>
  );
}
function ConditionalSideBar({
  routeWithoutSidebar,
  pathnameBrowser,
}: {
  routeWithoutSidebar: string[];
  pathnameBrowser: string;
}) {
  const pathName = useSelector((state: RootState) => state.root.pathName);
  console.log('p', pathnameBrowser);
  return (
    <>{!routeWithoutSidebar.includes(pathnameBrowser) ? <SideBar /> : null}</>
  );
}
