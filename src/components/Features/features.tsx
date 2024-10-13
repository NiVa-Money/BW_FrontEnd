import React from 'react';
import Image from 'next/image';

// Define the props interface for FeatureCard
interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: string; // Allow any string for imagePosition
}

// Update FeatureCard to use the props type
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imagePosition = 'bottom', // Default position
}) => (
  <div className="flex flex-col w-full ml-10 mb-8">
    <h3 className="text-2xl font-semibold text-[#EEEEF0] mb-2">{title}</h3>
    <ul className="list-disc list-inside ml-4 mb-4">
      {description.split('\n').map((line, index) => (
        <li key={index} className="text-base text-[#8D8997] mb-2">
          {line}
        </li>
      ))}
    </ul>
    <div
      className={`relative w-full ${
        imagePosition === 'right' ? 'self-end' : ''
      }`}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={300} 
        layout="intrinsic" // Change to intrinsic
        // style={{ maxWidth: '100%', height: 'auto' }} // Make responsive
      />
    </div>
  </div>
);

const FeaturesGrid = () => {
  const features = [
    {
      title: 'No Code Chatbot Builder',
      description:
        'Intuitive Interface\nDrag-and-Drop Functionality\nPre-built Templates',
      imageSrc: '/features/Chatbot.png',
    },
    {
      title: 'Sentiment Analysis',
      description:
        'Understand Customer Emotions\nIdentify Areas for Improvement\nTailor Responses',
     imageSrc: '/features/Sentiment.png',
    },
    {
      title: 'Emotion Detection',
      description:
        'Empathize with Customers\nProvide Relevant Support\nEnhance User Experience',
     imageSrc: '/features/Emotion.png',
    },
    {
      title: 'Chat Summary for Each Interaction',
      description: 'Quick Overview\nEasy Reference\nImproved Follow-ups',
     imageSrc: '/features/Summary.png',
    },
    {
      title: 'Recommendation Engine',
      description:
        'Personalized Suggestions\nImproved User Engagement\nIncreased Conversion Rates',
     imageSrc: '/features/Recommendation.png',
    },
    {
      title: 'Live Chat Integration',
      description:
        'Seamless Communication\nReal-time Support\nEnhanced Customer Experience',
     imageSrc: '/features/LiveChat.png',
    },
    {
      title: 'Vision Analysis',
      description:
        'Image Recognition\nVisual Context Understanding\nEnhanced Interaction Capabilities',
     imageSrc: '/features/Vision.png',
    },
    {
      title: 'Voice Capability / Analysis',
      description:
        'Speech Recognition\nVoice Commands\nAudio-based Interactions',
     imageSrc: '/features/Voice.png',
    },
  ];

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
