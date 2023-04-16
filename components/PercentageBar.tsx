import React from "react";

interface Type {
  percentage: number;
}

const PercentageBar = ({ percentage }: Type) => {
  return (
    <div className="w-full bg-gray-300 rounded-full overflow-hidden flex items-center">
      <div className="h-[8px] bg-[#377dff] w-[38%]" />
      <div className="h-[8px] bg-[#00c987] w-[62%]"></div>
    </div>
  );
};

export default PercentageBar;
