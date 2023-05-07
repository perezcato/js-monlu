import React, { useState } from "react";
import Dashboard from "@/components/layout";
import Link from "next/link";
import CardApi from "@/components/cards/CardApi";
import { APICardData } from "@/utility/data";
import Image from "next/image";
import copyImg from "@/utility/assests/copy-icon.svg";
import printImg from "@/utility/assests/print-icon.svg";
import excelImg from "@/utility/assests/excel-icon.svg";
import csvImg from "@/utility/assests/placeholder-csv-format.svg";
import pdfImg from "@/utility/assests/pdf-icon.svg";
import {
  BsChevronDown,
  BsDownload,
  BsPlus,
  BsQuestionCircle,
  BsXLg,
} from "react-icons/bs";
import APITable from "@/components/tables/APITable";
import { AnimatePresence, motion } from "framer-motion";
import { Formik } from "formik";
import ButtonCard from "@/components/buttonCard";

const Apikey = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [Popover, setPopover] = useState<boolean>(false);
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  const showDropdown = () => setDropDown((prev) => !prev);

  const showPopover = () => setPopover((prev) => !prev);
  const closePopover = () => setPopover((prev) => !prev);

  const initialValue = {
    apikey: "",
  };
  return (
    <>
      <AnimatePresence>
        {addModal && (
          <motion.div
            onClick={() => setAddModal(!addModal)}
            variants={modalBackgroundVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            className="absolute z-30 h-screen w-screen inset-0 bg-black/[0.3]"
          >
            <motion.div
              variants={modalContentVariants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              className="bg-white w-[600px]  mx-auto mt-[20rem] rounded-2xl  flex flex-col"
              onClick={(e) => stopPropagation(e)}
            >
              <div>
                <div className={"p-[2rem] "}>
                  <div className={"flex items-center justify-between"}>
                    <h4 className={"text-[0.98rem] font-semibold"}>
                      Create API Key
                    </h4>
                    <button
                      onClick={() => setAddModal(!addModal)}
                      className={"p-4 text-[1rem] text-[#000]"}
                    >
                      <BsXLg />
                    </button>
                  </div>

                  <Formik
                    initialValues={initialValue}
                    onSubmit={(values) => {}}
                  >
                    {(formik) => {
                      return (
                        <div className={"px-6 pt-10"}>
                          <input
                            name="apikey"
                            value={formik.values.apikey}
                            onChange={formik.handleChange}
                            placeholder={"API Key name"}
                            type="text"
                            className={
                              "border border-solid border-[rgba(231,234,243,.7)] w-full py-[0.61rem] px-[1rem] outline-none rounded-md text-[#1e2022] bg-white  focus:shadow-md"
                            }
                          />
                        </div>
                      );
                    }}
                  </Formik>
                </div>
                <div className="relative flex justify-between  border-t border-t-[rgba(231,234,243,0.7]">
                  <p className={"flex items-center px-[2rem] text-[#677788] "}>
                    What is an API?
                    <span className={"ml-2"}>
                      <BsQuestionCircle
                        data-popover-target={"popover-default"}
                        onMouseOver={showPopover}
                        onMouseOut={closePopover}
                      />
                    </span>
                  </p>
                  <div
                    className={`absolute w-[12rem] text-center text-[0.78rem] p-1 rounded-md ${
                      Popover ? "" : "hidden"
                    } bg-[#132144] text-[#fff] -top-[4.5rem] left-6`}
                  >
                    <p>
                      API stands for application programming interface. It can
                      be helpful to think of the API as a way for different apps
                      to talk to one another.
                    </p>
                    <div
                      className={
                        "absolute w-2 h-2 bg-[#132144] right-[4rem] rotate-45"
                      }
                    ></div>
                  </div>

                  <div className={"px-[2rem] py-8"}>
                    <button className="border border-[rgba(231,234,243,.7)] px-4 py-2 text-[#677788] capitalize hover:shadow-md hover:shadow-[rgba(140,152,164,.25)] hover:bg-white hover:text-[#1366ff] rounded-md">
                      cancel
                    </button>
                    <button className="bg-[#377dff] border border-[rgba(231,234,243,.7)] px-4 py-2 text-white hover:shadow-md capitalize hover:shadow-[rgba(55,125,255,.35)] hover:bg-[#2f6ad9] rounded-md">
                      generate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Dashboard>
        <div className="border-b  flex justify-between">
          <div>
            <ul className="flex mb-2 text-[#97a4af] px-[1.5rem]">
              <li>
                Pages <span>/</span>
              </li>
              <li>
                Project <span>/</span>
              </li>
              <li>API Keys</li>
            </ul>
            <h1 className="text-[1.4rem] text-[#1e2022] font-semibold px-[1.5rem]">
              API Keys
            </h1>
          </div>
          <div className={"mr-6"}>
            <button
              onClick={() => setAddModal(!addModal)}
              className="bg-blue-500 text-white rounded-md flex items-center text-sm py-3 px-4 space-x-2"
            >
              <BsPlus className="stroke-current" />
              <span className="inline-block">Create Key</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[1rem] py-[2rem] px-[1.5rem]">
          {APICardData.map((data) => (
            <CardApi
              title={data.title}
              value={data.value}
              percentage={data.percentage}
              prevValue={data.prevValue}
              status={data.status}
            />
          ))}
        </div>
        <div className={"card rounded-md"}>
          <div className={"flex justify-between px-[1.5rem] py-[1rem] "}>
            <div className={""}>
              <h4 className={"font-semibold text-[#1e2022] text-[0.98rem]"}>
                API Keys
              </h4>
              <p className={"mt-1"}>
                Keys you have generated to connect with third-party clients or
                access the
                <Link href="#" className={"font-semibold text-[#377dff] ml-2"}>
                  Recksoft API.
                </Link>
              </p>
            </div>
            <div>
              <div className="p-4 ">
                <button
                  onClick={showDropdown}
                  className="flex items-center bg-white  p-2 space-x-1 rounded hover:text-[#1366ff] border border-[rgba(231,234,243,.7)] hover:border hover:border-[rgba(231,234,243,.7)] hover:shadow-lg hover:shadow-[rgba(140,152,164,.25)] transition-all duration-500"
                >
                  <BsDownload className="mr-1" />
                  Export
                  <BsChevronDown />
                </button>

                <div
                  className={`${
                    dropDown ? "" : "hidden"
                  } min-w-[10rem]  p-[0.5rem] flex flex-col bg-white text-[#8c98a4] text-[0.875rem] rounded capitalize absolute z-10 right-[4.5rem] shadow-lg border border-[rgba(19,33,68,.1)] shadow-[rgba(140,152,164,.175)]`}
                >
                  <span className=" inline-block px-4 py-2 uppercase font-bold text-[0.656rem]">
                    options
                  </span>
                  <Link
                    href=""
                    className="inline-block px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                  >
                    <Image src={copyImg} alt="" width={20} className="mr-3" />
                    Copy
                  </Link>
                  <Link
                    href=""
                    className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                  >
                    <Image src={printImg} alt="" width={20} className="mr-3" />
                    Print
                  </Link>
                  <div className="h-[1px] w-[90%] bg-[rgba(19,33,68,.1)] mx-auto"></div>
                  <span className="inline-block px-4 py-2 uppercase font-bold text-[0.656rem] ">
                    download options
                  </span>
                  <Link
                    href=""
                    className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                  >
                    <Image src={excelImg} alt="" width={20} className="mr-3" />
                    Excel
                  </Link>
                  <Link
                    href=""
                    className="px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                  >
                    <Image src={csvImg} alt="" width={20} className="mr-3" />
                    .CSV
                  </Link>
                  <Link
                    href=""
                    className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                  >
                    <Image src={pdfImg} alt="" width={20} className="mr-3" />
                    PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "px-[1.5rem] shadow-md shadow-[rgba(140,152,164,.075)] rounded-md"
            }
          >
            <APITable />
          </div>
        </div>
        {/*<div className="mx-[1.5rem] px-[1.5rem] card border-b flex justify-between rounded-md">*/}
        {/*  */}
        {/*</div>*/}
      </Dashboard>
    </>
  );
};

const modalBackgroundVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const modalContentVariants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
export default Apikey;
