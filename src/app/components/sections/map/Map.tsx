"use client";

import { useEffect, useRef } from "react";
import { populateMap } from "./helpers/populate-map";
import { initializeMap } from "@/app/lib/maplibre-gl";
import { useConferences } from "@/hooks/useConferences";
import { useMapContext } from "@/contexts/MapContext";

import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const { map, isLoaded, setMap, setIsLoaded } = useMapContext();
  const { conferences, key: conferencesKey } = useConferences();
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = initializeMap(mapContainer.current);

    map.on("load", () => {
      setMap(map);
      setIsLoaded(true);
      populateMap(map, conferences);
    });

    return () => {
      map?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    populateMap(map, conferences);
  }, [conferencesKey, isLoaded]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full overflow-hidden"
      style={{ backgroundColor: "#191A33" }}
    />
  );
}
