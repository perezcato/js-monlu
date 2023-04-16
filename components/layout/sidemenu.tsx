import React, { useState } from "react";
import { sidebarData } from "@/utility/data";
import Link from "next/link";
const Sidemenu = (props: any) => {
  const item = props.item;
  const [dropDown, setDropDown] = useState<boolean>(false);
  const showNav = () => setDropDown(!dropDown);
  console.log(item);
  return (
    <div>
      <Link href="" className="flex" onClick={item.subNav && showNav}>
        <div className="flex">
          <item.icon></item.icon>
          <p>{item.title}</p>
        </div>
        <div>
          {item.subNav && dropDown ? (
            <item.iconUp />
          ) : item.subNav ? (
            <item.iconDown />
          ) : null}
        </div>
      </Link>
      {dropDown &&
        item.subNav.map((item, index) => {
          return (
            <div>
              <Link href="">
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Sidemenu;
