import Dashboard from "@/components/layout";
import DashboardComponent from "@/components/cards/DashboardCards";

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <>
      <Dashboard page={"Dashboard"}>
        <DashboardComponent />
      </Dashboard>
    </>
  );
}
