import React from 'react';
import { Card, Title, BarChart, DonutChart, Metric, Text } from '@tremor/react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { Select, MenuItem } from '@mui/material';

const resolvedData = [
  { time: '12 AM', Bot1: 40, Bot2: 60 },
  { time: '4 AM', Bot1: 30, Bot2: 40 },
  { time: '8 AM', Bot1: 50, Bot2: 70 },
  { time: '12 PM', Bot1: 40, Bot2: 50 },
  { time: '4 PM', Bot1: 60, Bot2: 80 },
  { time: '8 PM', Bot1: 50, Bot2: 60 },
];

const ChartCardTwo = () => {
  const donutData = [
    { category: 'Bot1', value: 300 },
    { category: 'Bot2', value: 150 },
  ];

  return (
    <div className="bg-[#0B031E] p-6">
      <div>
        <div className="text-white font-bold text-2xl mb-4">
          Reports overview
        </div>
        <Select
          defaultValue=""
          variant="outlined"
          className="mb-4"
          sx={{
            backgroundColor: '#0A1330',
            color: '#AEB9E1',
            borderRadius: '4px',
            '& .MuiSelect-select': {
              padding: '10px',
            },
          }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </div>
      <div className="flex gap-6">
        {/* Donut Chart */}
        <Card className="flex-grow bg-white bg-opacity-10 border-none">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Title className="text-xl text-[#AEB9E1]">Total Messages</Title>
              <Metric className="text-3xl font-bold text-white mt-2">
                450
              </Metric>
              <Text className="text-green-400 flex items-center text-sm mt-1">
                <ArrowUpward className="w-4 h-4 mr-1" />
                12.5%
              </Text>
            </div>
          </div>
          <DonutChart
            className="h-48 mt-4"
            data={donutData}
            category="value"
            index="category"
            colors={['purple', 'cyan']}
          />
        </Card>

        {/* Bar Chart */}
        <Card className="flex-grow bg-white bg-opacity-10 border-none">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Title className="text-xl text-[#AEB9E1]">
                Sentiment Analysis
              </Title>
              <Metric className="text-3xl font-bold text-white mt-2">
                $144.6K
              </Metric>
              <Text className="text-green-400 flex items-center text-sm mt-1">
                <ArrowUpward className="w-4 h-4 mr-1" />
                28.5%
              </Text>
            </div>
            <div>
              <Select
                defaultValue=""
                variant="outlined"
                className="mb-4"
                sx={{
                  backgroundColor: '#0A1330',
                  color: '#AEB9E1',
                  borderRadius: '4px',
                  '& .MuiSelect-select': {
                    padding: '10px',
                  },
                }}
              >
                <MenuItem value="option1">Monthly</MenuItem>
                <MenuItem value="option2">Weekly</MenuItem>
                <MenuItem value="option3">Yearly</MenuItem>
              </Select>
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
      </div>
    </div>
  );
};

export default ChartCardTwo;
