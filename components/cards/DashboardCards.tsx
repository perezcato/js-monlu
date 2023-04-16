import { BsGraphUp } from "react-icons/bs";
import FinanceChart from "./FinancialGraph";

interface CardProps {
  title: string;
  value: string;
  percentage: number;
}

const Card = ({ title, value, percentage }: CardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow-md cursor-pointer rounded-lg px-4 py-4 w-72 hover:shadow-lg transition-shadow duration-300">
      <div className="flex w-full">
        <div className="flex flex-col w-6/12">
          <h3 className="text-xs font-medium text-gray-400 uppercase mb-2">
            {title}
          </h3>
          <p className="text-xl font-medium text-gray-900 mb-4 hover:text-blue-600">
            {value}
          </p>
          <div className="h-15 flex">
            <div className="h-full bg-green-100 flex items-center justify-center rounded p-[1px]">
              <div className="px-1 flex text-[10px] text-green-500">
                <BsGraphUp size={12} color="#34D399" />
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
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="flex space-x-4 p-4">
      <Card title="Total Users" value="5000" percentage={100} />
      <Card title="Number of Users" value="2500" percentage={50} />
      <Card title="Percentage" value="50%" percentage={50} />
    </div>
  );
};

const Cards = () => {
  return <CardContainer />;
};

export default Cards;
