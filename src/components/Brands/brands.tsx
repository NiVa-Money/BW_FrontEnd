import React from 'react';

const brands = [
  { name: 'Govt. of Haryana', logo: '/brands/Haryana.jpg' },
  { name: 'ANDO', logo: '/brands/ANDO.jpg' },
  { name: 'FusionFit', logo: '/brands/FusionFit.png' },
  { name: 'Chatwork', logo: '/brands/Chatwork.jpg' },
  { name: 'Wellness Forever', logo: '/brands/WellnessForever.jpg' },
  { name: 'Prestige', logo: '/brands/Prestige.jpg' },
  { name: 'Trabuli', logo: '/brands/Trabuli.jpg' },
  { name: 'Unsweetened Beauty', logo: '/brands/UnsweetenedBeauty.jpg' },
  { name: 'iPayDNA', logo: '/brands/iPayDNA.jpg' },
  { name: 'noon', logo: '/brands/noon.jpg' },
];

const BrandLogos: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-6 gap-4">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center bg-white bg-opacity-10 rounded-xl aspect-square">
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="h-40 w-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;