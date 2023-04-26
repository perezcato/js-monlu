import React from "react";
import { BsReceipt } from "react-icons/bs";
import CircularBar from "@/components/status/CircularProgressbar";

type PropsData = {
  Icon: any;
  title: string;
  value: string;
  closedTask?: string;
};

const StatusBox = (props: PropsData) => {
  const { Icon, title, value, closedTask } = props;
  return (
    <div className="flex items-start w-full border-[1px] border-[rgba(231, 234, 243, 0.7)] rounded-xl p-4 drop-shadow-lg text-[0.865rem] text-[rgba(19,33,68,.5)] ">
      <div className="mt-1 mr-4">
        <Icon />
      </div>

      <div className="flex-1">
        <h3 className="text-[#1e2022] text-[0.98rem] font-bold">{title}</h3>
        <p>{value}</p>
      </div>
      <div className="w-[50px] h-[50px]">
        <CircularBar percentage={80} />
      </div>
    </div>
  );
};

export default StatusBox;
