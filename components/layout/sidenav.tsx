import React from "react";
import { ActiveProjects, sidebarData } from "@/utility/data";
import Sidemenu from "@/components/layout/sidemenu";
import logo from "../../utility/assests/logo.svg";
import { BsBriefcase } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Brawler } from "next/dist/compiled/@next/font/dist/google";
const Sidenav = () => {
  return (
    <div className="bg-white w-2/12 min-h-screen">
      <div className="h-[3.8rem] m-[1.7rem]">
        <Image src={logo} alt="" />
      </div>
      <div className="flex items-center w-[80%] mb-9 ml-5 text-[#5d5e60] hover:bg-[#eee] p-2 rounded-2xl">
        <BsBriefcase className="ml-5" />
        <Link href="/dashboard" className="ml-7">
          Dashboard
        </Link>
      </div>
      <div className="px-[1.25rem] text-[#5d5e60] text-[1rem]">
        {sidebarData.map((item, index) => (
          <Sidemenu item={item} key={index} label={item.label} />
        ))}
        {ActiveProjects.map((item, index) => (
          <Sidemenu item={item} key={index} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
