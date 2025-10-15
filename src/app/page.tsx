import Map from "@/app/components/sections/map/Map";
import { CategoriesSidebar } from "@/app/components/sections/categories-sidebar/CategoriesSidebar";
import { ConferencesList } from "@/app/components/sections/conferences-list/ConferencesList";
import { ConferencePopup } from "@/app/components/sections/conference-popup/ConferencePopup";
import { ConferenceFilters } from "@/app/components/modules/ConferenceFilters";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="h-[calc(100vh-4.5rem)] grid grid-cols-[1.4fr_2fr] overflow-hidden relative">
        <div className="bg-[#1E1F3A] overflow-y-auto dark-scrollbar">
          <CategoriesSidebar className="w-14 hover:w-62" />

          <div className="ml-14">
            <ConferenceFilters />
            <ConferencesList />
          </div>
        </div>

        <div className="h-full">
          <Map />
        </div>
      </div>

      <ConferencePopup />
    </main>
  );
}
