'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import bottomLogo from '@/public/assets/bottomLogo.png';
import { useAuthContext } from '@/context/AuthContext';
const CommunityBox: React.FC = () => {
  const { handleSignIn } = useAuthContext();
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const videos = [
    'https://youtu.be/ePpAkJ99_wU',
    'https://youtu.be/zYtEHn7zEys',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
          }, 10000); // Adjust time as needed

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [currentVideo]);
  return (
    <header
      className="flex flex-col justify-center self-center px-8 py-14 w-full text-gray-100 border border-gray-100 border-solid max-w-[1200px] rounded-[30px]"
      style={{
        background: 'linear-gradient(to bottom right, #2B243C, #0B031E)',
      }}
    >
      <div>
        <iframe
          ref={videoRef}
          width="560"
          height="315"
          src={videos[currentVideo]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </header>
  );
};

export default CommunityBox;
