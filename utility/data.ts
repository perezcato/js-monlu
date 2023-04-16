import React, { SVGProps } from "react";
import { BsPerson, BsChevronUp, BsChevronDown } from "react-icons/bs";

type sideData = {
  title: string;
  path: string;
  icon: any;
  iconDown: any;
  iconUp: any;
  subNav: { title: string; path: string; icon: any }[];
}[];

export const sidebarData: sideData = [
  {
    title: "user",
    path: "/user",
    icon: BsPerson,
    iconDown: BsChevronDown,
    iconUp: BsChevronUp,
    subNav: [
      {
        title: "user1",
        path: "/user/1",
        icon: BsPerson,
      },
      { title: "user2", path: "/user/2", icon: BsPerson },
    ],
  },
];
