"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function ConferenceFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleLocationChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("location", event.target.value);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  function onSortByChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("sortby", event.target.value);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-row gap-6 items-center px-3 py-3">
      {/* Location Dropdown */}
      <div>
        <label htmlFor="location" className="block text-xs text-gray-400 mb-1">
          Location
        </label>
        <select
          id="location"
          name="location"
          value={searchParams?.get("location") || "All"}
          className="px-3 py-2 rounded bg-[#23244A] text-white border border-[#222342] focus:outline-none"
          onChange={handleLocationChange}
        >
          <option value="All">All</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Batumi">Batumi</option>
          <option value="Kutaisi">Kutaisi</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Sort By Dropdown */}
      <div>
        <label htmlFor="sortby" className="block text-xs text-gray-400 mb-1">
          Sort By
        </label>
        <select
          id="sortby"
          name="sortby"
          value={searchParams?.get("sortby") || "soonest"}
          className="px-3 py-2 rounded bg-[#23244A] text-white border border-[#222342] focus:outline-none"
          onChange={onSortByChange}
        >
          <option value="Newest">Soonest</option>
          {/* <option value="Closest">Closest</option> */}
          <option value="Cheapest">Cheapest</option>
        </select>
      </div>
    </div>
  );
}
