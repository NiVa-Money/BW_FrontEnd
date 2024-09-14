'use client';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const CancellationComponent: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  const cancellationSections = [
    {
      title: 'Non-Refundable Policy ',
      content: `
          All fees paid for Botwot, including subscription fees and one-time payments, are non-refundable. This policy applies regardless of whether the services have been fully utilized or not.       
          `,
    },
    {
      title: 'Cancellation Policy ',
      content: `
          Cancellation of Services: You may cancel your subscription or services provided by Botwot at any time. However, no refunds will be issued for any remaining subscription period or unused services. 
          Cancellation Procedure: To cancel your subscription, please contact our support team at support@botwot.io. Include your account details and reason for cancellation in your email. 
          `,
    },
    {
      title: 'Exceptions',
      content: `
          Refunds at PurpleAnt's Discretion: PurpleAnt reserves the right to consider refunds on a case-by-case basis, solely at its discretion. This may occur in exceptional circumstances, such as prolonged technical issues preventing the use of Botwot.       
          `,
    },
    {
      title: 'Contact Us',
      content: `
          If you have any questions about our cancellation and refund policy, please contact our support team at support@botwot.io.           `,
    },
  ];

  return (
    <>
      <h1 className="mt-4 text-6xl font-black text-center text-gray-100 max-md:text-4xl mb-12">
        Cancellation & Refund Policy
      </h1>
      <div className=" text-white p-6 rounded-lg">
        <p className="mb-6">Effective Date: June 1, 2024 </p>
        <p className="mb-6">
          Thank you for choosing Botwot, a product by PurpleAnt Technologies
          Private Limited ("PurpleAnt," "we," "us," or "our"). Please review our
          cancellation and refund policy below.{' '}
        </p>

        {cancellationSections.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
              <span>
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
          By using Botwot, you agree to adhere to this cancellation and refund
          policy. PurpleAnt reserves the right to amend or update this policy at
          any time without prior notice. Please review this policy periodically
          for any changes.
        </p>
      </div>
    </>
  );
};

export default CancellationComponent;
