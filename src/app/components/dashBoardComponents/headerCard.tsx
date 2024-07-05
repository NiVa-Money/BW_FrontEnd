"use client"
import { Card } from '@tremor/react';
import { AreaChart } from '@tremor/react';
//data
const chartdata = [
  {
    date: 'Jan 22',
    Use: 2890,
    'Avilable': 2338,
  },
  {
    date: 'Feb 22',
    Use: 2756,
    'Avilable': 2103,
  },
  {
    date: 'Mar 22',
    Use: 3322,
    'Avilable': 2194,
  },
  {
    date: 'Apr 22',
    Use: 3470,
    'Avilable': 2108,
  },
  {
    date: 'May 22',
    Use: 3475,
    'Avilable': 1812,
  },
  {
    date: 'Jun 22',
    Use: 3129,
    'Avilable': 1726,
  },
  {
    date: 'Jul 22',
    Use: 3490,
    'Avilable': 1982,
  },
  {
    date: 'Aug 22',
    Use: 2903,
    'Avilable': 2012,
  },
  {
    date: 'Sep 22',
    Use: 2643,
    'Avilable': 2342,
  },
  {
    date: 'Oct 22',
    Use: 2837,
    'Avilable': 2473,
  },
  {
    date: 'Nov 22',
    Use: 2954,
    'Avilable': 3848,
  },
  {
    date: 'Dec 22',
    Use: 3239,
    'Avilable': 3736,
  },
];
//data end
const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export function CardHeader1() {
  return (
    <Card className="mx-auto max-w-3xl h-48 rounded-3xl">
      <p className="text-center text-slate-400">Use/Avilable</p>
      <AreaChart
      className="h-36"
      data={chartdata}
      index="date"
      categories={['Use', 'Avilable']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    </Card>

  );
}