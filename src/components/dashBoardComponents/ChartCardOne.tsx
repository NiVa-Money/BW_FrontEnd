// import React, { useState } from 'react';
// import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
// import ArrowUpward from '@mui/icons-material/ArrowUpward';
// import { Select, MenuItem } from '@mui/material';
// import { RootState } from '@/redux/configureStore';
// import { useSelector } from 'react-redux';
// import { format } from 'date-fns';

// const resolvedData = [
//   { time: '12 AM', Bot1: 40, Bot2: 60 },
//   { time: '4 AM', Bot1: 30, Bot2: 40 },
//   { time: '8 AM', Bot1: 50, Bot2: 70 },
//   { time: '12 PM', Bot1: 40, Bot2: 50 },
//   { time: '4 PM', Bot1: 60, Bot2: 80 },
//   { time: '8 PM', Bot1: 50, Bot2: 60 },
// ];

// const npsData = [
//   { time: '12 AM', nps: 50 },
//   { time: '4 AM', nps: 150 },
//   { time: '8 AM', nps: 100 },
//   { time: '12 PM', nps: 250 },
//   { time: '4 PM', nps: 180 },
//   { time: '8 PM', nps: 100 },
// ];

// const ChartCardOne = () => {
//   const [dateRange, setDateRange] = useState('Jan 2024 - Dec 2024');

//   const metrics = useSelector(
//     (state: RootState) => state.root?.userMetric?.data
//   );

//   // Create a mapping from botId to botName
//   const botNameMap: { [key: string]: string[] } = {};

//   metrics?.results?.forEach(
//     (result: { botId: { botId: any; botName: any } }) => {
//       const botId = result?.botId?.botId;
//       const botName = result?.botId?.botName;

//       if (!botNameMap[botId] && botName?.length > 0) {
//         botNameMap[botId] = botName;
//       }
//     }
//   );

//   // Group the results by botName and formatted date
//   const groupedData: { [key: string]: { [key: string]: number } } = {};

//   metrics?.results?.forEach(
//     (result: {
//       botId: { createdAt: string | number | Date; botId: string | number };
//       messageCount: number;
//     }) => {
//       const formattedDate = format(
//         new Date(result?.botId?.createdAt),
//         'MMM dd'
//       );
//       const botNames = botNameMap[result?.botId?.botId] || [
//         `Unknown (${result.botId.botId})`,
//       ];

//       botNames.forEach((botName) => {
//         if (!groupedData[formattedDate]) {
//           groupedData[formattedDate] = {};
//         }

//         if (!groupedData[formattedDate][botName]) {
//           groupedData[formattedDate][botName] = 0;
//         }
//         groupedData[formattedDate][botName] += result.messageCount;
//       });
//     }
//   );

//   const chartdata = Object.keys(groupedData).map((date) => ({
//     date,
//     ...groupedData[date],
//   }));

//   const categories: string[] = Array.from(
//     new Set(
//       metrics?.results?.flatMap(
//         (result: { botId: { botId: string | number } }) =>
//           botNameMap[result?.botId?.botId] || []
//       )
//     )
//   );

//   return (
//     <div className="bg-[#0B031E] p-6">
//       <div className="flex gap-6">
//         {/* Bot Usage Chart */}
//         <Card className="flex-1 !bg-white !bg-opacity-10 !border-r-[1px] border-none mb-6 h-auto" >
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <Title className="text-xl text-[#AEB9E1]">Bot Usage</Title>
//               <Metric className="text-3xl font-bold text-white mt-2">
//                 $240.8K
//               </Metric>
//               <Text className="text-green-400 flex items-center text-sm mt-1">
//                 <ArrowUpward className="w-4 h-4 mr-1" />
//                 24.6%
//               </Text>
//             </div>
//             <Text className="text-sm text-[#AEB9E1]">
//               <Select
//                 value={dateRange}
//                 onChange={(e) => setDateRange(e.target.value)}
//                 className="mb-4 bg-[#0A1330] text-white"
//                 style={{ color: 'white', borderColor: '#343B4F' }}
//               >
//                 <MenuItem value="Jan 2024 - Dec 2024">
//                   Jan 2024 - Dec 2024
//                 </MenuItem>
//                 <MenuItem value="Jan 2023 - Dec 2023">
//                   Jan 2023 - Dec 2023
//                 </MenuItem>
//               </Select>
//             </Text>
//           </div>
//           <div className="h-[500px] w-[600px]">
//             <AreaChart
//               className="h-full w-full"
//               data={chartdata}
//               categories={categories}
//               index="date"
//               colors={['purple', 'cyan']}
//             />
//           </div>
//         </Card>

