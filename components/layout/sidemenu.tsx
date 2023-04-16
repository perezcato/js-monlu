import React, { useState } from "react";

import Link from "next/link";
import { BsChevronUp } from "react-icons/bs";
const Sidemenu = (props: any) => {
  const item = props.item;
  const [dropDown, setDropDown] = useState<boolean>(false);
  const showNav = () => setDropDown(!dropDown);

  return (
    <div>
      <Link
        href=""
        className="w-full flex justify-between items-center mt-2 hover:bg-[#eee] px-4 py-2 rounded-lg"
        onClick={item.subNav && showNav}
      >
        <div className="flex items-center w-full space-x-4">
          <item.icon />
          <p className="text-sm">{item.title}</p>
        </div>
        <div className="">
          <BsChevronUp
            className={`text-xs ${
              item.subNav && dropDown ? "rotate-0" : "rotate-180"
            } `}
          />
        </div>
      </Link>

      <div className="border-l ml-6 px-2">
        {dropDown &&
          item.subNav.map((items, key) => {
            return (
              <Link
                href=""
                key={key}
                className="inline-block text-sm hover:bg-[#eee] py-2 px-4 rounded-lg w-full mb-1"
              >
                {items.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Sidemenu;
