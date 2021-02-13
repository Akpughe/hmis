import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 800,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JUL',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'AUG',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'SEP',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'OCT',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'NOV',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'DEC',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="shadow-xl">
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#2247b3" strokeWidth={3} />
        <Line type="monotone" dataKey="pv" stroke="#09653c" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
      </LineChart>
    </div>
  );
};

export default Chart;
