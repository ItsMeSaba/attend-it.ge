import { addMarker } from "@/app/lib/maplibre-gl";

const markers: maplibregl.Marker[] = [];

export function populateMap(map: maplibregl.Map, conferences: any[]) {
  clearMarkers();

  conferences.forEach((conference) => {
    const marker = addMarker(
      map,
      conference.location.coordinates as [number, number]
    );

    marker.getElement().addEventListener("click", () => {
      const params = new URLSearchParams(window.location.search);
      params.set("open", conference.id);

      const newUrl = window.location.pathname + "?" + params.toString();

      window.history.replaceState({}, "", newUrl);
    });

    markers.push(marker);
  });
}

function clearMarkers() {
  markers.forEach((marker) => {
    marker.remove();
  });
  markers.length = 0;
}
