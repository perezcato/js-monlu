import Dashboard from "@/components/layout";
import PercentageBar from "@/components/PercentageBar";
import { BsGraphUp, BsPlus, BsXLg } from "react-icons/bs";
// TableWithImages.js
import React, { useState } from "react";
import TableComponent from "@/components/cards/TableComponent";
import { motion, AnimatePresence } from "framer-motion";

import "react-quill/dist/quill.snow.css";

import Members from "@/components/Members";
import MemberFooter from "@/components/Memberfooter";
import Details from "@/components/Details";
import DetailsFooter from "@/components/DetailsFooter";
import ProjectSuccess from "@/components/ProjectSuccess";
import ProjectSuccessFooter from "@/components/ProjectSuccessFooter";

const TableWithImages = () => {
  const [addProject, setAddProject] = React.useState(false);

  const [isDetail, setIsDetail] = useState<boolean>(true);
  const [isMember, setIsMember] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  function handlerNext() {
    setIsDetail(!isDetail);
    setIsMember(!isMember);
  }

  function handlePrevPage() {
    setIsDetail(!isDetail);
    setIsMember(!isMember);
  }

  function handleSuccess() {
    setIsMember(!isMember);
    setIsSuccessful(!isSuccessful);
  }

  return (
    <>
      <AnimatePresence>
        {addProject && (
          <motion.div
            onClick={() => setAddProject(!addProject)}
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
              className="bg-white w-[800px] pb-3.5 mx-auto mt-20 rounded-2xl min-h-[30rem] flex flex-col z-30"
              onClick={(e) => stopPropagation(e)}
            >
              <div className="flex p-8 text-[0.87rem] font-bold justify-between items-center">
                <h5 className="text-[#1e2022]">New Project</h5>
                <BsXLg onClick={() => setAddProject(!addProject)} />
              </div>
              <div
                className={`px-8 flex justify-center items-center ${
                  isSuccessful ? "hidden" : ""
                }`}
              >
                <div className="flex items-center w-min">
                  <span
                    className={`inline-block w-9 h-9 rounded-full font-bold ${
                      isDetail ? "bg-[#377dff]" : "bg-[rgba(19,33,68,.1)]"
                    } flex items-center justify-center text-[#fff] mr-2`}
                  >
                    1
                  </span>
                  <h5
                    className={`${
                      isDetail
                        ? "text-[#377dff]"
                        : "text-[bg-[rgba(19,33,68,.1)]"
                    }`}
                  >
                    Details
                  </h5>
                </div>
                <div className="h-0.5 bg-[rgba(19,33,68,.1)] w-[80%] ml-4  "></div>
                <div className="flex items-center w-min">
                  <span
                    className={`${
                      isMember ? "bg-[#377dff]" : "bg-[rgba(19,33,68,.1)]"
                    }  w-9 h-9 rounded-full  flex font-bold items-center justify-center text-[#fff] mr-2  text-[#132144;] active:bg-[#377dff] `}
                  >
                    2
                  </span>
                  <h5
                    className={`${
                      isMember
                        ? "text-[#377dff]"
                        : "text-[bg-[rgba(19,33,68,.1)]"
                    }`}
                  >
                    Members
                  </h5>
                </div>
              </div>
              <div className="flex-1">
                {isDetail && <Details />}
                {isMember && <Members />}
                {isSuccessful && <ProjectSuccess />}
              </div>
              <div className="p-8">
                {isDetail && <DetailsFooter handleClick={handlerNext} />}
                {isMember && (
                  <MemberFooter
                    handleClick={handlePrevPage}
                    handleSuccessPage={handleSuccess}
                  />
                )}
                {isSuccessful && <ProjectSuccessFooter />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dashboard>
        <div className="py-6 border-b border-gray-100 flex items-center justify-between">
          <div className="font-bold text-gray-800 text-xl ">Overview</div>

          <button
            onClick={() => setAddProject(!addProject)}
            className="bg-blue-500 text-white rounded-md flex items-center text-sm py-3 px-4 space-x-2"
          >
            <BsPlus className="stroke-current" />
            <span className="inline-block">New Project</span>
          </button>
        </div>
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

export default TableWithImages;
