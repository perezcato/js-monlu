import { BsGraphUp } from "react-icons/bs";
import FinanceChart from "../cards/FinancialGraph";
import Link from "next/link";

interface CardProps {
  title: string;
  value: string;
  percentage: number;
  links: string
}

const Card = ({ title, value, percentage, links }: CardProps) => {
  return (
    <Link className="bg-white overflow-hidden border border-gray-100 shadow-sm shadow-slate-100 cursor-pointer rounded-lg px-4 py-4 hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-300 w-4/12" href={links}>
  <div className="flex w-full justify-between">
    <div className="flex flex-col w-6/12 space-y-3">
      <h3 className="text-sm font-bold uppercase">
        {title}
      </h3>
      <p className="text-xm font-medium text-gray-900 hover:text-blue-600">
        {value}
      </p>
    </div>
    <div className="relative flex-shrink-0 ml-4">
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 rounded-full bg-gray-200">
          {/* White-colored middle part of the circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white" />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#4F46E5" strokeWidth="10" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="10" strokeDasharray={`${80}, 100`} strokeDashoffset="25" strokeLinecap="round" transform="rotate(-90,50,50)" />
          </svg>
        </div>
      </div>
      <p className="text-sm font-bold text-gray-900">{80}%</p>
    </div>
  </div>
</Link>
  );
};

const CardContainer = () => {
  return (
    <div className="flex px-4 py-8 gap-6">
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
