"use client";

import { useEffect, useRef } from "react";
import { populateMap } from "./helpers/populate-map";
import { initializeMap } from "@/app/lib/maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapRef.current = initializeMap(mapContainer.current);

    populateMap(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full overflow-hidden"
      style={{ backgroundColor: "#191A33" }}
    />
  );
}
