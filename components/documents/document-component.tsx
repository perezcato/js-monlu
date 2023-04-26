import { useRouter } from 'next/router'
import Image from "next/image";
import { BsDownload, BsChevronDown, BsFilter, BsSearch } from "react-icons/bs";

const projects = [
  {
    id: 1,
    name: "Ova_bs_2023.csv",
    status: "Active",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
    image: "/assets/images/capsule-icon.svg",
  },
  {
    id: 2,
    name: "GRA_rec_file.xsl",
    status: "Active",
    members: [
      {
        name: "John Doe",
        image: "/assets/images/img8.jpg",
      },
      {
        name: "John Doe",
        image: "/assets/images/img9.jpg",
      },
    ],
    image: "/assets/images/spec-icon.svg",
  },
  {
    id: 3,
    name: "GRA_rec_file.xsl",
    status: "Active",
    members: [
      {
        name: "John Doe",
        image: "/assets/images/img8.jpg",
      },
      {
        name: "John Doe",
        image: "/assets/images/img9.jpg",
      },
    ],
    image: "/assets/images/spec-icon.svg",
  },
  {
    id: 4,
    name: "GRA_rec_file.xsl",
    status: "Active",
    members: [
      {
        name: "John Doe",
        image: "/assets/images/img8.jpg",
      },
      {
        name: "John Doe",
        image: "/assets/images/img9.jpg",
      },
    ],
    image: "/assets/images/spec-icon.svg",
  },
];



export default function TableComponent() {
  const router = useRouter()

  const navigateHandler = () => {
    router.push('/teams')
  }

  return (
    <div className="w-full bg-white m-auto border border-gray-100 rounded-xl shadow-md shadow-slate-100 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="text-sm font-normal text-[#677788] flex items-center space-x-5 border-b border-gray-100 py-2">
          <BsSearch />
          <input
            type="text"
            placeholder="Search Projects"
            className="outline-none"
          />
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-100 rounded-md px-4 py-2 flex items-center space-x-2 text-[#677788]">
            <BsDownload className="text-xs" />
            <span className="text-xs font-normal ">Export</span>
            <BsChevronDown className="text-xs" />
          </button>
          <button className="border border-gray-100 rounded-md px-4 py-2 flex items-center space-x-2 text-[#677788]">
            <BsFilter className="text-xs" />
            <span className="text-xs font-normal ">Filter</span>
          </button>
        </div>
      </div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 border-t border-b border-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="py-4 pl-5 w-[60px] text-left text-sm font-semibold text-gray-900"
                    >
                      <input type="checkbox" />
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 w-[80px] pl-4 pr-3 text-left text-xs font-normal uppercase text-[#677788]"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-xs font-normal uppercase text-[#677788] "
                    >
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#677788]">
                  {projects.map((project) => (
                    <tr key={project.id} onClick={navigateHandler}>
                      <td className="whitespace-nowrap py-3 pl-5 pr-3 text-xs font-medium">
                        <input type="checkbox" />
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-xs">
                        {project.id + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm flex items-center space-x-3">
                        <div className="relative w-[42px] text-blue-700 font-medium rounded-full flex items-center justify-center bg-blue-100 h-[42px] overflow-hidden rounded-full">
                          <p>O</p>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-black">
                            {project.name}
                          </div>
                          <div className="text-xs text-[#677788]">
                            Updated 5 minutes ago
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
