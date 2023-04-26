import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const CurvePlot = () => {
  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 2 },
    { x: 4, y: 0 },
  ];

  return (
    <div className="curve-plot-container">
      <ResponsiveContainer width="100%" height="60%">
        <LineChart
          data={data}
          
        >
          <Line
            dot={false}
            type="monotone"
            dataKey="y"
            stroke="#377dff"
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurvePlot;
