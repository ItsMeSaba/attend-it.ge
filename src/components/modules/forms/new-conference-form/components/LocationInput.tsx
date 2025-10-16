import React from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface LocationInputProps {
  city: string;
  coordinates: [number, number];
  onCityChange: (city: string) => void;
  onCoordinatesChange: (coords: [number, number]) => void;
}

export function LocationInput({
  city,
  coordinates,
  onCityChange,
  onCoordinatesChange,
}: LocationInputProps) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        City:
        <select
          className={inputClass}
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          required
        >
          <option value="">Select city</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Batumi">Batumi</option>
          <option value="Kutaisi">Kutaisi</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <div className="mt-2 flex gap-3">
        <label className="flex-1">
          <span className="text-sm">Longitude</span>
          <input
            type="number"
            step="any"
            className={inputClass}
            value={coordinates[0]}
            onChange={(e) =>
              onCoordinatesChange([parseFloat(e.target.value), coordinates[1]])
            }
            placeholder="Longitude"
            required
          />
        </label>
        <label className="flex-1">
          <span className="text-sm">Latitude</span>
          <input
            type="number"
            step="any"
            className={inputClass}
            value={coordinates[1]}
            onChange={(e) =>
              onCoordinatesChange([coordinates[0], parseFloat(e.target.value)])
            }
            placeholder="Latitude"
            required
          />
        </label>
      </div>
    </div>
  );
}
