import React, { useState } from "react";
import DashboardLayout from "@/components/layout";
import {
  DocumentPlusIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

import AddProject from "@/components/Modal";
import { useRouter } from "next/router";

const projects = [
  {
    name: "Trinity Project",
    billing_month_from: "2023-08-01",
    billing_month_to: "2023-08-01",
    billing_maturity: "1",
  },
];

const Projects = () => {
  const [showAddProject, setShowAddProject] = useState<boolean>(false);
  const router = useRouter();

  const showFormHandler = () => setShowAddProject(true);
  const selectProject = async (projectName: string) =>
    router.push(`/projects/${projectName}`);

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

            <div className="bg-white border p-5 rounded">
              <div className="flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                          >
                            No.
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Project Name
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Billing Month From
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                          >
                            Billing Month To
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                          >
                            Billing Maturity
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                          />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {projects.map((project, index) => (
                          <tr
                            key={index}
                            className="divide-x divide-gray-200 cursor-pointer hover:bg-gray-100"
                          >
                            <td
                              onClick={() => selectProject(project.name)}
                              className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"
                            >
                              {index + 1}
                            </td>
                            <td
                              onClick={() => selectProject(project.name)}
                              className="whitespace-nowrap p-4 text-sm text-gray-500"
                            >
                              {project.name}
                            </td>
                            <td
                              onClick={() => selectProject(project.name)}
                              className="whitespace-nowrap p-4 text-sm text-gray-500"
                            >
                              {project.billing_month_from}
                            </td>
                            <td
                              onClick={() => selectProject(project.name)}
                              className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0"
                            >
                              {project.billing_month_to}
                            </td>
                            <td
                              onClick={() => selectProject(project.name)}
                              className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0"
                            >
                              {project.billing_maturity}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0 space-x-3">
                              <button className="bg-blue-200 p-2 rounded-full">
                                <PencilIcon className="w-4 h-4 text-blue-700" />
                              </button>
                              <button className="bg-red-200 p-2 rounded-full">
                                <TrashIcon className="w-4 h-4 text-red-700" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Projects;
