import React from "react";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";

type CardApiProps = {
  title: string;
  value: string;
  percentage: string;
  prevValue: string;
  status?: string;
};
const CardApi = (props: CardApiProps) => {
  const { title, value, prevValue, percentage, status } = props;
  console.log(status);
  return (
    <div className="border border-[rgba(231, 234, 243, 0.7)] bg-white shadow shadow-[rgba(140, 152, 164, 0.075)] p-[1.3rem] rounded-md">
      <div className="text-[#1e2022] flex flex-col justify-center items-center">
        <h4 className="uppercase font-semibold text-[0.71rem] mb-[1rem]">
          {title}
        </h4>
        <div className="mb-2 font-semibold text-[3rem]">{value}</div>
        <div className="flex relative">
          <div className="mr-4">
            <div
              className={`flex  ${
                status === "failed"
                  ? "text-[rgb(237,76,120)]"
                  : "text-[rgb(0,201,167)]"
              } font-semibold mb-1`}
            >
              {status === "failed" ? (
                <BsGraphDown className="mr-1 mt-1" />
              ) : (
                <BsGraphUp className="mr-1 mt-1" />
              )}
              {percentage}%
            </div>
            <p className="text-[rgb(103,119,136)] ">change</p>
          </div>
          <div className="ml-4 before:w-[1px] before:h-full  before:bg-[rgba(231,234,243,.7)] before:absolute before:top-0 before:left-[4rem]">
            <p className="font-semibold mb-1 ">{prevValue}</p>
            <p className="text-[rgb(103,119,136)] ">last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardApi;
