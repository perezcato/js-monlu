import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import './CurvePlot.css';

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
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {/* <XAxis dataKey="x" /> */}

          <Tooltip />
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <Line type="monotone" dataKey="y" stroke="#00FF00" yAxisId={0} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurvePlot;
