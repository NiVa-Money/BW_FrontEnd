import React, { useEffect, useState } from 'react';

const TypingText = ({ formattedText, sender }:any) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // Speed of typing in milliseconds

  useEffect(() => {
    if (formattedText) {
      setDisplayedText('');
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(prev => prev + formattedText[index]);
        index++;
        if (index >= formattedText.length) {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [formattedText]);

  return (
    <div
      className={`${
        sender === 'user'
          ? 'p-2.5 bg-[#5D39AD] rounded-xl '
          : 'p-2.5 bg-[#2D2640] rounded-xl chat-box-size typing-animation'
      }`}
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
};

export default TypingText;
