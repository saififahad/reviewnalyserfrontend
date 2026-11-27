"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { reviewTrendchartData as chartMockData } from "@/app/mock_data";
import { TrendingUp } from "lucide-react";

export default function ReviewTrendChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2 rounded-lg bg-indigo-50">
          <TrendingUp size={22} className="text-indigo-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Sentiment Distribution
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Overall sentiment of analyzed reviews.
          </p>
        </div>
      </div>
      <div className="h-65 w-full">
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
    </div>
  );
}
