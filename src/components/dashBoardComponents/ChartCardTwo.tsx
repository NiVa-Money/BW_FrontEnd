import React from 'react';
import { Card, Title, BarChart, Metric } from '@tremor/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Multiselect from 'multiselect-react-dropdown';

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
