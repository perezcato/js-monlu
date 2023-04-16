import React from "react";

interface Type {
  percentage: number;
}

const PercentageBar = ({ percentage }: Type) => {
  return (
    <div className="h-4 w-full bg-gray-300 rounded-full">
      <div
        className="h-full bg-green-500 rounded-full"
        style={{ width: `${percentage}%` }}
      >
        <div className="flex justify-end h-full w-full text-xs text-gray-700 px-2">
          <div>{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default PercentageBar;
