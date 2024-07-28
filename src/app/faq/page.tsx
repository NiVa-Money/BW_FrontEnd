// "use client";
// import React, { useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';

// const faqData = [
//   {
//     panel: 'panel1',
//     question: 'What is BotWot?',
//     answer: 'BotWot is a no-code chatbot platform that empowers businesses to build and deploy custom AI chatbots in minutes, without any coding experience.',
//   },
//   {
//     panel: 'panel2',
//     question: 'How does BotWot work?',
//     answer: 'BotWot provides a user-friendly, drag-and-drop interface for creating conversation flows, adding text messages, buttons, and media elements to design chatbot responses and interactions.',
//   },
//   {
//     panel: 'panel3',
//     question: 'Do I need any technical knowledge to use BotWot?',
//     answer: 'No technical knowledge is required. BotWot is designed for users of all technical backgrounds, making it easy to build chatbots quickly and efficiently.',
//   },
//   {
//     panel: 'panel4',
//     question: 'How much does BotWot cost?',
//     answer: 'BotWot offers various pricing plans to suit different business needs. For detailed pricing information, please visit our website or contact our sales team for a customized quote.',
//   },
//   {
//     panel: 'panel5',
//     question: 'Who can benefit from BotWot?',
//     answer: 'Businesses of all sizes and industries, including retail, healthcare, and financial services, can leverage BotWot to enhance customer service, boost sales, and create engaging customer experiences.',
//   },
//   {
//     panel: 'panel6',
//     question: 'What features does BotWot offer for building chatbots?',
//     answer: `Drag-and-drop interface for creating conversation flows.
//             Pre-built templates for common customer service scenarios.
//             Options to add text messages, buttons, menus, and images.
//             Integration with external platforms (based on your plan).
//             Analytics dashboard to track chatbot performance.`,
//   },
// ];

// const FAQbody: React.FC = () => {
//   const [expandedPanel, setExpandedPanel] = useState<string | false>('panel1');
//   const [activeTab, setActiveTab] = useState<number>(1);

//   const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
//     setExpandedPanel(isExpanded ? panel : false);
//   };

//   const expandIcon = (panel: string) => (
//     expandedPanel === panel ? (
//       <span style={{ color: 'white', fontSize: '24px' }}>-</span>
//     ) : (
//       <span style={{ color: 'white', fontSize: '24px' }}>+</span>
//     )
//   );

//   return (
//     <>
    
//       <section>
//         <h1 className="text-3xl font-bold text-white text-center mb-6 mt-10">FAQ</h1>
//         <section className="mt-10 mb-4">
//         <div className="max-w-3xl mx-auto bg-[#17112A] rounded-2xl p-6 shadow-xl">
//           <div className="flex justify-around border-b border-gray-700 mb-6">
//             <button
//               className={`py-2 px-4 ${activeTab === 1 ? 'border-b-2 border-fuchsia-700 text-fuchsia-700' : 'text-white'}`}
//               onClick={() => setActiveTab(1)}
//             >
//               Section 1
//             </button>
//             <button
//               className={`py-2 px-4 ${activeTab === 2 ? 'border-b-2 border-fuchsia-700 text-fuchsia-700' : 'text-white'}`}
//               onClick={() => setActiveTab(2)}
//             >
//               Section 2
//             </button>
//             <button
//               className={`py-2 px-4 ${activeTab === 3 ? 'border-b-2 border-fuchsia-700 text-fuchsia-700' : 'text-white'}`}
//               onClick={() => setActiveTab(3)}
//             >
//               Section 3
//             </button>
//           </div>
//         </div>
//       </section>
//         <div className="max-w-3xl mx-auto bg-[#17112A] rounded-2xl p-6 shadow-xl">
//           {faqData.map((faq) => (
//             <Accordion
//               key={faq.panel}
//               expanded={expandedPanel === faq.panel}
//               onChange={handleChange(faq.panel)}
//               className="bg-[#17112A] p-6"
//             >
//               <AccordionSummary
//                 expandIcon={expandIcon(faq.panel)}
//                 aria-controls={`${faq.panel}-content`}
//                 id={`${faq.panel}-header`}
//                 className="bg-[#17112A] rounded-2xl"
//               >
//                 <Typography variant="body1" className="text-white">
//                   {faq.question}
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography variant="body2" className="text-gray-600">
//                   {faq.answer}
//                 </Typography>
//               </AccordionDetails>
//               <hr />
//             </Accordion>
//           ))}
//         </div>
//       </section>

     
//     </>
//   );
// };

// export default FAQbody;



import React from 'react';

const videoData = Array.from({ length: 11 }, (_, index) => ({
  src: `/videos/${index}.mp4`,
  title: `Video ${index}`,
}));

const HelpCenter: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-2xl p-6 shadow-xl mb-6">
       <h1 className="flex-1 my-auto text-3xl font-bold px-10 leading-6 text-white">
          Help Center
        </h1>
      <div className="grid grid-cols-1 gap-10">
        {videoData.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            <video controls className="w-full rounded-lg">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;



