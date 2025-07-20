"use client";
import React from "react";

type Props = {
  id: string;
  label: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  greenBorder?: boolean;
};

export default function FilterDropdown({ id, label, options, isOpen, onToggle, greenBorder }: Props) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`border px-4 py-2 rounded-md text-sm font-medium flex items-center justify-between min-w-[140px] transition-colors ${
          isOpen
            ? "border-orange-600 text-orange-700 bg-orange-50"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
      >
        {label} ▼
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-1 z-10 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onToggle();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
