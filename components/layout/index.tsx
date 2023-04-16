import React from "react";
import Navbar from "@/components/layout/navbar";
import Sidenav from "@/components/layout/sidenav";

type DashboardProps = {
  children: React.ReactNode;
  page: string;
};
const Dashboard = (props: DashboardProps) => {
  return (
    <div className="bg-white flex">
      <Sidenav />
      <div className="flex-1">
        <Navbar />
        <div className="px-4 space-y-8">
          <div className="py-6 border-b border-gray-100">
            <div className="font-bold text-gray-800 text-xl">{props.page}</div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
