import Map from "@/components/sections/map/Map";

import { CategoriesSidebar } from "@/components/sections/categories-sidebar/CategoriesSidebar";
import { ConferencesList } from "@/components/sections/conferences-list/ConferencesList";
import { ConferencePopup } from "@/components/sections/conference-popup/ConferencePopup";
import { ConferenceFilters } from "@/components/modules/ConferenceFilters";
import { tktgeAdapter } from "@/helpers/adapters/tktge.adapter";

export default async function Home() {
  const tktgeConferences = await fetch(
    "https://gateway.tkt.ge/Shows/List?categoryId=7&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77"
  );

  const tktgeConferencesData = await tktgeConferences.json();

  return (
    <main className="flex-1">
      <div className="h-[calc(100vh-4.5rem)] grid grid-cols-[1.4fr_2fr] overflow-hidden relative">
        <div className="bg-[#1E1F3A] overflow-y-auto dark-scrollbar">
          <CategoriesSidebar
            conferences={[...tktgeAdapter(tktgeConferencesData.shows)]}
            className="w-14 hover:w-70"
          />

          <div className="ml-14">
            <ConferenceFilters />
            <ConferencesList
              conferences={[...tktgeAdapter(tktgeConferencesData.shows)]}
            />
          </div>
        </div>

        <div className="h-full">
          <Map conferences={[...tktgeAdapter(tktgeConferencesData.shows)]} />
        </div>
      </div>

      <ConferencePopup
        conferences={[...tktgeAdapter(tktgeConferencesData.shows)]}
      />
    </main>
  );
}
