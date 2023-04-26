import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { BsX, BsChevronDown } from "react-icons/bs";

type memberItemProps = {
  image: StaticImageData;
  name: string;
  email: string;
};
const MembersItem = (props: memberItemProps) => {
  const { image, email, name } = props;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex w-full pb-3.5 flex-1">
      <div>
        <Image
          src={image}
          alt="Profile Picture"
          width={38.5}
          height={38.5}
          className="rounded-full"
        />
      </div>
      <div className="ml-2.5 text-[rgba(19,33,68,.5)]">
        <h3 className="font-bold">{name}</h3>
        <p className="text-[0.8rem]">{email}</p>
      </div>
      <div className="flex justify-end flex-1 text-[rgba(19,33,68,.5)] text-[0.875rem]">
        <div className="flex items-center relative">
          <div className="flex py-1.5 px-4">
            <div>
              <div className="bg-[rgba(55,125,255,.1)] px-4 py-1 rounded flex items-center">
                Load documents
                <BsX className="hover:text-[#377dff] text-[rgba(55,125,255,.6)] ml-2" />
              </div>
            </div>
            <div className="flex items-center" onClick={toggler}>
              <BsChevronDown />
            </div>
          </div>

          <div
            className={`${
              showDropdown ? "" : "hidden"
            }  w-[11rem] border border-solid border-[rgba(231,234,243,.7)] absolute top-[80%] right-[1rem] bg-white rounded z-10`}
          >
            <input
              type="list"
              className="w-[90%] border-4 rounded-[.5rem] border-solid border-[rgba(55,125,255,.3)] outline-none mx-2 mt-2"
            />
            <div className="mt-1 h-[200px] overflow-y-auto scroll-smooth">
              <p className="hover:text-[#1e2022] p-2 break-words mb-2 hover:bg-[rgba(55,125,255,.1)]">
                Delete documents
              </p>
              <p className="hover:text-[#1e2022] p-2 break-words mb-2 hover:bg-[rgba(55,125,255,.1)]">
                Perform reconciliations
              </p>
              <p className="hover:text-[#1e2022] p-2 break-words mb-2 hover:bg-[rgba(55,125,255,.1)]">
                Generate reports
              </p>
              <p className="hover:text-[#1e2022] p-2 break-words mb-2 hover:bg-[rgba(55,125,255,.1)]">
                Compute Interests
              </p>
              <p className="hover:text-[#1e2022] p-2 break-words mb-2 hover:bg-[rgba(55,125,255,.1)]">
                Load documents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersItem;
