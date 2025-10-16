"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { formatDateRange } from "./helpers/format-date-range";

interface Props {
  conferences: any[];
}

export function ConferencePopup({ conferences }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const openId = searchParams?.get("open") ?? "";
  const [conference, setConference] = useState<any | null>(null);
  const loading = false;

  useEffect(() => {
    const conference = conferences.find((conf: any) => conf.id === openId);

    setConference(conference);
  }, [openId, conferences?.length]);

  if (!openId) return null;

  function closePopup() {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.delete("open");
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: "blur(7px)" }}
      lang="ka"
    >
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-sm"
        onClick={closePopup}
      />
      <div className="relative bg-[#212147] rounded-2xl shadow-2xl p-10 max-w-3xl w-full z-10 text-white gap-8 overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-300 hover:text-white"
          onClick={closePopup}
          aria-label="Close"
        >
          ×
        </button>

        {loading ? (
          <div className="py-20 text-center w-full">Loading...</div>
        ) : conference ? (
          <>
            {/* IMAGE COLUMN */}
            {conference.image && (
              <div className="flex-shrink-0 w-full overflow-hidden rounded-xl shadow-lg bg-[#1a1a35] self-start mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={conference.image}
                  alt={conference.name}
                  className="object-cover h-full w-full"
                  // style={{ maxHeight: 384 }}
                />
              </div>
            )}
            {/* DETAILS COLUMN */}
            <div className="flex-1 min-w-0">
              <div className="mb-2 text-xs uppercase opacity-80 font-semibold tracking-widest">
                {conference?.location?.city}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-3 leading-tight break-words">
                {conference.name}
              </div>
              <div className="mb-4">
                <span className="inline-block bg-indigo-700/30 px-2 py-1 rounded text-xs uppercase tracking-widest font-medium opacity-90">
                  {conference.category?.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </div>

              {conference.description && (
                <div
                  className="mb-4 text-base opacity-90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: conference.description }}
                />
              )}

              {conference.topics && !!conference.topics.length && (
                <div className="mb-4">
                  <span className="font-bold text-sm opacity-80">Topics: </span>
                  <span className="flex flex-wrap gap-2 mt-1">
                    {conference.topics.map((topic: string, idx: number) => (
                      <span
                        key={topic + idx}
                        className="bg-indigo-700/20 text-indigo-100 rounded px-3 py-1 text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              <div className="mb-4 flex flex-wrap gap-4 text-sm opacity-80">
                <div>
                  <strong>Date:</strong>{" "}
                  {conference.dates
                    ? formatDateRange(
                        conference.dates.start,
                        conference.dates.end
                      )
                    : "TBD"}
                </div>

                {conference?.price !== undefined &&
                  conference.price !== null && (
                    <div>
                      <strong>
                        {Array.isArray(conference.price) &&
                        conference.price.length === 1
                          ? "Price"
                          : "Price Range"}
                        :
                      </strong>{" "}
                      {Array.isArray(conference.price)
                        ? conference.price.length === 2
                          ? `${conference.price[0]} - ${conference.price[1]} GEL`
                          : `${conference.price[0]} GEL`
                        : `${conference.price} GEL`}
                    </div>
                  )}

                {conference.location && (
                  <div>
                    <strong>Location:</strong> {conference.location.city}
                  </div>
                )}
              </div>

              {conference.website && (
                <div className="mb-4">
                  <span className="font-bold text-sm opacity-80">
                    Website:{" "}
                  </span>
                  <a
                    href={conference.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-300 text-sm break-all"
                  >
                    {conference.website}
                  </a>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-8 justify-end">
                {conference.website && (
                  <a
                    href={conference.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 px-7 py-2 rounded text-sm font-semibold shadow hover:bg-indigo-700 transition"
                  >
                    Visit Website
                  </a>
                )}
                <button
                  className="bg-gray-700 px-5 py-2 rounded text-sm font-semibold shadow hover:bg-gray-600 transition"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="py-10 text-center text-gray-400 w-full">
            Conference not found.
          </div>
        )}
      </div>
    </div>
  );
}
