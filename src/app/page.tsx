import Map from "@/app/components/sections/map/Map";
import { ConferencesList } from "@/app/components/sections/conferences-list/ConferencesList";
import { CategoriesSidebar } from "@/app/components/sections/categories-sidebar/CategoriesSidebar";
import { ConferenceFilters } from "@/app/components/modules/ConferenceFilters";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="h-[calc(100vh-4.5rem)] grid grid-cols-[1.2fr_2fr]">
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
    </main>
  );
}
