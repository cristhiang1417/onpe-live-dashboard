"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "8:00 pm", diff: 12300 },
  { time: "9:00 pm", diff: 11800 },
  { time: "10:00 pm", diff: 10500 },
  { time: "11:00 pm", diff: 9788 },
  { time: "12:00 am", diff: 8900 },
  { time: "1:00 am", diff: 9500 },
];

export default function TrendChart() {
  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <h2 className="text-xl font-bold mb-6">
        Diferencia en el tiempo
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#243047" />
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="diff"
              stroke="#00d25b"
              strokeWidth={4}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}