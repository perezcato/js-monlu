import React, { useState } from "react";
import Dashboard from "@/components/layout";
import Link from "next/link";
import Details from "@/components/Details";
import { Formik } from "formik";

import InputSelect from "@/components/inputSelect";
import ButtonCard from "@/components/buttonCard";

const Settings = () => {
  const initialValues = {
    terms: "fixed",
    expectedValue: "",
    milestone: "new",
    privacy: "userOnly",
    budgetReset: "",
    emailAlert: "",
  };

  console.log(initialValues);

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
            <ButtonCard cancelBtnText="cancel" saveBtnText="save changes" />
          </div>
          <div className="w-[70%] mx-auto shadow-md shadow-[rgba(140,152,164,.075)] border border-[rgba(231,234,243,0.7)] rounded-lg bg-white">
            <div className="px-[2.5rem] py-4 border-b border-b-[rgba(231,234,243,0.7)]">
              <h2 className="font-semibold text-[0.984rem] ">Teams</h2>
            </div>
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div className="text-[#677788]">
                    <div className="grid grid-cols-2 p-[2.5rem] min-h-[20rem] gap-9">
                      <div>
                        <label htmlFor="terms" className="text-[#1e2022]">
                          Terms
                        </label>
                        <InputSelect
                          name={"terms"}
                          value={formik.values.terms}
                          handleChange={formik.handleChange}
                          options={[
                            { value: "fixed", label: "Fixed" },
                            { value: "perday", label: "Per Day" },
                            { value: "perweek", label: "Per week" },
                            { value: "permonth", label: "Per Month" },
                          ]}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#1e2022]">Expected value</label>
                        <input
                          type="text"
                          name="expectedValue"
                          value={formik.values.expectedValue}
                          onChange={formik.handleChange}
                          className={
                            "w-full px-4 py-2 my-3 bg-white outline-none  border-2 border-[rgba(231,234,243,.7)] text-[#677788] text-[0.875rem] rounded-md focus:ring-4 focus:ring-[#86b7fe]/50"
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="terms" className="text-[#1e2022]">
                          Milestone
                          <Link href="" className="ml-2 text-[#377dff]">
                            Change probability
                          </Link>
                        </label>
                        <InputSelect
                          name={"milestone"}
                          value={formik.values.milestone}
                          handleChange={formik.handleChange}
                          options={[
                            { value: "new", label: "New" },
                            { value: "qualified", label: "Qualified" },
                            { value: "meeting", label: "Meeting" },
                            { value: "proposal", label: "Proposal" },
                          ]}
                        />
                      </div>
                      <div>
                        <label htmlFor="terms" className="text-[#1e2022]">
                          Privacy
                        </label>
                        <InputSelect
                          name={"privacy"}
                          value={formik.values.terms}
                          handleChange={formik.handleChange}
                          options={[
                            { value: "userOnly", label: "Private to me" },
                            { value: "everyone", label: "Everyone" },
                            {
                              value: "teamMembers",
                              label: "Private to project members",
                              disabled: true,
                            },
                          ]}
                        />
                      </div>
                      <div className="text-[0.875rem] ">
                        <div className="space-x-2.5 mb-3">
                          <input
                            type="checkbox"
                            name="budgetRest"
                            value="checked"
                            className="w-3.5 h-3.5 "
                            onChange={formik.handleChange}
                          />
                          <label htmlFor="budgetrest" className="">
                            Budget resets every month
                          </label>
                        </div>
                        <div className="space-x-2.5 mb-3">
                          <input
                            type="checkbox"
                            name="emailAlert"
                            value="checked"
                            className="w-3.5 h-3.5 "
                            onChange={formik.handleChange}
                          />
                          <label htmlFor="emailalert" className="">
                            Send email alerts if project exceeds 50.00% of
                            budget
                          </label>
                        </div>
                      </div>
                    </div>

                    <ButtonCard
                      cancelBtnText="cancel"
                      saveBtnText="save changes"
                    />
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default Settings;
