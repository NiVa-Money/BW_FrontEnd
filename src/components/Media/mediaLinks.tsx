import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
    {
      name: 'NDTV Profit',
      logo: '/media/NDTV.png',
      url: 'https://www.ndtvprofit.com/technology/purpleant-technologies-launches-ai-no-code-chatbot-platform',
    },
    {
      name: 'CXO Today',
      logo: '/media/CXO.png',
      url: 'https://cxotoday.com/press-release/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/',
    },
    {
      name: 'Express Computer',
      logo: '/media/EXP.png',
      url: 'https://www.expresscomputer.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/115267/',
    },
    {
      name: 'CRN',
      logo: '/media/CRN.png',
      url: 'https://www.crn.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/',
    },
    {
      name: 'AI Spirituality',
      logo: '/media/AIS.png',
      url: 'https://www.crn.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/',
    },
    {
      name: 'Digital Tech Circle',
      logo: '/media/DTC.png',
      url: 'https://www.crn.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/',
    },
    {
      name: 'Indian Television',
      logo: '/media/IndianTel.png',
      url: 'https://www.crn.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/',
    },
  ];

const Media = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId: number;

    const scrollLogos = () => {
      if (scrollElement) {
        scrollElement.scrollLeft += 1; // Adjust the speed here
        if (
          scrollElement.scrollLeft >=
          scrollElement.scrollWidth - scrollElement.clientWidth
        ) {
          scrollElement.scrollLeft = 0; // Reset to the start
        }
      }
      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    animationFrameId = requestAnimationFrame(scrollLogos);

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, []);

  return (
    <div className="text-white text-center py-8">
      <h2 className="text-3xl font-semibold mt-4 mb-10">Media</h2>
      <div
        ref={scrollRef}
        className="flex overflow-hidden items-center justify-start max-w-6xl mx-auto"
      >
        <div className="flex items-center">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}_${index}`}
              className="flex-shrink-0 mx-8"
            >
              <Link href={partner.url} target="_blank" rel="noopener noreferrer" className="block w-40 h-25">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={100}
                  objectFit="contain"
                  className="w-full h-full"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gray-700 w-full max-w-6xl mx-auto mt-8" />
    </div>
  );
};

export default Media;