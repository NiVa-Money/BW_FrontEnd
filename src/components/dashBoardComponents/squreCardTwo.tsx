'use client';
import { BarChart } from '@tremor/react';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

interface BotResult {
  messageCount: number;
  botId: {
    botId: string;
    botName: string[];
    createdAt: string;
  };
}

interface Metrics {
  sessionConsumed: number;
  sessionTotal: number;
  sessionLeft: number;
  activeBots: number;
  totalClientServed: number;
  uniqueClientToday: number;
  botSessionMapping: Array<[string, [number, boolean]]>;
  resolvedSessions: number;
  unresolvedSessions: number;
  userSatisfaction: {
    good: number;
    bad: number;
    neutral: number;
  };
  results: BotResult[];
}

export function SqureCardTwo() {
  const metrics = useSelector((state: RootState) => state.root?.userMetric?.data);

  // Create a mapping from botId to botName
  const botNameMap: { [key: string]: string[] } = {};

  metrics?.results?.forEach((result: { botId: { botId: any; botName: any; }; }) => {
    const botId = result?.botId?.botId;
    const botName = result?.botId?.botName;

    if (!botNameMap[botId] && botName?.length > 0) {
      botNameMap[botId] = botName;
    }
  });

  // Group the results by botName and formatted date
  const groupedData: { [key: string]: { [key: string]: number } } = {};

  metrics?.results?.forEach((result: { botId: { createdAt: string | number | Date; botId: string | number; }; messageCount: number; }) => {
    const formattedDate = format(new Date(result?.botId?.createdAt), 'MMM dd');
    const botNames = botNameMap[result?.botId?.botId] || [`Unknown (${result.botId.botId})`];

    botNames.forEach((botName) => {
      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = {};
      }

      if (!groupedData[formattedDate][botName]) {
        groupedData[formattedDate][botName] = 0;
      }

      groupedData[formattedDate][botName] += result.messageCount;
    });
  });

  const chartdata = Object.keys(groupedData).map((date) => ({
    date,
    ...groupedData[date],
  }));

  const categories: string[] = Array.from(
    new Set(metrics?.results?.flatMap((result: { botId: { botId: string | number; }; }) => botNameMap[result?.botId?.botId] || []))
  );

  return (
    <>
      <BarChart
        className="h-72"
        data={chartdata}
        index="date"
        categories={categories}
        colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
        yAxisWidth={30}
      />
    </>
  );
}
