import React, { useState } from "react";
import { APITableData } from "@/utility/data";
import { BsChevronDown, BsClipboard } from "react-icons/bs";
import Link from "next/link";

interface APITableProps {
  name: string;
  apiKey: string;
  status: string;
  created: string;
}
const APITable = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const toggle = () => setDropdown(!dropdown);

  return (
    <div className="block overflow-x-auto w-full min-h-[70vh]">
      <table className={"items-center w-full bg-white/70 border-collapse "}>
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
                <div className={"relative"}>
                  <button
                    onClick={toggle}
                    className={
                      "flex items-center border border-solid border-[rgba(231,234,243,.7)] rounded px-4 py-2 hover:shadow hover:text-[#377dff] transition-all duration-500"
                    }
                  >
                    More <BsChevronDown className={"ml-2"} />
                  </button>
                  <div
                    className={`${
                      dropdown ? "" : "hidden"
                    } flex flex-col absolute border border-solid border-[rgba(231,234,243,.7)] bg-white shadow shadow-[rgba(140,152,164,.175)] p-2 rounded-md text-[rgb(30,32,34)]`}
                  >
                    <Link href={""} className={"mb-1 px-4 py-2"}>
                      Rename
                    </Link>
                    <Link href={""} className={"mb-1 px-4 py-2"}>
                      Regenerate Keys
                    </Link>
                    <Link href={""} className={"mb-1 px-4 py-2"}>
                      Disable
                    </Link>
                    <div
                      className={"border-t border-t-[rgba(231,234,243,.7)]"}
                    ></div>
                    <Link
                      href={""}
                      className={"mb-1 px-4 py-2 text-[rgb(237,76,120)]"}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APITable;
