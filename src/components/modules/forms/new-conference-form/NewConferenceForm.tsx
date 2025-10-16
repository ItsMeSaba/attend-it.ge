import { ConferenceCategory } from "@/types/global";
import React, { useState } from "react";
import { NameInput } from "./components/NameInput";
import { CategoryInput } from "./components/CategoryInput";
import { LocationInput } from "./components/LocationInput";
import { DatesInput } from "./components/DatesInput";
import { TopicsInput } from "./components/TopicsInput";
import { WebsiteInput } from "./components/WebsiteInput";
import { DescriptionInput } from "./components/DescriptionInput";
import { PriceInput } from "./components/PriceInput";
import { ImageInput } from "./components/ImageInput";

type Location = {
  city: string;
  coordinates: [number, number];
};

type Dates = {
  start: string;
  end: string;
};

type ConferenceFormData = {
  name: string;
  category: string;
  location: Location;
  dates: Dates;
  topics: string[];
  website: string;
  description: string;
  price: number[];
  image: string;
};

interface Props {
  onClose: () => void;
}

export function NewConferenceForm({ onClose }: Props) {
  const [form, setForm] = useState<ConferenceFormData>({
    name: "",
    category: "",
    location: {
      city: "",
      coordinates: [0, 0],
    },
    dates: {
      start: "",
      end: "",
    },
    topics: [],
    website: "",
    description: "",
    price: [],
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement logic to add conference (send to backend/state/etc)
    alert("Conference submitted!\n" + JSON.stringify(form, null, 2));
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Add New Conference</h2>
        <NameInput
          value={form.name}
          onChange={(name) => setForm((f) => ({ ...f, name }))}
        />
        <CategoryInput
          value={form.category}
          onChange={(category) => setForm((f) => ({ ...f, category }))}
        />
        <LocationInput
          city={form.location.city}
          coordinates={form.location.coordinates}
          onCityChange={(city) =>
            setForm((f) => ({ ...f, location: { ...f.location, city } }))
          }
          onCoordinatesChange={(coordinates) =>
            setForm((f) => ({ ...f, location: { ...f.location, coordinates } }))
          }
        />
        <DatesInput
          start={form.dates.start}
          end={form.dates.end}
          onStartChange={(start) =>
            setForm((f) => ({ ...f, dates: { ...f.dates, start } }))
          }
          onEndChange={(end) =>
            setForm((f) => ({ ...f, dates: { ...f.dates, end } }))
          }
        />
        <TopicsInput
          topics={form.topics}
          onTopicsChange={(topics) => setForm((f) => ({ ...f, topics }))}
        />
        <WebsiteInput
          value={form.website}
          onChange={(website) => setForm((f) => ({ ...f, website }))}
        />
        <DescriptionInput
          value={form.description}
          onChange={(description) => setForm((f) => ({ ...f, description }))}
        />
        <PriceInput
          prices={form.price}
          onPricesChange={(price) => setForm((f) => ({ ...f, price }))}
        />
        <ImageInput
          value={form.image}
          onChange={(image) => setForm((f) => ({ ...f, image }))}
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded mt-4 w-full transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
