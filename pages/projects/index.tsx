import React, { useState } from "react";
import DashboardLayout from "@/components/layout";
import { projectsMenu } from "@/lib";
import Link from "next/link";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

import DataTable, { TableColumn } from "react-data-table-component";
import DashboardSideItems from "@/components/dashboard/DashboardSideItems";
import AddProject from "@/components/Modal";
import { useRouter } from "next/router";

const Projects = () => {
  const [showAddProject, setShowAddProject] = useState<boolean>(false);
  const router = useRouter();

  const showFormHandler = () => setShowAddProject(true);

  return (
    <>
      <AddProject showModal={showAddProject} setShowModal={setShowAddProject} />
      <DashboardLayout page={"Projects"}>
        <div className=" h-full">
          <div className="p-5 py-8 space-y-5">
            <div className="space-x-2 text-sm font-semibold text-gray-700">
              <span className="inline-block">Projects</span>
              <span>{"/"}</span>
              <span className="inline-block">Dashboard</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xl">All Projects</div>
              <button
                className="flex space-x-1 bg-gray-700 text-white px-5 py-4 rounded"
                onClick={showFormHandler}
              >
                <DocumentPlusIcon className="w-4 h-4" />
                <span className="inline-block text-xs">New Project</span>
              </button>
            </div>

            <div className="bg-white border p-5 rounded"></div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Projects;
