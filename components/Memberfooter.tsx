import React, { useState } from "react";
import { BsChevronLeft, BsBell, BsChatLeftDots } from "react-icons/bs";

type MemberProps = {
  handleClick: () => void;
  handleSuccessPage: () => void;
};

const MemberFooter = (props: MemberProps) => {
  const [check, setCheck] = useState<boolean>(false);
  const [checkActivity, setCheckActivity] = useState<boolean>(false);
  function toggler() {
    setCheck(!check);
  }
  function togglerActivity() {
    setCheckActivity(!check);
  }
  const prevPage = props.handleClick;
  const handleSuccess = props.handleSuccessPage;
  return (
    <>
      <div className="flex justify-between mb-4" onClick={toggler}>
        <div className="flex items-center">
          <BsBell className="mr-3" />
          <p> Inform all project members</p>
        </div>
        <div>
          <div
            className={`${
              check ? "justify-end bg-[#377dff]" : "bg-[rgba(19,33,68,.1)]"
            } w-[2rem] h-5 b rounded-full flex items-center`}
          >
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4" onClick={togglerActivity}>
        <div className="flex items-center">
          <BsChatLeftDots className="mr-3" />
          <p> Show team activity</p>
        </div>
        <div>
          <div
            className={`${
              checkActivity
                ? "justify-end bg-[#377dff]"
                : "bg-[rgba(19,33,68,.1)]"
            } w-[2rem] h-5 b rounded-full flex items-center`}
          >
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevPage}
          className=" transition-all ease-in flex items-center px-2.5 py-1.5 bg-white hover:bg-[rgba(55,125,255,.1)] hover:text-[#377dff] text-[rgba(19,33,68,.5)] rounded"
        >
          <BsChevronLeft />
          previous step
        </button>
        <div>
          <button className="border border-solid border-[rgba(231,234,243,.7)] px-3 py-1.5 mr-2 hover:shadow-md hover:shadow-[rgba(231,234,243,.7)] rounded">
            Cancel
          </button>
          <button
            onClick={handleSuccess}
            className="bg-[#377dff] px-3 py-1.5 rounded text-white hover:bg-[#2f6ad9] hover:shadow shadow-[#2f6ad9]/50 transition-all ease-in"
          >
            Create project
          </button>
        </div>
      </div>
    </>
  );
};

export default MemberFooter;
