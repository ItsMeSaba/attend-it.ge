import {
  FaLaptopCode,
  FaFlask,
  FaGlobe,
  FaRobot,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";
import React from "react";
import clsx from "clsx";

const categories = [
  {
    label: "Technology",
    icon: <FaLaptopCode />,
  },
  {
    label: "Science",
    icon: <FaFlask />,
  },
  {
    label: "Geography",
    icon: <FaGlobe />,
  },
  {
    label: "AI & Robotics",
    icon: <FaRobot />,
  },
  {
    label: "Data",
    icon: <FaDatabase />,
  },
  {
    label: "Business",
    icon: <FaChartBar />,
  },
];

interface Props {
  className?: string;
}

export function CategoriesSidebar({ className }: Props) {
  return (
    <aside
      className={clsx(
        "group h-full absolute transition-all duration-200 flex flex-col shadow-lg overflow-x-hidden z-[100] border-r border-[#222342]",
        className
      )}
    >
      <nav className="flex flex-col gap-3 w-full bg-[#181933] h-full top-0 py-2 left-0 z-[100]">
        {categories.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center w-full min-h-10 gap-3 cursor-pointer px-3 py-2 text-[#e0e6f4] rounded-md hover:bg-[#23244A] transition-all duration-200"
          >
            <span className="text-lg">{icon}</span>

            <span className="hidden group-hover:block group-hover:ml-1 whitespace-nowrap transition-all duration-200 text-sm font-medium">
              {label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
