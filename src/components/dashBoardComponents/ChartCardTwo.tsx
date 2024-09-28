import React from 'react';
import { Card, Title, BarChart, Metric, Text } from '@tremor/react';
import { Select, MenuItem } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  return (
    <div className="bg-[#0B031E] p-4">
      <div className="flex-col mb-4">
        <h1 className="text-white text-2xl font-semibold mb-4">Reports overview</h1>
        <Select
          value=""
          displayEmpty
          variant="outlined"
          className="bg-[#0A1330] text-white"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#343B4F',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#343B4F',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#343B4F',
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="" disabled>
            <div className="flex text-[#AEB9E1] items-center">
              <CalendarTodayIcon className="mr-2" />
              Select date
            </div>
          </MenuItem>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="!bg-opacity-10 !bg-white">
          <Title className="text-[#AEB9E1] mb-2">Total Messages</Title>
          <Metric className="text-white text-4xl font-bold">10,234</Metric>
          
          <div className="mt-4">
            <Title className="text-[#AEB9E1] mb-2">Top 5 Bots</Title>
            {[
              { name: 'Bot 1', messages: 1230, color: 'bg-purple-500' },
              { name: 'Bot 2', messages: 751, color: 'bg-cyan-500' },
              { name: 'Bot 3', messages: 471, color: 'bg-blue-500' },
              { name: 'Bot 4', messages: 280, color: 'bg-cyan-500' },
              { name: 'Bot 5', messages: 87, color: 'bg-blue-500' },
            ].map((bot, index) => (
              <div key={index} className="flex items-center mt-2">
                <div className={`w-full h-2 ${bot.color} rounded-full mr-2`} style={{ width: `${(bot.messages / 1230) * 100}%` }}></div>
                <span className="text-[#AEB9E1] w-20">{bot.name}</span>
                <span className="text-white ml-6">{bot.messages}</span>
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
              value="Monthly"
              variant="outlined"
              className="bg-[#0A1330] text-[#AEB9E1]"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#343B4F',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#343B4F',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#343B4F',
                },
              }}
              IconComponent={KeyboardArrowDownIcon}
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
            valueFormatter={(number) => `${Intl.NumberFormat('us').format(number).toString()}K`}
            stack={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default ReportsOverview;