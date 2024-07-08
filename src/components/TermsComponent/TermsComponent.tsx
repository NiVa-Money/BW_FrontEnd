"use client"
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const TermsComponent: React.FC = () => {
  
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleToggle = (index: number) => {
      setExpanded(expanded === index ? null : index);
    };
    const termsSections = [
        {
          title: 'Use of Botwot ',
          content: `
          License: PurpleAnt grants you a non-exclusive, non-transferable, revocable license to use Botwot in accordance with these Terms and Conditions.
          Restrictions: You agree not to: 
          - Copy, modify, or distribute Botwot or any content without prior written consent from PurpleAnt. 
          - Use Botwot for any unlawful purpose or in violation of any applicable laws or regulations. 
          - Attempt to gain unauthorized access to Botwot or its related systems or networks. 
          `
        },
        {
          title: 'Privacy',
          content: `
          Data Collection: By using Botwot, you consent to the collection and use of your information as described in our Privacy Policy      
          Cookies: Botwot may use cookies and similar technologies to enhance user experience. You can manage your cookie preferences through your browser settings. To personalize your experience, such as suggesting relevant topics or content.`
        },
        {
          title: 'Intellectual Property ',
          content: `
          Ownership: PurpleAnt retains all rights, title, and interest in and to Botwot, including all intellectual property rights.      
          Feedback: You agree that any feedback, suggestions, or ideas you provide regarding Botwot may be used by PurpleAnt without any obligation to you. 
          Legal Requirements: We may access, preserve, and disclose collected information, if we believe doing so is required or appropriate to: comply with law enforcement requests and legal process, such as a court order or subpoena; respond to your requests; comply with the law; or protect your, our, or others’ rights, property, or safety.
          `
        },
        {
          title: 'Limitation of Liability',
          content: `Disclaimer: Botwot is provided on an "as is" and "as available" basis. PurpleAnt makes no warranties or representations about the suitability, reliability, availability, timeliness, or accuracy of Botwot. 
                    Limitation of Liability: To the maximum extent permitted by law, PurpleAnt shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.           `
        },
        {
          title: 'Governing Law ',
          content: `
          Jurisdiction: These Terms and Conditions shall be governed by and construed in accordance with the laws of Gurgaon , India without regard to its conflict of law principles      
          `
        },
        {
          title: 'Changes to Terms and Conditions',
          content: `
          Modification: PurpleAnt reserves the right to modify or revise these Terms and Conditions at any time. You agree to review these Terms and Conditions periodically for any updates.       
          `
        },
        {
          title: 'Contact Us',
          content: `
          If you have any questions about these Terms and Conditions, please contact us at support@botwot.io       
          `
        }
    
      ];
      
    return (
        <>
            <h1 className="mt-4 text-6xl font-black text-center text-gray-100 max-md:text-4xl mb-12">
            Terms of Service 
            </h1>
            <div className=" text-white p-6 rounded-lg">
      <p className="mb-6">Effective Date:  June 1 , 2024 </p>
      <p className="mb-6">Welcome to Botwot, a product of PurpleAnt Technologies Private Limited ("PurpleAnt," "we," "us," or "our"). These Terms and Conditions govern your use of Botwot and its associated services. By accessing or using Botwot, you agree to be bound by these Terms and Conditions. </p>


      {termsSections.map((section, index) => (
          <div key={index} className="mb-6">
            <div 
              onClick={() => handleToggle(index)} 
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
             <span> {expanded===index?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>} {section.title}</span>
            <AddIcon/>
            </div>
            {expanded === index && <p className="pl-4 mb-4 whitespace-pre-wrap text-left">{section.content}</p>}
            <hr className="border-gray-600"/>
          </div>
        ))}
        
<p className="mt-6 mb-6 text-md font-bold">Please read these Terms and Conditions carefully. Your continued use of Botwot constitutes your acceptance of these terms. 
</p>

    </div>
        </>
    );
};

export default TermsComponent;
