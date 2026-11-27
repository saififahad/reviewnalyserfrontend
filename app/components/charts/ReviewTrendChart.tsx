"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  createHorizontalChart,
  ResponsiveContainer,
} from "recharts";

const chartMockData = [
  { date: "Nov 01", total: 10, positive: 5, negative: 0, neutral: 0 },
  { date: "Nov 02", total: 20, positive: 50, negative: 5, neutral: 30 },
  { date: "Nov 03", total: 30, positive: 60, negative: 80, neutral: 10 },
  { date: "Nov 04", total: 60, positive: 20, negative: 6, neutral: 50 },
  { date: "Nov 05", total: 55, positive: 38, negative: 50, neutral: 25 },
  { date: "Nov 06", total: 70, positive: 50, negative: 80, neutral: 35 },
  { date: "Nov 07", total: 65, positive: 20, negative: 60, neutral: 50 },
  { date: "Nov 08", total: 48, positive: 32, negative: 80, neutral: 20 },
  { date: "Nov 09", total: 75, positive: 40, negative: 13, neutral: 80 },
  { date: "Nov 10", total: 82, positive: 6, negative: 20, neutral: 10 },
];

export default function ReviewTrendChart() {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartMockData}
          margin={{
            top: 10,
            right: 8,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#E5E7EB"
            strokeDasharray="4 4"
          />
          <XAxis dataKey="date" />
          <YAxis
            domain={[0, 10]}
            ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#888888" }}
            width={32}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="blue"
            fill="blue"
            fillOpacity={0.12}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Area
            type="monotone"
            dataKey="positive"
            stroke="green"
            fill="green"
            fillOpacity={0.12}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Area
            type="monotone"
            dataKey="negative"
            stroke="red"
            fill="red"
            fillOpacity={0.12}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Area
            type="monotone"
            dataKey="neutral"
            stroke="orange"
            fill="orange"
            fillOpacity={0.12}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
