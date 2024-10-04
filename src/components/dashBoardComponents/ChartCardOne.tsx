import React, { useState } from 'react';
import { Card, Title, AreaChart, BarChart, Metric, Text } from '@tremor/react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ChartCardOne = () => {
  // Get the metrics data from the Redux store
  const metrics = useSelector(
    (state: RootState) => state.root?.userMetric?.data
  );

  // Extract resolved and unresolved session data from metrics
  const resolvedSessions = metrics?.resolvedSessions ?? 0;
  const unresolvedSessions = metrics?.unresolvedSessions ?? 0;

  // Data for the Unresolved/Resolved Bar Chart
  const resolvedData = [
    {
      time: 'Current',
      Resolved: resolvedSessions,
      Unresolved: unresolvedSessions,
    },
  ];

  const npsData = [
    { time: '12 AM', nps: 50 },
    { time: '4 AM', nps: 150 },
    { time: '8 AM', nps: 100 },
    { time: '12 PM', nps: 250 },
    { time: '4 PM', nps: 180 },
    { time: '8 PM', nps: 100 },
  ];

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
                {/* <Metric className="text-3xl font-bold text-white mt-2">
                  $240.8K
                </Metric> */}
              </div>
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
                </DemoContainer>
              </LocalizationProvider>
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
                  Resolved/Unresolved
                </Title>
                <div className="text-[#AEB9E1] mt-2 flex flex-col">
                  <span className="whitespace-nowrap">Resolved : {resolvedSessions}</span>
                  <span className="whitespace-nowrap">Unresolved : {unresolvedSessions}</span>
                </div>
              </div>
            </div>
            <div className="h-[180px] w-full">
              <BarChart
                className="h-full w-full"
                data={resolvedData}
                index="time"
                categories={['Resolved', 'Unresolved']}
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
              </div>
            </div>
            <div className="h-[180px] w-full">
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
