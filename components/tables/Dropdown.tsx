import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const toggle = () => setDropdown((prev) => !prev);
  return (
    <>
      <div className={"relative"}>
        <button
          onClick={toggle}
          className={
            "flex items-center border border-solid border-[rgba(231,234,243,.7)] rounded px-4 py-2 hover:shadow hover:text-[#377dff] transition-all duration-500"
          }
        >
          More <BsChevronDown className={"ml-2"} />
        </button>
        <div
          className={`${
            dropdown ? "" : "hidden"
          } flex flex-col absolute border border-solid border-[rgba(231,234,243,.7)] bg-white shadow shadow-[rgba(140,152,164,.175)] p-2 rounded-md text-[rgb(30,32,34)] z-10`}
        >
          <Link href={""} className={"mb-1 px-4 py-2"}>
            Rename
          </Link>
          <Link href={""} className={"mb-1 px-4 py-2"}>
            Regenerate Keys
          </Link>
          <Link href={""} className={"mb-1 px-4 py-2"}>
            Disable
          </Link>
          <div className={"border-t border-t-[rgba(231,234,243,.7)]"}></div>
          <Link href={""} className={"mb-1 px-4 py-2 text-[rgb(237,76,120)]"}>
            Delete
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
