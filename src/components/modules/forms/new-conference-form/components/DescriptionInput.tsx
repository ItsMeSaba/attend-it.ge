import React from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface DescriptionInputProps {
  value: string;
  onChange: (v: string) => void;
}

export function DescriptionInput({ value, onChange }: DescriptionInputProps) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Description:
        <textarea
          className={inputClass + " resize-vertical min-h-[80px]"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="Enter a description..."
        />
      </label>
    </div>
  );
}
