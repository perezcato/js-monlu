import React from "react";
import Navbar from "@/components/layout/navbar";
import Sidenav from "@/components/layout/sidenav";

type DashboardProps = {
  children: React.ReactNode;
};
const Dashboard = (props: DashboardProps) => {
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
