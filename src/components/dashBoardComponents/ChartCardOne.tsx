// // import React from 'react';
// // import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
// // import ArrowUpward from '@mui/icons-material/ArrowUpward'; 

// // const dummyAreaChartData = [
// //   { date: 'Jan', Bot1: 10, Bot2: 30 },
// //   { date: 'Feb', Bot1: 15, Bot2: 20 },
// //   { date: 'Mar', Bot1: 25, Bot2: 18 },
// //   { date: 'Dec', Bot1: 220, Bot2: 85 },
// // ];

// // const dummyBarChartData = [
// //   { time: '12 AM', Bot1: 50, Bot2: 60 },
// //   { time: '4 AM', Bot1: 55, Bot2: 65 },
// //   { time: '8 AM', Bot1: 60, Bot2: 70 },
// //   { time: '12 PM', Bot1: 65, Bot2: 75 },
// //   { time: '4 PM', Bot1: 70, Bot2: 80 },
// //   { time: '8 PM', Bot1: 75, Bot2: 85 },
// // ];

// // const dummyNPSData = [
// //   { time: '12 AM', nps: 50 },
// //   { time: '4 AM', nps: 150 },
// //   { time: '8 AM', nps: 100 },
// //   { time: '12 PM', nps: 200 },
// //   { time: '4 PM', nps: 300 },
// //   { time: '8 PM', nps: 150 },
// // ];

// // // const ChartCardOne: React.FC = () => {
// // //   return (
// // //     <div className="w-full flex flex-col md:flex-row h-auto md:h-[45%] gap-4 mt-8">
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         <Card className="bg-white bg-opacity-10">
// // //           <Title className="text-[#AEB9E1]">Bot Usage</Title>
// // //           <Metric className="text-white">$240.8K</Metric>
// // //           <Text className="text-green-400 flex items-center">
// // //             <ArrowUpward className="w-4 h-4 mr-1" />
// // //             24.6%
// // //           </Text>
// // //           <AreaChart
// // //             className="h-72 mt-4"
// // //             data={dummyAreaChartData}
// // //             index="date"
// // //             categories={["Bot1", "Bot2"]}
// // //             colors={["purple", "cyan"]}
// // //           />
// // //         </Card>

// // //         <Card className="bg-white bg-opacity-10">
// // //           <div className="flex justify-between items-center">
// // //             <Title className="text-[#AEB9E1]">Unresolved/Resolved</Title>
// // //             <Metric className="text-white">$144.6K</Metric>
// // //           </div>
// // //           <Text className="text-green-400 flex items-center">
// // //             <ArrowUpward className="w-4 h-4 mr-1" />
// // //             28.5%
// // //           </Text>
// // //           <BarChart
// // //             className="h-72 mt-4"
// // //             data={dummyBarChartData}
// // //             index="time"
// // //             categories={["Bot1", "Bot2"]}
// // //             colors={["purple", "cyan"]}
// // //           />
// // //         </Card>
// // //       </div>

// // //       <div className="mt-4">
// // //       <Card className="bg-white bg-opacity-10">
// // //           <Title className="text-[#AEB9E1]">Net promoter score (NPS)</Title>
// // //           <div className="flex items-center">
// // //             <Metric className="text-white">92%</Metric>
// // //             <Text className="text-green-400 flex items-center ml-2">
// // //               <ArrowUpward className="w-4 h-4 mr-1" />
// // //               15.9%
// // //             </Text>
// // //           </div>
// // //           <AreaChart
// // //             className="h-48 mt-4"
// // //             data={dummyNPSData}
// // //             index="time"
// // //             categories={["nps"]}
// // //             colors={["purple"]}
// // //           />
// // //         </Card>
// // //       </div>

