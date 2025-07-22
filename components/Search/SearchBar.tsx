"use client";
import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-4">
      {/* Search input with icon */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for jobs or keywords"
          className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 sm:py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent font-secondary"
        />
        <span className="absolute left-3 top-3.5 sm:top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      {/* Search button */}
      <button className="bg-primary-red hover:bg-primary-blue text-white font-medium px-6 py-3 sm:py-2 rounded-md whitespace-nowrap transition-colors duration-200 w-full sm:w-auto font-secondary">
        Search
      </button>
    </div>
  );
}