//         {/* Unresolved/Resolved and NPS Section */}
//         <div className="flex flex-1 flex-col gap-6">
//           {/* Unresolved/Resolved Chart */}
//           <Card className="flex-grow border-none" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <Title className="text-xl text-[#AEB9E1]">
//                   Unresolved/Resolved
//                 </Title>
//                 <Metric className="text-3xl font-bold text-white mt-2">
//                   $144.6K
//                 </Metric>
//                 <Text className="text-green-400 flex items-center text-sm mt-1">
//                   <ArrowUpward className="w-4 h-4 mr-1" />
//                   28.5%
//                 </Text>
//               </div>
//             </div>
//             <div className="h-[300px] w-full">
//               <BarChart
//                 className="h-full w-full"
//                 data={resolvedData}
//                 index="time"
//                 categories={['Bot1', 'Bot2']}
//                 colors={['purple', 'cyan']}
//               />
//             </div>
//           </Card>

//           {/* NPS Chart */}
//           <Card className="flex-grow bg-white bg-opacity-10 border-none" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <Title className="text-xl text-[#AEB9E1]">
//                   Net Promoter Score (NPS)
//                 </Title>
//                 <Metric className="text-3xl font-bold text-white mt-2">
//                   92%
//                 </Metric>
//                 <Text className="text-green-400 flex items-center text-sm mt-1">
//                   <ArrowUpward className="w-4 h-4 mr-1" />
//                   15.9%
//                 </Text>
//               </div>
//             </div>
//             <div className="h-[300px] w-full">
//               <AreaChart
//                 className="h-full w-full"
//                 data={npsData}
//                 index="time"
//                 categories={['nps']}
//                 colors={['purple']}
//               />
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartCardOne;

import React, { useState } from 'react';
import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { Select, MenuItem } from '@mui/material';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const resolvedData = [
  { time: '12 AM', Bot1: 40, Bot2: 60 },
  { time: '4 AM', Bot1: 30, Bot2: 40 },
  { time: '8 AM', Bot1: 50, Bot2: 70 },
  { time: '12 PM', Bot1: 40, Bot2: 50 },
  { time: '4 PM', Bot1: 60, Bot2: 80 },
  { time: '8 PM', Bot1: 50, Bot2: 60 },
];

const npsData = [
  { time: '12 AM', nps: 50 },
  { time: '4 AM', nps: 150 },
  { time: '8 AM', nps: 100 },
  { time: '12 PM', nps: 250 },
  { time: '4 PM', nps: 180 },
  { time: '8 PM', nps: 100 },
];

