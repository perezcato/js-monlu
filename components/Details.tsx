import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Image, { StaticImageData } from "next/image";
import projectImage from "../utility/assests/img1.jpg";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// import ProjectSuccess from "@/components/ProjectSuccess";
import {
  BsBriefcase,
  BsPencilFill,
  BsPersonSquare,
  BsQuestion,
} from "react-icons/bs";

const Editor: React.ComponentType<ReactQuill.ReactQuillProps> = dynamic(
  () => import("react-quill"),
  { ssr: false }
);

const Details = () => {
  const initialValues = {
    client: "",
    projectName: "",
    projectDescription: "",
  };
  const [selectedFile, setSelectedFile] = useState<
    StaticImageData | string | ArrayBuffer | null
  >(projectImage);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const photo = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => {
      const path = reader.result;
      setSelectedFile(reader.result);
    };
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={(values) => {}}>
        {(formik) => (
          <div className="px-8 mt-10">
            <label>Project Logo</label>
            <div className="mt-3 flex items-center ">
              <label className="inline-block relative">
                <Image
                  src={selectedFile}
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full "
                  objectFit="cover"
                />
                <span className="inline-block absolute top-14 right-1 bg-[#fff] p-1 rounded-full text-[rgba(19,33,68,.5)] hover:bg-[#377dff] hover:text-[#fff]">
                  <BsPencilFill />
                </span>
                <input type="file" className="hidden" onChange={handleFile} />
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
                <Editor
                  value={formik.values.projectDescription}
                  onChange={(value) =>
                    formik.setFieldValue("projectDescription", value)
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Details;
