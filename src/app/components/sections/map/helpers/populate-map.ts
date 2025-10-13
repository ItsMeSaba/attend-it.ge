import { addMarker } from "@/app/lib/maplibre-gl";

let markers: maplibregl.Marker[] = [];

export function populateMap(map: maplibregl.Map, conferences: any[]) {
  clearMarkers();

  conferences.forEach((conference) => {
    const marker = addMarker(
      map,
      conference.location.coordinates as [number, number]
    );

    markers.push(marker);
  });
}

function clearMarkers() {
  markers.forEach((marker) => {
    marker.remove();
  });
  markers.length = 0;
}
