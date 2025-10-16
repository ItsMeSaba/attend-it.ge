import { addMarker } from "@/lib/maplibre-gl";

const markers: maplibregl.Marker[] = [];

export function populateMap(map: maplibregl.Map, conferences: any[]) {
  clearMarkers();

  conferences.forEach((conference) => {
    if (!conference.location.coordinates) return;

    const marker = addMarker(
      map,
      conference.location.coordinates as [number, number]
    );

    marker.getElement().id = `conference-pin-${conference.id}`;

    marker.getElement().addEventListener("click", () => {
      const params = new URLSearchParams(window.location.search);
      params.set("open", conference.id);

      const newUrl = window.location.pathname + "?" + params.toString();

      window.history.replaceState({}, "", newUrl);
    });

    marker.getElement().addEventListener("mouseenter", () => {
      console.log("hover");
      const conferenceCard = document.getElementById(
        `conference-card-${conference.id}`
      );

      if (conferenceCard) {
        conferenceCard.scrollIntoView({ behavior: "smooth", block: "center" });
        conferenceCard.classList.add("active-conference-card");
      }
    });

    marker.getElement().addEventListener("mouseleave", () => {
      const conferenceCard = document.getElementById(
        `conference-card-${conference.id}`
      );

      if (conferenceCard) {
        conferenceCard.classList.remove("active-conference-card");
      }
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
