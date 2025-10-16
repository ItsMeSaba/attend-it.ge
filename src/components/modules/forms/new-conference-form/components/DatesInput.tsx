import React from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface DatesInputProps {
  start: string;
  end: string;
  onStartChange: (val: string) => void;
  onEndChange: (val: string) => void;
}

export function DatesInput({
  start,
  end,
  onStartChange,
  onEndChange,
}: DatesInputProps) {
  return (
    <div className="mb-4 flex gap-4">
      <label className="flex-1">
        <span className={labelClass}>Start Date:</span>
        <input
          type="date"
          className={inputClass}
          value={start}
          onChange={(e) => onStartChange(e.target.value)}
          required
        />
      </label>
      <label className="flex-1">
        <span className={labelClass}>End Date:</span>
        <input
          type="date"
          className={inputClass}
          value={end}
          onChange={(e) => onEndChange(e.target.value)}
          required
        />
      </label>
    </div>
  );
}
