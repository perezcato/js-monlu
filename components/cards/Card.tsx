import React from "react";
import FinanceChart from "@/components/cards/FinancialGraph";

interface CardProps {
  title: string;
  value: string;
  percentage: number;
}
const Card = (props: CardProps) => {
  const { title, value, percentage } = props;
  return (
    <>
      <div className="bg-white overflow-hidden border border-gray-100 shadow shadow-slate-100 cursor-pointer rounded-lg px-4 py-4 hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-300">
        <div className="flex w-full">
          <div className="flex flex-col w-6/12 space-y-3">
            <h3 className="text-xs font-medium text-gray-400 uppercase">
              {title}
            </h3>
            <p className="text-xl font-medium text-gray-900 hover:text-blue-600">
              {value}
            </p>
            <div className="h-15 flex items-center">
              <div className="h-full bg-green-100 flex items-center justify-center rounded p-[1px]">
                <div className="p-1 flex text-[10px] text-green-500  items-center">
                  <p>12.5%</p>
                </div>
              </div>
              <div className="text-xs px-2 text-gray-400">
                <p>from {value}</p>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <FinanceChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
