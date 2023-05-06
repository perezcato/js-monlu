import React, { useState } from "react";

import Link from "next/link";
import { BsChevronUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { UrlObject } from "url";

const Sidemenu = (props: any) => {
  const item = props.item;

  const [dropDown, setDropDown] = useState<boolean>(false);
  const showNav = () => setDropDown(!dropDown);

  return (
    <div>
      <div className="px-4 text-[10.5px] font-semibold text-gray-500 mt-6 uppercase">
        {item.label}
      </div>
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
          {item.subNav && (
            <BsChevronUp
              className={`text-xs ${
                item.subNav && dropDown ? "rotate-0" : "rotate-180"
              } `}
            />
          )}
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
            {item.subNav.map(
              (
                items: {
                  path: string | UrlObject;
                  title:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                key: React.Key | null | undefined
              ) => {
                return (
                  <Link
                    href={items.path}
                    key={key}
                    className="inline-block text-sm hover:bg-[#eee] py-2 px-4 rounded-lg w-full mb-1"
                  >
                    {items.title}
                  </Link>
                );
              }
            )}
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
