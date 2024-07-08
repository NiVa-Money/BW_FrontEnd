"use client"
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const PrivacyComponent: React.FC = () => {
  
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleToggle = (index: number) => {
      setExpanded(expanded === index ? null : index);
    };
    const policySections = [
        {
          title: 'Information We Collect',
          content: `
            We collect several types of information to provide and improve the Services:
      
            User Data: When you sign up for the Services, you may provide certain ‘personal information’. It means information that alone or when in combination with other information may be used to readily identify, contact, or locate you, such as: name, address, email address, or phone number. We do not consider Personal Information to include information that has been anonymized so that it does not allow a third party to easily identify a specific individual.
            
            Chat Data: The Services collect the content of your chats, including text, images, and files. This data is used to power the AI and personalize your experience.
            
            Usage Data: We collect information about how you use the Services, such as the features you access, the frequency of your use, and the topics of your chats.
          `
        },
        {
          title: 'Use of Information',
          content: `
            We use the information we collect for the following purposes:
      
            To provide and improve the Services, including training and developing our AI models.
            To personalize your experience, such as suggesting relevant topics or content.
            To communicate with you about the Services, including sending updates, promotional offers, and support messages.
            To comply with legal and regulatory obligations.
          `
        },
        {
          title: ' Disclosure of Information',
          content: `
            We may disclose your information to third parties in the following circumstances:
      
            Service Providers: We may share your information with third-party service providers who help us operate and improve BotWot. These providers may include companies that provide data hosting, analytics, and customer support services. We will only share your information with providers who have agreed to use it in accordance with strict confidentiality agreements and security standards.
            
            Legal Requirements: We may access, preserve, and disclose collected information, if we believe doing so is required or appropriate to: comply with law enforcement requests and legal process, such as a court order or subpoena; respond to your requests; comply with the law; or protect your, our, or others’ rights, property, or safety.
            
            Merger or Acquisition: If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction as permitted by law and/or contract. We cannot control how such entities may use or disclose such information.
            
            Companies using BotWot are responsible for their own data practices and compliance with all applicable laws and regulations. BotWot will provide companies with the tools and information they need to meet their data privacy obligations. We may also enter into agreements with companies that outline their specific data privacy responsibilities.
          `
        },
        {
          title: 'Data Retention',
          content: `
            We will retain your information for as long as your account is active or as needed to provide you with the Services. We may also retain your information for compliance with legal obligations, resolving disputes, and enforcing our agreements.
          `
        },
        {
          title: ' Security',
          content: `
            We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of your information.
      
            Children’s Privacy: We do not knowingly collect information from children under 13. We will take steps to delete it if we learn we have collected it. We do not knowingly collect, maintain, or use personal information from children under 13 years of age, and no part of the Service is directed to children under the age of 13. If you learn that your child has provided us with personal information without your consent, you may alert us via email. If we learn that we have collected any personal information from children under 13, we will promptly take steps to delete such information and terminate the child’s account.
          `
        },
        {
          title: 'Your Choices',
          content: `
            You have certain choices regarding your information:
      
            Access and Update: You may access and update your personal information through your account settings.
            
            Deletion: You may request to delete your account and information.
          `
        },
        {
          title: 'Changes to this Policy',
          content: `
            Posting of Revised Privacy Policy. We will post any adjustments to the Privacy Policy on this web page, and the revised version will be effective when it is posted.
      
            New Uses of Personal Information. From time to time, we may desire to use Personal Information for uses not previously disclosed in our Privacy Policy. If our practices change regarding previously collected Personal Information in a way that would be materially less restrictive than stated in the version of this Privacy Policy in effect at the time we collected the information, we will make reasonable efforts to provide notice and obtain consent to any such uses as may be required by law.
          `
        },
        {
          title: 'Contact Us',
          content: `
            If you have any questions about this Privacy Policy, please contact us at info@BotWot.io.
          `
        }
    
      ];
      
    return (
        <>
            <h1 className="mt-4 text-6xl font-black text-center text-gray-100 max-md:text-4xl mb-12">
                Privacy Policies
            </h1>
            <div className=" text-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">BotWot Privacy Policy</h1>
      <p className="mb-6">Effective Date: 01st July, 2024</p>
      <p className="mb-6">BotWot ("BotWot", "we", "us", or "our") is a product by PurpleAnt Technologies Pvt Ltd ("PurpleAnt", "we", "us", or "our"). We are committed to protecting the privacy of our users ("you" or "your"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered chatbot services (the "Services").</p>


      {policySections.map((section, index) => (
          <div key={index} className="mb-6">
            <div 
              onClick={() => handleToggle(index)} 
              className="flex justify-between items-center text-xl font-semibold cursor-pointer mb-2"
            >
             <span> {expanded===index?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>} {section.title}</span>
            <AddIcon/>
            </div>
            {expanded === index && <p className="pl-4 mb-4">{section.content}</p>}
            <hr className="border-gray-600"/>
          </div>
        ))}
        <p className="mb-6">Additional Considerations for AI-Powered Chat</p>
        <ol><li>Transparency: We explain how BotWot's AI works and how it uses chat data to improve the user experience.
</li></ol>
<ol><li>Accuracy: We are committed to providing accurate and unbiased information through BotWot's AI chat functionalities
</li></ol>
<ol><li>Bias: We address potential biases in the AI model and continuously work to mitigate them.

</li></ol>
<ol><li>Human Oversight: A human team monitors and oversees the AI to ensure its responsible use.

</li></ol>
<p className="mt-6 mb-6 text-md font-bold">Please review this Privacy Policy carefully. By using BotWot, you agree to the collection, use, and sharing of your information as described in this policy.
</p>

    </div>
        </>
    );
};

export default PrivacyComponent;
