"use client";

import { useEffect, useRef } from "react";
import { populateMap } from "./helpers/populate-map";
import { initializeMap } from "@/lib/maplibre-gl";
import { useConferences } from "@/hooks/useConferences";
import { useMapContext } from "@/contexts/MapContext";

import "maplibre-gl/dist/maplibre-gl.css";

interface Props {
  conferences: any[];
}

export default function Map({ conferences }: Props) {
  const { map, isLoaded, setMap, setIsLoaded } = useMapContext();
  const { conferences: formattedConferences, key: conferencesKey } =
    useConferences(conferences);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = initializeMap(mapContainer.current);

    map.on("load", () => {
      setMap(map);
      setIsLoaded(true);
      populateMap(map, formattedConferences);
    });

    return () => {
      map?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    populateMap(map, formattedConferences);
  }, [conferencesKey, isLoaded]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full overflow-hidden"
      style={{ backgroundColor: "#191A33" }}
    />
  );
}
