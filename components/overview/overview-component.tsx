import TopCards from "./topcards";
import MidCards from "./midcards";
import Graph from "./graph";
import Link from "next/link";
// import "bootstrap-icons/font/bootstrap-icons.css";
export default function overview() {
  return (
    <>
      <div >
        <div className="py-12">
        <ul className="flex border-b">
                <Link href='/overview'><li className="px-4 border-b border-blue-600 text-blue-600 font-medium">Overview</li></Link>
                <Link href='/overview'><li className="px-4 ">Activity</li></Link>
                <Link href='/teams'><li className="px-4">Teams</li> </Link>
                <Link href='/overview'><li className="px-4 ">Settings</li></Link>
            </ul>
        </div>
        <TopCards />
        <MidCards />
        <Graph />
      </div>
    </>
  );
}
