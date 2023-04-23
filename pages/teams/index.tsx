import Dashboard from "@/components/layout";
import TeamsComponent from "@/components/projects-component/teams-component";

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <>
      <Dashboard page={"Reconciliation Types"}>
        <TeamsComponent />
      </Dashboard>
    </>
  );
}
