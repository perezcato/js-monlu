import { Inter } from "next/font/google";
import DashboardLayout from "@/components/layout";
import Card from "@/components/shared/Card";
import { menuItems } from "@/lib";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function Home() {
  return (
    <DashboardLayout page={"Dashboard"}>
      <div className="py-6 px-10 space-y-10">
        <div className="bg-white rounded border">
          <div className="p-[45px] space-y-2">
            <h2 className="text-4xl text-gray-700 font-bold ">
              Welcome, Test User
            </h2>
            <div className="text-lg">Here's an overview of all your tools</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl text-gray-700">Your Tools</div>
          <div className="grid grid-cols-5 mt-5">
            {menuItems.map((menu) => (
              <Link
                key={menu.url}
                href={menu.url}
                className="inline-block bg-white border p-10 flex items-center space-x-4 cursor-pointer rounded"
              >
                <div className="bg-gray-100 border p-3 rounded-full">
                  <menu.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-lg text-gray-700">
                  {menu.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
