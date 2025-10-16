"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const filters = [
  {
    label: "Location",
    value: "location",
    options: [
      { value: "All", label: "All" },
      { value: "Tbilisi", label: "Tbilisi" },
      { value: "Batumi", label: "Batumi" },
      { value: "Kutaisi", label: "Kutaisi" },
      { value: "Others", label: "Others" },
    ],
    defaultValue: "all",
  },
  {
    label: "Sort By",
    value: "sortby",
    options: [
      { value: "soonest", label: "Soonest" },
      { value: "cheapest", label: "Cheapest" },
    ],
    defaultValue: "soonest",
  },
];

export function ConferenceFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilterChange(filter: string) {
    return (event: React.ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(searchParams?.toString() || "");
      params.set(filter, event.target.value);
      router.replace(`?${params.toString()}`, { scroll: false });
    };
  }

  return (
    <div className="flex flex-row gap-6 items-center px-3 py-3">
      {filters.map((filter) => (
        <div key={filter.value}>
          <label
            htmlFor={filter.value}
            className="block text-xs text-gray-400 mb-1"
          >
            {filter.label}
          </label>

          <select
            id={filter.value}
            name={filter.value}
            value={searchParams?.get(filter.value) || filter.defaultValue}
            className="px-3 py-2 rounded bg-[#23244A] text-white border border-[#222342] focus:outline-none"
            onChange={handleFilterChange(filter.value)}
          >
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
