import maplibregl from "maplibre-gl";

export const initializeMap = (
  container: string | HTMLElement,
  options: Partial<maplibregl.MapOptions> = {}
): maplibregl.Map => {
  const defaultOptions: maplibregl.MapOptions = {
    container,
    style:
      "https://api.maptiler.com/maps/basic-v2/style.json?key=1DZNUh7NdUfAjH5tB9xs",
    center: [44.793, 41.709],
    zoom: 11,
  };

  const mapOptions = {
    ...defaultOptions,
    ...options,
  };

  const map = new maplibregl.Map(mapOptions);

  return map;
};

export const isMapLoaded = (map: maplibregl.Map): boolean => {
  return !!(map.loaded() && map.isStyleLoaded());
};

export const addMarker = (
  map: maplibregl.Map,
  lngLat: [number, number],
  options: Partial<maplibregl.MarkerOptions> = {}
): maplibregl.Marker => {
  const marker = new maplibregl.Marker(options).setLngLat(lngLat).addTo(map);
  return marker;
};

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
