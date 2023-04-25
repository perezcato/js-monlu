/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

interface Person {
  name: string;
  title: string;
  email: string;
  role: string;
  members: [
    { name: string; image: string },
    { name: string; image: string },
    { name: string; image: string },
    { name: string; image: string }
  ];
}

const people: Person[] = [
  {
    name: "#webdev",
    title: "Web talents",
    email: "Development",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "software",
    email: "software",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "Web talents",
    email: "Development",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "Web talents",
    email: "Development",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "software",
    email: "software",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "Web talents",
    email: "Development",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "Web talents",
    email: "Development",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  {
    name: "#webdev",
    title: "Web talents",
    email: "Development",
    role: "Member",
    members: [
      { name: "John Doe", image: "/assets/images/img4.jpg" },
      { name: "John Doe", image: "/assets/images/img5.jpg" },
      { name: "John Doe", image: "/assets/images/img6.jpg" },
      { name: "John Doe", image: "/assets/images/img7.jpg" },
    ],
  },
  // More people...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const [hidden, setHidden] = useState<boolean>(false);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="p-4 sm:px-6 lg:px-8 border rounded-lg">
      <div className="sm:flex sm:items-center pb-4 border-b">
        <div className="sm:flex-auto pt-4">
          <div className="relative">
            <input
              type="text"
              className="block w-full border-gray-300 rounded-md bg-white pl-10 pr-3 py-2 sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-500"
              placeholder="Search users"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:ml-16 sm:mt-0 flex rounded-md border items-center p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>

          <button
          onClick={()=>setHidden(!hidden)}
            type="button"
            className="block px-2 py-1.5 text-center text-sm font-semibold leading-6 text-gray-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Filters
          </button>
          <img src="/assets/arrow-down.svg" alt="" className="ml-2 w-4" />
        </div>
      </div>
      {hidden && (<div className="flex flex-col">
        <div className="flex justify-between py-8">
          <div className="w-3/12">
            <label>Teams</label>
            <input placeholder="Name, role, department" className="w-full border my-2 p-2 rounded"/>
          </div>
          <div className="w-3/12">
            <label>Tags</label>
            <input placeholder="enter top tags" className="w-full border my-2 p-2 rounded"/>
          </div>
          <div className="w-3/12">
            <label>Ratings</label>
            <input placeholder="3 items selected" className="w-full border my-2 p-2 rounded"/>
          </div>
        </div>
      </div>)}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedPeople.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y-0 divide-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-xs font-medium uppercase text-gray-400"
                    >
                      Team
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-medium uppercase text-gray-400"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-medium uppercase text-gray-400"
                    >
                      Industry
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-medium uppercase text-gray-400"
                    >
                      Rated
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-medium uppercase text-gray-400"
                    >
                      Members
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-0 divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr
                      key={person.email}
                      className={
                        selectedPeople.includes(person)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 focus:ring-indigo-600"
                          value={person.email}
                          checked={selectedPeople.includes(person)}
                          onChange={(e) =>
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, person]
                                : selectedPeople.filter((p) => p !== person)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedPeople.includes(person)
                            ? "text-indigo-600"
                            : "text-blue-500"
                        )}
                      >
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-xs font-medium">
                        <div
                          className="p-1 bg-gray-300 rounded w-fit"
                          style={{
                            backgroundColor:
                              person.title === "software"
                                ? "#ffe4e1"
                                : "#e7feff",
                            color:
                              person.title === "software" ? "#EF4444" : "blue",
                          }}
                        >
                          {person.email}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                          src="/assets/starsvg.svg"
                          alt=""
                          className="w-4 h-auto"
                        />
                        <img
                          src="/assets/starsvg.svg"
                          alt=""
                          className="w-4 h-auto"
                        />
                        <img
                          src="/assets/starsvg.svg"
                          alt=""
                          className="w-4 h-auto"
                        />
                        <img
                          src="/assets/starsvg.svg"
                          alt=""
                          className="w-4 h-auto"
                        />
                        <img
                          src="/assets/starsvg.svg"
                          alt=""
                          className="w-4 h-auto"
                        />
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="flex">
                          {person.members.map((data) => (
                            <div
                              key={Math.random()}
                              className={`flex relative w-[24px] h-[24px] overflow-hidden border border-white rounded-full -ml-[10px] items-center justify-center`}
                            >
                              <Image
                                fill
                                alt="company logo"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                src={data.image}
                              />
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm font-medium">
                        <div className="border text-center items-center py-3 rounded flex items-center justify-center">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-900 flex"
                          >
                            More
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                              src="/assets/arrow-down.svg"
                              alt=""
                              className="ml-1 w-4"
                            />
                            <span className="sr-only">, {person.name}</span>
                          </a>
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
