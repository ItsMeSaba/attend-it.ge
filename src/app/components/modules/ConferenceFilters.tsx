import React from "react";

export function ConferenceFilters() {
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
          className="px-3 py-2 rounded bg-[#23244A] text-white border border-[#222342] focus:outline-none"
        >
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
          className="px-3 py-2 rounded bg-[#23244A] text-white border border-[#222342] focus:outline-none"
        >
          <option value="Newest">Newest</option>
          <option value="Closest">Closest</option>
          <option value="Cheapest">Cheapest</option>
        </select>
      </div>
    </div>
  );
}
