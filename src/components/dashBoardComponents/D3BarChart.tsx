import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface D3BarChartProps {
  data: { name: string; value: number }[];
}

const D3BarChart: React.FC<D3BarChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    svg.selectAll('*').remove();

    // Create a group element for the chart
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up the scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d: { value: any; }) => d.value) || 0])
      .nice()
      .range([innerHeight, 0]);


    const colors = ['#3F2181', '#2BCD94', '#B21888', '#6C6779', '#54083F'];

    // Create the bars
    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: { name: any; }) => xScale(d.name) || 0)
      .attr('y', (d: { value: any; }) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d: { value: any; }) => innerHeight - yScale(d.value))
      .attr('fill', (d, i) => colors[i % colors.length]); 
    //   .attr('fill', 'steelblue');

    // Add the x-axis
    g.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale));

    // Add the y-axis
    g.append('g')
      .call(d3.axisLeft(yScale));

  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={300}></svg>
  );
};

export default D3BarChart;