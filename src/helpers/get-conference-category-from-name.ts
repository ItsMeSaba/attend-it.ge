import { ConferenceCategory } from "@/types/global";

const CATEGORY_MAP = {
  [ConferenceCategory.TechDevelopment]: ["eCommerce"],
  [ConferenceCategory.BusinessEntrepreneurship]: [
    "ბიზნეს",
    "წარმატება",
    "წარმატების",
    "ლიდერობა",
    "BUSINESS",
    "მართვის",
  ],
  [ConferenceCategory.DesignCreative]: [],
  [ConferenceCategory.ScienceEducation]: ["მეცნიერებების"],
  [ConferenceCategory.HealthcareBio]: [],
  [ConferenceCategory.FinanceEconomics]: ["უძრავ ქონებაზე"],
  [ConferenceCategory.CultureMedia]: ["სახელოვნებო"],
  [ConferenceCategory.EnvironmentSustainability]: [],
  [ConferenceCategory.GovernmentPolicy]: [],
  [ConferenceCategory.EngineeringIndustry]: [],
  [ConferenceCategory.All]: [],
};

export function getConferenceCategoryFromName(name: string) {
  const normalizedName = name.toLowerCase();

  for (const [category, words] of Object.entries(CATEGORY_MAP)) {
    const isMatch = words.some((word) => normalizedName.includes(word));

    if (isMatch) {
      return category;
    }
  }

  return ConferenceCategory.Other;
}
