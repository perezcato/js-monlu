import Dashboard from "@/components/layout";
import DocumentComponent from "@/components/documents/document-component";

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <>
      <Dashboard page={"Documents"}>
        <DocumentComponent />
      </Dashboard>
    </>
  );
}
