// import React from 'react';
// import Image from 'next/image';

// const AwardsRecognition: React.FC = () => {
//   return (
//     <div className="p-8">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* NASSCOM stars */}
//           <div className="flex flex-col items-center text-center">
//             <div className="relative w-48 h-48 mb-4">
//               <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20"></div>
//               <Image
//                 src="/awards/NASSCOM.png"
//                 alt="NASSCOM stars"
//                 layout="fill"
//                 objectFit="contain"
//                 className="relative z-10"
//               />
//             </div>
//             <h3 className="text-2xl text-[#EEEEF0] font-bold mb-2">
//               NASSCOM stars
//             </h3>
//             <p className="text-sm text-[#8D8997]">
//               Accepted into Nasscom Warehouse in Gurugram
//             </p>
//           </div>

//           {/* Industry Leaders */}
//           <div className="flex flex-col items-center">
//             <div className="relative w-96 h-24 mb-4">
//               <Image
//                 src="/awards/MNC.png"
//                 alt="Industry Leaders"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//             <h3 className="text-2xl text-white text-center">
//               Embraced by Industry Leaders
//             </h3>
//           </div>

//           {/* Startup India */}
//           <div className="flex flex-col items-center text-center">
//             <div className="relative w-48 h-48 mb-4">
//               <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20"></div>
//               <Image
//                 src="/awards/Startup.png"
//                 alt="Startup India"
//                 layout="fill"
//                 objectFit="contain"
//                 className="relative z-10"
//               />
//             </div>
//             <h3 className="text-2xl text-[#EEEEF0] font-bold mb-2">
//               Startup India
//             </h3>
//             <p className="text-sm text-[#8D8997]">
//               BotWat Received the Startup India Seal of Approval
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwardsRecognition;


import React from 'react';
import Image from 'next/image';

const AwardsRecognition: React.FC = () => {
  return (
    <div className="p-8">
      <div className="container mx-auto mt-4">
        {/* Changed flex direction to row and centered items */}
        <div className="flex flex-row justify-center items-center space-x-8">
          {/* NASSCOM stars */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20"></div>
              <Image
                src="/awards/NASSCOM.png"
                alt="NASSCOM stars"
                layout="fill"
                objectFit="contain"
                className="relative z-10"
              />
            </div>
            <h3 className="text-2xl text-[#EEEEF0] font-bold mb-2">
              NASSCOM stars
            </h3>
            <p className="text-sm text-[#8D8997]">
              Accepted into Nasscom Warehouse in Gurugram
            </p>
          </div>

          {/* Industry Leaders */}
          <div className="flex flex-col items-center">
            <div className="relative w-96 h-24 mb-4">
              
              <Image
                src="/awards/MNC.png"
                alt="Industry Leaders"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl text-[#8D8997] text-center">
              Embraced by Industry Leaders
            </h3>
          </div>

          {/* Startup India */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20"></div>
              <Image
                src="/awards/Startup.png"
                alt="Startup India"
                layout="fill"
                objectFit="contain"
                className="relative z-10"
              />
            </div>
            <h3 className="text-2xl text-[#EEEEF0] font-bold mb-2">
              Startup India
            </h3>
            <p className="text-sm text-[#8D8997]">
              BotWat Received the Startup India Seal of Approval
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
