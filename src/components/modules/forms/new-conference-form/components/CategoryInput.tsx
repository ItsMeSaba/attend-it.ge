import React from "react";
import { ConferenceCategory } from "@/types/global";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

const categories = Object.values(ConferenceCategory).filter(
  (c) => c !== ConferenceCategory.All
);

interface CategoryInputProps {
  value: string;
  onChange: (v: string) => void;
}

export function CategoryInput({ value, onChange }: CategoryInputProps) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Category:
        <select
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
