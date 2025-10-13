"use client";

import { useEffect, useRef } from "react";
import { populateMap } from "./helpers/populate-map";
import { initializeMap } from "@/app/lib/maplibre-gl";
import { useConferences } from "@/hooks/useConferences";

import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const { conferences, key: conferencesKey } = useConferences();

  useEffect(() => {
    if (!mapContainer.current) return;

    mapRef.current = initializeMap(mapContainer.current);

    populateMap(mapRef.current, conferences);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    console.log("conferences", conferences);
    populateMap(mapRef.current, conferences);
  }, [conferencesKey]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full overflow-hidden"
      style={{ backgroundColor: "#191A33" }}
    />
  );
}
