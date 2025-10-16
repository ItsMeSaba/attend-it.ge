import React, { useState } from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface PriceInputProps {
  prices: number[];
  onPricesChange: (ps: number[]) => void;
}

export function PriceInput({ prices, onPricesChange }: PriceInputProps) {
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
