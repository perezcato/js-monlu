import React, { useState } from "react";
import DashboardLayout from "@/components/layout";
import { exploreMenu } from "@/lib";

import DashboardSideItems from "@/components/dashboard/DashboardSideItems";
import AddProject from "@/components/Modal";
import { useRouter } from "next/router";
import Link from "next/link";

const Projects = () => {
  const [showAddProject, setShowAddProject] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <AddProject showModal={showAddProject} setShowModal={setShowAddProject} />
      <DashboardLayout page={`Projects- ${id}`}>
        <div className="grid grid-cols-12 flex h-full ">
          <div className="bg-white py-4 border px-3 col-span-2 flex flex-col gap-2.5">
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
              <Link href="/projects">
                <span className="inline-block">Projects</span>
              </Link>
              <span>{"/"}</span>
              <span className="inline-block">{id}</span>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Projects;
