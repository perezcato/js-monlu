import Dashboard from "@/components/layout";
import PercentageBar from "@/components/PercentageBar";
import { BsGraphUp, BsPlus } from "react-icons/bs";
// TableWithImages.js
import React from "react";
import TableComponent from "@/components/cards/TableComponent";
import { motion, AnimatePresence } from "framer-motion";

const TableWithImages = () => {
  const [addProject, setAddProject] = React.useState(false);
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
            className="absolute z-10 h-screen w-screen inset-0 bg-black/[0.3]"
          >
            <motion.div
              variants={modalContentVariants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              className="bg-white w-[600px] h-[700px] mx-auto mt-32"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dashboard
        buttons={
          <button
            onClick={() => setAddProject(!addProject)}
            className="bg-blue-500 text-white rounded-md flex items-center text-sm py-3 px-4 space-x-2"
          >
            <BsPlus className="stroke-current" />
            <span className="inline-block">New Project</span>
          </button>
        }
        page="Overview"
      >
        <div className="px-10 mb-8 mt-5 ">
          <div>
            <ul className="flex mb-2 text-[#97a4af]">
              <li>
                Pages <span>/</span>
              </li>
              <li>
                Project <span>/</span>
              </li>
              <li>Accounts</li>
            </ul>
            <h1 className="text-[1.4rem] text-[#1e2022] font-semibold ">
              Accounts
            </h1>
          </div>
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
