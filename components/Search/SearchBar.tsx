"use client";
import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:items-center mb-4">
      <input
        type="text"
        placeholder="Search for jobs or keywords"
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-2/3"
      />
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Search
      </button>
    </div>
  );
}
