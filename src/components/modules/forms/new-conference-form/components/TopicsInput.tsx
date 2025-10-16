import React, { useState } from "react";

const inputClass =
  "block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClass = "block font-medium mb-1";

interface TopicsInputProps {
  topics: string[];
  onTopicsChange: (topics: string[]) => void;
}

export function TopicsInput({ topics, onTopicsChange }: TopicsInputProps) {
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
