import maplibregl from "maplibre-gl";

// Initialize map configuration
export const initializeMap = (
  container: string | HTMLElement,
  options: Partial<maplibregl.MapOptions> = {}
): maplibregl.Map => {
  // Default map options
  const defaultOptions: maplibregl.MapOptions = {
    container,
    style:
      "https://api.maptiler.com/maps/basic-v2/style.json?key=1DZNUh7NdUfAjH5tB9xs",
    // "https://api.maptiler.com/maps/hybrid/style.json?key=RamId15OVEciozINf0ah",
    center: [44.793, 41.709], // Tbilisi, Georgia
    zoom: 11, // Closer in on Tbilisi
  };

  // Merge default options with provided options
  const mapOptions = {
    ...defaultOptions,
    ...options,
  };

  // Create and return the map instance
  return new maplibregl.Map(mapOptions);
};

// Helper function to check if map is loaded
export const isMapLoaded = (map: maplibregl.Map): boolean => {
  return !!(map.loaded() && map.isStyleLoaded());
};

// Helper function to add a marker to the map
export const addMarker = (
  map: maplibregl.Map,
  lngLat: [number, number],
  options: Partial<maplibregl.MarkerOptions> = {}
): maplibregl.Marker => {
  const marker = new maplibregl.Marker(options).setLngLat(lngLat).addTo(map);
  return marker;
};

// Helper function to fly to a location
export const flyToLocation = (
  map: maplibregl.Map,
  lngLat: [number, number],
  zoom?: number,
  options: Partial<maplibregl.AnimationOptions & maplibregl.CameraOptions> = {}
): void => {
  map.flyTo({
    center: lngLat,
    zoom: zoom || map.getZoom(),
    ...options,
  });
};
