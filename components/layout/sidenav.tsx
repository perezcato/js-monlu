import React from "react";
import { sidebarData } from "@/utility/data";
import Sidemenu from "@/components/layout/sidemenu";
import { BsHouseDoor } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Sidenav = () => {
  return (
    <div className="bg-white w-[260px] min-h-screen border-r border-gray-100">
      <div className="flex items-center px-5 py-5 scale-90">
        <Image
          src={"/assets/images/logo-100.png"}
          width={50}
          height={50}
          alt=""
        />
        <Image
          src={"/assets/images/logoname.png"}
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className="px-5 py-6 text-[#132144]">
        <div className="flex items-center  hover:bg-[#eee] rounded-lg space-x-4 px-4 py-2">
          <BsHouseDoor />
          <Link href="/" className=" text-sm">
            Dashboard
          </Link>
        </div>

        <div className="px-4 text-[10.5px] font-semibold text-gray-500 mt-6">
          PAGES
        </div>
        {sidebarData.map((item, index) => (
          <Sidemenu item={item} key={index} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
