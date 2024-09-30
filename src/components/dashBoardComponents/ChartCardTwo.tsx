// import React, { useState } from 'react';
// import { Card, Title, BarChart, Metric } from '@tremor/react';
// import { Select, MenuItem } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const monthlyData = [
//   { month: 'Jan', Positive: 20000, Neutral: 15000, Negative: 10000 },
//   { month: 'Feb', Positive: 25000, Neutral: 50000, Negative: 15000 },
//   { month: 'Mar', Positive: 35000, Neutral: 40000, Negative: 12000 },
//   { month: 'Apr', Positive: 40000, Neutral: 30000, Negative: 5000 },
//   { month: 'May', Positive: 30000, Neutral: 20000, Negative: 10000 },
//   { month: 'Jun', Positive: 20000, Neutral: 50000, Negative: 15000 },
//   { month: 'Jul', Positive: 15000, Neutral: 5000, Negative: 0 },
//   { month: 'Aug', Positive: 40000, Neutral: 35000, Negative: 20000 },
//   { month: 'Sep', Positive: 20000, Neutral: 10000, Negative: 10000 },
//   { month: 'Oct', Positive: 30000, Neutral: 20000, Negative: 15000 },
//   { month: 'Nov', Positive: 25000, Neutral: 0, Negative: 20000 },
//   { month: 'Dec', Positive: 30000, Neutral: 20000, Negative: 25000 },
// ];

// const bots = [
//   { name: 'Bot 1', messages: 1230, color: 'bg-purple-500' },
//   { name: 'Bot 2', messages: 751, color: 'bg-cyan-500' },
//   { name: 'Bot 3', messages: 471, color: 'bg-blue-500' },
//   { name: 'Bot 4', messages: 280, color: 'bg-cyan-500' },
//   { name: 'Bot 5', messages: 87, color: 'bg-blue-500' },
// ];

// const ReportsOverview = () => {
//   const [dateRange, setDateRange] = useState('Jan 2024 - Dec 2024');
//   const [sentimentPeriod, setSentimentPeriod] = useState('Monthly'); // Manage state for dropdown

//   return (
//     <div className="bg-[#0B031E] p-4">
//       <div className="flex-col mb-4">
//         <h1 className="text-white text-2xl font-semibold mb-4">
//           Reports overview
//         </h1>
//         <Select
//           value={dateRange}
//           onChange={(e) => setDateRange(e.target.value)}
//           className="mb-4 bg-[#0A1330] text-white"
//           style={{ color: 'white', borderColor: '#343B4F' }}
//         >
//           <MenuItem value="Jan 2024 - Dec 2024">Jan 2024 - Dec 2024</MenuItem>
//           <MenuItem value="Jan 2023 - Dec 2023">Jan 2023 - Dec 2023</MenuItem>
//         </Select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card className="!bg-opacity-10 !bg-white">
//           <Title className="text-[#AEB9E1] mb-2">Total Messages</Title>
//           <Metric className="text-white text-4xl font-bold">10,234</Metric>

//           <div className="mt-4">
//             <Title className="text-[#AEB9E1] mb-2">Top 5 Bots</Title>
//             <div className="flex justify-between text-[#AEB9E1] mb-2">
//               <span>Bots</span>
//               <span>Messages</span>
//             </div>
//             {bots.map((bot, index) => (
//               <div key={index} className="flex items-center mt-2">
//                 <span className="text-[#AEB9E1] w-12">{bot.name}</span>
//                 <div className="flex-grow mx-2">
//                   <div
//                     className={`h-2 ${bot.color} rounded-full`}
//                     style={{
//                       width: `${(bot.messages / bots[0].messages) * 100}%`,
//                     }}
//                   ></div>
//                 </div>
//                 <span className="text-white w-12 text-right">
//                   {bot.messages}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </Card>

//         <Card className="!bg-opacity-10 !bg-white">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <Title className="text-[#AEB9E1]">Sentiment Analysis</Title>
//             </div>
//             <Select
//                value={sentimentPeriod}
//               variant="outlined"
//               className="bg-[#0A1330] text-[#AEB9E1]"
//               IconComponent={KeyboardArrowDownIcon}
//             >
//               <MenuItem value="Monthly">Monthly</MenuItem>
//               <MenuItem value="Weekly">Weekly</MenuItem>
//               <MenuItem value="Yearly">Yearly</MenuItem>
//             </Select>
//           </div>
//           <BarChart
//             className="h-72 mt-4"
//             data={monthlyData}
//             index="month"
//             categories={['Positive', 'Neutral', 'Negative']}
//             colors={['purple', 'cyan', 'blue']}
//             valueFormatter={(number) =>
//               `${Intl.NumberFormat('us').format(number).toString()}K`
//             }
//             stack={true}
//           />
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ReportsOverview;

