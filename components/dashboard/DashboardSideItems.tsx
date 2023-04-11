import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type DashboardSideItemsProps = {
  url: string;
  name: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

const DashboardSideItems = (props: DashboardSideItemsProps) => {
  const router = useRouter();
  const path: string[] = props.url.split("/");

  return (
    <Link
      href={props.url}
      className={`${
        router.pathname.includes(path[3]) ? "bg-gray-300" : ""
      } px-5 py-4 flex items-center space-x-3 cursor-pointer hover:bg-gray-300  rounded`}
    >
      <props.icon className={"w-4 h-4 inline-block"} />
      <div className="text-gray-600 text-sm font-bold">{props.name}</div>
    </Link>
  );
};

export default DashboardSideItems;
