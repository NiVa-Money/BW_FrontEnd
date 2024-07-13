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
