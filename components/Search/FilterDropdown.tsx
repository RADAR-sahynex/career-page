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
        className={`px-6 py-3 rounded-xl text-sm font-medium flex items-center justify-between min-w-[140px] transition-all duration-200 shadow-sm hover:shadow-md ${
          isOpen
            ? "bg-green-50 border-green-500 text-green-700 shadow-md"
            : "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
        } border`}
      >
        <span>{label}</span>
        <span className={`ml-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 z-10 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
              onClick={() => {
                // Close the dropdown when an option is selected
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
