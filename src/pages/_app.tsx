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
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="h-screen w-screen flex justify-center items-center">
            <Image
              src="/images/bot-loader.gif"
              alt="BotWot"
              width={500}
              height={300}
            />
          </div>
        }
        persistor={persistor}
      >
        <Head>
          <title>Botwot - AI Chatbot Solutions</title>
          <link
            rel="icon"
            type="image/svg"
            href="@/public/assets/mainLogo.svg"
          />
        </Head>

        <Script type="text/javascript">
          {`
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "oi04qe04w6");
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2ZBZZN0Y0"
        ></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16484085944"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Configure both Google Analytics and Google Ads
            gtag('config', 'G-Z2ZBZZN0Y0');
            gtag('config', 'AW-16484085944');
          `}
        </Script>
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
