'use client';
import * as React from 'react';
import Link from 'next/link';
// import ContactUs from '../contactus/page';
function QuestionAnswers() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What is BotWot?',
          answer:
            'BotWot is an AI-powered platform that enables businesses to create intelligent chatbots without coding.',
        },
        {
          question: 'How does BotWot work?',
          answer:
            'BotWot uses natural language processing and machine learning to understand and respond to user queries, providing a seamless conversational experience.',
        },
        {
          question: 'Do I need any technical knowledge to use BotWot?',
          answer:
            'No, BotWot is designed to be user-friendly, requiring no coding expertise.',
        },
        {
          question: 'How much does BotWot cost?',
          answer:
            'BotWot offers flexible pricing plans to suit different business needs. Visit our pricing page for details.',
        },
        {
          question: 'Who can benefit from BotWot?',
          answer:
            'Businesses of all sizes across various industries can leverage BotWot to improve customer service, increase sales, and boost efficiency.',
        },
      ],
    },
    {
      category: 'Features and Functionality',
      questions: [
        {
          question: 'What can BotWot do?',
          answer:
            'BotWot can handle a wide range of tasks, including answering FAQs, booking appointments, providing product information, and generating leads.',
        },
        {
          question: 'How can I customize my chatbot?',
          answer:
            'BotWot offers extensive customization options to match your brand and messaging.',
        },
        {
          question: 'Can I integrate BotWot with my existing systems?',
          answer:
            'Yes, BotWot integrates seamlessly with popular CRM, marketing automation, and messaging platforms.',
        },
        {
          question: 'Is my data secure with BotWot?',
          answer:
            'We prioritize data security and privacy. Your data is protected by industry-standard encryption.',
        },
      ],
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I create a BotWot account?',
          answer: 'You can create a free account on our website.',
        },
        {
          question: 'What kind of support is available?',
          answer:
            'We offer comprehensive support, including documentation, tutorials, and customer support.',
        },
      ],
    },
    {
      category: 'Features and Benefits',
      questions: [
        {
          question: 'What makes BotWot different from other chatbot platforms?',
          answer:
            'BotWot stands out with its advanced AI capabilities, ease of use, and focus on delivering exceptional customer experiences.',
        },
        {
          question: 'Can BotWot handle complex customer inquiries?',
          answer:
            'Absolutely. BotWot is equipped to handle a wide range of inquiries, from simple FAQs to complex customer issues.',
        },
        {
          question: 'How does BotWot improve customer satisfaction?',
          answer:
            'By providing quick, accurate, and personalized responses, BotWot increases customer satisfaction and loyalty.',
        },
        {
          question: 'What kind of analytics does BotWot offer?',
          answer:
            'BotWot provides detailed analytics on chatbot performance, including conversation volume, customer sentiment, and conversion rates.',
        },
      ],
    },
    {
      category: 'Integrations and Compatibility',
      questions: [
        {
          question:
            'Does BotWot integrate with popular CRM and marketing platforms?',
          answer:
            'Yes, BotWot seamlessly integrates with leading CRM and marketing platforms to provide a unified customer view.',
        },
        {
          question: 'Can I customize the look and feel of my chatbot?',
          answer:
            'Absolutely. BotWot offers extensive customization options to match your brand identity.',
        },
      ],
    },
    {
      category: 'Pricing and Support',
      questions: [
        {
          question: 'What is your pricing model?',
          answer:
            'BotWot offers flexible pricing plans to suit different business needs. Please visit our pricing page for details.',
        },
        {
          question: 'What kind of support do you offer?',
          answer:
            'We provide comprehensive support, including documentation, tutorials, and dedicated customer support.',
        },
      ],
    },
    {
      category: 'Building Your Bot',
      questions: [
        {
          question: 'What features does BotWot offer for building chatbots?',
          answer:
            'Drag-and-drop interface for creating conversation flows. Pre-built templates for common customer service scenarios. Options to add text messages, buttons, menus, and images. Integration with external platforms (based on your plan). Analytics dashboard to track chatbot performance.',
        },
        {
          question: 'Can I add a personality to my chatbot?',
          answer:
            "Yes, you can customize your chatbot's voice and tone to reflect your brand personality, including the use of specific vocabulary, emojis, and humor if appropriate.",
        },
        {
          question: 'How can I test my chatbot before making it live?',
          answer:
            'BotWot provides built-in testing tools to simulate user interactions, allowing you to refine the conversation flow and ensure a smooth user experience before deployment.',
        },
        {
          question: 'How long does it take to build a chatbot with BotWot?',
          answer:
            'The time required to build a chatbot depends on its complexity. Simple chatbots can be created in minutes, while more complex designs might take a few hours.',
        },
      ],
    },
    {
      category: 'Deploying and Managing Your Bot',
      questions: [
        {
          question: 'How do I deploy my chatbot?',
          answer:
            'After designing and testing your chatbot, you can easily deploy it on your website, messaging platforms, or other supported channels.',
        },
      ],
    },
  ];
  return (
    <div className="flex overflow-hidden flex-col px-12 py-24 max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-5xl font-bold tracking-tighter leading-tight text-white max-md:text-4xl">
          FAQs❔
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-28 items-start py-2.5 w-full max-md:max-w-full">
            <div className="flex flex-col items-start text-base whitespace-nowrap text-[color:var(--sds-color-text-brand-on-brand)] w-[207px]">
              <Link href="/faq">
                <div className="flex text-lg overflow-hidden gap-2 justify-center items-center px-3 py-3.5 rounded-lg min-h-[68px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc18e22c259998f76896de6832b2b7da3a0c1c5a4f651768cd85fe7c8e3a67d?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                  />

                  <div className="self-stretch my-auto">Back</div>
                </div>
              </Link>
            </div>

            <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
              <Link href="/faq/docs" className="flex">
                <div className="self-stretch mr-2 my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                  Docs
                </div>

                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5352569509cef3186d2c42182fdc5a716c159f52911eb6b7c650bc65aba9b21?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </Link>
            </div>
            <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
              <div className="self-stretch opacity-30 my-auto text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                Demos
              </div>
              <div className="flex gap-2.5  opacity-30 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4e00acef46ac64ee86f50035eeebe6d499de4e0083c6753ba10c9533995363?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
            <div className="flex overflow-hidden  flex-1 shrink gap-2 justify-center items-center p-3 rounded-lg basis-0 bg-white bg-opacity-10">
              <div className="self-stretch my-auto opacity-30 text-2xl text-[color:var(--sds-color-text-brand-on-brand)]">
                Tutorials
              </div>
              <div className="flex gap-2.5  opacity-30 items-center self-stretch p-2.5 my-auto w-11 h-11 rounded-xl bg-slate-500 bg-opacity-20">
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
      <div className="border-b mt-3"></div>
      <div className="w-full">
        {/* <div className="flex flex-col mt-12 w-full  max-md:mt-10 max-md:max-w-full">
          <div className="gap-2.5 self-stretch py-2.5 w-full text-xl font-medium text-white max-md:max-w-full">
            General Questions: 
          </div>
          <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full" onClick={() => toggleAnswer(1)}>
                <div className="flex-1 shrink self-stretch my-auto text-2xl font-bold leading-tight text-white basis-5 max-md:max-w-full">
                  <ul>
                    <li>
                      <span className="text-base leading-6 text-white ">
                        What is Botwot?{' '}
                      </span>{' '}
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd2b9164a187c50ddeee9726ab930ed877f1e4088961396211c3bd8dfd1806e?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
              {openIndex === 1 && (
              <div className="mt-2 text-white">
                Botwot is an AI-powered platform that enables businesses to create intelligent chatbots without coding.
              </div>
            )}
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  Who can benefit from Botwot?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ebba3b8d014e1a300428a4b742764ae16892b4c24eef17999c64dcb009aab6e?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  Is there a coding requirement to use Botwot?{' '}
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9910353933493ef12375a6bcd66734ad37e9092f0dca5d5a8b91546188517c8?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  How much does Botwot cost?{' '}
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a8355825ce6678f85b3b7bb59c56b3971f886bb5e038ecd76f2ce5c17ad586?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full  max-md:mt-10 max-md:max-w-full">
          <div className="gap-2.5 self-stretch py-2.5 w-full text-xl font-medium text-white max-md:max-w-full">
            Building Your Chatbot: 
          </div>
          <div className="flex flex-col mt-8 w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  What types of chatbots can I build with Botwot?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/215146eed55fec741c937308a719f4b245c9d7af6968d1a37d70e9c0e3eb2f82?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  What features does Botwot offer? 
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9706eb1d28c83da934c0b5380adbe009cf9aa9c0eb9c2f0dc0aa981a16bd334?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  How do I customize my chatbot?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5881c88f4bd93d1a15aeed1dad53d710006e8c7c2627751a8cd4ba69692fff9a?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  Can I integrate Botwot with my CRM or helpdesk software?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/96b09caaff4f94b97e96657dc524ac7a6be8bb9239a5f3e03f9527515c190b49?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full  max-md:mt-10 max-md:max-w-full">
          <div className="gap-2.5 self-stretch py-2.5 w-full text-xl font-medium text-white max-md:max-w-full">
            Using Your Chatbot: 
          </div>
          <div className="flex flex-col mt-8 w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  How do I train my chatbot to understand my customers'
                  questions?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e06bd2524cb252a80075e71030ed0a6e0ced1802e26aab97e90f61b30063c01c?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  How do I track the performance of my chatbot?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/120891cc4c87f855d8fcdfbf3817af90bf1c21517b3fba6cd6afd60b280f3d0e?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  What happens if my chatbot encounters a question it can't
                  answer?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de33a4ee678313d0f83c116f3a78237db712527042a6335ca5dd5a0560696bd5?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full  max-md:mt-10 max-md:max-w-full">
          <div className="gap-2.5 self-stretch py-2.5 w-full text-xl font-medium text-white max-md:max-w-full">
            Security and Privacy:
          </div>
          <div className="flex flex-col mt-8 w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  Is my data secure with Botwot?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1930a1fb51b4ed8ae41249c77d79370ed508af720e5114af312b53251c5846?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-5 max-md:max-w-full">
                  How does Botwot handle customer data privacy?
                </div>
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e0b49dfb6a51d33c4839f8ae0a7bb116edf79896d39e6daad46fa7a404fcb6?apiKey=555c811dd3f44fc79b6b2689129389e8&&apiKey=555c811dd3f44fc79b6b2689129389e8"
                    className="object-contain self-stretch my-auto aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col mt-12 w-full max-md:max-w-full">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <div className="gap-2.5 self-stretch py-2.5 w-full text-2xl font-medium text-white max-md:max-w-full">
                {section.category}
              </div>
              {section.questions.map((faq, faqIndex) => (
                <div key={faqIndex} className="mb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      toggleAnswer(
                        sectionIndex * section.questions.length + faqIndex
                      )
                    }
                  >
                    <div className=" text-lg text-white">{faq.question}</div>
                    <div className="text-white text-xl ">
                      {openIndex ===
                      sectionIndex * section.questions.length + faqIndex
                        ? '-'
                        : '+'}
                    </div>
                  </div>
                  {openIndex ===
                    sectionIndex * section.questions.length + faqIndex && (
                    <div className="mt-2 text-white text-wrap mb-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Link href="/contactus">
          <div className="mt-12 w-full text-base  cursor-pointer text-white max-md:mt-10 max-md:max-w-full">
            If you don't see your question answered here, feel free to contact
            our support team!
          </div>
        </Link>
      </div>
    </div>
  );
}

export default QuestionAnswers;
