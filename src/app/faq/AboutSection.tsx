'use client';
import * as React from 'react';
import Link from 'next/link';
function AboutSection() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function toggleViewMore() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className='h-max-100vh relative w-max-100vw'>
    <div className="flex  overflow-hidden flex-col px-12 py-24 max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-5xl font-bold tracking-tighter leading-tight text-white max-md:text-4xl">
          Docs 📄
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-28 items-start py-2.5 w-full max-md:max-w-full">
            <div className="flex flex-col text-lg items-start text-base whitespace-nowrap text-[color:var(--sds-color-text-brand-on-brand)] w-[207px]">
              <Link href="/faq">
                <div className="flex border-1  overflow-hidden gap-2 justify-center items-center px-3 py-3.5 rounded-lg min-h-[68px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e278a7f82980de7cf346817ac32e91fce1b62f93dbc5402d6e159520d7a5c8ef?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                  />

                  <div className="self-stretch my-auto">Back</div>
                </div>
              </Link>
            </div>
            <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
              <div className="self-stretch my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                Demos
              </div>
              <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/80236ed57e710888f8dae2e4b9cb53f6eeade73363ca4f47a390dc3a06405d4e?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>

            <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
              <Link href="/faq">
                <div className="self-stretch my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                  FAQs
                </div>
              </Link>
              <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97d871d37e1997609d8de575111205fd492ac4e2186c9a8b1711df133cc3e624?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
            <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
              <div className="self-stretch my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                Tutorials
              </div>
              <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9ebbcabf4b486023303abbbf7526a7d1eaf5aed60cdf73b27fa4622274d9197?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
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
        className={`flex  flex-col items-start mt-12 max-w-full text-base text-white max-w-[1030px] max-md:mt-10 max-md:max-w-full ${
          isExpanded ? 'max-h-full' : 'max-h-96'
        }`}
      >
        <div className="gap-2.5 self-stretch text-3xl font-semibold whitespace-nowrap">
          About
        </div>
        <div className="z-0 self-stretch mt-4 max-md:max-w-full">
          <span className="text-2xl font-semibold leading-10">
            Botwot.io: Building Your AI Chatbot in Minutes - No Coding Required 
          </span>
          <br />
          <br />
          In today's digital world, chatbots are rapidly becoming essential
          tools. They seamlessly answer customer service inquiries, guide users
          through product purchases, and personalize online experiences.
          Traditionally, building a chatbot required coding expertise, limiting
          its accessibility to businesses. 
          <br />
          Botwot.io is here to change that. Our platform empowers anyone,
          regardless of technical background, to build and deploy a custom AI
          chatbot in minutes. This removes a significant barrier for businesses,
          particularly smaller ones, who can now leverage the power of chatbots
          without needing a dedicated programming team. 
          <br />
          <br />
          <br />
          <span className="text-xl font-semibold leading-8">
            The Power of No-Code Chatbot Creation 
          </span>
          <br />
          <br />
          Gone are the days of complex coding! Botwot.io offers a user-friendly,
          no-code interface. Think of it like building with Legos - pre-built
          components snap together to create your desired chatbot functionality.
          This allows you to: 
          <ul>
            <li>
              Build a Chatbot Tailored to Your Needs: Choose from pre-built
              conversation flows and modules that cater to different customer
              service and sales needs. Your chatbot can answer frequently asked
              questions, handle basic troubleshooting, or even guide customers
              through the sales funnel. 
            </li>
            <li>
              Personalize Your Chatbot: Craft your chatbot's voice and
              personality to align with your company culture. Customize it with
              your brand logo, colors, and ensure responses reflect the way you
              interact with customers. 
            </li>
            <li>
              Train Your AI Chatbot: Botwot.io utilizes machine learning to
              continuously improve your chatbot's responses over time. Train it
              to understand natural language and respond accurately to customer
              inquiries. 
            </li>
            <li>
              Integrate with Existing Systems: Connect your chatbot to your CRM,
              helpdesk, or other relevant software to streamline workflows and
              access customer data. 
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
              agents. This frees up your staff to focus on higher-value tasks. 
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
              Reduced Operational Costs: Chatbots automate repetitive tasks and
              resolve simple inquiries, reducing the need for human
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
          forefront of this revolution. With our intuitive tools, businesses can
          leverage the power of AI chatbots to improve customer service, boost
          sales, and create a more engaging customer experience – all without
          needing a team of developers.
        </div>
      </div>
      <div
        className="flex align-center absolute top-100 bottom-0 right-30 text-lg z-0 items-center justify-center "
        onClick={toggleViewMore}
      >
        <div className="self-stretch cursor-pointer my-auto ">
          {isExpanded ? 'View Less' : 'View More'}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8af6e72c4afd34b9a0eebc6e34b6b2b9dd8327d61d939073261537dc65dca77f?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
          className="object-contain shrink-0 self-stretch mb-1 my-auto aspect-[1.05] w-[50px]"
        />
      </div>
    </div>
    </div>
  );
}

export default AboutSection;
