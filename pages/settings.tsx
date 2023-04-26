import React from "react";
import Dashboard from "@/components/layout";
import Link from "next/link";
import Details from "@/components/Details";

const Settings = () => {
  return (
    <>
      <Dashboard>
        <div className="">
          <div className="text-[0.875rem]">
            <ul className="flex mb-2 text-[#97a4af] ">
              <li>
                Pages <span>/</span>
              </li>
              <li>
                Project <span>/</span>
              </li>
              <li>Settings</li>
            </ul>
            <h1 className="text-[1.4rem] text-[#1e2022] font-semibold ">
              Settings
            </h1>
            <div className="flex text-[#132144] text-[0.875rem] my-10 ">
              <div>
                <Link
                  href="#"
                  className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
                >
                  Overview
                </Link>
              </div>
              <div>
                <Link
                  href="/activity"
                  className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
                >
                  Activity
                </Link>
              </div>
              <div>
                <Link
                  href="/teams"
                  className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
                >
                  Teams
                </Link>
              </div>
              <div>
                <Link
                  href="/settings"
                  className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[70%] mx-auto shadow-md shadow-[rgba(140,152,164,.075)] border border-[rgba(231,234,243,0.7)] rounded-lg bg-white mb-10">
            <div className="px-[2.5rem] py-4 border-b border-b-[rgba(231,234,243,0.7)]">
              <h2 className="font-semibold text-[0.984rem] ">Details</h2>
            </div>
            <Details />
            <div className="px-[2.5rem] py-[1.3rem] flex justify-end gap-3 border-t border-t-[rgba(231,234,243,0.7]">
              <button className="border border-[rgba(231,234,243,.7)] px-4 py-2 text-[#677788] hover:shadow-md hover:shadow-[rgba(140,152,164,.25)] hover:bg-white hover:text-[#1366ff] rounded-md">
                Cancel
              </button>
              <button className="bg-[#377dff] border border-[rgba(231,234,243,.7)] px-4 py-2 text-white hover:shadow-md hover:shadow-[rgba(55,125,255,.35)] hover:bg-[#2f6ad9] rounded-md">
                Save changes
              </button>
            </div>
          </div>
          <div className="w-[70%] mx-auto shadow-md shadow-[rgba(140,152,164,.075)] border border-[rgba(231,234,243,0.7)] rounded-lg bg-white">
            <div className="px-[2.5rem] py-4 border-b border-b-[rgba(231,234,243,0.7)]">
              <h2 className="font-semibold text-[0.984rem] ">Teams</h2>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default Settings;
