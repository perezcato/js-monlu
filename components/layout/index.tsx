import React from 'react';
import Sidenav from "@/components/layout/sidenav";
import Navbar from "@/components/layout/navbar";


interface Props {
  children: React.ReactNode | React.ReactNode[]
  page: string
}


const DashboardLayout = (props: Props) => {
  return (
    <div className="flex bg-gray-50">
      <Sidenav />
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar pageName={props.page} />
        <div className="flex-1">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;