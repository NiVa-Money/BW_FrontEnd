// "use client"
// import { Card } from '@tremor/react';
// import { BarChart } from '@tremor/react';


// const chartdata = [
//   {
//     name: 'User 1',
//     'Chats per day': 0,
//   },
//   {
//     name: 'User 2',
//     'Chats per day': 0,
//   },
//   {
//     name: 'User 3',
//     'Chats per day': 0,
//   },
//   {
//     name: 'User 4',
//     'Chats per day': 281,
//   },
//   {
//     name: 'User 5',
//     'Chats per day': 251,
//   },
//   {
//     name: 'User 6',
//     'Chats per day': 232,
//   },
//   {
//     name: 'User 7',
//     'Chats per day': 98,
//   },
// ];

// const dataFormatter = (number: number) =>
//   Intl.NumberFormat('us').format(number).toString();

// export function SqureCardTwo() {
//   return (
   
//      <>
//       <BarChart
//       className="h-[90%]"
//     data={chartdata}
//     index="name"
//     categories={['Chats per day']}
//     colors={['blue']}
//     valueFormatter={dataFormatter}
//     yAxisWidth={48}
//     onValueChange={(v) => console.log(v)}
//   />
// </>
    
//   );
// }


// Update the existing SqureCardTwo component

import { Card } from '@tremor/react';
import D3BarChart from './D3BarChart';

const chartdata = [
  { name: 'User 1', value: 0 },
  { name: 'User 2', value: 0 },
  { name: 'User 3', value: 0 },
  { name: 'User 4', value: 281 },
  { name: 'User 5', value: 251 },
  { name: 'User 6', value: 232 },
  { name: 'User 7', value: 98 },
];

export function SqureCardTwo() {
  return (
    <>
      <Card>
        <div className="mb-4">Chats per day</div>
        <D3BarChart data={chartdata} />
      </Card>
    </>
  );
}
