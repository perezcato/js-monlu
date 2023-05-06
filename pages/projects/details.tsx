import React, { useState } from "react";
import Dashboard from "@/components/layout";
import Image from "next/image";
import logo1 from "../../utility/assests/guideline-icon.svg";
import {
  BsChevronDown,
  BsDownload,
  BsPeopleFill,
  BsShareFill,
} from "react-icons/bs";
import image1 from "../../utility/assests/img9.jpg";
import image2 from "../../utility/assests/img10.jpg";
import Link from "next/link";
import Card from "@/components/cards/Card";
import StatusBox from "@/components/status/StatusBox";
import { PieData1, PieData2, StatusData } from "@/utility/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { graphData } from "@/utility/data";
import copyImg from "../../utility/assests/copy-icon.svg";
import printImg from "../../utility/assests/print-icon.svg";
import excelImg from "../../utility/assests/excel-icon.svg";
import pdfImg from "../../utility/assests/pdf-icon.svg";
import csvImg from "../../utility/assests/placeholder-csv-format.svg";
import CardHeader from "@/components/cards/CardHeader";
import PieChart from "@/components/PieChart";

const ProjectDetail = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [pieChartData, setPieChartData] = useState(PieData1);
  const [weekToggle, setWeekToggle] = useState<boolean>(true);

  const handlePieData = (week: number) => {
    if (week === 1) {
      setPieChartData(PieData1);
      setWeekToggle(true);
    }
    if (week === 2) {
      setPieChartData(PieData2);
      setWeekToggle(false);
    }
  };

  const showDropdown = () => setDropDown(!dropDown);
  return (
    <>
      <Dashboard>
        <div className="flex">
          <div>
            <Image src={logo1} alt="Company Logo" width={64} />
          </div>

          <div className="flex-1 ml-5">
            <h1 className="text-[1.4rem] text-[#1e2022] font-bold mb-[0.5rem] ">
              GWCL
            </h1>
            <div className="flex text-[rgb(103,119,136)] text-[0.875rem] f">
              <p className="mr-5">Client: HtmlStream</p>
              <p className="flex items-center  flex-end ">
                Due Date:
                <span className="ml-2 text-[#377dff]">12/12/2020</span>
                <BsChevronDown className="ml-2" />
              </p>
            </div>
          </div>
          <div className="text-[0.875rem]">
            <p className="text-[#1e2022] uppercase font-bold tracking-wide hover:text-[#377dff] mb-3 text-[0.71rem]">
              Team members:
            </p>
            <div className="flex">
              <div className="flex">
                <Link href="#" className="hover:z-10">
                  <Image
                    src={image1}
                    alt="Profile Picture"
                    width={42}
                    height={42}
                    className="rounded-full border-2 border-white "
                  />
                </Link>
                <Link href="#">
                  <div className="relative -ml-3.5   hover:z-10">
                    <Image
                      src={image2}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="relative rounded-full border-2 border-white "
                    />
                  </div>
                </Link>
                <Link href="#">
                  <div className="relative -ml-3.5 hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                >
                  <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                    <BsPeopleFill />
                  </span>
                </Link>{" "}
                <Link
                  href="#"
                  className=" relative -ml-3.5 w-[42px] h-[42px] bg-white  rounded-full text-[#132144] border-2 border-white hover:z-10"
                >
                  <span className="flex items-center justify-center bg-[rgba(19,33,68,.1)] w-full h-full rounded-full font-bold">
                    A
                  </span>
                </Link>
                <Link
                  href="#"
                  className=" relative -ml-3.5 w-[42px] h-[42px] bg-white  rounded-full text-[#132144] border-2 border-white hover:z-10"
                >
                  <span className="flex items-center justify-center bg-[rgba(19,33,68,.1)] w-full h-full rounded-full font-bold ">
                    +2
                  </span>
                </Link>
              </div>
              <div className="text-white w-[42px] h-[42px] bg-[#377dff] flex items-center justify-center rounded-full ml-5">
                <BsShareFill />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[#132144] text-[0.875rem] my-10 ">
          <div>
            <Link
              href="#"
              className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
            >
              Overview
            </Link>
          </div>
          <div>
            <Link
              href="/activity"
              className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
            >
              Activity
            </Link>
          </div>
          <div>
            <Link
              href="/teams"
              className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
            >
              Teams
            </Link>
          </div>
          <div>
            <Link
              href="/settings"
              className="active:font-bold active:text-[#377dff] py-5 px-4 hover:text-[#377dff] hover:border-b-4 active:border-b-4 active:border-b-[#377dff]"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 py-5 px-3 gap-x-1">
          <Link href="">
            <Card title="Document" value="115" percentage={70} />
          </Link>
          <Link href="">
            <Card title="Reconciliation" value="30" percentage={29.1} />
          </Link>
          <Link href="">
            <Card title="Reports" value="52" percentage={44} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-x-3 mt-5">
          {StatusData.map((item, index) => (
            <StatusBox
              key={index}
              Icon={item.Icon}
              title={item.title}
              value={item.value}
              closedTask={item.closedTask}
            />
          ))}
        </div>
        <div className="border-[1px] border-[rgba(231, 234, 243, 0.7)] rounded-xl mt-5 py-4 px-5 mb-5">
          <div className="flex justify-between px-5">
            <h6 className="text-[#8c98a4] text-[0.71rem] font-bold uppercase">
              Project budget:
              <span className="text-[1.148rem] text-[#1e2022] ml-3.5">
                $150,000.00 USD
              </span>
            </h6>
            <div className="p-4 ">
              <button
                onClick={showDropdown}
                className="flex items-center bg-white  p-2 space-x-1 rounded hover:text-[#1366ff] border border-[rgba(231,234,243,.7)] hover:border hover:border-[rgba(231,234,243,.7)] hover:shadow-lg hover:shadow-[rgba(140,152,164,.25)]"
              >
                <BsDownload className="mr-1" />
                Export
                <BsChevronDown />
              </button>

              <div
                className={`${
                  dropDown ? "" : "hidden"
                } min-w-[10rem]  p-[0.5rem] flex flex-col bg-white text-[#8c98a4] text-[0.875rem] rounded capitalize absolute z-10 right-[4.5rem] shadow-lg border border-[rgba(19,33,68,.1)] shadow-[rgba(140,152,164,.175)]`}
              >
                <span className=" inline-block px-4 py-2 uppercase font-bold text-[0.656rem]">
                  options
                </span>
                <Link
                  href=""
                  className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                >
                  <Image src={copyImg} alt="" width={20} className="mr-3" />
                  Copy
                </Link>
                <Link
                  href=""
                  className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                >
                  <Image src={printImg} alt="" width={20} className="mr-3" />
                  Print
                </Link>
                <div className="h-[1px] w-[90%] bg-[rgba(19,33,68,.1)] mx-auto"></div>
                <span className="inline-block px-4 py-2 uppercase font-bold text-[0.656rem] ">
                  download options
                </span>
                <Link
                  href=""
                  className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                >
                  <Image src={excelImg} alt="" width={20} className="mr-3" />
                  Excel
                </Link>
                <Link
                  href=""
                  className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                >
                  <Image src={csvImg} alt="" width={20} className="mr-3" />
                  .CSV
                </Link>
                <Link
                  href=""
                  className=" px-4 py-2 text-[#1e2022] hover:text-[#1b1d1f] hover:bg-[rgba(19,33,68,.1)] flex"
                >
                  <Image src={pdfImg} alt="" width={20} className="mr-3" />
                  PDF
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[35rem] text-[#8c98a4]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={graphData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#8c98a4" />
                <YAxis stroke="#8c98a4" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex mb-10 gap-x-2.5">
          <div className="w-[41.67%] shadow shadow-[rgba(140,152,164,.075)]">
            <CardHeader
              handleClick={handlePieData}
              header="Expense"
              week1="This Week"
              week2="Last Week"
              toggle={weekToggle}
            />
            <div className="w-full h-[35rem]">
              <PieChart Data={pieChartData} />
            </div>
          </div>
          <div className="w-[58.33%]  h-[35rem]">
            <CardHeader
              handleClick={handlePieData}
              header="Events"
              week1="This Week"
              week2="Next Week"
              toggle={weekToggle}
            />
            <div className="mt-8  px-5 h-[90%] overflow-y-scroll">
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="border-l-2 border-blue-400 pl-3.5">
                  <h2 className="text-[1.312rem]">
                    12:00 - 03:00
                    <span className="text-[0.875rem] text-[rgba(19,33,68,.65)] ml-2">
                      PM
                    </span>
                  </h2>
                  <h5 className="text-[0.875rem] font-bold">Weekly Overview</h5>
                  <span className="text-[rgba(19,33,68,.65)] text-[0.875em]">
                    18 January, 2020
                  </span>
                </div>
                <div className="flex">
                  <Link href="#" className="hover:z-10">
                    <Image
                      src={image1}
                      alt="Profile Picture"
                      width={42}
                      height={42}
                      className="rounded-full border-2 border-white "
                    />
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5   hover:z-10">
                      <Image
                        src={image2}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="relative rounded-full border-2 border-white "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative -ml-3.5 hover:z-10">
                      <Image
                        src={image1}
                        alt="Profile Picture"
                        width={42}
                        height={42}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="relative -ml-3.5 bg-white w-[42px] h-[42px]  rounded-full text-[#09a5be] border-2 border-white hover:z-10"
                  >
                    <span className=" bg-[rgba(9,165,190,.1)] w-full h-full rounded-full flex items-center justify-center  ">
                      <BsPeopleFill />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default ProjectDetail;
