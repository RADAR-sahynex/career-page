"use client";
import React from "react";
import FilterDropdown from "./FilterDropdown";

export default function FilterPanel() {
  return (
    <div className="flex flex-wrap gap-3">
      <FilterDropdown label="Distance or Location" />
      <FilterDropdown label="Time Type" />
      <FilterDropdown label="Remote Type" />
      <FilterDropdown label="More" />
    </div>
  );
}
