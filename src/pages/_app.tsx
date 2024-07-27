import store, { persistor } from '@/redux/configureStore';
import { AppProps } from 'next/app';
import '../app/globals.css';

import Header from '../components/Header/index';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
    //   </PersistGate>
    // </Provider>
  );
}

export default MyApp;
