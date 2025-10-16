"use client";

import { useSearchParams } from "next/navigation";
import { renderPrice } from "./helpers/render-price";
import { useMapContext } from "@/contexts/MapContext";
import { useConferences } from "@/hooks/useConferences";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

interface Props {
  conferences: any[];
}

export function ConferencesList({ conferences }: Props) {
  const { map } = useMapContext();
  const searchParams = useSearchParams();
  const { conferences: formattedConferences } = useConferences(conferences);

  if (formattedConferences.length === 0) {
    return (
      <div className="flex flex-col gap-4 relative z-10 px-3 py-10">
        <div className="text-center text-gray-400 text-lg">
          No conferences found
        </div>
      </div>
    );
  }

  function handleMouseEnter(id: string, coordinates: [number, number]) {
    const conferencePin = document.getElementById(`conference-pin-${id}`);

    if (conferencePin) {
      conferencePin.classList.add("active-conference-pin");

      if (map) {
        map.flyTo({
          center: [coordinates[0], coordinates[1]],
          animate: true,
          zoom: 12,
          duration: 2000,
        });
      }
    }
  }

  function handleMouseLeave(id: string) {
    const conferencePin = document.getElementById(`conference-pin-${id}`);
    if (conferencePin) {
      conferencePin.classList.remove("active-conference-pin");
    }
  }

  function handleClick(id: string) {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("open", id);
    const newUrl = window.location.pathname + "?" + params.toString();
    window.history.replaceState({}, "", newUrl);
  }

  return (
    <div className="flex flex-col gap-4 relative z-10 px-3">
      {formattedConferences.map((conf) => (
        <div
          key={conf.id}
          onMouseEnter={() =>
            handleMouseEnter(conf.id, conf.location.coordinates)
          }
          onMouseLeave={() => handleMouseLeave(conf.id)}
          onClick={() => handleClick(conf.id)}
          id={`conference-card-${conf.id}`}
          className="rounded-lg bg-[#23244A] p-4 shadow border border-[#222342] flex flex-col cursor-pointer"
          lang="ka"
        >
          {conf.image && (
            <div className="w-full mb-3 rounded-lg overflow-hidden bg-[#1a1a35]">
              <img
                src={conf.image}
                alt={conf.name}
                className="w-full h-50 object-cover"
              />
            </div>
          )}

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
            {Array.isArray(conf?.topics)
              ? conf?.topics?.join(", ")
              : "General Topics"}
          </div>

          <div className="text-xs text-[#fbbf24] mb-2">
            {renderPrice(conf.price)}
          </div>

          <div
            className="text-sm text-gray-200 mb-2 line-clamp-5"
            dangerouslySetInnerHTML={{ __html: conf.description }}
          />

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
