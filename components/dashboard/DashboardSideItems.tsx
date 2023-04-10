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
    <>
      <Link
        href={props.url}
        className={` ${
          router.query.id === path[2] ? "bg-gray-300" : ""
        } px-5 py-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-300  rounded`}
      >
        <props.icon className={"w-5 h-5 inline-block"} />
        <div className="font-semibold text-gray-700">{props.name}</div>
      </Link>
    </>
  );
};

export default DashboardSideItems;
