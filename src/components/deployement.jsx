import React from "react";

import "../styles/deployement.css";

import {
  AreaChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export const Deployement = () => {
  // Sample chart data
  const pdata = [
    {
      name: "Week 1",
      weeks: 40,
    },
    {
      name: "Week 2",
      weeks: 40,
    },
    {
      name: "Week 3",
      weeks: 10,
    },
    {
      name: "Week 4",
      weeks: 40,
    },
    {
      name: "Week 5",
      weeks: 60,
    },
  ];

  return (
    <div className="deployement">
      <h2>Deployement</h2>
      <ResponsiveContainer aspect={4}>
        <AreaChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid stroke="black" opacity={0.2} />
          <XAxis dataKey="name" interval={"preserveStartEnd"} stroke="white" />
          <YAxis tickCount={7} domain={[0, 60]} stroke="white"></YAxis>
          <Legend />
          <Tooltip callbacks={null} />
          <Area
            dataKey="weeks"
            stroke="#4e5c93"
            dot={{ stroke: "#4e5c93", strokeWidth: 2 }}
            fill="#263a6b"
            label="hide"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
