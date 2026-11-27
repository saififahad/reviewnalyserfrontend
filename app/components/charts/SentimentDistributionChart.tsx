"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import { PieChart as PieChartIcon } from "lucide-react";

import { sentimentDistributionData } from "@/app/mock_data";

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
}: any) => {
  const RADIAN = Math.PI / 180;

  // Position label inside each slice
  const radius = outerRadius * 0.62;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);

  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={15}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function SentimentDistributionChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2 rounded-lg bg-indigo-50">
          <PieChartIcon size={22} className="text-indigo-600" />
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

      {/* Chart + Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_0.8fr] items-center gap-4">
        {/* Pie Chart */}
        <div className="w-full h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sentimentDistributionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="90%"
                startAngle={90}
                endAngle={-270}
                label={renderCustomizedLabel}
                labelLine={false}
                stroke="none"
              >
                {sentimentDistributionData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip formatter={(value, name) => [`${value}%`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <div className="flex flex-col gap-5">
          {sentimentDistributionData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <div>
                <p className="text-sm font-medium text-gray-800">{item.name}</p>

                <p className="text-sm text-gray-500">({item.value}%)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
