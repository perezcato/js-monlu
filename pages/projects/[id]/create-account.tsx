import DashboardLayout from "@/components/layout";
import { exploreMenu } from "@/lib";
import DashboardSideItems from "@/components/dashboard/DashboardSideItems";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Input from "@/components/Input";

export default function CreateAccount() {
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
              <span className="inline-block">Create Account</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-gray-700">
                Create Account
              </div>
            </div>

            <div className="p-5 bg-white border rounded grid grid-cols-2 gap-x-6">
              <div className="space-y-3">
                <div className="border-b">Information</div>

                <Input label="Account Name" name="projectName" type="text" />
                <Input label="Account Number" name="projectName" type="text" />
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Bank
                  </label>
                  <div className="mt-1 border rounded-md border-gray-300 overflow-hidden shadow-sm px-5 py-3 ">
                    <select className="w-full outline-none">
                      <option disabled>Choose Bank</option>
                      <option value="1">ABSA</option>
                    </select>
                  </div>
                </div>
                <Input label="Branch" name="projectName" type="text" />
                <Input
                  label="Select a file (.csv, .xlsx)"
                  name="projectName"
                  type="file"
                />
              </div>
              <div className="space-y-3">
                <div className="border-b">Mapping</div>

                <Input label="Account Name" name="projectName" type="text" />
                <Input label="Account Number" name="projectName" type="text" />
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Bank
                  </label>
                  <div className="mt-1 border rounded-md border-gray-300 overflow-hidden shadow-sm px-5 py-3 ">
                    <select className="w-full outline-none">
                      <option disabled>Choose Bank</option>
                      <option value="1">ABSA</option>
                    </select>
                  </div>
                </div>
                <Input label="Branch" name="projectName" type="text" />
                <Input
                  label="Select a file (.csv, .xlsx)"
                  name="projectName"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
