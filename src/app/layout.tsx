'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Provider, useSelector } from 'react-redux';
import SideBar from '@/components/SideBar';
import PathnameHandler from '@/components/PathNameHandler/pathNameHandler';
import store, { RootState } from '@/redux/configureStore';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routeWithoutHeader: string[] = ['/MyChatBots', '/createBot',"/dashBoard", "/faq","/profile","/memberShip","/bot/knowledegeBase",];
  const routeWithoutFooter: string[] = ['/MyChatBots', '/createBot'];
  const routeWithoutSidebar: string[] = ['/createBot'];

  return (
    <Provider store={store}>
      <html lang="en">
        {' '}
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <PathnameHandler />
          <ConditionalHeader routeWithoutHeader={routeWithoutHeader} />
          <div className="flex">
            <SideBar />

            <main className="flex-grow">{children}</main>
          </div>
          <ConditionalFooter routeWithoutFooter={routeWithoutFooter} />
        </body>
      </html>
    </Provider>
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
