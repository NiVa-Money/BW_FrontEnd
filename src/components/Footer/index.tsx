import { useAuthContext } from '@/context/AuthContext';
import Image from 'next/image';
import * as React from 'react';

type FooterLinkProps = {
  title: string;
  links: string[];
};

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col text-base leading-6 text-white text-opacity-80 max-md:mt-4">
      <div className="font-medium text-white">{title}</div>
      {links.map((link, index) => (
        <div key={index} className={index === 0 ? 'mt-6' : 'mt-2.5'}>
          {link}
        </div>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => {
  const { handleSignIn } = useAuthContext();

  const footerLinks = [
    { title: 'Company', links: ['Blog', 'Careers'] },
    {
      title: 'Product',
      links: ['Pricing', 'Download', 'AI', 'Sales', 'Enterprise', 'Outlook'],
    },
    { title: 'Support', links: ['Help Center', 'Contact Us', 'Tutorials'] },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cancellation Policy', 'Shipping & Delivery'],
    },
  ];

  return (
    <div className="flex flex-col px-5 mt-20">
      <div
        className="flex flex-col justify-center self-center px-8 py-14 w-full text-gray-100 border border-gray-100 border-solid max-w-[1200px] rounded-[30px]"
        style={{
          background: 'linear-gradient(to bottom right, #2B243C, #0B031E)',
        }}
      >
        <div className="flex justify-center items-center p-6 font-black max-md:px-5">
          <div className="flex flex-col items-center max-w-full w-[765px]">
            <div className="flex gap-2 justify-center px-1.5 py-2 text-3xl tracking-widest whitespace-nowrap">
              <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
              <div className="my-auto">BotWot</div>
            </div>
            <h1 className="self-stretch mt-10 text-6xl">
              Join the Community Now!
            </h1>
            <p className="mt-4 text-2xl text-center">
              Create your AI chatbot effortlessly with our no-code platform!
            </p>
          </div>
        </div>
        <button
          onClick={handleSignIn}
          className="justify-center items-center self-center px-8 py-6 mt-8 w-60 max-w-full text-base font-medium shadow-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#B52BBA_4.666563235223293deg,#A12CBC_23.647727966308594deg,#8C2EBE_44.85525995492935deg,#792FBF_72.45651304721832deg,#6C30C0_82.50000178813934deg,#4B32C3_127.99007892608643deg,#5831C2_160.968976020813deg,#6330C1_178.45529437065125deg,#742FC0_189.47770357131958deg,#8D2DBE_202.95226335525513deg,#A62CBC_230.65982580184937deg,#B92ABA_251.35178089141846deg,#D029B8_276.4414644241333deg,#EC27B6_306.45145654678345deg,#C729B9_331.67617321014404deg)] rounded-[99px] max-md:px-5"
        >
          Sign in now
        </button>
      </div>
      <div className="pb-2.5 mt-14 w-full max-md:pr-5 max-md:mt-10 ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12">
            <h2 className="w-full text-5xl font-semibold bg-clip-text leading-[64px] text-transparent bg-gradient-to-r from-white to-gray-700">
              The Ultimate No-code <br /> Chatbot Creation Tool
            </h2>
          </section>
          <nav className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-end max-md:mt-10 ">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {footerLinks.map((section, index) => (
                  <FooterLink
                    key={index}
                    title={section.title}
                    links={section.links}
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="mt-20 w-full bg-white bg-opacity-30 min-h-[2px]" />
      <footer className="self-center mt-10 mb-5 text-base text-stone-50">
        © 2024 BotWot Chat Bot AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
