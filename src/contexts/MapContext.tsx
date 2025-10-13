"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { Map as MapLibreMap } from "maplibre-gl";

interface MapContextType {
  map: MapLibreMap | null;
  setMap: (map: MapLibreMap | null) => void;
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
  children: ReactNode;
}

export function MapProvider({ children }: MapProviderProps) {
  const [map, setMap] = useState<MapLibreMap | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const value = useMemo(
    () => ({
      map,
      setMap,
      isLoaded,
      setIsLoaded,
    }),
    [map, isLoaded]
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}

export function useMapContext() {
  const context = useContext(MapContext);

  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapProvider");
  }

  return context;
}
