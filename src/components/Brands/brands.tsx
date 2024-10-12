import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Govt. of Haryana', logo: '/brands/Haryana.png' },
  { name: 'ANDO', logo: '/brands/ANDO.png' },
  { name: 'Travent', logo: '/brands/Travent.png' },
  { name: 'Unsweetened Beauty', logo: '/brands/UnsweetenedBeauty.png' },
  { name: 'Chatwork', logo: '/brands/Chatwork.png' },
  { name: 'Admardi', logo: '/brands/Admardi.png' },
  { name: 'Prestige', logo: '/brands/Prestige.png' },
  { name: 'iPayDNA', logo: '/brands/iPayDNA.png' },
  { name: 'Trabuli', logo: '/brands/Trabuli.png' },
  { name: 'FusionFit', logo: '/brands/FusionFit.png' },
];

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId: number;

    const scrollLogos = () => {
      if (scrollElement) {
        scrollElement.scrollLeft += 1; // Adjust the speed here
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
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
    <h2 className="text-3xl font-semibold mb-6">Trusted by</h2>
    <div
      ref={scrollRef}
      className="flex overflow-hidden items-center justify-center max-w-6xl mx-auto"
    >
      {[...brands, ...brands].map((brand, index) => (
        <div
          key={`${brand.name}_${index}`}
          className="flex items-center justify-center mx-8"
          style={{ minWidth: '200px', height: '150px' }}
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={150}
            height={100}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
    <div className="mt-6 h-px bg-[#4C465B] w-full max-w-6xl mx-auto" />
  </div>
);
};

export default BrandLogos;