// // //       <div className="mt-4 flex justify-between items-center">
// // //         <div className="flex items-center">
// // //           <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
// // //           <Text>Live</Text>
// // //         </div>
// // //         <Text className='text-[#7E89AC]'>10k visitors</Text>
// // //         <Text className="text-[#CB3CFF]">View report</Text>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // const ChartCardOne: React.FC = () => {
// //     return (
// //       <div className="container mx-auto">
// //         <Card className="bg-gray-800 text-white rounded-lg p-6">
// //           <Title className="text-2xl font-bold mb-4">Bot Usage</Title>
// //           <AreaChart data={dummyAreaChartData} className="w-full h-64" />
// //           <div className="flex justify-between">
// //             <Metric className="bg-gray-900 p-4 rounded-lg" value='$240.8K' label='Bot Usage' percentage={24.6} />
// //             <Metric className="bg-gray-900 p-4 rounded-lg" value='$144.6K' label='Unresolved/Resolved' percentage={28.5} />
// //           </div>
// //         </Card>
  
// //         <div className="mt-6">
// //           <BarChart data={dummyBarChartData} className="w-full h-64" />
// //           <Text className="text-center mt-2">Last 12 months</Text>
// //           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Report</button>
// //         </div>
  
// //         <Card className="bg-gray-800 text-white rounded-lg p-6 mt-6">
// //           <Metric className="bg-gray-900 p-4 rounded-lg mb-4" value='92%' label='Net Promoter Score (NPS)' percentage={15.9} />
// //           <BarChart data={dummyNPSData} className="w-full h-64" />
// //           <Text className="text-center mt-2">Live</Text>
// //           <Metric className="bg-gray-900 p-4 rounded-lg" value='10k visitors' label='Visitors' />
// //           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Report</button>
// //         </Card>
// //       </div>
// //     );
// //   };

// // export default ChartCardOne;


// import React from 'react';
// import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
// import ArrowUpward from '@mui/icons-material/ArrowUpward';

// const dummyAreaChartData = [
//   { date: 'Jan', Bot1: 10, Bot2: 30 },
//   { date: 'Feb', Bot1: 15, Bot2: 20 },
//   { date: 'Mar', Bot1: 25, Bot2: 18 },
//   { date: 'Dec', Bot1: 220, Bot2: 85 },
// ];

// const dummyBarChartData = [
//   { time: '12 AM', Bot1: 50, Bot2: 60 },
//   { time: '4 AM', Bot1: 55, Bot2: 65 },
//   { time: '8 AM', Bot1: 60, Bot2: 70 },
//   { time: '12 PM', Bot1: 65, Bot2: 75 },
//   { time: '4 PM', Bot1: 70, Bot2: 80 },
//   { time: '8 PM', Bot1: 75, Bot2: 85 },
// ];

// const dummyNPSData = [
//   { time: '12 AM', nps: 50 },
//   { time: '4 AM', nps: 150 },
//   { time: '8 AM', nps: 100 },
//   { time: '12 PM', nps: 200 },
//   { time: '4 PM', nps: 300 },
//   { time: '8 PM', nps: 150 },
// ];

// const ChartCardOne: React.FC = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-col md:flex-row gap-4 mt-8">
//         <Card className="bg-gray-800 text-white rounded-lg p-6 flex-1">
//           <Title className="text-2xl font-bold mb-4">Bot Usage</Title>
//           <Metric className="text-lg">$240.8K</Metric>
//           <Text className="text-green-400 flex items-center mb-2">
//             <ArrowUpward className="w-4 h-4 mr-1" />
//             24.6%
//           </Text>
//           <AreaChart
//             data={dummyAreaChartData}
//             index="date"
//             categories={["Bot1", "Bot2"]}
//             colors={["purple", "cyan"]}
//             className="w-full h-64"
//           />
//         </Card>

//         <Card className="bg-gray-800 text-white rounded-lg p-6 flex-1">
//           <div className="flex justify-between items-center">
//             <Title className="text-2xl font-bold">Unresolved/Resolved</Title>
//             <Metric className="text-lg">$144.6K</Metric>
//           </div>
//           <Text className="text-green-400 flex items-center mb-2">
//             <ArrowUpward className="w-4 h-4 mr-1" />
//             28.5%
//           </Text>
//           <BarChart
//             data={dummyBarChartData}
//             index="time"
//             categories={["Bot1", "Bot2"]}
//             colors={["purple", "cyan"]}
//             className="w-full h-64"
//           />
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card className="bg-gray-800 text-white rounded-lg p-6">
//           <Title className="text-2xl font-bold mb-4">Net Promoter Score (NPS)</Title>
//           <div className="flex justify-between items-center mb-4">
//             <Metric className="text-lg">92%</Metric>
//             <Text className="text-green-400 flex items-center">
//               <ArrowUpward className="w-4 h-4 mr-1" />
//               15.9%
//             </Text>
//           </div>
//           <BarChart
//             data={dummyNPSData}
//             index="time"
//             categories={["nps"]}
//             colors={["purple"]}
//             className="w-full h-64"
//           />
//         </Card>
//       </div>

