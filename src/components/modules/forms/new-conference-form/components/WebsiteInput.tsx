import React from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface WebsiteInputProps {
  value: string;
  onChange: (v: string) => void;
}

export function WebsiteInput({ value, onChange }: WebsiteInputProps) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Website:
        <input
          type="url"
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="https://example.com"
        />
      </label>
    </div>
  );
}
