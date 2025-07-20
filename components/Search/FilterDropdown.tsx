"use client";
import React from "react";

type FilterDropdownProps = {
  label: string;
};

export default function FilterDropdown({ label }: FilterDropdownProps) {
  return (
    <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
      {label} ▼
    </button>
  );
}
