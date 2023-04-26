import React from "react";
import { BsBuilding, BsChevronLeft } from "react-icons/bs";

const ProjectSuccessFooter = () => {
  return (
    <>
      <div className="mt-5 flex justify-between">
        <button className="flex items-center border border-solid border-[rgba(19,33,68,.1)] mr-6 px-1.5 py-1 rounded text-[rgba(19,33,68,.5)] hover:shadow-sm hover:shadow-black/20 hover:text-[#377dff]">
          <BsChevronLeft className="mr-2" /> Back to projects
        </button>
        <button className="flex items-center bg-[#377dff] text-[#eee] px-1.5 py-1 rounded hover:text-[rgba(19,33,68,.5)] hover:shadow-sm hover:shadow-[#377dff]/20 hover:text-[#fff]">
          <BsBuilding className="mr-1.5" /> Add new project
        </button>
      </div>
    </>
  );
};

export default ProjectSuccessFooter;
