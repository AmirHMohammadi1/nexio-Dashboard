import React from "react";
import Image from "next/image";
import TableDropdown from "../Dropdowns/TableDropdown";

interface CardTableProps {
  color?: "light" | "dark";
}

interface TableRow {
  project: string;
  image: string;
  name: string;
  budget: string;
  status: { type: string; color: string; text: string };
  completion: number;
  users: string[];
}

export default function CardTable({ color = "light" }: CardTableProps) {
  const isLight = color === "light";
  
  const tableData: TableRow[] = [
    {
      project: "Argon Design System",
      image: "/nexio-Dashboard/img/bootstrap.jpg",
      name: "Argon Design System",
      budget: "$2,500 USD",
      status: { type: "pending", color: "text-orange-500", text: "pending" },
      completion: 60,
      users: [
        "/nexio-Dashboard/img/team-1-800x800.jpg",
        "/nexio-Dashboard/img/team-2-800x800.jpg",
        "/nexio-Dashboard/img/team-3-800x800.jpg",
        "/nexio-Dashboard/img/team-4-470x470.png",
      ],
    },
    {
      project: "Angular Now UI Kit PRO",
      image: "/nexio-Dashboard/img/angular.jpg",
      name: "Angular Now UI Kit PRO",
      budget: "$1,800 USD",
      status: { type: "completed", color: "text-emerald-500", text: "completed" },
      completion: 100,
      users: [
        "/nexio-Dashboard/img/team-1-800x800.jpg",
        "/nexio-Dashboard/img/team-2-800x800.jpg",
        "/nexio-Dashboard/img/team-3-800x800.jpg",
        "/nexio-Dashboard/img/team-4-470x470.png",
      ],
    },
    {
      project: "Black Dashboard Sketch",
      image: "/nexio-Dashboard/img/sketch.jpg",
      name: "Black Dashboard Sketch",
      budget: "$3,150 USD",
      status: { type: "delayed", color: "text-red-500", text: "delayed" },
      completion: 73,
      users: [
        "/nexio-Dashboard/img/team-1-800x800.jpg",
        "/nexio-Dashboard/img/team-2-800x800.jpg",
        "/nexio-Dashboard/img/team-3-800x800.jpg",
        "/nexio-Dashboard/img/team-4-470x470.png",
      ],
    },
    {
      project: "React Material Dashboard",
      image: "/nexio-Dashboard/img/react.jpg",
      name: "React Material Dashboard",
      budget: "$4,400 USD",
      status: { type: "on schedule", color: "text-teal-500", text: "on schedule" },
      completion: 90,
      users: [
        "/nexio-Dashboard/img/team-1-800x800.jpg",
        "/nexio-Dashboard/img/team-2-800x800.jpg",
        "/nexio-Dashboard/img/team-3-800x800.jpg",
        "/nexio-Dashboard/img/team-4-470x470.png",
      ],
    },
    {
      project: "React Material Dashboard",
      image: "/nexio-Dashboard/img/vue.jpg",
      name: "Vue Material Dashboard",
      budget: "$2,200 USD",
      status: { type: "completed", color: "text-emerald-500", text: "completed" },
      completion: 100,
      users: [
        "/nexio-Dashboard/img/team-1-800x800.jpg",
        "/nexio-Dashboard/img/team-2-800x800.jpg",
        "/nexio-Dashboard/img/team-3-800x800.jpg",
        "/nexio-Dashboard/img/team-4-470x470.png",
      ],
    },
  ];

  const getProgressBarColor = (completion: number) => {
    if (completion === 100) return { bg: "bg-emerald-200", progress: "bg-emerald-500" };
    if (completion >= 80) return { bg: "bg-teal-200", progress: "bg-teal-500" };
    if (completion >= 60) return { bg: "bg-red-200", progress: "bg-red-500" };
    return { bg: "bg-red-200", progress: "bg-red-500" };
  };

  return (
    <div
      className={
        "relative flex flex-col min-w-0 wrap-break-word w-full mb-6 shadow-lg rounded " +
        (isLight ? "bg-white" : "bg-blueGray-700 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (isLight ? "text-blueGray-700" : "text-white")
              }
            >
              Card Tables
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (isLight
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                }
              >
                Project
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (isLight
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                }
              >
                Budget
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (isLight
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                }
              >
                Status
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (isLight
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                }
              >
                Users
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (isLight
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                }
              >
                Completion
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (isLight
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                }
              ></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              const progressColors = getProgressBarColor(row.completion);
              return (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <div className="h-12 w-12 bg-white rounded-full border relative">
                      <Image
                        src={row.image}
                        alt={row.project}
                        fill
                        className="rounded-full object-cover"
                        sizes="(max-width: 48px) 100vw, 48px"
                      />
                    </div>
                    <span
                      className={
                        "ml-3 font-bold " +
                        (isLight ? "text-blueGray-600" : "text-white")
                      }
                    >
                      {row.name}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {row.budget}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className={`fas fa-circle ${row.status.color} mr-2`}></i>{" "}
                    {row.status.text}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      {row.users.map((user, userIndex) => (
                        <div
                          key={userIndex}
                          className={`w-10 h-10 rounded-full border-2 border-blueGray-50 shadow relative ${
                            userIndex > 0 ? "-ml-4" : ""
                          }`}
                        >
                          <Image
                            src={user}
                            alt={`Team member ${userIndex + 1}`}
                            fill
                            className="rounded-full object-cover"
                            sizes="(max-width: 40px) 100vw, 40px"
                          />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{row.completion}%</span>
                      <div className="relative w-full">
                        <div className={`overflow-hidden h-2 text-xs flex rounded ${progressColors.bg}`}>
                          <div
                            style={{ width: `${row.completion}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${progressColors.progress}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}