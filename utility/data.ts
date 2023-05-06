import {
  BsPerson,
  BsChevronUp,
  BsChevronDown,
  BsMenuUp,
  BsStickies,
  BsPersonLinesFill,
  BsFolder2Open,
  BsReceipt,
  BsBarChart,
  BsCheck2Circle,
  BsAward,
  BsKey,
  BsGraphUp,
  BsGraphDown,
} from "react-icons/bs";
import memberPic from "../utility/assests/img3.jpg";
import { StaticImageData } from "next/image";
// import { ReactNode } from "react";
// import exp from "constants";

type sideData = {
  title: string;
  path: string;
  icon: any;
  label?: string;
  subNav?: { title: string; path: string; icon: any }[];
}[];

type PieData = { id: string; label: string; value: number; color: string }[];

type AppData = {
  title: string;
  path: string;
  icon: any;
  iconDown: any;
  iconUp: any;
  label: string;
}[];

type GraphData = { name: string; uv: number; pv: number; amt: number }[];

type memberData = { image: StaticImageData; name: string; email: string }[];

export type statusDataProps = (
  | { Icon: any; title: string; value: string; closedTask?: undefined }
  | { Icon: any; title: string; value: string; closedTask: string }
)[];

type APICardData = {
  title: string;
  value: string;
  percentage: string;
  prevValue: string;

  status?: string;
}[];

type APITableData = {
  name: string;
  apiKey: string;
  status: string;
  created: string;
}[];
export const APICardData: APICardData = [
  {
    title: "Project",
    value: "150",
    percentage: "12",
    prevValue: "5",
  },
  {
    title: "Successful conversions",
    value: "35",
    percentage: "7",
    prevValue: "5",
    status: "success",
  },
  {
    title: "Failed conversions",
    value: "5",
    percentage: "2",
    prevValue: "11",
    status: "failed",
  },
];
export const APITableData: APITableData = [
  {
    name: "Streamlab",
    apiKey: "GFKBH23BR2H3R29HO2N3",
    status: "success",
    created: "March 11, 2020",
  },
  {
    name: "FrontMail",
    apiKey: "GFKBH23BR2H3R29HO2N3",
    status: "failed",
    created: "May 2, 2023",
  },
];

export const sidebarData: sideData = [
  {
    title: "Project",
    path: "/projects",
    icon: BsFolder2Open,
    label: "Pages",
    subNav: [
      {
        title: "Dashboard",
        path: "/projects",
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

export const sidebarDataApp: sideData = [
  {
    title: "API",
    path: "/api",
    icon: BsKey,
    label: "Apps",
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

export const App: AppData = [
  {
    title: "API Keys",
    path: "/api-keys",
    icon: BsPerson,
    iconDown: BsChevronDown,
    iconUp: BsChevronUp,
    label: "Apps",
  },
];

export const MembersData: memberData = [
  {
    image: memberPic,
    name: "John Doe",
    email: "example@mail.com",
  },
  {
    image: memberPic,
    name: "Jane Doe",
    email: "example@mail.com",
  },
];

export const StatusData: statusDataProps = [
  {
    Icon: BsReceipt,
    title: "Spent",
    value: "-17,00 USD",
  },
  {
    Icon: BsBarChart,
    title: "Progress",
    value: "17%",
  },
  {
    Icon: BsCheck2Circle,
    title: "Tasks closed",
    value: "17%",
    closedTask: "4",
  },
  {
    Icon: BsAward,
    title: "Goals",
    value: "-17,00 USD",
  },
];

export const graphData: GraphData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Oct",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Dec",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export const PieData1: PieData = [
  {
    id: "css",
    label: "css",
    value: 539,
    color: "hsl(293, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 150,
    color: "hsl(1, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 550,
    color: "hsl(297, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 143,
    color: "hsl(240, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 259,
    color: "hsl(17, 70%, 50%)",
  },
];
export const PieData2: PieData = [
  {
    id: "css",
    label: "css",
    value: 239,
    color: "hsl(293, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 50,
    color: "hsl(1, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 500,
    color: "hsl(297, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 113,
    color: "hsl(240, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 90,
    color: "hsl(17, 70%, 50%)",
  },
];
