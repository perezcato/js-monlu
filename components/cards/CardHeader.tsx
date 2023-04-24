import React from "react";

type CardHeaderProps = {
  header: string;
  week1: string;
  week2: string;
  handleClick: (week: number) => void;
  toggle: boolean;
};
const CardHeader = (props: CardHeaderProps) => {
  const { header, week1, week2, handleClick, toggle } = props;
  return (
    <>
      <div className="flex items-center justify-between px-5 py-5 border-b border-b-[ rgba(19,33,68,.1)]">
        <h4 className="font-bold text-[0.98rem] text-[#1e2022]">{header}</h4>
        <div className="flex p-2 bg-[#f8fafd] rounded-md text-[#677788] text-[0.812rem] ">
          <div className="">
            <button
              onClick={() => handleClick(1)}
              className={`inline-block px-3 py-1.5 ${
                toggle
                  ? "rounded-md shadow shadow-[rgba(140,152,164,.25)] bg-white w-full h-full"
                  : ""
              }`}
            >
              {week1}
            </button>
          </div>
          <div className="">
            <button
              onClick={() => handleClick(2)}
              className={`inline-block px-3 py-1.5 ${
                toggle
                  ? ""
                  : "rounded-md shadow shadow-[rgba(140,152,164,.25)] bg-white w-full h-full"
              }`}
            >
              {week2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
