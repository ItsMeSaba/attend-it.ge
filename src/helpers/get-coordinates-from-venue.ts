const KNOWN_VENUE_COORDINATES: Record<string, [number, number]> = {
  "BPN Georgia": [44.780846, 41.719976],
  "Rooms Hotel Tbilisi": [44.788015, 41.705605],
  "შერატონ გრანდ თბილისი მეტეხი პალასი": [44.823363, 41.688895],
  "სასტუმრო ბილტმორი თბილისი": [44.794368, 41.702145],
  "Holiday Inn Tbilisi": [44.7775, 41.718889],
  "Paragraph Freedom Square, a Luxury Collection Hotel": [44.801292, 41.695076],
  "Courtyard by Marriott Tbilisi": [44.800749, 41.693475],
  "Hilton Garden Inn Tbilisi Riverview": [44.824722, 41.684722],
  "სასტუმრო ჰილტონ ბათუმი": [41.62595, 41.64935],
};

export function getCoordinatesFromVenue(
  venueName: string
): [number, number] | null {
  if (KNOWN_VENUE_COORDINATES[venueName]) {
    return KNOWN_VENUE_COORDINATES[venueName];
  }

  return null;
}
