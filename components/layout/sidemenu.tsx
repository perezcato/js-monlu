import React, { useState } from "react";
import { sidebarData } from "@/utility/data";

import Link from "next/link";
const Sidemenu = (props: any) => {
  const item = props.item;
  const [dropDown, setDropDown] = useState<boolean>(false);
  const showNav = () => setDropDown(!dropDown);
  console.log(item);
  return (
    <div className="w-[90%] mb-9">
      {props.label && (
        <label className="uppercase mb-7 text-[.8rem]">{props.label}</label>
      )}
      <Link
        href=""
        className="w-full  flex justify-between transition-all duration-75  items-center mt-3 hover:bg-[#eee] p-2 rounded-2xl"
        onClick={item.subNav && showNav}
      >
        <div className="flex items-center justify-start w-full">
          <item.icon className="ml-4" />
          <p className="ml-7">{item.title}</p>
        </div>
        <div className="ml-10 ">
          {item.subNav && dropDown ? (
            <item.iconUp />
          ) : item.subNav ? (
            <item.iconDown />
          ) : null}
        </div>
      </Link>

      {dropDown &&
        item.subNav.map((items, ind) => {
          return (
            <div
              className="relative h-min w-full pl-7  before:content-[''] before:absolute before:bg-[#eee] before:top-0 before:left-2
              transition-all duration-150 ease-in before:w-[2px] before:h-full before:ml-4 "
              key={ind}
            >
              <Link
                href=""
                className="flex items-center  hover:bg-[#eee] p-1 rounded-2xl w-full"
              >
                <span className="w-full ml-8 ">{items.title}</span>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Sidemenu;
