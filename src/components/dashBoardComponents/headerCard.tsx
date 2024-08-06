// "use client"
// import { AreaChart } from '@tremor/react';
// //data
// const chartdata = [
//   {
//     date: 'Jan 22',
//     Use: 2890,
//     'Avilable': 2338,
//   },
//   {
//     date: 'Feb 22',
//     Use: 2756,
//     'Avilable': 2103,
//   },
//   {
//     date: 'Mar 22',
//     Use: 3322,
//     'Avilable': 2194,
//   },
//   {
//     date: 'Apr 22',
//     Use: 3470,
//     'Avilable': 2108,
//   },
//   {
//     date: 'May 22',
//     Use: 3475,
//     'Avilable': 1812,
//   },
//   {
//     date: 'Jun 22',
//     Use: 3129,
//     'Avilable': 1726,
//   },
//   {
//     date: 'Jul 22',
//     Use: 3490,
//     'Avilable': 1982,
//   },
//   {
//     date: 'Aug 22',
//     Use: 2903,
//     'Avilable': 2012,
//   },
//   {
//     date: 'Sep 22',
//     Use: 2643,
//     'Avilable': 2342,
//   },
//   {
//     date: 'Oct 22',
//     Use: 2837,
//     'Avilable': 2473,
//   },
//   {
//     date: 'Nov 22',
//     Use: 2954,
//     'Avilable': 3848,
//   },
//   {
//     date: 'Dec 22',
//     Use: 3239,
//     'Avilable': 3736,
//   },
// ];
// //data end
// const dataFormatter = (number: number) =>
//   `$${Intl.NumberFormat('us').format(number).toString()}`;

// export function CardHeader1() {
//   return (
//     <>
    
//       <AreaChart
//       className="h-[70%]"
//       data={chartdata}
//       index="date"
//       categories={['Use', 'Avilable']}
//       colors={['indigo', 'rose']}
//       valueFormatter={dataFormatter}
//       yAxisWidth={60}
//       onValueChange={(v) => console.log(v)}
//     />
//    </>

//   );
// }




"use client";
import { AreaChart } from '@tremor/react';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Data
const chartdata = [
  { date: 'Jan 22', Use: 2890, Available: 2338 },
  { date: 'Feb 22', Use: 2756, Available: 2103 },
  { date: 'Mar 22', Use: 3322, Available: 2194 },
  { date: 'Apr 22', Use: 3470, Available: 2108 },
  { date: 'May 22', Use: 3475, Available: 1812 },
  { date: 'Jun 22', Use: 3129, Available: 1726 },
  { date: 'Jul 22', Use: 3490, Available: 1982 },
  { date: 'Aug 22', Use: 2903, Available: 2012 },
  { date: 'Sep 22', Use: 2643, Available: 2342 },
  { date: 'Oct 22', Use: 2837, Available: 2473 },
  { date: 'Nov 22', Use: 2954, Available: 3848 },
  { date: 'Dec 22', Use: 3239, Available: 3736 },
];

// Data formatter
const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export function CardHeader1() {
  const svgRef = useRef<SVGSVGElement | null>(null); // Reference for the D3 SVG

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500; // Set your desired width
    const height = 300; // Set your desired height

    // Clear previous SVG content
    svg.selectAll("*").remove();

    // Set up scales
    const xScale = d3.scalePoint()
      .domain(chartdata.map(d => d.date))
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(chartdata, d => Math.max(d.Use, d.Available)) || 0])
      .range([height, 0]);

    // Create the area generator for "Use"
    const areaUse = d3.area<{ date: string; Use: number }>()
      .x(d => xScale(d.date)!)
      .y0(height)
      .y1(d => yScale(d.Use));

    // Append the area path for "Use"
    svg.append('path')
      .datum(chartdata)
      .attr('fill', '#B21888') // Color for "Use"
      .attr('d', areaUse);

    // Create the area generator for "Available"
    const areaAvailable = d3.area<{ date: string; Available: number }>()
      .x(d => xScale(d.date)!)
      .y0(height)
      .y1(d => yScale(d.Available));

    // Append the area path for "Available"
    svg.append('path')
      .datum(chartdata)
      .attr('fill', '#3F2181') // Color for "Available"
      .attr('d', areaAvailable);

    // Create the line generator for "Use"
    const lineUse = d3.line<{ date: string; Use: number }>()
      .x(d => xScale(d.date)!)
      .y(d => yScale(d.Use))
      .curve(d3.curveMonotoneX); // Smooth line

    // Append the line path for "Use"
    svg.append('path')
      .datum(chartdata)
      .attr('fill', 'none')
      .attr('stroke', '#2BCD94') // Line color for "Use"
      .attr('stroke-width', 2)
      .attr('d', lineUse);

    // Create the line generator for "Available"
    const lineAvailable = d3.line<{ date: string; Available: number }>()
      .x(d => xScale(d.date)!)
      .y(d => yScale(d.Available))
      .curve(d3.curveMonotoneX); // Smooth line

    // Append the line path for "Available"
    svg.append('path')
      .datum(chartdata)
      .attr('fill', 'none')
      .attr('stroke', '#54083F') // Line color for "Available"
      .attr('stroke-width', 2)
      .attr('d', lineAvailable);

    // Add axes
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, []);

  return (
    <div className="flex flex-col">
      <AreaChart
        className="h-[70%]"
        data={chartdata}
        index="date"
        categories={['Use', 'Available']}
        colors={['#B21888', '#3F2181']} // Use the same colors as D3
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
      <svg ref={svgRef} width={500} height={300} className="mt-4"></svg> {/* D3 chart container */}
    </div>
  );
}
