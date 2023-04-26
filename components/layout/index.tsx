import React from "react";
import Navbar from "@/components/layout/navbar";
import Sidenav from "@/components/layout/sidenav";
import { prop } from "react-data-table-component/dist/src/DataTable/util";

type DashboardProps = {
  children: React.ReactNode;
  page?: string;

  buttons?: React.ReactNode | React.ReactNode[];
};
const Dashboard = (props: DashboardProps) => {
  return (
    <div className="bg-white flex">
      <Sidenav />
      <div className="flex-1">
        <Navbar />
        <div className="px-4 py-6">{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
