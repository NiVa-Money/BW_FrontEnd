'use client';
import Image from 'next/image';
import React from 'react';
import CommunityBox from './CommunityBox';
import Link from 'next/link';
import AuthContextProvider from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

type FooterLinkProps = {
  title: string;
  links: linkObjectProp[];
};
type linkObjectProp = {
  name: string;
  path: string;
};

type FooterProps = {
  showCommunityBox?: boolean;
};

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col text-base leading-6 text-white text-opacity-80 max-md:mt-4">
      <div className="font-medium text-white">{title}</div>
      {links.map((link, index) => (
        <Link
          href={`/${link.path}`}
          key={index}
          className={index === 0 ? 'mt-6' : 'mt-2.5'}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => {
  const pathname = usePathname();
  const footerLinks: FooterLinkProps[] = [
    {
      title: 'Company',
      links: [
        { name: 'Blog', path: 'blog' },
        // { name: 'Careers', path: 'Careers' },
      ],
    },
    {
      title: 'Product',
      links: [
        { name: 'Pricing', path: 'pricing' },
        { name: 'Download', path: 'Download' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: 'faq' },
        { name: 'Contact Us', path: 'contactus' },
        { name: 'Tutorials', path: 'Tutorials' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', path: 'privacy' },
        { name: 'Terms', path: 'terms' },
      ],
    },
  ];

  return (
    <div className="flex flex-col px-5 mt-20">
      <AuthContextProvider>
        <CommunityBox />
      </AuthContextProvider>
      <main className="pb-2.5 mt-14 w-full max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12">
            <h2 className="w-full text-5xl font-semibold bg-clip-text leading-[64px] text-transparent bg-gradient-to-r from-white to-gray-700">
              The Ultimate No-code <br /> Chatbot Creation Tool
            </h2>
          </section>
          <nav className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-end max-md:mt-10">
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
      </main>
      <div className="mt-20 w-full bg-white bg-opacity-30 min-h-[2px]" />
      <footer className="flex justify-center gap-20 mt-10 mb-5 text-base text-stone-50">
      <div className='w-50% flex justify-between'>
        <div className='space-x-10'>© 2024 BotWot Chat Bot AI. All rights reserved.</div>
        <div className="flex space-x-6">
        <Link href="https://www.instagram.com" target="_blank">
          <Image
            src="/images/insta.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <Image
            src="/images/youtube.png"
            alt="YouTube"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
      </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
