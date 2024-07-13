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
   <>
      <DonutChart
        className="h-52"
        data={data}
        category="value"
        index="name"
        valueFormatter={valueFormatter}
        colors={['blue', 'cyan']}
      />
</>
  );
}
