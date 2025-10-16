import Map from "@/components/sections/map/Map";

import { CategoriesSidebar } from "@/components/sections/categories-sidebar/CategoriesSidebar";
import { ConferencesList } from "@/components/sections/conferences-list/ConferencesList";
import { ConferencePopup } from "@/components/sections/conference-popup/ConferencePopup";
import { ConferenceFilters } from "@/components/modules/ConferenceFilters";
import { getTktgeConferences } from "@/services/get-tktge-conferences";

export default async function Home() {
  const tktgeConferences = await getTktgeConferences();

  return (
    <main className="flex-1">
      <div className="h-[calc(100vh-4.5rem)] grid grid-cols-[1.4fr_2fr] overflow-hidden relative">
        <div className="bg-[#1E1F3A] overflow-y-auto dark-scrollbar">
          <CategoriesSidebar
            conferences={tktgeConferences}
            className="w-14 hover:w-70"
          />

          <div className="ml-14">
            <ConferenceFilters />
            <ConferencesList conferences={tktgeConferences} />
          </div>
        </div>

        <div className="h-full">
          <Map conferences={tktgeConferences} />
        </div>
      </div>

      <ConferencePopup conferences={tktgeConferences} />
    </main>
  );
}
