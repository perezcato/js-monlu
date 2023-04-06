import React, { useState } from "react";
import DashboardLayout from "@/components/layout";
import { exploreMenu, projectsMenu } from "@/lib";
import Link from "next/link";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

import DataTable, { TableColumn } from "react-data-table-component";
import DashboardSideItems from "@/components/dashboard/DashboardSideItems";
import AddProject from "@/components/Modal";

type DataRow = {
  name: string;
  from: string;
  to: string;
  maturity: string;
  actions: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: "PROJECT NAME",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "BILLING MONTH FROM",
    selector: (row) => row.from,
  },
  {
    name: "BILLING MONTH TO",
    selector: (row) => row.to,
  },
  {
    name: "BILLING MATURITY",
    selector: (row) => row.maturity,
  },
  {
    name: "",
    selector: (row) => row.actions,
  },
];

const data = [
  {
    name: "Beetlejuice",
    from: "1988",
    to: "1988",
    maturity: "1",
    actions: "here",
  },
  {
    name: "Beetlejuice",
    from: "1988",
    to: "1988",
    maturity: "1",
    actions: "here",
  },
  {
    name: "Beetlejuice",
    from: "1988",
    to: "1988",
    maturity: "1",
    actions: "here",
  },
];

const Projects = () => {
  const [showAddProject, setShowAddProject] = useState<boolean>(false);

  const showFormHandler = () => setShowAddProject(true);

  return (
    <>
      <AddProject showModal={showAddProject} setShowModal={setShowAddProject} />
      <DashboardLayout page={"Projects-Project Name"}>
        <div className="grid grid-cols-12 flex h-full ">
          <div className="bg-white py-4 border px-3 col-span-2 flex flex-col gap-2.5">
            {projectsMenu.map((menu) => (
              <DashboardSideItems
                url={menu.url}
                name={menu.name}
                icon={menu.icon}
              />
            ))}
            {exploreMenu.map((menu) => (
              <DashboardSideItems
                url={menu.url}
                name={menu.name}
                icon={menu.icon}
              />
            ))}
          </div>
          <div className="col-span-10 p-5 py-8 space-y-5">
            <div className="space-x-2 text-sm font-semibold text-gray-700">
              <span className="inline-block">Projects</span>
              <span>{"/"}</span>
              <span className="inline-block">Project Name</span>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Projects;
