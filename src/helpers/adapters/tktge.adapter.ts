import { getConferenceCategoryFromName } from "../get-conference-category-from-name";
import { getCoordinatesFromVenue } from "../get-coordinates-from-venue";

const IMAGE_DOMAIN =
  "https://image.tkt.ge/unsafe/rs:fit:1920:/format:webp/plain/https://static.tkt.ge/img";

export function tktgeAdapter(tktgeConferences: any[]) {
  if (!Array.isArray(tktgeConferences)) return [];

  return tktgeConferences.map((item: any) => {
    const image = item.desktopImage || item.mobileImage || "";
    const venue = item.venues?.[0] || {};
    const location = venue.name || "Tbilisi";

    if (!getCoordinatesFromVenue(venue.name.trim()))
      console.log("no cord for venue: ", venue.name.trim());

    return {
      id: String(item.showId),
      name: item.name,
      category: getConferenceCategoryFromName(item.name),
      location: {
        city: location,
        coordinates: getCoordinatesFromVenue(venue.name.trim()),
      },
      dates: {
        start: item.fromDate?.slice(0, 10) || null,
        end: item.toDate?.slice(0, 10) || null,
      },
      topics: item.tags || [],
      website: "https://tkt.ge/conferences",
      description: item.description,
      price: item.maxPrice ? [item.minPrice] : [item.minPrice, item.maxPrice],
      image: `${IMAGE_DOMAIN}/${image}`,
    };
  });
}
