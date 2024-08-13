// 'use client';

// import { fetchMetricsAction } from '@/redux/actions/authActions';
// import { RootState } from '@/redux/configureStore';
// import { DonutChart, Legend } from '@tremor/react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const valueFormatter = (number: number) =>
//   ` ${Intl.NumberFormat('us').format(number).toString()}`;

// interface SqureCardOneProps {
//   sessionTotal: number;
//   sessionLeft: number;
// }

// interface BotSessionMapping {
//   name: string;
//   value: number;
// }

// export function SqureCardOne({ sessionTotal, sessionLeft }: SqureCardOneProps) {
//   const dispatch = useDispatch();
//   const verifyVal = useSelector((state: RootState) => state.root.userVerify);
//   const userId = useSelector(
//     (state: RootState) => state.root?.userData?.user_id
//   );

//   const pathName = useSelector((state: RootState) => state.root?.pathName);
//   const metrics = useSelector((state: RootState) => state.root.userMetric.data);

//   const [metricData, setMetricData] = useState({
//     sessionTotal: 0,
//     sessionLeft: 0,
//   });

//   useEffect(() => {
//     const savedMetrics = localStorage.getItem('metricsData');
//     if (savedMetrics) {
//       try {
//         setMetricData(JSON.parse(savedMetrics));
//       } catch (error) {
//         console.error('Failed to parse metrics data from local storage', error);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (verifyVal || pathName === '/dashBoard') {
//       dispatch(fetchMetricsAction(userId));
//     }
//   }, [verifyVal, pathName]);

//   useEffect(() => {
//     if (metrics && Object.keys(metrics).length > 0) {
//       const { sessionTotal = 0, sessionLeft = 0, botSessionMapping = [] } = metrics;
//       setMetricData({ sessionTotal, sessionLeft });
//       try {
//         localStorage.setItem(
//           'metricsData',
//           JSON.stringify({ sessionTotal, sessionLeft })
//         );
//       } catch (error) {
//         console.error('Failed to save metrics data to local storage', error);
//       }
//     }
//   }, [metrics]);

//   // Transform the botSessionMapping data to match the format required by DonutChart
//   const sales = metrics.botSessionMapping
//     ? metrics.botSessionMapping.map(([name, value]: [string, number]) => ({
//         name,
//         sales: value,
//       }))
//     : [];

//   return (
//     <>
//       <div className='flex'>
//         <DonutChart
//           data={sales}
//           category="sales"
//           index="name"
//           valueFormatter={valueFormatter}
//           colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
//           className="w-80"
//         />
//         <Legend
//           categories={sales.map((item: { name: string }) => item.name)}
//           colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
//           className="max-w-xs"
//         />
//       </div>
//     </>
//   );
// }

import { fetchMetricsAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import { randomBackgroundColor } from '@/utils/commonFunctions';
import { DonutChart, Legend } from '@tremor/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const valueFormatter = (number: number) =>
//   ` ${Intl.NumberFormat('us').format(number).toString()}`;

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

  const [metricData, setMetricData] = useState({
    sessionTotal: 0,
    sessionLeft: 0,
  });
  const colorList = [
    '#64748b',
    '#6b7280',
    '#71717a',
    '#737373',
    '#78716c',
    '#ef4444',
    '#f97316',
    '#f59e0b',
    '#eab308',
    '#84cc16',
    '#22c55e',
    '#10b981',
    '#14b8a6',
    '#06b6d4',
    '#0ea5e9',
    '#3b82f6',
    '#6366f1',
    '#8b5cf6',
    '#a855f7',
    '#d946ef',
    '#ec4899',
    '#f43f5e',
  ];

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

  useEffect(() => {
    if (verifyVal || pathName === '/dashBoard') {
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
  console.log('me', metrics?.botSessionMapping);
  const iteratorData: any = [];
  // Transform the botSessionMapping data to match the format required by DonutChart
  const mappingData = metrics?.botSessionMapping?.length
    ? metrics?.botSessionMapping.map((item: any) => {
        // {name:item[0],value:item[1][0]}
        const obj: any = {
          name: item[0],
          value: item[1][0],
          status: item[1][1],
        };
        iteratorData.push(obj);
        console.log('oi', item);
      })
    : [];
  let colorIndex = 0;
  const colors: any = iteratorData?.map((item: any) => {
    if (item.status) {
      const color = colorList[colorIndex % colorList.length]; // Cycle through color list
      colorIndex++; // Increment index for the next true status item
      return color;
    } else {
      return '#D1D5DB'; // Grey color for false status
    }
  });

  console.log(
    'mappingData',
    mappingData,
    iteratorData,
    metrics?.botSessionMapping,
    colors
  );
  return iteratorData?.length ? (
    <div className="flex">
      <DonutChart
        data={iteratorData}
        category="value"
        index="name"
        // valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        className="w-80"
      />
      <Legend
        categories={iteratorData.map((item: { name: string }) => item.name)}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        className="max-w-xs"
      />
    </div>
  ) : null;
}
