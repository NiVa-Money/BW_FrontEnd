// 'use client';

// // // import BotMaker from '@/components/ChatBot/BotMaker';
// // // import KnowledgeBase from '@/components/ChatBot/KnowledgeBase';
// // // import SideBar from '@/components/SideBar';
// // import Home from '@/pages/Home';
// // // import { auth } from '@/auth/firebase';
// // // import AuthContextProvider, { useAuthContext } from '@/context/AuthContext';
// // // import { onAuthStateChanged } from 'firebase/auth';
// // // import { useEffect } from 'react';
// // // import Chat from '@/pages/Chat';
// // // import PricingCard from '@/components/Pricing';
// // import DashboardPage from './dashBoard/page';

// // function App() {
// //   // const { user, setUser } = useAuthContext();

// //   // useEffect(() => {
// //   //   const unsubscribe = onAuthStateChanged(auth, (usr) => {
// //   //     setUser(usr || null);
// //   //   });

// //   //   // Cleanup subscription on unmount
// //   //   return () => unsubscribe();
// //   // }, [setUser]);

// //   if (true) {
// //     return <Home />;
// //   } else {
// //     <DashboardPage />;
// //   }

// //   return (
// //     <div>
// //       <Chat />
// //       {/* <SideBar /> */}
// //       {/* <KnowledgeBase />
// //        <BotMaker />
// //        <PricingCard /> */}
// //     </div>
// //   );
// // }

// // // export default function AppWrapper() {
// // //   return <App />;
// // // }
// // export default function AppWrapper = ({ Component, pageProps }: any) => {
// //   return (
// //     <ReduxProvider store={store}>
// //       <Component {...pageProps} />
// //     </ReduxProvider>
// //   );
// // };
// // import { store } from '@/redux/configureStore';
// // import { AppProps } from 'next/app';
// // import { Provider } from 'react-redux';
// // import RootLayout from './layout';
// // import { useAuthContext } from '@/context/AuthContext';
// // import { useEffect } from 'react';
// // import { onAuthStateChanged } from 'firebase/auth';
// // import Chat from '@/pages/Chat';
// // import ReduxProvider from '@/redux/reduxProvider';

// // // const MyApp = ({ Component, pageProps }: AppProps) => {
// // //   return (
// // //     <Provider store={store}>
// // //       <div>
// // //         <AppWrapper />
// // //         // {/* <SideBar /> */}
// // //       </div>
// // //     </Provider>
// // //   );
// // // };

// // // export default MyApp;
// import { store } from '@/redux/configureStore';
// import { AppProps } from 'next/app';
// import { Provider } from 'react-redux';

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };

// export default MyApp;

import store from '@/redux/configureStore';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../app/globals.css';

import Header from '../components/Header/index';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Provider store={store}>
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
