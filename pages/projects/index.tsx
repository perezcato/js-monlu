import Dashboard from "@/components/layout";
import ProjectComponent from "@/components/cards/project-component";

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <>
      <Dashboard page={"Reconciliation Types"}>
        <ProjectComponent />
      </Dashboard>
    </>
  );
}
