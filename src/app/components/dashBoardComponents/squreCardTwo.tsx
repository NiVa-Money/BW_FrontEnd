"use client"
import { Card } from '@tremor/react';
import { BarChart } from '@tremor/react';


const chartdata = [
  {
    name: 'User 1',
    'Uses per hours': 2488,
  },
  {
    name: 'User 2',
    'Uses per hours': 1445,
  },
  {
    name: 'User 3',
    'Uses per hours': 743,
  },
  {
    name: 'User 4',
    'Uses per hours': 281,
  },
  {
    name: 'User 5',
    'Uses per hours': 251,
  },
  {
    name: 'User 6',
    'Uses per hours': 232,
  },
  {
    name: 'User 7',
    'Uses per hours': 98,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export function SqureCardTwo() {
  return (
    <Card className="mx-auto max-w-xs w-80 h-72 rounded-3xl">
      <p className="text-center text-slate-400">Bar Chart</p>
      <BarChart
      className="h-52"
    data={chartdata}
    index="name"
    categories={['Uses per hours']}
    colors={['blue']}
    valueFormatter={dataFormatter}
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
  />
    </Card>
    
  );
}