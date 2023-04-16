import React, { SVGProps } from "react";
import {
  BsPerson,
  BsChevronUp,
  BsChevronDown,
  BsPersonBadge,
  BsMenuUp,
  BsStickies,
} from "react-icons/bs";

type sideData = {
  title: string;
  path: string;
  icon: any;
  label?: string;
  subNav: { title: string; path: string; icon: any }[];
}[];

export const sidebarData: sideData = [
  {
    title: "Project",
    path: "/projects",
    icon: BsPerson,
    label: "Pages",
    subNav: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: BsPerson,
      },
    ],
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: BsPersonBadge,
    subNav: [
      {
        title: "Overview",
        path: "/overview",
        icon: BsPerson,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: BsPerson,
      },
    ],
  },
  {
    title: "Structure",
    path: "/structure",
    icon: BsMenuUp,
    subNav: [
      {
        title: "Overview",
        path: "/overview",
        icon: BsPerson,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: BsPerson,
      },
    ],
  },
];

export const ActiveProjects: sideData = [
  {
    title: "GWCL",
    path: "/projects",
    icon: BsStickies,
    label: "Active Projects",
    subNav: [
      {
        title: "Overview",
        path: "/overview",
        icon: BsPerson,
      },
      {
        title: "Activity",
        path: "/activity",
        icon: BsPerson,
      },
      {
        title: "Teams",
        path: "/teams",
        icon: BsPerson,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: BsPerson,
      },
    ],
  },
];

export const App: any = [
  {
    title: "API Keys",
    path: "/api-keys",
    icon: BsPerson,
    iconDown: BsChevronDown,
    iconUp: BsChevronUp,
    label: "Apps",
  },
];
