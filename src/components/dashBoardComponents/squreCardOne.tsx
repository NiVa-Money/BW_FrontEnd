import { fetchMetricsAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import { randomBackgroundColor } from '@/utils/commonFunctions';
import { DonutChart, Legend } from '@tremor/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface SqureCardOneProps {
  sessionTotal: number;
  sessionLeft: number;
}

interface BotSessionMapping {
  name: string;
  value: number;
}

export function SqureCardOne({ sessionTotal, sessionLeft }: SqureCardOneProps) {
  const dispatch = useDispatch();
  const verifyVal = useSelector((state: RootState) => state.root.userVerify);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );

  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const metrics = useSelector((state: RootState) => state.root.userMetric.data);

  useEffect(() => {
    if (verifyVal || pathName === '/dashboard') {
      dispatch(fetchMetricsAction(userId));
    }
  }, [verifyVal, pathName]);

  useEffect(() => {
    if (metrics && Object.keys(metrics).length > 0) {
      const {
        sessionTotal = 0,
        sessionLeft = 0,
        botSessionMapping = [],
      } = metrics;
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

  const iteratorData: any = [];

  const mappingData = metrics?.botSessionMapping?.length
    ? metrics?.botSessionMapping.map((item: any) => {
        const obj: any = {
          name: item[0],
          value: item[1][0],
          status: item[1][1],
        };
        iteratorData.push(obj);
      })
    : [];

  return iteratorData?.length ? (
    <div className="flex">
      <DonutChart
        data={iteratorData}
        category="value"
        index="name"
        colors={[
          'violet',
          'purple',
          'fuchsia',
          'teal',
          'cyan',
          'sky',
          'blue',
          'indigo',
          'pink',
          'rose',
          'red',
          'orange',
          'amber',
          'yellow',
          'lime',
          'green',
          'emerald',
        ]}
        className="w-80"
      />
      <Legend
        categories={iteratorData.map((item: { name: string }) => item.name)}
        colors={[
          'violet',
          'purple',
          'fuchsia',
          'teal',
          'cyan',
          'sky',
          'blue',
          'indigo',
          'pink',
          'rose',
          'red',
          'orange',
          'amber',
          'yellow',
          'lime',
          'green',
          'emerald',
        ]}
      />
    </div>
  ) : null;
}
