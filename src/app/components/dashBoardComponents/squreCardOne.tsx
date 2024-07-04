"use client"
import { Card, DonutChart} from '@tremor/react';
import React from 'react';

const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat('us').format(number).toString()}`;

interface SqureCardOneProps {
  sessionTotal: number;
  sessionLeft: number;
}

export function SqureCardOne({ sessionTotal, sessionLeft }: SqureCardOneProps) {
  const data = [
    { name: 'Sessions Total', value: sessionTotal },
    { name: 'Sessions Consumed', value:  sessionLeft },
  ];

  return (
    <Card className="mx-auto max-w-xs w-80 h-72 rounded-3xl">
      <p className="text-center text-slate-400">Session Usage</p>
      <DonutChart
        className="h-52"
        data={data}
        category="value"
        index="name"
        valueFormatter={valueFormatter}
        colors={['blue', 'cyan']}
      />
    </Card>
  );
}
