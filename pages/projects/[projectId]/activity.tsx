import React from "react";
import Dashboard from "@/components/layout";
import megaPhoneImg from "@/utility/assests/oc-megaphone.svg";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/utility/assests/img9.jpg";
import excelImg from "@/utility/assests/excel-icon.svg";
import card1 from "@/utility/assests/card-1.svg";
import card2 from "@/utility/assests/card-2.svg";
import card3 from "@/utility/assests/card-3.svg";

import {
  BsArrowClockwise,
  BsJournalBookmarkFill,
  BsPaperclip,
  BsPatchCheckFill,
} from "react-icons/bs";

const Activity = () => {
  return (
    <div>
      <Dashboard>
        <div className="py-[2rem] px-[1.5rem] text-[0.875rem] text-[#677788]">
          <div>
            <ul className="flex mb-2 text-[#97a4af]">
              <li>
                Pages <span>/</span>
              </li>
              <li>
                Project <span>/</span>
              </li>
              <li>Activity</li>
            </ul>
            <h1 className="text-[1.4rem] text-[#1e2022] font-semibold ">
              Activity
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
          <div className="container mx-auto w-[76%]">
            <div className="flex mb-[3rem] bg-[rgba(19,33,68,.15)] px-4 py-5 rounded-md ">
              <Image
                src={megaPhoneImg}
                alt=""
                width={78.5}
                className="shrink-0"
              />
              <div className="ml-4 flex-1 text-[#132144]">
                <h3 className="mb-1 text-[1.15rem] font-bold">Attention!</h3>
                <p>
                  Hi! This project is due for an update. The last update was
                  published 2 days ago.
                </p>
              </div>
            </div>
            <div className="mb-12">
              <div className="px-2.5 text-[0.71rem] font-semibold uppercase mb-[2.2rem] relative">
                <span className="inline-block lineAfter after:h-full after:top-[1.375rem]">
                  Today
                </span>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[80%] after:top-[3rem]">
                  <Image
                    src={profilePic}
                    alt=""
                    width={41.6}
                    className="rounded-full shrink-0 "
                  />
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Iana Robinson</h5>
                  <p className="flex mb-1">
                    Uploaded weekly reports to the task
                    <span className=" uppercase  flex items-center ml-1 w-min text-[#377dff]">
                      <BsJournalBookmarkFill className="mr-2" />
                      FD-7
                    </span>
                  </p>
                  <div className="text-[#1e2022] p-2 bg-[#f9fafc] border border-[#e7eaf3] rounded-md flex flex-wrap">
                    <div className="flex flex-1 min-w-[30%]">
                      <div>
                        <Image src={excelImg} alt={""} width={24.5} />
                      </div>
                      <div className="flex flex-col ml-4">
                        <span>weekly-reports.xls</span>
                        <span className="text-[#8c98a4] text-[0.87em]">
                          12kb
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-[30%]">
                      <div>
                        <Image src={excelImg} alt={""} width={24.5} />
                      </div>
                      <div className="flex flex-col ml-4">
                        <span>weekly-reports.xls</span>
                        <span className="text-[#8c98a4] text-[0.87em]">
                          12kb
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-[30%]">
                      <div>
                        <Image src={excelImg} alt={""} width={24.5} />
                      </div>
                      <div className="flex flex-col ml-4">
                        <span>weekly-reports.xls</span>
                        <span className="text-[#8c98a4] text-[0.87em]">
                          12kb
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[60%] after:top-[3rem]">
                  <span className="flex items-center justify-center bg-[rgba(19,33,68,.1)] w-[42px] h-[42px] rounded-full font-bold">
                    B
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Bob Robinson</h5>
                  <p className="flex mb-1">
                    Marked project status as
                    <span className=" flex items-center ml-1  text-[#377dff] text-[0.74em] font-semibold bg-[rgba(55,125,255,.1)] p-0.5 px-1.5 rounded-full">
                      <span className="inline-block w-2 h-2 rounded-full bg-[rgb(55,125,255)] mr-2"></span>
                      {'"In progress"'}
                    </span>
                  </p>
                </div>
              </div>
              <div className="px-2.5 text-[0.71rem] font-semibold uppercase mb-[2.2rem] relative">
                <span className="inline-block lineAfter after:h-full after:top-[1.375rem]">
                  Yesterday
                </span>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[85%] after:top-[3rem]">
                  <Image
                    src={profilePic}
                    alt=""
                    width={41.6}
                    className="rounded-full shrink-0 "
                  />
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Iana Robinson</h5>
                  <p className="flex mb-1">
                    Added 5 card to{" "}
                    <Link href={"#"} className="text-[#377dff] ml-2">
                      Payments
                    </Link>
                  </p>
                  <div className="bg-[#f9fafc] p-2 rounded-md flex space-x-2.5">
                    <div className="flex-1">
                      <Image src={card1} alt="" height={160} />
                    </div>
                    <div className="flex-1">
                      <Image src={card2} alt="" height={160} />
                    </div>
                    <div className="flex-1">
                      <Image src={card3} alt="" height={160} />
                    </div>
                    <div className="flex items-center text-[#377dff] justify-center cursor-pointer">
                      <span>+2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[60%] after:top-[3rem]">
                  <span className="flex items-center justify-center bg-[rgba(19,33,68,.1)] w-[42px] h-[42px] rounded-full font-bold">
                    D
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">David Lidell</h5>
                  <p className="flex mb-1">
                    Added a new member to Front Dashboard
                  </p>
                </div>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[60%] after:top-[3rem]">
                  <Image
                    src={profilePic}
                    alt=""
                    width={41.6}
                    className="rounded-full shrink-0 "
                  />
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Rachel King</h5>
                  <p className="flex mb-1">
                    Earned a {'"Top endorsed"'}
                    <span className=" uppercase  flex items-center ml-1 w-min text-[#377dff]">
                      <BsPatchCheckFill className="mr-2" />
                    </span>
                    badge
                  </p>
                </div>
              </div>
              <div className="px-2.5 text-[0.71rem] font-semibold uppercase mb-[2.2rem] relative">
                <span className="inline-block lineAfter after:h-full after:top-[1.375rem]">
                  Last week
                </span>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[60%] after:top-[3rem]">
                  <span className="flex items-center justify-center bg-[rgba(19,33,68,.1)] w-[42px] h-[42px] rounded-full font-bold">
                    B
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Bob Robinson</h5>
                  <p className="flex mb-1">
                    Marked project status as
                    <span className=" flex items-center ml-1  text-[#377dff] text-[0.74em] font-semibold bg-[rgba(55,125,255,.1)] p-0.5 px-1.5 rounded-full">
                      <span className="inline-block w-2 h-2 rounded-full bg-[rgb(55,125,255)] mr-2"></span>
                      {'"In progress"'}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[80%] after:top-[3rem]">
                  <Image
                    src={profilePic}
                    alt=""
                    width={41.6}
                    className="rounded-full shrink-0 "
                  />
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Victoria Robinson</h5>
                  <p className="flex mb-5">Attached two files.</p>
                  <div>
                    <div className=" flex flex-col rounded-md rounded-t-md rounded-b-md">
                      <div className=" flex  text-[0.8125rem] text-[#959697] bg-[#f9fafc]  p-2 border border-[#e7eaf3] listItem">
                        <div className="shrink-0">
                          <BsPaperclip />
                        </div>
                        <div className="flex flex-1 flex-col ml-2">
                          <span className="text-[#1e2022] truncate">
                            Requirement.figma
                          </span>
                          <span className="text-[0.875em] text-[#959697]">
                            18mb
                          </span>
                        </div>
                      </div>
                      <div className=" flex  text-[0.8125rem] text-[#959697] bg-[#f9fafc]  p-2 border border-[#e7eaf3] listItem">
                        <div className="shrink-0">
                          <BsPaperclip />
                        </div>
                        <div className="flex flex-1 flex-col ml-2">
                          <span className="text-[#1e2022] truncate">
                            Requirements.sketch
                          </span>
                          <span className="text-[0.875em] text-[#959697]">
                            4mb
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-2.5 relative mb-[2.2rem] space-x-[1.5rem]">
                <div className="lineAfter after:h-[60%] after:top-[3rem]">
                  <span className="flex items-center justify-center bg-[rgba(19,33,68,.1)] w-[42px] h-[42px] rounded-full font-bold">
                    B
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="header mb-1">Bob Robinson</h5>
                  <p className="flex mb-1">
                    Marked project status as
                    <span className=" flex items-center ml-1  text-[#377dff] text-[0.74em] font-semibold bg-[rgba(55,125,255,.1)] p-0.5 px-1.5 rounded-full">
                      <span className="inline-block w-2 h-2 rounded-full bg-[rgb(55,125,255)] mr-2"></span>
                      {'"In progress"'}
                    </span>
                  </p>
                </div>
              </div>
              {/*  end of wrapper*/}
            </div>
            <div className="border border-[gba(231,234,243,.7)] grid hover:shadow-md hover:text-[#1366ff] hover:bg-white">
              <Link
                href="#"
                className="flex items-center place-self-center px-4 py-2.5 "
              >
                <BsArrowClockwise className="mr-1.5" />
                Load more activities
              </Link>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Activity;
