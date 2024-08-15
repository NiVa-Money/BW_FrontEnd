'use client';
import Image from 'next/image';
import React from 'react';
import mainLogo from '@/public/assets/mainLogo.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './header.css';
type NavItemProps = {
  text: string;
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <li className="self-stretch my-auto">{text}</li>
);

const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <button
    className={`justify-center self-stretch gap-10 px-8 py-4 font-medium shadow-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#B52BBA_4.666563235223293deg,#A12CBC_23.647727966308594deg,#8C2EBE_44.85525995492935deg,#792FBF_72.45651304721832deg,#6C30C0_82.50000178813934deg,#4B32C3_127.99007892608643deg,#5831C2_160.968976020813deg,#6330C1_178.45529437065125deg,#742FC0_189.47770357131958deg,#8D2DBE_202.95226335525513deg,#A62CBC_230.65982580184937deg,#B92ABA_251.35178089141846deg,#D029B8_276.4414644241333deg,#EC27B6_306.45145654678345deg,#C729B9_331.67617321014404deg)] rounded-[99px] max-md:px-5 ${className}`}
  >
    {children}
  </button>
);

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-center items-center px-6 py-4 w-screen text-gray-100">
      <div className="flex gap-5 justify-between py-0.5 pl-1.5 w-full max-w-[1184px] max-md:flex-wrap ">
        <Link className={`link ${pathname === '/'}`} href="/">
          <div className="flex gap-2 justify-center px-1.5 py-2 my-auto text-2xl font-bold tracking-widest whitespace-nowrap">
            <Image src={mainLogo.src} alt="logo" width={90} height={80} />
            {/* <h2 className="my-auto">BotWot</h2>     */}
          </div>
        </Link>
        <nav className="flex gap-5 justify-between items-center py-2 pl-3 text-sm leading-5 max-md:flex-wrap ">
          <ul className="flex gap-10">
            <Link
              className={`link ${pathname === '/home' ? 'active' : ''}`}
              href="/home"
            >
              Home
            </Link>
            <Link
              className={`link ${pathname === '/aboutus' ? 'active' : ''}`}
              href="/aboutus"
            >
              About Us
            </Link>
            <Link
              className={`link ${pathname === '/pricing' ? 'active' : ''}`}
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className={`link ${pathname === '/blog' ? 'active' : ''}`}
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className={`link ${pathname === '/contactus' ? 'active' : ''}`}
              href="/contactus"
            >
              Contact Us
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
