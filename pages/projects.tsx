import Dashboard from "@/components/layout";
import PercentageBar from "@/components/PercentageBar";
import { BsGraphUp } from "react-icons/bs";
// TableWithImages.js
import React from "react";
import TableComponent from "@/components/cards/TableComponent";

const TableWithImages = () => {
  return (
    <Dashboard page="Overview">
      <div className="rounded p-6 shadow flex bg-white h-auto overflow-hidden m-2 justify-between items-center">
        <div className="flex">
          <h1 className="text-3xl font-bold px-8">12</h1>

          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Total Projects</p>
            <div className="bg-red-100 flex items-center justify-center rounded">
              <div className="px-1 flex text-[10px] text-red-500">
                <BsGraphUp size={12} color="#FF0000" />
                <p>2 late in due</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="flex items-center">
            <div className="bg-green-600 p-2 rounded-full m-4"></div>
            <p className="text-gray-500">In progress</p>
            <div className="bg-gray-400 p-2 rounded-full m-4"></div>
            <p className="text-gray-500">completed</p>
          </div>
          <PercentageBar percentage={80} />
        </div>
      </div>
      <TableComponent />
    </Dashboard>
  );
};

export default TableWithImages;
