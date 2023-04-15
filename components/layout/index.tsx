import React from "react";
import Navbar from "@/components/layout/navbar";
import Sidenav from "@/components/layout/sidenav";

type DashboardProps = {
  children: React.ReactNode;
};
const Dashboard = (props: DashboardProps) => {
  return (
    <div className="bg-sky-800 flex">
      <Sidenav />
      <div className="bg-amber-300 flex-1">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
