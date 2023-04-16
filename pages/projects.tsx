import Dashboard from "@/components/layout";
import PercentageBar from "@/components/PercentageBar";
import {
  BsBriefcase,
  BsChevronRight,
  BsGraphUp,
  BsPencilFill,
  BsPersonSquare,
  BsPlus,
  BsQuestion,
  BsXLg,
} from "react-icons/bs";
// TableWithImages.js
import React from "react";
import TableComponent from "@/components/cards/TableComponent";
import { motion, AnimatePresence } from "framer-motion";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import projectImage from "../utility/assests/img1.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TableWithImages = () => {
  const [addProject, setAddProject] = React.useState(false);
  const stopPropagation = (e) => e.stopPropagation();

  const initialValues = {
    client: "",
    projectName: "",
    projectDescription: "",
  };

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
              className="bg-white w-[800px] pb-3.5 mx-auto mt-20 rounded-2xl "
              onClick={(e) => stopPropagation(e)}
            >
              <div className="flex p-8 text-[0.87rem] font-bold justify-between items-center">
                <h5 className="text-[#1e2022]">New Project</h5>
                <BsXLg />
              </div>
              <div className="px-8 flex justify-center items-center ">
                <div className="flex items-center w-min">
                  <span className="inline-block w-9 h-9 rounded-full font-bold bg-[#377dff] flex items-center justify-center text-[#fff] mr-2">
                    1
                  </span>
                  <h5 className="text-[#377dff]">Details</h5>
                </div>
                <div className="h-0.5 bg-[rgba(19,33,68,.1)] w-[80%] ml-4  "></div>
                <div className="flex items-center w-min">
                  <span className="inline-block w-9 h-9 rounded-full bg-[#377dff] flex font-bold items-center justify-center text-[#fff] mr-2 bg-[rgba(19,33,68,.1)] text-[#132144;] active:bg-[#377dff] ">
                    2
                  </span>
                  <h5 className="text-[#377dff]">Members</h5>
                </div>
              </div>
              <Formik initialValues={initialValues} onSubmit={(values) => {}}>
                {(formik) => (
                  <div className="px-8 mt-10">
                    <label>Project Logo</label>
                    <div className="mt-3 flex items-center ">
                      <label className="inline-block relative">
                        <Image
                          src={projectImage}
                          alt=""
                          width={78}
                          className="rounded-full"
                        />
                        <span className="inline-block absolute top-14 right-1 bg-[#fff] p-1 rounded-full text-[rgba(19,33,68,.5)] hover:bg-[#377dff] hover:text-[#fff]">
                          <BsPencilFill />
                        </span>
                        <input type="file" className="hidden" />
                      </label>
                      <button className="shadow-lg shadow-black/50 text-[#377dff] p-2 rounded ml-4">
                        Delete
                      </button>
                    </div>
                    <div className="flex flex-col ">
                      <label
                        htmlFor="client"
                        className="text-[#1e2022] my-3 text-[0.8]"
                      >
                        Client
                      </label>
                      <div className="flex items-center w-full p-0.5 border-solid border-[rgba(19,33,68,.1)] border-2 rounded  bg-[#fff]">
                        <div className="p-2 text-[rgba(19,33,68,.3)] ">
                          <BsPersonSquare />
                        </div>
                        <input
                          type="text"
                          name="client"
                          placeholder="Add creator"
                          value={formik.values.client}
                          onChange={formik.handleChange}
                          className=" inline-block w-full px-2 outline-none rounded"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col my-7 ">
                      <label className="flex items-center text-[#1e2022] ">
                        Project Name
                        <span className="inline-block w-6 h-6 bg-[#fff] mb-1 ml-4  border-solid border-[rgba(19,33,68,.6)] text-[rgba(19,33,68,.6)] border-2 flex items-center justify-center rounded-full">
                          <BsQuestion />
                        </span>
                      </label>
                      <div className="flex items-center w-full p-0.5 border-solid border-[rgba(19,33,68,.1)] border-2 rounded  bg-[#fff]">
                        <div className="p-2 text-[rgba(19,33,68,.3)]  ">
                          <BsBriefcase />
                        </div>
                        <input
                          name="projectName"
                          value={formik.values.projectName}
                          onChange={formik.handleChange}
                          className=" inline-block w-full  px-2 outline-none rounded"
                          type="text"
                          placeholder="Enter project name here "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col my-7 ">
                      <label className="flex items-center text-[#1e2022] ">
                        Project Description
                        <span className="inline-block ml-4 text-[rgba(19,33,68,.4)]">
                          (optional)
                        </span>
                      </label>
                      <div className="flex items-center w-full p-0.5  bg-[#fff]">
                        <ReactQuill
                          value={formik.values.projectDescription}
                          onChange={(value) =>
                            formik.setFieldValue("projectDescription", value)
                          }
                          className=" w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
              <div className="flex justify-end">
                <button className="flex items-center p-3 text-[#fff] bg-[#377dff] hover:bg-[#2c64cc] rounded mr-10">
                  Next
                  <BsChevronRight className="ml-2" />
                </button>
              </div>
            </motion.div>
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
