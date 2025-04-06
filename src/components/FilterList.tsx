"use client";
import { useState } from "react";

const filters = [
  "پیک اسنپ‌فود",
  "دارای کوپن",
  "دارای تخفیف",
  "فودپرو",
  "بصرفه",
  "خوش قیمت",
];

export default function () {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const toggleFilter = (filter: string): void => {
    setSelectedFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };
  return (
    <div className="space-y-4 p-6 shadow-md mt-2 container rounded-xl">
      {filters.map((filter) => (
        <div
          key={filter}
          className="flex items-center justify-between border-b last:border-b-0 last:pb-0 pb-4"
        >
          <span className="text-gray-500">{filter}</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={selectedFilter.includes(filter)}
              onChange={() => toggleFilter(filter)}
            />
            <div className="w-11 h-6 bg-gray-100 rounded-full peer-checked:bg-green-500 transition-all relative">
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${
                  selectedFilter.includes(filter)
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}
