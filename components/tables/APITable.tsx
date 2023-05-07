import React, { useState } from "react";
import { APITableData } from "@/utility/data";
import { BsChevronDown, BsClipboard } from "react-icons/bs";
import Link from "next/link";
import Dropdown from "@/components/tables/Dropdown";

interface APITableProps {
  name: string;
  apiKey: string;
  status: string;
  created: string;
}
const APITable = () => {
  return (
    <div className="block overflow-x-auto w-full min-h-[70vh] ">
      <table
        className={"items-center w-full bg-white/70 border-collapse rounded-md"}
      >
        <thead
          className={
            "uppercase text-[#677788] text-[0.74rem] font-[400] border-[1px]  border-l-0 border-r-0 border-[rgba(231, 234, 243, 0.7)] py-5 "
          }
        >
          <tr className=" bg-[#f8fafd] py-5 px-4 ">
            <th className="px-10 py-4 align-middle text-left font-normal">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-4 align-middle text-left font-normal">
              Name
            </th>
            <th className="px-4 py-4 align-middle text-left font-normal">
              API Key
            </th>
            <th className="px-4 py-4 align-middle text-left font-normal">
              Status
            </th>
            <th className="px-4 py-4 align-middle text-left font-normal">
              Created
            </th>
            <th className="px-4 py-4 align-middle text-left font-normal"></th>
          </tr>
        </thead>
        <tbody>
          {APITableData.map((data) => (
            <tr className="text-[#677788]">
              <td className="px-10 py-3">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-3">{data.name}</td>
              <td className="px-4 py-3">
                <div
                  className={
                    "flex justify-between items-center border border-solid border-[rgba(231,234,243,.7)] rounded-md p-1.5 text-[#1e2022]"
                  }
                >
                  {data.apiKey}
                  <div>
                    <BsClipboard
                      className={
                        "cursor-pointer hover:text-[#377dff] text-[#677788]"
                      }
                    />
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 capitalize">
                <span
                  className={`${
                    data.status === "success"
                      ? "success"
                      : data.status === "warning"
                      ? "warning"
                      : "failure"
                  } inline-block w-2 h-2 rounded-full mr-2 `}
                ></span>
                {data.status}
              </td>
              <td className="px-4 py-3">{data.created}</td>
              <td className="px-4 py-3">
                <Dropdown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APITable;
