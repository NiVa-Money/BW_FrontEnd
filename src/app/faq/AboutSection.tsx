'use client';
import * as React from 'react';
import Link from 'next/link';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function AboutSection() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function toggleViewMore() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="h-max-100vh relative w-max-100vw">
      <div className="flex  overflow-hidden flex-col px-12 py-24 max-md:px-5">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-5xl font-bold tracking-tighter leading-tight text-white max-md:text-4xl">
            Docs 📄
          </div>
          <div className="flex flex-col mt-4 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-28 items-start py-2.5 w-full max-md:max-w-full">
              <div className="flex flex-col text-lg items-start  whitespace-nowrap text-[color:var(--sds-color-text-brand-on-brand)] w-[207px]">
                <Link href="/faq">
                  <div className="flex border-1  overflow-hidden gap-2 justify-center items-center px-3 py-3.5 rounded-lg min-h-[68px]">
                    <ArrowBackIosIcon className="object-contain self-stretch my-auto w-6 aspect-square fill-[white] text-[white]" />

                    <span className="self-stretch my-auto text-white">
                      Back
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
                <span className="self-stretch opacity-30 my-auto text-white text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                  Demos
                </span>
                <div className="flex opacity-30 gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                  <PlayCircleOutlineIcon className="object-contain self-stretch my-auto w-6 aspect-square" />
                </div>
              </div>

              <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
                <Link href="/faq/questionsAns">
                  <span className="self-stretch text-white my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                    FAQs
                  </span>
                </Link>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                  <HelpOutlineIcon className="object-contain self-stretch my-auto w-6 aspect-square text-[white]" />
                </div>
              </div>
              <div className="flex overflow-hidden  flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
                <div className="self-stretch opacity-30 my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                  Tutorials
                </div>
                <div className="flex gap-2.5 opacity-30 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                  <MenuBookIcon className="object-contain self-stretch my-auto w-19 aspect-square" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-white-400 mt-6"></div>
        <div className="flex flex-col justify-center pl-4 mt-3 w-full max-md:mt-10 max-md:max-w-full">
          <div className="w-full min-h-[1px] max-md:max-w-full" />
        </div>
        <div
          className={`flex  flex-col items-start mt-12 max-w-full text-base text-white  max-md:mt-10 max-md:max-w-full ${
            isExpanded ? 'max-h-full' : 'max-h-96'
          }`}
        >
          <div className="gap-2.5 self-stretch text-3xl font-semibold whitespace-nowrap">
            About
          </div>
          <div className="z-0 self-stretch mt-4 max-md:max-w-full">
            <span className="text-2xl font-semibold leading-10">
              Botwot.io: Building Your AI Chatbot in Minutes - No Coding
              Required 
            </span>
            <br />
            <br />
            In today's digital world, chatbots are rapidly becoming essential
            tools. They seamlessly answer customer service inquiries, guide
            users through product purchases, and personalize online experiences.
            Traditionally, building a chatbot required coding expertise,
            limiting its accessibility to businesses. 
            <br />
            Botwot.io is here to change that. Our platform empowers anyone,
            regardless of technical background, to build and deploy a custom AI
            chatbot in minutes. This removes a significant barrier for
            businesses, particularly smaller ones, who can now leverage the
            power of chatbots without needing a dedicated programming team. 
            <br />
            <br />
            <br />
            <span className="text-xl font-semibold leading-8">
              The Power of No-Code Chatbot Creation 
            </span>
            <br />
            <br />
            Gone are the days of complex coding! Botwot.io offers a
            user-friendly, no-code interface. Think of it like building with
            Legos - pre-built components snap together to create your desired
            chatbot functionality. This allows you to: 
            <ul>
              <li>
                Build a Chatbot Tailored to Your Needs: Choose from pre-built
                conversation flows and modules that cater to different customer
                service and sales needs. Your chatbot can answer frequently
                asked questions, handle basic troubleshooting, or even guide
                customers through the sales funnel. 
              </li>
              <li>
                Personalize Your Chatbot: Craft your chatbot's voice and
                personality to align with your company culture. Customize it
                with your brand logo, colors, and ensure responses reflect the
                way you interact with customers. 
              </li>
              <li>
                Train Your AI Chatbot: Botwot.io utilizes machine learning to
                continuously improve your chatbot's responses over time. Train
                it to understand natural language and respond accurately to
                customer inquiries. 
              </li>
              <li>
                Integrate with Existing Systems: Connect your chatbot to your
                CRM, helpdesk, or other relevant software to streamline
                workflows and access customer data. 
              </li>
            </ul>
            <br />
            <span className="text-xl font-semibold leading-8">
              The Benefits of AI Chatbots for Businesses 
            </span>
            <br />
            <br />
            By utilizing Botwot.io's no-code platform, businesses can reap a
            multitude of benefits: 
            <ul>
              <li>
                Improved Customer Service: Chatbots can provide 24/7 support,
                answer basic questions, and route complex inquiries to human
                agents. This frees up your staff to focus on higher-value
                tasks. 
              </li>
              <li>
                Increased Sales: Chatbots can engage website visitors, answer
                product inquiries, and even guide them through the purchasing
                process. 
              </li>
              <li>
                Enhanced Customer Experience: Chatbots offer a personalized
                experience, readily answer questions, and resolve issues
                efficiently. This translates to happier and more satisfied
                customers. 
              </li>
              <li>
                Reduced Operational Costs: Chatbots automate repetitive tasks
                and resolve simple inquiries, reducing the need for human
                intervention. 
              </li>
            </ul>
            <br />
            <span className="text-xl font-semibold leading-8">
              Who Can Benefit from Botwot.io? 
            </span>
            <br />
            <br />
            Botwot.io's user-friendly interface makes it a valuable tool for
            businesses of all sizes: 
            <ul>
              <li>
                Small Businesses: Build a chatbot to manage customer service
                queries without the need for expensive development teams. 
              </li>
              <li>
                E-commerce Stores: Enhance customer experience with personalized
                product recommendations and streamline transactions. 
              </li>
              <li>
                Lead Generation: Capture leads by engaging website visitors and
                qualifying them for sales teams. 
              </li>
            </ul>
            <br />
            <span className="text-xl font-semibold leading-8">
              The Future of Chatbots is Now 
            </span>
            <br />
            <br />
            As AI technology advances, so will the capabilities of chatbots.
            Botwot.io, with its no-code platform, positions itself at the
            forefront of this revolution. With our intuitive tools, businesses
            can leverage the power of AI chatbots to improve customer service,
            boost sales, and create a more engaging customer experience – all
            without needing a team of developers.
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center absolute inset-x-0 top-[100%] z-10 cursor-pointer"
        onClick={toggleViewMore}
      >
        <div className="flex items-center justify-center">
          <span className="text-lg text-white">
            {isExpanded ? 'View Less' : 'View More'}
          </span>

          <KeyboardArrowDownIcon className="object-contain mb-1 ml-4 aspect-[1.05] w-[70px] text-[white]" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
