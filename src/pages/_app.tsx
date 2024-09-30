import store, { persistor } from '@/redux/configureStore';
import { AppProps } from 'next/app';
import '../app/globals.css';

import Header from '../components/Header/index';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Image from 'next/image';
import Head from 'next/head';
import Toast from '@/components/Toaster/toast';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <link
            rel="icon"
            type="image/svg"
            href="@/public/assets/mainLogo.svg"
          />
        </Head>
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </PersistGate>
      <Toast />
    </Provider>
  );
}

export default MyApp;
