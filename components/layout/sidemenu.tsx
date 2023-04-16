import React, { useState } from "react";

import Link from "next/link";
import { BsChevronUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

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
          <item.icon className="text-gray-600" />
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

      <AnimatePresence>
        {dropDown && (
          <motion.div
            variants={variants}
            initial={"hide"}
            animate={"show"}
            exit={"hide"}
            className="border-l ml-6 px-2"
          >
            {item.subNav.map((items, key) => {
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const variants = {
  hide: {
    height: 0,
    opacity: 0,
  },
  show: {
    height: "auto",
    opacity: 1,
  },
};

export default Sidemenu;
