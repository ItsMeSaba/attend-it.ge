"use client";

import {
  FaLaptopCode,
  FaFlask,
  FaGlobe,
  FaRobot,
  FaDatabase,
  FaChartBar,
  FaTree,
} from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { ConferenceCategory } from "@/types/global";
import { MdOutlineDesignServices } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import clsx from "clsx";

const categoryIcons: Record<ConferenceCategory, React.ReactNode> = {
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
};

const categories = Object.entries(ConferenceCategory).map(([value, label]) => ({
  label,
  value,
  icon: categoryIcons[label],
}));

interface Props {
  className?: string;
  searchParams?: URLSearchParams;
}

export function CategoriesSidebar({ className }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleCategoryClick(category: ConferenceCategory) {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("category", category.toLowerCase());
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <aside
      className={clsx(
        "group h-full absolute transition-all duration-200 flex flex-col shadow-lg overflow-x-hidden z-[100] border-r border-[#222342]",
        className
      )}
    >
      <nav className="flex flex-col gap-3 w-full bg-[#181933] h-full top-0 py-2 left-0 z-[100]">
        {categories.map(({ label, icon, value }) => (
          <div
            key={label}
            className="flex items-center w-full min-h-10 gap-3 cursor-pointer px-3 py-2 text-[#e0e6f4] rounded-md hover:bg-[#23244A] transition-all duration-200"
            onClick={() => handleCategoryClick(value as ConferenceCategory)}
          >
            <span className="text-lg ml-1">{icon}</span>

            <span className="hidden group-hover:block group-hover:ml-1 whitespace-nowrap transition-all duration-200 text-sm font-medium">
              {label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
