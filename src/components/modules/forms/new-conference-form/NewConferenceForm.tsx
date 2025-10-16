import { ConferenceCategory } from "@/types/global";
import React, { useState } from "react";

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

const categories = Object.values(ConferenceCategory).filter(
  (c) => c !== ConferenceCategory.All
);

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

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

function NameInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Name:
        <input
          type="text"
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </label>
    </div>
  );
}

function CategoryInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Category:
        <select
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

function LocationInput({
  city,
  coordinates,
  onCityChange,
  onCoordinatesChange,
}: {
  city: string;
  coordinates: [number, number];
  onCityChange: (city: string) => void;
  onCoordinatesChange: (coords: [number, number]) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        City:
        <select
          className={inputClass}
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          required
        >
          <option value="">Select city</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Batumi">Batumi</option>
          <option value="Kutaisi">Kutaisi</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <div className="mt-2 flex gap-3">
        <label className="flex-1">
          <span className="text-sm">Longitude</span>
          <input
            type="number"
            step="any"
            className={inputClass}
            value={coordinates[0]}
            onChange={(e) =>
              onCoordinatesChange([parseFloat(e.target.value), coordinates[1]])
            }
            placeholder="Longitude"
            required
          />
        </label>
        <label className="flex-1">
          <span className="text-sm">Latitude</span>
          <input
            type="number"
            step="any"
            className={inputClass}
            value={coordinates[1]}
            onChange={(e) =>
              onCoordinatesChange([coordinates[0], parseFloat(e.target.value)])
            }
            placeholder="Latitude"
            required
          />
        </label>
      </div>
    </div>
  );
}

function DatesInput({
  start,
  end,
  onStartChange,
  onEndChange,
}: {
  start: string;
  end: string;
  onStartChange: (val: string) => void;
  onEndChange: (val: string) => void;
}) {
  return (
    <div className="mb-4 flex gap-4">
      <label className="flex-1">
        <span className={labelClass}>Start Date:</span>
        <input
          type="date"
          className={inputClass}
          value={start}
          onChange={(e) => onStartChange(e.target.value)}
          required
        />
      </label>
      <label className="flex-1">
        <span className={labelClass}>End Date:</span>
        <input
          type="date"
          className={inputClass}
          value={end}
          onChange={(e) => onEndChange(e.target.value)}
          required
        />
      </label>
    </div>
  );
}

function TopicsInput({
  topics,
  onTopicsChange,
}: {
  topics: string[];
  onTopicsChange: (topics: string[]) => void;
}) {
  const [input, setInput] = useState("");
  const addTopic = () => {
    if (input.trim() && !topics.includes(input.trim())) {
      onTopicsChange([...topics, input.trim()]);
      setInput("");
    }
  };

  const removeTopic = (topic: string) => {
    onTopicsChange(topics.filter((t) => t !== topic));
  };

  return (
    <div className="mb-4">
      <label className={labelClass}>
        Topics:
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            className={inputClass + " flex-1"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTopic();
              }
            }}
            placeholder="Topic..."
          />

          <button
            type="button"
            onClick={addTopic}
            className="bg-blue-500 text-white px-3 mt-1 rounded hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap">
          {topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center bg-gray-200 text-gray-700 text-sm rounded px-2 py-1 mr-2 mb-2"
            >
              {topic}{" "}
              <button
                type="button"
                className="ml-1 p-1 rounded text-gray-500 hover:text-red-600"
                onClick={() => removeTopic(topic)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </label>
    </div>
  );
}

function WebsiteInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Website:
        <input
          type="url"
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="https://example.com"
        />
      </label>
    </div>
  );
}

function DescriptionInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Description:
        <textarea
          className={inputClass + " resize-vertical min-h-[80px]"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="Enter a description..."
        />
      </label>
    </div>
  );
}

function PriceInput({
  prices,
  onPricesChange,
}: {
  prices: number[];
  onPricesChange: (ps: number[]) => void;
}) {
  const [input, setInput] = useState("");

  const addPrice = () => {
    const val = parseFloat(input);
    if (!isNaN(val) && !prices.includes(val)) {
      onPricesChange([...prices, val]);
      setInput("");
    }
  };

  const removePrice = (price: number) => {
    onPricesChange(prices.filter((p) => p !== price));
  };

  return (
    <div className="mb-4">
      <label className={labelClass}>
        Price(s) (GEL):
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            step="any"
            className={inputClass + " flex-1"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addPrice();
              }
            }}
            placeholder="Price"
          />
          <button
            type="button"
            onClick={addPrice}
            className="bg-blue-500 text-white px-3 mt-1 rounded hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap">
          {prices.map((price) => (
            <span
              key={price}
              className="inline-flex items-center bg-gray-200 text-gray-700 text-sm rounded px-2 py-1 mr-2 mb-2"
            >
              {price}₾{" "}
              <button
                type="button"
                className="ml-1 p-1 rounded text-gray-500 hover:text-red-600"
                onClick={() => removePrice(price)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </label>
    </div>
  );
}

function ImageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        Image URL:
        <input
          type="url"
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com/image.png"
        />
      </label>
    </div>
  );
}
