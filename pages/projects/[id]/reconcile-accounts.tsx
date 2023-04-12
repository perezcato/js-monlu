import { Inter } from "next/font/google";
import DashboardLayout from "@/components/layout";
import { useRouter } from "next/router";
import { exploreMenu } from "@/lib";
import DashboardSideItems from "@/components/dashboard/DashboardSideItems";
import Link from "next/link";
import React from "react";

type ProjectsType = {
  id: number;
  name: string;
  number: string;
  bank: string;
}[];

const projects: ProjectsType = [
  {
    id: 5,
    name: "Account 2",
    number: "1015223213045",
    bank: "Fidelity Bank",
  },
];
export default function ReconcileAccounts() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <DashboardLayout page={`Projects - ${id}`}>
        <div className="grid grid-cols-12 flex h-full ">
          <div className="bg-white py-4 border px-3 col-span-2 flex flex-col gap-2.5">
            {exploreMenu.map((menu) => (
              <DashboardSideItems
                key={menu.url}
                url={`/projects/${id}/${menu.url}`}
                name={menu.name}
                icon={menu.icon}
              />
            ))}
          </div>
          <div className="col-span-10 p-5 py-8 space-y-5">
            <div className="space-x-2 text-xs font-semibold text-gray-700">
              <Link href="/projects">
                <span className="inline-block underline">Projects</span>
              </Link>
              <span>{"/"}</span>
              <Link href={`/projects/${id}`}>
                <span className="inline-block underline">{id}</span>
              </Link>
              <span>{"/"}</span>
              <span className="inline-block">Reconcile Account</span>
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
                            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0 flex justify-center"
                          >
                            <input type="checkbox" />
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-xs font-semibold text-gray-900"
                          >
                            Account Name
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-xs font-semibold text-gray-900"
                          >
                            Account Number
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-gray-900 sm:pr-0"
                          >
                            Bank
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {projects.map((project, index) => (
                          <tr
                            key={index}
                            className="divide-x divide-gray-200 cursor-pointer hover:bg-gray-100"
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0 flex justify-center">
                              <input type="checkbox" />
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {project.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {project.number}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                              {project.bank}
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
}
