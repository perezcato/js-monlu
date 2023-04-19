import {
  BsPerson,
  BsChevronUp,
  BsChevronDown,
  BsMenuUp,
  BsStickies,
  BsPersonLinesFill,
  BsFolder2Open,
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
    icon: BsFolder2Open,
    label: "Pages",
    subNav: [
      {
        title: "Dashboard",
        path: "/",
        icon: BsPerson,
      },
    ],
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: BsPersonLinesFill,
    subNav: [
      {
        title: "Overview",
        path: "/accounts",
        icon: BsPerson,
      },
      {
        title: "Settings",
        path: "/accounts",
        icon: BsPerson,
      },
    ],
  },
  {
    title: "Structure",
    path: "/accounts",
    icon: BsMenuUp,
    subNav: [
      {
        title: "Overview",
        path: "/accounts",
        icon: BsPerson,
      },
      {
        title: "Settings",
        path: "/accounts",
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
        path: "/accounts",
        icon: BsPerson,
      },
      {
        title: "Activity",
        path: "/accounts",
        icon: BsPerson,
      },
      {
        title: "Teams",
        path: "/accounts",
        icon: BsPerson,
      },
      {
        title: "Settings",
        path: "/accounts",
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
