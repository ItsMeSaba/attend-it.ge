"use client";

import {
  FaLaptopCode,
  FaFlask,
  FaGlobe,
  FaRobot,
  FaDatabase,
  FaChartBar,
  FaTree,
  FaThList,
  FaShapes,
} from "react-icons/fa";
import { getConferenceCountByCategory } from "@/helpers/get-conference-count-by-category";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineDesignServices } from "react-icons/md";
import { ConferenceCategory } from "@/types/global";
import { RiGovernmentLine } from "react-icons/ri";

import React from "react";
import clsx from "clsx";

const categoryIcons: Record<ConferenceCategory, React.ReactNode> = {
  [ConferenceCategory.All]: <FaThList />,
  [ConferenceCategory.TechDevelopment]: <FaLaptopCode />,
  [ConferenceCategory.BusinessEntrepreneurship]: <FaChartBar />,
  [ConferenceCategory.DesignCreative]: <MdOutlineDesignServices />,
  [ConferenceCategory.ScienceEducation]: <FaFlask />,
  [ConferenceCategory.HealthcareBio]: <FaRobot />,
  [ConferenceCategory.FinanceEconomics]: <FaDatabase />,
  [ConferenceCategory.CultureMedia]: <FaGlobe />,
  [ConferenceCategory.EnvironmentSustainability]: <FaTree />,
  [ConferenceCategory.GovernmentPolicy]: <RiGovernmentLine />,
  [ConferenceCategory.EngineeringIndustry]: <FaRobot />,
  [ConferenceCategory.Other]: <FaShapes />,
};

const categories = Object.entries(ConferenceCategory).map(([value, label]) => ({
  label,
  value,
  icon: categoryIcons[label],
}));

interface Props {
  className?: string;
  conferences: any[];
}

export function CategoriesSidebar({ className, conferences }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleCategoryClick(category: ConferenceCategory) {
    const params = new URLSearchParams(searchParams?.toString() || "");

    params.set("category", category);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  const activeCategory = searchParams?.get("category") || "All";

  return (
    <aside
      className={clsx(
        "group h-full absolute transition-all duration-200 flex flex-col shadow-lg overflow-x-hidden z-[100] border-r border-[#222342]",
        className
      )}
    >
      <nav className="flex flex-col gap-3 w-full bg-[#181933] h-full top-0 left-0 z-[100]">
        {categories.map(({ label, icon, value }) => (
          <div
            key={label}
            className={clsx(
              "flex items-center w-full min-h-10 gap-3 cursor-pointer px-3 py-2 text-[#e0e6f4] rounded-md hover:bg-[#23244A] transition-all duration-200",
              activeCategory === value && "border-1 border-[#e67e22]"
            )}
            onClick={() => handleCategoryClick(value as ConferenceCategory)}
          >
            <span className="text-lg ml-1">{icon}</span>

            <span className="hidden group-hover:block group-hover:ml-1 whitespace-nowrap transition-all duration-200 text-sm font-medium">
              {label}

              {` (${getConferenceCountByCategory(
                conferences,
                value as ConferenceCategory
              )})`}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
