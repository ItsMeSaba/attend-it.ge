import { ConferenceCategory } from "@/types/global";

export function getConferenceCountByCategory(
  conferences: any[],
  category: ConferenceCategory
) {
  if (!category) return 0;

  if (category === ConferenceCategory.All) return conferences.length;

  const conferenceCategory =
    ConferenceCategory[category as keyof typeof ConferenceCategory];

  return (
    conferences.filter(
      (conference) => conference.category === conferenceCategory
    ).length ?? 0
  );
}