//       <div className="mt-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
//           <Text>Live</Text>
//         </div>
//         <Text className='text-[#7E89AC]'>10k visitors</Text>
//         <Text className="text-[#CB3CFF]">View report</Text>
//       </div>
//     </div>
//   );
// };

// export default ChartCardOne;


import React from 'react';
import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

const dummyAreaChartData = [
  { date: 'Jan', Bot1: 10, Bot2: 30 },
  { date: 'Feb', Bot1: 15, Bot2: 20 },
  { date: 'Mar', Bot1: 25, Bot2: 18 },
  { date: 'Dec', Bot1: 220, Bot2: 85 },
];

const dummyBarChartData = [
  { time: '12 AM', Bot1: 50, Bot2: 60 },
  { time: '4 AM', Bot1: 55, Bot2: 65 },
  { time: '8 AM', Bot1: 60, Bot2: 70 },
  { time: '12 PM', Bot1: 65, Bot2: 75 },
  { time: '4 PM', Bot1: 70, Bot2: 80 },
  { time: '8 PM', Bot1: 75, Bot2: 85 },
];

const dummyNPSData = [
  { time: '12 AM', nps: 50 },
  { time: '4 AM', nps: 150 },
  { time: '8 AM', nps: 100 },
  { time: '12 PM', nps: 200 },
  { time: '4 PM', nps: 300 },
  { time: '8 PM', nps: 150 },
];

const ChartCardOne: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mt-8" style={{ height: '557px' }}>
        {/* Bot Usage Chart */}
        <Card className="bg-white bg-opacity-10 rounded-lg p-6">
          <Title className="text-2xl font-bold mb-4 text-[#AEB9E1]">Bot Usage</Title>
          <Metric className="text-lg text-white">$240.8K</Metric>
          <Text className="text-green-400 flex items-center mb-2">
            <ArrowUpward className="w-4 h-4 mr-1" />
            24.6%
          </Text>
          <AreaChart
            data={dummyAreaChartData}
            index="date"
            categories={["Bot1", "Bot2"]}
            colors={["purple", "cyan"]}
            className="w-full h-64"
          />
        </Card>

        {/* Unresolved/Resolved and NPS Charts */}
        <div className="flex flex-col gap-4 flex-grow">
          <Card className="bg-white bg-opacity-10 rounded-lg p-6 flex-1" style={{ width: '370px' }}>
            <div className="flex justify-between items-center">
              <Title className="text-2xl font-bold text=[#AEB9E1]">Unresolved/Resolved</Title>
              <Metric className="text-lg text-white">$144.6K</Metric>
            </div>
            <Text className="text-green-400 flex items-center mb-2">
              <ArrowUpward className="w-4 h-4 mr-1" />
              28.5%
            </Text>
            <BarChart
              data={dummyBarChartData}
              index="time"
              categories={["Bot1", "Bot2"]}
              colors={["purple", "cyan"]}
              className="w-full h-64"
            />
          </Card>

          <Card className="bg-white bg-opacity-10 rounded-lg p-6">
            <Title className="text-2xl font-bold mb-4 text-[#AEB9E1]">Net Promoter Score (NPS)</Title>
            <div className="flex justify-between items-center mb-4">
              <Metric className="text-lg text-white">92%</Metric>
              <Text className="text-green-400 flex items-center ">
                <ArrowUpward className="w-4 h-4 mr-1" />
                15.9%
              </Text>
            </div>
            <BarChart
              data={dummyNPSData}
              index="time"
              categories={["nps"]}
              colors={["purple"]}
              className="w-full h-64"
            />
          </Card>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <Text>Live</Text>
        </div>
        <Text className='text-[#7E89AC]'>10k visitors</Text>
        <Text className="text-[#CB3CFF]">View report</Text>
      </div>
    </div>
  );
};

export default ChartCardOne;
