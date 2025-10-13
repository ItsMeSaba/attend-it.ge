"use client";

import Conferences from "@/app/data/conferences";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ConferenceCategory } from "@/types/global";

export function useConferences() {
  const searchParams = useSearchParams();

  const category = searchParams?.get("category") || "All";
  const location = searchParams?.get("location") || "All";
  const sortby = searchParams?.get("sortby") || "soonest";

  const filtered = useMemo(() => {
    let results = Conferences;

    results = filterByCategory(results, category);
    results = filterByLocation(results, location);

    const sorted = sortBy(results, sortby);

    return sorted;
  }, [category, location, sortby]);

  return {
    conferences: filtered,
  };
}

function filterByCategory(conferences: any[], category: string) {
  if (!category || category === "All") {
    return conferences;
  }

  return conferences.filter(
    (conf) =>
      conf.category ===
      ConferenceCategory[category as keyof typeof ConferenceCategory]
  );
}

function filterByLocation(conferences: any[], location: string) {
  if (!location || location === "All") {
    return conferences;
  }

  if (location === "others") {
    return conferences.filter(
      (conf) => !["Tbilisi", "Batumi", "Kutaisi"].includes(conf.location.city)
    );
  }

  return conferences.filter((conf) => conf.location.city === location);
}

function sortBy(conferences: any[], sortby: string) {
  if (sortby === "Closest") {
    return conferences.sort((a, b) => {
      const aStart = new Date(a.dates.start).getTime();
      const bStart = new Date(b.dates.start).getTime();
      return aStart - bStart;
    });
  }

  if (sortby === "Cheapest") {
    return conferences.sort((a, b) => a.price?.[0] - b.price?.[0]);
  }

  // Default to soonest
  return conferences.sort(
    (a, b) =>
      new Date(a.dates.start).getTime() - new Date(b.dates.start).getTime()
  );
}
