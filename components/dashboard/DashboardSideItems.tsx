import React from 'react';
import Link from "next/link";

type DashboardSideItemsProps ={
    url:string;
    name: string;
    icon:   React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}

const DashboardSideItems = (props: DashboardSideItemsProps) => {
    return (
        <>
            <Link href={props.url} className=" px-5 py-3 flex items-center space-x-3 cursor-pointer bg-gray-300 rounded">
                <props.icon className={'w-5 h-5 inline-block'} />
                <div className="font-semibold text-gray-700">{props.name}</div>
            </Link>
        </>
    );
};

export default DashboardSideItems;