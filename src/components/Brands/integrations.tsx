import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const applications = [
  { name: 'Whatsapp', logo: '/integrations/Whatsapp.png' },
  { name: 'CRM', logo: '/integrations/CRM.png' },
  { name: 'Facebook', logo: '/integrations/Facebook.png' },
  { name: 'Shopify', logo: '/integrations/Shopify.png' },
  { name: 'Instagram', logo: '/integrations/Instagram.png' },
  { name: 'Frame', logo: '/integrations/Frame.png' },
  { name: 'Calendar', logo: '/integrations/Calendar.png' },
  { name: 'Slack', logo: '/integrations/Slack.png' },
];

const Integrations = () => {

return (
  <div className="text-white text-center py-8">
    <h2 className="text-3xl font-semibold mt-4 mb-6">Available BotWot Integrations</h2>
    <div
      className="flex overflow-hidden items-center justify-center mx-auto"
    >
      {[...applications].map((application, index) => (
        <div
          key={`${application.name}_${index}`}
          className="flex items-center justify-center mx-8"
          style={{ minWidth: '100px', height: '150px' }}
        >
          <Image
            src={application.logo}
            alt={application.name}
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
    <div className="mt-12 h-px bg-[#4C465B] w-full max-w-7xl mx-auto" />
  </div>
);
};

export default Integrations;