import { BsGraphUp } from "react-icons/bs";
import FinanceChart from "./FinancialGraph";
import Link from "next/link";

interface CardProps {
  title: string;
  value: string;
  percentage: number;
  links: string
}

const Card = ({ title, value, percentage, links }: CardProps) => {
  return (
    <Link className="bg-white overflow-hidden border border-gray-100 shadow shadow-slate-100 cursor-pointer rounded-lg px-4 py-4 hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-300" href={links}>
      <div className="flex w-full">
        <div className="flex flex-col w-6/12 space-y-3">
          <h3 className="text-xs font-medium text-gray-400 uppercase">
            {title}
          </h3>
          <p className="text-xl font-medium text-gray-900 hover:text-blue-600">
            {value}
          </p>
          <div className="h-15 flex items-center">
            <div className="h-full bg-green-100 flex items-center justify-center rounded p-[1px]">
              <div className="p-1 flex text-[10px] text-green-500 flex items-center">
                <p>12.5%</p>
              </div>
            </div>
            <div className="text-xs px-2 text-gray-400">
              <p>from {value}</p>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <FinanceChart />
        </div>
      </div>
    </Link>
  );
};

const CardContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      <Card title="Projects" links= '/projects' value="5000" percentage={100} />
      <Card title="Accounts" links= '/accounts' value="2500" percentage={50} />
      <Card title="structures" links= '/' value="50%" percentage={50} />
    </div>
  );
};

const Cards = () => {
  return <CardContainer />;
};

export default Cards;
