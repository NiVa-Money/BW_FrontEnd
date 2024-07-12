// components/FAQ.tsx
import React, { useState } from 'react';
import FAQbody from './page';



const FAQ = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | false>('panel1');

 
  

  return (
    <>
      <FAQbody />
    </>
  );
};

export default FAQ;