const ChartCardOne = () => {
  const [dateRange, setDateRange] = useState('Jan 2024 - Dec 2024');

  const metrics = useSelector(
    (state: RootState) => state.root?.userMetric?.data
  );

  const botNameMap: { [key: string]: string[] } = {};

  metrics?.results?.forEach(
    (result: { botId: { botId: any; botName: any } }) => {
      const botId = result?.botId?.botId;
      const botName = result?.botId?.botName;

      if (!botNameMap[botId] && botName?.length > 0) {
        botNameMap[botId] = botName;
      }
    }
  );

  const groupedData: { [key: string]: { [key: string]: number } } = {};

  metrics?.results?.forEach(
    (result: {
      botId: { createdAt: string | number | Date; botId: string | number };
      messageCount: number;
    }) => {
      const formattedDate = format(
        new Date(result?.botId?.createdAt),
        'MMM dd'
      );
      const botNames = botNameMap[result?.botId?.botId] || [
        `Unknown (${result.botId.botId})`,
      ];

      botNames.forEach((botName) => {
        if (!groupedData[formattedDate]) {
          groupedData[formattedDate] = {};
        }

        if (!groupedData[formattedDate][botName]) {
          groupedData[formattedDate][botName] = 0;
        }
        groupedData[formattedDate][botName] += result.messageCount;
      });
    }
  );

  const chartdata = Object.keys(groupedData).map((date) => ({
    date,
    ...groupedData[date],
  }));

  const categories: string[] = Array.from(
    new Set(
      metrics?.results?.flatMap(
        (result: { botId: { botId: string | number } }) =>
          botNameMap[result?.botId?.botId] || []
      )
    )
  );

  return (
    <div className="bg-[#0B031E] p-4">
      <Card className="!bg-white !bg-opacity-10 !border-r-[1px] border-none mb-4 h-auto">
        <div className="flex justify-between">
          {/* Left Side - Bot Usage Chart */}
          <div className="w-2/3">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Title className="text-xl text-[#AEB9E1]">Bot Usage</Title>
                <Metric className="text-3xl font-bold text-white mt-2">
                  $240.8K
                </Metric>
                <Text className="text-green-400 flex items-center text-sm mt-1">
                  <ArrowUpward className="w-4 h-4 mr-1" />
                  24.6%
                </Text>
              </div>
              <Text className="text-sm text-[#AEB9E1]">
                <Select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="mb-4 bg-[#0A1330] text-white"
                  style={{ color: 'white', borderColor: '#343B4F' }}
                >
                  <MenuItem value="Jan 2024 - Dec 2024">
                    Jan 2024 - Dec 2024
                  </MenuItem>
                  <MenuItem value="Jan 2023 - Dec 2023">
                    Jan 2023 - Dec 2023
                  </MenuItem>
                </Select>
              </Text>
            </div>
            <div className="h-[500px] w-full">
              <AreaChart
                className="h-full w-full"
                data={chartdata}
                categories={categories}
                index="date"
                colors={['purple', 'cyan']}
              />
            </div>
          </div>

          <div className="w-[2px] bg-[#343B4F] mx-6"></div>
          {/* Right Side - Unresolved/Resolved & NPS Charts */}
          <div className="w-1/3 flex flex-col gap-6">
            {/* Unresolved/Resolved Chart */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <Title className="text-xl text-[#AEB9E1]">
                  Unresolved/Resolved
                </Title>
                <Metric className="text-3xl font-bold text-white mt-2">
                  $144.6K
                </Metric>
                <Text className="text-green-400 flex items-center text-sm mt-1">
                  <ArrowUpward className="w-4 h-4 mr-1" />
                  28.5%
                </Text>
              </div>
            </div>
            <div className="h-[250px] w-full">
              <BarChart
                className="h-full w-full"
                data={resolvedData}
                index="time"
                categories={['Bot1', 'Bot2']}
                colors={['purple', 'cyan']}
              />
            </div>
           
            {/* NPS Chart */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <Title className="text-xl text-[#AEB9E1]">
                  Net Promoter Score (NPS)
                </Title>
                <Metric className="text-3xl font-bold text-white mt-2">
                  92%
                </Metric>
                <Text className="text-green-400 flex items-center text-sm mt-1">
                  <ArrowUpward className="w-4 h-4 mr-1" />
                  15.9%
                </Text>
              </div>
            </div>
            <div className="h-[250px] w-full">
              <AreaChart
                className="h-full w-full"
                data={npsData}
                index="time"
                categories={['nps']}
                colors={['purple']}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChartCardOne;
