"use client";

import { renderPrice } from "./helpers/render-price";
import { useConferences } from "@/hooks/useConferences";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export function ConferencesList() {
  const { conferences } = useConferences();

  return (
    <div className="flex flex-col gap-6 relative z-10">
      {conferences.map((conf) => (
        <div
          key={conf.id}
          className="rounded-lg bg-[#23244A] p-4 shadow border border-[#222342]"
        >
          <h2 className="text-lg font-bold text-white mb-1">{conf.name}</h2>

          <div className="text-sm text-[#9ca3af] mb-1">
            {capitalizeFirstLetter(conf.location.city)}
          </div>

          <div className="text-xs text-[#cbd5e1] mb-2">
            {new Date(conf.dates.start).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
            })}

            {conf.dates.end &&
              " - " +
                new Date(conf.dates.end).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                })}
          </div>

          <div className="text-xs text-[#818cf8] mb-2">
            {conf.topics && conf.topics.length
              ? conf.topics.join(", ")
              : "General Topics"}
          </div>

          <div className="text-xs text-[#fbbf24] mb-2">
            {renderPrice(conf.price)}
          </div>

          <div className="text-sm text-gray-200 mb-2">{conf.description}</div>

          <a
            href={conf.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] underline text-xs"
          >
            Visit website
          </a>
        </div>
      ))}
    </div>
  );
}
