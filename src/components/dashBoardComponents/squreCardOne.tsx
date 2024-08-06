// 'use client';

// import { fetchMetricsAction } from '@/redux/actions/authActions';
// import { RootState } from '@/redux/configureStore';
// import { DonutChart,Legend  } from '@tremor/react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const valueFormatter = (number: number) =>
//   ` ${Intl.NumberFormat('us').format(number).toString()}`;

// interface SqureCardOneProps {
//   sessionTotal: number;
//   sessionLeft: number;
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
//       const { sessionTotal = 0, sessionLeft = 0 } = metrics;
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

//   const data = [
//     { name: 'Sessions Total', value: sessionTotal },
//     { name: 'Sessions Consumed', value: sessionLeft },
//   ];
//   const sales = [
//     {
//       name: 'Technology & equpiment',
//       sales: 980,
//     },
//     {
//       name: 'Marketing',
//       sales: 456,
//     },
//     {
//       name: 'Finance',
//       sales: 390,
//     },
//     {
//       name: 'Human Resource',
//       sales: 240,
//     },
//     {
//       name: 'Marketing',
//       sales: 190,
//     },
//   ];
  
//   const valueFormatter = (number: number) =>
//     ` ${Intl.NumberFormat('us').format(number).toString()}`;



  
//   return (
//     <>
//     <div className='flex'>
//       <DonutChart
//           data={sales}
//           category="sales"
//           index="name"
//           valueFormatter={valueFormatter}
//           colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
//           className="w-80"
//         />
//         <Legend
//           categories={['Technology & equpiment', 'Marketing', 'Finance', 'Human Resource', 'Marketing']}
//           colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
//           className="max-w-xs"
//         />
//         </div>
//     </>
//   );
// }



'use client';

import { fetchMetricsAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import { DonutChart, Legend } from '@tremor/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat('us').format(number).toString()}`;

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
      const { sessionTotal = 0, sessionLeft = 0, botSessionMapping = [] } = metrics;
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

  // Transform the botSessionMapping data to match the format required by DonutChart
  const sales = metrics.botSessionMapping
    ? metrics.botSessionMapping.map(([name, value]: [string, number]) => ({
        name,
        sales: value,
      }))
    : [];

  return (
    <>
      <div className='flex'>
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="w-80"
        />
        <Legend
          categories={sales.map((item: { name: string }) => item.name)}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="max-w-xs"
        />
      </div>
    </>
  );
}
