"use client";
import React, { useState, useEffect, useRef } from "react";
import FilterDropdown from "./FilterDropdown";

export default function FilterPanel() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={panelRef} className="flex flex-wrap gap-3 w-full text-black">
      <FilterDropdown
        id="location"
        label="Location"
        options={["New York", "Bangalore", "London", "Remote"]}
        isOpen={openDropdown === "location"}
        onToggle={() => handleDropdownToggle("location")}
      />
      <FilterDropdown
        id="timeType"
        label="Time Type"
        options={["Full-Time", "Part-Time", "Contract"]}
        isOpen={openDropdown === "timeType"}
        onToggle={() => handleDropdownToggle("timeType")}
      />
      <FilterDropdown
        id="jobCategory"
        label="Job Category"
        options={["Engineering", "Design", "Marketing", "Sales"]}
        isOpen={openDropdown === "jobCategory"}
        onToggle={() => handleDropdownToggle("jobCategory")}
      />
      <FilterDropdown
        id="more"
        label="More"
        options={["Internships", "Remote Only", "Urgent Roles"]}
        isOpen={openDropdown === "more"}
        onToggle={() => handleDropdownToggle("more")}
      />
    </div>
  );
}
