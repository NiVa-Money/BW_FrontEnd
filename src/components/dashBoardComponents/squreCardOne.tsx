'use client';

import { fetchMetricsAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import { DonutChart } from '@tremor/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat('us').format(number).toString()}`;

interface SqureCardOneProps {
  sessionTotal: number;
  sessionLeft: number;
}

export function SqureCardOne({ sessionTotal, sessionLeft }: SqureCardOneProps) {
  const dispatch = useDispatch();
  const verifyVal = useSelector((state: RootState) => state.root.userVerify);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );

  const pathName = useSelector((state: RootState) => state.root?.pathName);

  const metrics = useSelector((state: RootState) => state.root.userMetric.data);

  const [metricData, setMetricData] = useState({
    sessionTotal: 0,
    sessionLeft: 0,
  });
  console.log(metricData);
  useEffect(() => {
    const savedMetrics = localStorage.getItem('metricsData');
    if (savedMetrics) {
      try {
        setMetricData(JSON.parse(savedMetrics));
      } catch (error) {
        console.error('Failed to parse metrics data from local storage', error);
      }
    }
  }, []);

  console.log('verifyVal', verifyVal);
  useEffect(() => {
    if (verifyVal || pathName === '/dashBoard') {
      dispatch(fetchMetricsAction(userId));
    }
  }, [verifyVal, pathName]);

  useEffect(() => {
    if (metrics && Object.keys(metrics).length > 0) {
      const { sessionTotal = 0, sessionLeft = 0 } = metrics;
      setMetricData({ sessionTotal, sessionLeft });
      try {
        localStorage.setItem(
          'metricsData',
          JSON.stringify({ sessionTotal, sessionLeft })
        );
      } catch (error) {
        console.error('Failed to save metrics data to local storage', error);
      }
    }
  }, [metrics]);

  const data = [
    { name: 'Sessions Total', value: sessionTotal },
    { name: 'Sessions Consumed', value: sessionLeft },
  ];

  return (
    <>
      <DonutChart
        className="h-[82%]"
        data={data}
        category="value"
        index="name"
        valueFormatter={valueFormatter}
        colors={['blue', 'cyan']}
      />
    </>
  );
}
