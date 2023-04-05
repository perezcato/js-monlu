import React from 'react';
import DashboardLayout from "@/components/layout";
import {projectsMenu} from "@/lib";
import Link from "next/link";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

import DataTable, { TableColumn } from 'react-data-table-component';
import DashboardSideItems from "@/components/dashboard/DashboardSideItems";


type DataRow = {
  name: string;
  from: string;
  to: string;
  maturity: string;
  actions: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: 'PROJECT NAME',
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: 'BILLING MONTH FROM',
    selector: (row) => row.from,
  },
  {
    name: 'BILLING MONTH TO',
    selector: (row) => row.to,
  },
  {
    name: 'BILLING MATURITY',
    selector: (row) => row.maturity,
  },
  {
    name: '',
    selector: (row) => row.actions,
  },
];

const data = [
  {
    name: 'Beetlejuice',
    from: '1988',
    to: '1988',
    maturity: '1',
    actions: 'here',
  },
  {
    name: 'Beetlejuice',
    from: '1988',
    to: '1988',
    maturity: '1',
    actions: 'here',
  },
  {
    name: 'Beetlejuice',
    from: '1988',
    to: '1988',
    maturity: '1',
    actions: 'here',
  },
]
 const showFormHandler =() =>{console.log('click')}

const Projects = () => {
  return (
    <DashboardLayout page={'Projects'}>
      <div className="grid grid-cols-12 flex h-full">
        <div className="bg-white py-4 border px-3 col-span-2">
          {
            projectsMenu.map((menu) => (
              <DashboardSideItems url={menu.url} name={menu.name} icon={menu.icon}  />
            ))
          }
        </div>
        <div className="col-span-10 p-5 py-8 space-y-5">
          <div className="space-x-2 text-sm font-semibold text-gray-700">
            <span className="inline-block">Projects</span>
            <span>{'/'}</span>
            <span className="inline-block">Dashboard</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-xl">All Projects</div>
            <button className="flex space-x-1 bg-gray-700 text-white px-5 py-4 rounded" onClick={showFormHandler}>
              <DocumentPlusIcon className="w-4 h-4" />
              <span className="inline-block text-xs">New Project</span>
            </button>
          </div>

          <div className="bg-white border p-5 rounded">
            <DataTable
              columns={columns}
              data={data}
              pagination
              striped
              responsive
              pointerOnHover
              highlightOnHover
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;