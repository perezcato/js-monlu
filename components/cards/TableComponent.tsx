import Image from "next/image";

const projects = [
  {
    name: "GWCL",
    status: "Active",
    members: [
      {
        name: "John Doe",
        image: "/assets/images/img4.jpg",
      },
      {
        name: "John Doe",
        image: "/assets/images/img5.jpg",
      },
      {
        name: "John Doe",
        image: "/assets/images/img6.jpg",
      },
      {
        name: "John Doe",
        image: "/assets/images/img7.jpg",
      },
    ],
    image: "/assets/images/capsule-icon.svg",
  },
  {
    name: "GRA RECONCILIATION 1",
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
  return (
    <div className="w-full bg-white m-auto border border-gray-100 rounded-xl shadow-md shadow-slate-100">
      <div className="mt-8 flow-root">
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
                      Project
                    </th>
                    <th
                      scope="col"
                      className="px-3 w-[178px] py-3.5 text-left text-xs font-normal uppercase text-[#677788]"
                    >
                      Members
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-[188px] text-left text-xs font-normal uppercase text-[#677788]"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#677788]">
                  {projects.map((project, key) => (
                    <tr key={key}>
                      <td className="whitespace-nowrap py-3 pl-5 pr-3 text-xs font-medium">
                        <input type="checkbox" />
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-xs">
                        {key + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm flex items-center space-x-3">
                        <div className="relative w-[42px] h-[42px] overflow-hidden rounded-full">
                          <Image
                            fill
                            alt="company logo"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            src={project.image}
                          />
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
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <div className="inline-flex items-center">
                          {project.members.map((member, key) => (
                            <div
                              className={`relative w-[24px] h-[24px] overflow-hidden rounded-full ${
                                key !== 0 ? "-ml-[10px]" : ""
                              }`}
                            >
                              <Image
                                fill
                                alt="company logo"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                src={member.image}
                              />
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="h-[7px] w-[7px] rounded-full bg-[#bdc5d1]" />
                          <div className="text-sm text-[#677788]">
                            In progress
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
