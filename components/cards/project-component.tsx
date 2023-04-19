import { BsGraphUp } from "react-icons/bs";
import FinanceChart from './FinancialGraph'
import Link from "next/link";

interface CardProps {
  title: string;
  value: string;
  percentage: number;
  links: string
}

const dummy = [{
    title: 'Bank Reconciliations',
    links: '/accounts',
    value: '50',
    percentage: 100
},
{
    title: 'Account Reconciliations',
    links: '/accounts',
    value: '50',
    percentage: 100
},
{
    title: 'Reciept/invoice Reconciliations',
    links: '/accounts',
    value: '50',
    percentage: 100
},
{
    title: 'Tax Reconciliations',
    links: '/accounts',
    value: '50',
    percentage: 100
},
{
    title: 'Balance sheet Reconciliations',
    links: '/accounts',
    value: '50',
    percentage: 100
},
{
    title: 'securities Reconciliations',
    links: '/accounts',
    value: '50',
    percentage: 100
},
{
    title: 'fx Reconciliations',
    links: '/',
    value: '50',
    percentage: 100
},
{
    title: 'Money market Reconciliations',
    links: '/',
    value: '50',
    percentage: 100
},


]
const Card = ({ title, value, percentage, links }: CardProps) => {
  return (
    <Link className="my-4 bg-white overflow-hidden border shadow shadow-slate-100 cursor-pointer rounded-lg px-4 py-4 hover:shadow-xl hover:shadow-slate-100 transition-shadow duration-300" href={links}>
      <div className="flex w-full">
        <div className="flex flex-col w-6/12 space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase">
            {title}
          </h3>
          <p className="text-xl font-bold text-gray-900 hover:text-blue-600 uppercase">
            {value}
          </p>
          <div className="h-15 flex items-center">
            <div className="h-full bg-green-100 flex items-center justify-center rounded p-[1px]">
              <div className="p-1 flex text-[10px] text-green-500 flex items-center">
                <p>{percentage}%</p>
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
      {dummy.map((data)=> 
        // eslint-disable-next-line react/jsx-key
        <Card title={data.title} links= {data.links} value={data.value} percentage={data.percentage} />
      )}
    </div>
  );
};

const Cards = () => {
  return <CardContainer />;
};

export default Cards;
