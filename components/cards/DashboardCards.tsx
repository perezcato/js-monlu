import { BsGraphUp } from "react-icons/bs";
import FinanceChart from "./FinancialGraph";
import Card from "@/components/cards/Card";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      <Card title="Projects" value="5000" percentage={100} />
      <Card title="Accounts" value="2500" percentage={50} />
      <Card title="structures" value="50%" percentage={50} />
    </div>
  );
};

const Cards = () => {
  return <CardContainer />;
};

export default Cards;
