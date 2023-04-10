"use client";

import Link from "next/link";
import React, { useState } from "react";
import { classNames, navigation } from "@/lib";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidenav = () => {
  const [activeDropDown, setActiveDropDown] = useState<string>();
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="hidden min-h-screen lg:flex lg:w-auto lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
        <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
          <Link
            href={"/"}
            className="flex items-center inline-block text-white font-bold text-lg space-x-2 scale-[0.85]"
          >
            <Image
              src={"/assets/images/logo-100.png"}
              width={45}
              height={45}
              alt={"site logo"}
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              return item.children && item.children.length > 0 ? (
                <div key={item.name} className="w-full">
                  <button
                    key={item.name}
                    onClick={() => {
                      if (activeDropDown === item.name)
                        setActiveDropDown(undefined);
                      else {
                        setActiveDropDown(item.name);
                      }
                    }}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      item.href === path ? "bg-gray-700" : "",
                      "group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md w-full z-[10]"
                    )}
                  >
                    <span className="inline-block flex items-center">
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </span>

                    <ChevronDownIcon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-5 w-5"
                      )}
                    />
                  </button>

                  {
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{
                        height:
                          activeDropDown === item.name
                            ? item.children.length * 38
                            : 0,
                        transition: {
                          duration: 0.06,
                          ease: "linear",
                        },
                      }}
                      className={`my-2 ml-5 border-l-2 border-gray-600 transition-all h-0 z-[-10] overflow-hidden`}
                    >
                      {item.children.map((sub, key) => {
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href ?? ""}
                            className={classNames(
                              "text-gray-300 hover:text-white",
                              "group flex items-center px-6 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            <span> {sub.name} </span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  }
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={
                    //@ts-ignore
                    item.href ? item.href : ""
                  }
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    item.href === path ? "bg-gray-700" : "",
                    "group flex items-center px-2 py-3 text-sm font-medium rounded-md flex items-center justify-center inline-block"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
