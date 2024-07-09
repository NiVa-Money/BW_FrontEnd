'use client';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const UpdatesFaqsComponent: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  const faqsSection1 = [
    {
      title: 'What is BotWot?',
      content: `
      BotWot is a no-code chatbot platform that empowers businesses to build and deploy custom AI chatbots in minutes, without any coding experience.
          `,
    },
    {
      title: 'How does BotWot work?',
      content: `
      BotWot provides a user-friendly, drag-and-drop interface for creating conversation flows, adding text messages, buttons, and media elements to design chatbot responses and interactions.
          `,
    },
    {
      title: 'Do I need any technical knowledge to use BotWot?',
      content: `
      No technical knowledge is required. BotWot is designed for users of all technical backgrounds, making it easy to build chatbots quickly and efficiently.
      `,
    },
    {
      title: 'How much does BotWot cost?',
      content: `
      BotWot offers various pricing plans to suit different business needs. For detailed pricing information, please visit our website or contact our sales team for a customized quote.          `,
    },
    {
      title: 'Who can benefit from BotWot?',
      content: `
      Businesses of all sizes and industries, including retail, healthcare, and financial services, can leverage BotWot to enhance customer service, boost sales, and create engaging customer experiences.
      `,
    },
  ];
  const faqsSection2 = [
    {
      title: 'What features does BotWot offer for building chatbots?',
      content: `
      Drag-and-drop interface for creating conversation flows.
      Pre-built templates for common customer service scenarios.
      Options to add text messages, buttons, menus, and images.
      Integration with external platforms (based on your plan).
      Analytics dashboard to track chatbot performance.
                `,
    },
    {
      title: 'Can I add a personality to my chatbot?',
      content: `
      Yes, you can customize your chatbot's voice and tone to reflect your brand personality, including the use of specific vocabulary, emojis, and humor if appropriate.          `,
    },
    {
      title: 'How can I test my chatbot before making it live?',
      content: `
      BotWot provides built-in testing tools to simulate user interactions, allowing you to refine the conversation flow and ensure a smooth user experience before deployment.
      `,
    },
    {
      title: 'How long does it take to build a chatbot with BotWot? ',
      content: `
      The time required to build a chatbot depends on its complexity. Simple chatbots can be created in minutes, while more complex designs might take a few hours.`,
    },
  ];
  const faqsSection3 = [
    {
      title: 'How do I deploy my chatbot?',
      content: `
      After designing and testing your chatbot, you can easily deploy it on your website, mobile app, or integrate it with other platforms supported by BotWot, such as Facebook Messenger and Telegram (depending on your plan).
    `,
    },
    {
      title: `How do I monitor my chatbot's performance?`,
      content: `
      BotWot’s analytics dashboard provides insights into user interactions, customer satisfaction, and key metrics to help you optimize your chatbot’s performance.`,
    },
    {
      title: 'How can I update and maintain my chatbot?',
      content: `
      You can update your chatbot’s content and functionalities at any time, allowing you to modify conversation flows, add new features, or adapt to changing customer needs.
      `,
    },
  ];
  const faqsSection4 = [
    {
      title: 'What types of integrations does BotWot offer?',
      content: `
      Integrations depend on your BotWot plan and may include CRM systems, analytics tools, and various messaging platforms.    `,
    },
    {
      title: `What happens if my chatbot encounters a question it can't answer?`,
      content: `
      You can configure BotWot to handle such situations by connecting the user with a live agent or providing relevant resources within the chat window.
      `,
    },
    {
      title: 'What security measures does BotWot take?',
      content: `
      BotWot employs industry-standard security protocols to protect user data and ensure the privacy of your customers’ interactions.
      `,
    },
    {
      title: 'What kind of support does BotWot offer?',
      content: `
        BotWot provides a knowledge base, video tutorials, and a dedicated support team to assist you.
        `,
    },
  ];
  const faqsSection5 = [
    {
      title: `How do I train my chatbot to understand my customers' questions?`,
      content: `
      BotWot uses machine learning to allow you to train your chatbot with sample questions and responses. Over time, your chatbot will continue to learn and improve its accuracy.
      `,
    },
    {
      title: `How do I track the performance of my chatbot?`,
      content: `
      BotWot provides analytics to help you understand your chatbot’s performance, including engagement metrics and customer satisfaction ratings.`,
    },
    {
      title: `What happens if my chatbot encounters a question it can't answer?`,
      content: `
      You can configure your chatbot to route complex inquiries to human agents, ensuring your customers receive the support they need.`,
    },
  ];
  const faqsSection6 = [
    {
      title: `Is my data secure with BotWot?`,
      content: `
      Yes, BotWot prioritizes data security and employs robust measures to safeguard your information and customer data. For more details, refer to our Privacy Policy.
      `,
    },
    {
      title: `How does BotWot handle customer data privacy? `,
      content: `
      We take data privacy seriously and comply with relevant regulations. Customer data can be uploaded securely for training purposes, but we recommend obtaining customer consent before uploading any personal information.`,
    },
  ];

  return (
    <>
      <h1 className="mt-4 text-6xl font-black text-center text-gray-100 max-md:text-4xl mb-12">
        Updates & FAQs
      </h1>
      <div className=" text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-10 underline">
          Getting Started with BotWot
        </h1>

        {faqsSection1.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
                {' '}
                {expanded === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}{' '}
                {section.title}
              </span>
              <AddIcon />
            </div>
            {expanded === index && (
              <p className="pl-4 mb-4">{section.content}</p>
            )}
            <hr className="border-gray-600" />
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-4">Building Your Bot</h1>
        {faqsSection2.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
                {' '}
                {expanded === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}{' '}
                {section.title}
              </span>
              <AddIcon />
            </div>
            {expanded === index && (
              <p className="pl-4 mb-4">{section.content}</p>
            )}
            <hr className="border-gray-600" />
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-10 underline">
          Deploying and Managing Your Bot
        </h1>
        {faqsSection3.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
                {' '}
                {expanded === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}{' '}
                {section.title}
              </span>
              <AddIcon />
            </div>
            {expanded === index && (
              <p className="pl-4 mb-4">{section.content}</p>
            )}
            <hr className="border-gray-600" />
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-10 underline">
          Technical and Troubleshooting
        </h1>
        {faqsSection4.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
                {' '}
                {expanded === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}{' '}
                {section.title}
              </span>
              <AddIcon />
            </div>
            {expanded === index && (
              <p className="pl-4 mb-4">{section.content}</p>
            )}
            <hr className="border-gray-600" />
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-10 underline">
          Using Your Chatbot{' '}
        </h1>
        {faqsSection5.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
                {' '}
                {expanded === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}{' '}
                {section.title}
              </span>
              <AddIcon />
            </div>
            {expanded === index && (
              <p className="pl-4 mb-4">{section.content}</p>
            )}
            <hr className="border-gray-600" />
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-10 underline">
          Security and Privacy
        </h1>
        {faqsSection6.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
                {' '}
                {expanded === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}{' '}
                {section.title}
              </span>
              <AddIcon />
            </div>
            {expanded === index && (
              <p className="pl-4 mb-4">{section.content}</p>
            )}
            <hr className="border-gray-600" />
          </div>
        ))}
        <p className="mt-6 mb-6 text-md font-bold">
        If you have further questions, please contact our support team.
        </p>
      </div>
    </>
  );
};

export default UpdatesFaqsComponent;
