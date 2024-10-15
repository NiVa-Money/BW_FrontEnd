import React, { useState } from 'react';
import { Card, Title, BarChart, Metric } from '@tremor/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type BotSessionMappingType = [string, [number]][];

const dailyData = [
  { date: '01-01-2024', Positive: 56, Neutral: 42, Negative: 2 },
  { date: '15-02-2024', Positive: 33, Neutral: 65, Negative: 2 },
  { date: '10-03-2024', Positive: 46, Neutral: 52, Negative: 2 },
  { date: '20-04-2024', Positive: 53, Neutral: 40, Negative: 7 },
  { date: '05-05-2024', Positive: 50, Neutral: 33, Negative: 17 },
  { date: '30-06-2024', Positive: 24, Neutral: 58, Negative: 18 },
  { date: '11-07-2024', Positive: 23, Neutral: 77, Negative: 0 },
  { date: '22-08-2024', Positive: 32, Neutral: 28, Negative: 40 },
  { date: '14-09-2024', Positive: 50, Neutral: 25, Negative: 25 },
  { date: '01-10-2024', Positive: 50, Neutral: 33, Negative: 17 },
  { date: '18-11-2024', Positive: 56, Neutral: 0, Negative: 44 },
  { date: '25-12-2024', Positive: 46, Neutral: 15, Negative: 39 }
];

const ReportsOverview = () => {
  const metrics = useSelector(
    (state: RootState) => state.root?.userMetric?.data
  );

  const botSessionMapping: BotSessionMappingType =
    metrics?.botSessionMapping || [];
  const totalMessages = metrics?.sessionConsumed || 0;

  const topBots = [...botSessionMapping]
    .sort((a, b) => b[1][0] - a[1][0])
    .slice(0, 5);

  const maxMessages = Math.max(
    ...botSessionMapping.map(([, [messages]]) => messages)
  );

  const options = [
    { name: 'Option 1', id: 1 },
    { name: 'Option 2', id: 2 },
    { name: 'Option 3', id: 3 },
  ];

  return (
    <div className="bg-[#0B031E] p-4">
      <div className="flex-col mb-4">
        <h1 className="text-white text-2xl font-semibold mb-4">
          Reports overview
        </h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Select date"
              sx={{
                backgroundColor: '#0A1330',
                '& .MuiInputBase-root': {
                  color: '#AEB9E1',
                },
                '& .MuiInputLabel-root': {
                  color: '#AEB9E1',
                },
                '& .MuiSvgIcon-root': {
                  color: '#AEB9E1',
                },
              }}
            />
            {/* <Multiselect
              options={options} // Options for the dropdown
              isObject={true}
              displayValue="name" // Property to display in the dropdown
              placeholder="Select bot"
              onSelect={(selectedList, selectedItem) => {
                console.log('Selected:', selectedList, selectedItem);
              }}
              onRemove={(selectedList, removedItem) => {
                console.log('Removed:', selectedList, removedItem);
              }}
              style={{
                multiselectContainer: {
                  backgroundColor: '#0A1330',
                },
                searchBox: {
                  backgroundColor: '#0A1330',
                  color: '#AEB9E1',
                },
                chips: {
                  backgroundColor: '#AEB9E1',
                  color: 'black',
                },
                option: {
                  color: '#AEB9E1',
                  backgroundColor: '#0A1330',
                  '&:hover': {
                    backgroundColor: '#1A1A1A',
                  },
                },
              }}
            /> */}
          </DemoContainer>
        </LocalizationProvider>
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
            {topBots.map(([botName, [messages]], index: number) => (
              <div key={index} className="flex items-center mt-2">
                <span className="text-[#AEB9E1] w-20">{botName}</span>{' '}
                {/* Adjusted width */}
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
          </div>
          <BarChart
            className="h-72 mt-4"
            data={dailyData}
            index="date"
            categories={['Positive', 'Neutral', 'Negative']}
            colors={['purple', 'cyan', 'blue']}
            valueFormatter={(number) =>
              `${Intl.NumberFormat('us').format(number).toString()}`
            }
            stack={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default ReportsOverview;
