import React from "react";
import { BsCommand } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between text-[0.8125rem] text-[#677788] px-10  bottom-0 static h-[2.5rem]">
        <div>© Copyright JS Morlu 2023</div>
        <div className="flex items-center space-x-1.5">
          <span className="inline-block mr-1.5 hover:text-[#377dff] cursor-pointer">
            FAQ
          </span>{" "}
          /
          <span className="inline-block mr-1.5 hover:text-[#377dff] cursor-pointer">
            LICENSE
          </span>{" "}
          /
          <span>
            <BsCommand className="hover:text-[#377dff] cursor-pointer" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
