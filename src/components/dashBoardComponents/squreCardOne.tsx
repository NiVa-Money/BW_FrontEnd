"use client"

import { fetchMetrictsAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import { Card, DonutChart} from '@tremor/react';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat('us').format(number).toString()}`;

interface SqureCardOneProps {
  sessionTotal: number;
  sessionLeft: number;
}


export function SqureCardOne({ sessionTotal, sessionLeft }: SqureCardOneProps) {
  const dispatch = useDispatch
  const verifyVal = useSelector((state: RootState) => state.root.userVerify);
  useEffect(() => {
  if (verifyVal) {
    dispatch(fetchMetrictsAction()) 
  }

  }, [verifyVal])
  

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
