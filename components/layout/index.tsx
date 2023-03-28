import React from 'react';
import Sidenav from "@/components/layout/sidenav";
import Navbar from "@/components/layout/navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidenav />
      <div className="flex flex-col lg:pl-64">
        <Navbar />
      </div>
    </div>
  );
};

export default DashboardLayout;