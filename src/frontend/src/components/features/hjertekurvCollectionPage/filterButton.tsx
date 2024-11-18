import React, { useEffect, useRef, useState } from "react";

import "./filterButton.css";
import { HjertekurvFilterType } from "./sort";

type FilterButtonProps = {
  currentFilter: HjertekurvFilterType;
  onSelectFilter: (value: HjertekurvFilterType) => void;
};

export default function FilterButton({
  onSelectFilter,
  currentFilter,
}: FilterButtonProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions = [
    // { label: "Popularitet", value: HjertekurvFilterType.Popularity },
    { label: "Alfabetisk", value: HjertekurvFilterType.Alphabetic },
    { label: "Nyeste lagt til", value: HjertekurvFilterType.RecentlyCreated },
    {
      label: "Fletting - enkel",
      value: HjertekurvFilterType.LowestDifficultyFletting,
    },
    {
      label: "Fletting - vanskelig",
      value: HjertekurvFilterType.HighestDifficultyFletting,
    },
    {
      label: "Klipping - vanskelig",
      value: HjertekurvFilterType.LowestDifficultyKlipping,
    },
    {
      label: "Klipping - vanskelig",
      value: HjertekurvFilterType.HighestDifficultyKlipping,
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value: HjertekurvFilterType) => {
    onSelectFilter(value);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-buttons-container">
      <button
        onClick={toggleDropdown}
        className={`arrow-button ${isDropdownOpen ? "open" : ""}`}
      >
        Filtrer på
      </button>

      {isDropdownOpen && (
        <div ref={dropdownRef} className="dropdown">
          {dropdownOptions.map((option) => (
            <button
              className={`dropdown-option ${option.value === currentFilter ? "selected" : ""}`}
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
