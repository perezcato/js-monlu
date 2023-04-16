import Dashboard from "@/components/layout";
import PercentageBar from "@/components/PercentageBar";
import { BsGraphUp } from "react-icons/bs";
// TableWithImages.js
import React from "react";
import TableComponent from "@/components/cards/TableComponent";

const TableWithImages = () => {
  return (
    <Dashboard page="Overview">
      <div className="w-full flex items-center bg-white m-auto border border-gray-100 rounded-xl shadow-md shadow-slate-100 overflow-hidden py-5 px-8">
        <div className="flex items-center space-x-5 w-1/5">
          <h1 className="text-6xl font-bold">12</h1>

          <div className="flex flex-col space-y-[2px]">
            <p className="text-sm text-gray-400">Total Projects</p>
            <div className="bg-red-100 flex items-center justify-center rounded-xl">
              <div className="py-[2px] px-2 flex items-center text-[10px] text-red-500 space-x-2">
                <BsGraphUp color="#FF0000" />
                <p>-2 late in due</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center mb-2">
            <div className="bg-[#377dff] p-1 rounded-full mr-2"></div>
            <p className="text-gray-400 mr-12 text-sm">In progress (4)</p>
            <div className="bg-[#00c987] p-1 rounded-full mr-2"></div>
            <p className="text-gray-400 text-sm">Completed (8)</p>
          </div>
          <PercentageBar percentage={80} />
        </div>
      </div>
      <TableComponent />
    </Dashboard>
  );
};

export default TableWithImages;
