import React from "react";
import { sidebarData } from "@/utility/data";
import Sidemenu from "@/components/layout/sidemenu";
import logo from "../../utility/assests/logo.svg";
import Image from "next/image";
const Sidenav = () => {
  return (
    <div className="bg-amber-600 w-2/12 min-h-screen">
      <div className="">
        <Image src={logo} alt="" />
      </div>
      <div>
        {sidebarData.map((item, index) => (
          <Sidemenu item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
