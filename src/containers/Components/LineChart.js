import React, { PureComponent } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList } from 'recharts';



const data = [
  {
    name: 10, uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 20, uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 30, uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 40, uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 50, uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 60, uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 70, uv: 3490, pv: 4300, amt: 2100,
  },
];

const data02 = [
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
  ];

  const data03 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
  
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  render() {
    return (
        <LineChart
        width={400}
        height={400}
        data={data03}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#387908" yAxisId="pv" />
      </LineChart>
    );
  }
}