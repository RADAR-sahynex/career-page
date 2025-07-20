"use client";
import React from "react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 w-full mb-4">
      {/* Search input with icon */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for jobs or keywords"
          className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      {/* Search button */}
      <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-2 rounded-md whitespace-nowrap">
        Search
      </button>
    </div>
  );
}
