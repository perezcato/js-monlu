import { Inter } from "next/font/google";
import DashboardLayout from "@/components/layout";
import { useRouter } from "next/router";
import { exploreMenu } from "@/lib";
import DashboardSideItems from "@/components/dashboard/DashboardSideItems";
import Link from "next/link";
import React from "react";

export default function Reports() {
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
              <span className="inline-block">Reports</span>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
