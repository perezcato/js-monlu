import Dashboard from "@/components/layout";
import OverviewComponent from "@/components/overview/overview-component";

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <>
      <Dashboard page={"Reconciliation Types"}>
        <OverviewComponent />
      </Dashboard>
    </>
  );
}
