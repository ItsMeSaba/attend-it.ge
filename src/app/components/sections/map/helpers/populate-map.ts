import { addMarker } from "@/app/lib/maplibre-gl";
import Conferences from "@/app/data/conferences";

export function populateMap(map: maplibregl.Map) {
  map.on("load", () => {
    Conferences.forEach((conference) => {
      addMarker(map, conference.location.coordinates as [number, number]);
    });
  });
}
