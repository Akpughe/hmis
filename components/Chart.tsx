import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
//   linearGradient,
} from 'recharts';

const data = [
  {
    name: 'jan',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: 'feb',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 'march',
    uv: 200,
    pv: 380,
    amt: 229,
  },
  {
    name: 'april',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: 'may',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: 'june',
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: 'july',
    uv: 349,
    pv: 430,
    amt: 210,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={400}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <Tooltip /> */}
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
