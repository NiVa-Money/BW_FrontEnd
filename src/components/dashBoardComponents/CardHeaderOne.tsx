'use client';
import { BarList } from '@tremor/react';

const CardHeaderOne: React.FC<any> = ({ userMetricData }) => {
  const datahero = [
    {
      name: 'Resolved',
      value: userMetricData?.resolvedSessions || 0,
      color: 'green',
    },
    {
      name: 'UnResolved',
      value: userMetricData?.unresolvedSessions || 0,
      color: 'red',
    },
  ];

  return (
    <>
      <BarList data={datahero} className="mx-auto max-w-sm" />
    </>
  );
};
export default CardHeaderOne;
