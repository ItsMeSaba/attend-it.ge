import React from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface NameInputProps {
  value: string;
  onChange: (v: string) => void;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Name:
        <input
          type="text"
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </label>
    </div>
  );
}
