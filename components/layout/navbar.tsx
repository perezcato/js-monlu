import React from "react";
import profilePic from "../../utility/assests/pic1.jpg";
import {
  BsBell,
  BsXDiamond,
  BsAppIndicator,
  BsSearch,
  BsXLg,
} from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[5rem] bg-white flex sticky top-0 items-center justify-between border-b border-gray-100">
      <div className="flex items-center hover:bg-[#F6F7FA] w-[336px] h-[40px] rounded-lg ml-4 p-2 text-[#8c98a4]">
        <BsSearch />
        <input
          type="text"
          className="outline-none mx-3 hover:bg-[#F6F7FA]"
          placeholder="enter search"
        />
        <BsXLg />
      </div>
      <ul className="flex mr-[3rem] items-center justify-between text-[#71869d]">
        <li className="w-[42px] h-[42px] hover:bg-[#eee] flex items-center justify-center rounded-full">
          <BsBell />
        </li>
        <li className="w-[42px] h-[42px] hover:bg-[#eee]  flex items-center justify-center rounded-full ">
          <BsAppIndicator />
        </li>
        <li className="w-[42px] h-[42px] hover:bg-[#eee]  flex items-center justify-center rounded-full ">
          <BsXDiamond />
        </li>
        <li className="relative">
          <div className="w-[2.4rem] h-[2.4rem] relative rounded-full ">
            <Image
              src={profilePic}
              alt="Profile Picture"
              fill
              objectFit="cover"
              className="rounded-full -z-10"
            />
            <div className=" w-[13px] h-[13px] bg-green-500 z-10] rounded-full absolute  right-0 top-6"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
