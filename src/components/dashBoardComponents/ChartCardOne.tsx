import React, { useState } from 'react';
import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { Select, MenuItem } from '@mui/material';

const botUsageData = [
  { date: 'Jan', Bot1: 0, Bot2: 30 },
  { date: 'Feb', Bot1: 10, Bot2: 20 },
  { date: 'Mar', Bot1: 20, Bot2: 10 },
  { date: 'Apr', Bot1: 30, Bot2: 40 },
  { date: 'May', Bot1: 40, Bot2: 80 },
  { date: 'Jun', Bot1: 100, Bot2: 90 },
  { date: 'Jul', Bot1: 120, Bot2: 180 },
  { date: 'Aug', Bot1: 140, Bot2: 160 },
  { date: 'Sep', Bot1: 180, Bot2: 140 },
  { date: 'Oct', Bot1: 200, Bot2: 100 },
  { date: 'Nov', Bot1: 220, Bot2: 60 },
  { date: 'Dec', Bot1: 225, Bot2: 80 },
];

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

  return (
    <div className="bg-[#0B031E] p-6">
      <div className="flex gap-6">
        {/* Bot Usage Chart */}
        <Card className="flex-1 bg-white bg-opacity-10 border-none mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Title className="text-xl text-[#AEB9E1]">Bot Usage</Title>
              <Metric className="text-3xl font-bold text-white mt-2">$240.8K</Metric>
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
                style={{ color: 'white', borderColor: 'white' }}
              >
                <MenuItem value="Jan 2024 - Dec 2024">Jan 2024 - Dec 2024</MenuItem>
                <MenuItem value="Jan 2023 - Dec 2023">Jan 2023 - Dec 2023</MenuItem>
              </Select>
            </Text>
          </div>
          <AreaChart
            className="h-64 mt-4"
            data={botUsageData}
            index="date"
            categories={['Bot1', 'Bot2']}
            colors={['purple', 'cyan']}
          />
        </Card>

        {/* Unresolved/Resolved and NPS Section */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Unresolved/Resolved Chart */}
          <Card className="flex-grow bg-white bg-opacity-10 border-none">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Title className="text-xl text-[#AEB9E1]">Unresolved/Resolved</Title>
                <Metric className="text-3xl font-bold text-white mt-2">$144.6K</Metric>
                <Text className="text-green-400 flex items-center text-sm mt-1">
                  <ArrowUpward className="w-4 h-4 mr-1" />
                  28.5%
                </Text>
              </div>
            </div>
            <BarChart
              className="h-48 mt-4"
              data={resolvedData}
              index="time"
              categories={['Bot1', 'Bot2']}
              colors={['purple', 'cyan']}
            />
          </Card>

          {/* NPS Chart */}
          <Card className="flex-grow bg-white bg-opacity-10 border-none">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Title className="text-xl text-[#AEB9E1]">Net Promoter Score (NPS)</Title>
                <Metric className="text-3xl font-bold text-white mt-2">92%</Metric>
                <Text className="text-green-400 flex items-center text-sm mt-1">
                  <ArrowUpward className="w-4 h-4 mr-1" />
                  15.9%
                </Text>
              </div>
            </div>
            <AreaChart
              className="h-36 mt-4"
              data={npsData}
              index="time"
              categories={['nps']}
              colors={['purple']}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChartCardOne;