import React, { useState } from 'react';
import { Card, Title, BarChart, Metric } from '@tremor/react';
import { Select, MenuItem } from '@mui/material';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';

type BotSessionMappingType = [string, [number]][];

const monthlyData = [
  { month: 'Jan', Positive: 20000, Neutral: 15000, Negative: 10000 },
  { month: 'Feb', Positive: 25000, Neutral: 50000, Negative: 15000 },
  { month: 'Mar', Positive: 35000, Neutral: 40000, Negative: 12000 },
  { month: 'Apr', Positive: 40000, Neutral: 30000, Negative: 5000 },
  { month: 'May', Positive: 30000, Neutral: 20000, Negative: 10000 },
  { month: 'Jun', Positive: 20000, Neutral: 50000, Negative: 15000 },
  { month: 'Jul', Positive: 15000, Neutral: 5000, Negative: 0 },
  { month: 'Aug', Positive: 40000, Neutral: 35000, Negative: 20000 },
  { month: 'Sep', Positive: 20000, Neutral: 10000, Negative: 10000 },
  { month: 'Oct', Positive: 30000, Neutral: 20000, Negative: 15000 },
  { month: 'Nov', Positive: 25000, Neutral: 0, Negative: 20000 },
  { month: 'Dec', Positive: 30000, Neutral: 20000, Negative: 25000 },
];

const ReportsOverview = () => {
  const [dateRange, setDateRange] = useState('Jan 2024 - Dec 2024');
  const [sentimentPeriod, setSentimentPeriod] = useState('Monthly');

  const metrics = useSelector(
    (state: RootState) => state.root?.userMetric?.data
  );

  // Define the type for botSessionMapping and extract it from the metrics
  const botSessionMapping: BotSessionMappingType =
    metrics?.botSessionMapping || [];
  const totalMessages = metrics?.sessionConsumed || 0;

  // Sort the botSessionMapping based on the message count in descending order
  const topBots = [...botSessionMapping]
    .sort((a, b) => b[1][0] - a[1][0])
    .slice(0, 5);

  // Determine the highest message count for the progress bar percentage calculation
  const maxMessages = Math.max(
    ...botSessionMapping.map(([, [messages]]) => messages)
  );

  return (
    <div className="bg-[#0B031E] p-4">
      <div className="flex-col mb-4">
        <h1 className="text-white text-2xl font-semibold mb-4">
          Reports overview
        </h1>
        <Select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="bg-[#0A1330] text-[#AEB9E1]"
          style={{ color: '#AEB9E1', borderColor: '#343B4F' }}
        >
          <MenuItem value="Jan 2024 - Dec 2024">Jan 2024 - Dec 2024</MenuItem>
          <MenuItem value="Jan 2023 - Dec 2023">Jan 2023 - Dec 2023</MenuItem>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="!bg-opacity-10 !bg-white">
          <Title className="text-[#AEB9E1] mb-2">Total Messages</Title>
          <Metric className="text-white text-4xl font-bold">
            {totalMessages}
          </Metric>

          <div className="mt-4">
            <Title className="text-[#AEB9E1] mb-2">Top 5 Bots</Title>
            <div className="flex justify-between text-[#AEB9E1] mb-2">
              <span>Bots</span>
              <span>Messages</span>
            </div>
            {topBots
              .map(([botName, [messages]], index: number) => (
                <div key={index} className="flex items-center mt-2">
                  <span className="text-[#AEB9E1] w-12">{botName}</span>
                  <div className="flex-grow mx-2">
                    <div
                      className={`h-2 bg-purple-600 rounded-full`}
                      style={{
                        width: `${(messages / maxMessages) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-white w-12 text-right">{messages}</span>
                </div>
              ))}
          </div>
        </Card>

        <Card className="!bg-opacity-10 !bg-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <Title className="text-[#AEB9E1]">Sentiment Analysis</Title>
            </div>
            <Select
              value={sentimentPeriod}
              onChange={(e) => setSentimentPeriod(e.target.value)}
              variant="outlined"
              className="bg-[#0A1330] text-[#AEB9E1]"
              style={{ color: '#AEB9E1', borderColor: '#343B4F' }}
            >
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>
          </div>
          <BarChart
            className="h-72 mt-4"
            data={monthlyData}
            index="month"
            categories={['Positive', 'Neutral', 'Negative']}
            colors={['purple', 'cyan', 'blue']}
            valueFormatter={(number) =>
              `${Intl.NumberFormat('us').format(number).toString()}K`
            }
            stack={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default ReportsOverview;
