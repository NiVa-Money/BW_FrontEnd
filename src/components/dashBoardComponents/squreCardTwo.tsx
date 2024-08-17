'use client';
import { BarChart } from '@tremor/react';
import { RootState } from '@/redux/configureStore';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

interface BotResult {
  messageCount: number;
  botId: {
    botId: string;
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
  const metrics = useSelector((state: RootState) => state.root.userMetric.data);

  // Group the results by botId and formatted date
  const groupedData: { [key: string]: { [key: string]: number } } = {};

  metrics.results.forEach((result: { botId: { createdAt: string | number | Date; botId: any; }; messageCount: number; }) => {
    const formattedDate = format(new Date(result.botId.createdAt), 'MMM dd');
    const botId = result.botId.botId;

    if (!groupedData[formattedDate]) {
      groupedData[formattedDate] = {};
    }

    if (!groupedData[formattedDate][botId]) {
      groupedData[formattedDate][botId] = 0;
    }

    groupedData[formattedDate][botId] += result.messageCount;
  });

  const chartdata = Object.keys(groupedData).map((date) => {
    return { date, ...groupedData[date] };
  });


  const categories:any = Array.from(
    new Set(metrics.results.map((result: { botId: { botId: any; }; }) => result.botId.botId))
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
