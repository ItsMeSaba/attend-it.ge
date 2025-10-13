import Conferences from "@/app/data/conferences.json";

export function ConferencesList() {
  return (
    <div className="flex flex-col gap-6 relative z-10">
      {Conferences.map((conf) => (
        <div
          key={conf.id}
          className="rounded-lg bg-[#23244A] p-4 shadow border border-[#222342]"
        >
          <h2 className="text-lg font-bold text-white mb-1">{conf.name}</h2>

          <div className="text-sm text-[#9ca3af] mb-1">
            {conf.location.city}, {conf.location.country} &mdash;{" "}
            {conf.location.venue}
          </div>

          <div className="text-xs text-[#cbd5e1] mb-2">
            {conf.dates.start} &ndash; {conf.dates.end}
          </div>

          <div className="text-xs text-[#818cf8] mb-2">
            {conf.topics && conf.topics.length
              ? conf.topics.join(", ")
              : "General Topics"}
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
