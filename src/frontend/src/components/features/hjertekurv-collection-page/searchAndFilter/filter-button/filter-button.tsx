"use client";

import React, { useEffect, useRef, useState } from "react";
import { HjertekurvFilterType } from "../sort";
import "./filter-button.css";
import { getDictionary } from "@/localization/get-dictionary";

type Dictionary = Awaited<
  ReturnType<typeof getDictionary>
>["pages"]["hjertekurverKartotekPage"]["filters"];

type FilterButtonProps = {
  currentFilter: HjertekurvFilterType;
  onSelectFilter: (value: HjertekurvFilterType) => void;
  dictionary: Dictionary;
};

type FilterTextKeys = keyof Omit<Dictionary, "filterButtonLabel">;

export default function FilterButton({
  onSelectFilter,
  currentFilter,
  dictionary,
}: FilterButtonProps) {
  const getFilterText = (filterKey: FilterTextKeys) => {
    return { ...dictionary[filterKey] };
  };

  const filterTexts = {
    alphabetic: getFilterText("alphabetic"),
    recentlyCreated: getFilterText("recentlyCreated"),
    lowestDifficultyFletting: getFilterText("lowestDifficultyFletting"),
    highestDifficultyFletting: getFilterText("highestDifficultyFletting"),
    lowestDifficultyKlipping: getFilterText("lowestDifficultyKlipping"),
    highestDifficultyKlipping: getFilterText("highestDifficultyKlipping"),
    popularity: getFilterText("popularity"),
    filterButtonLabel: dictionary.filterButtonLabel,
  };

  const {
    filterButtonLabel,
    alphabetic,
    recentlyCreated,
    lowestDifficultyFletting,
    highestDifficultyFletting,
    lowestDifficultyKlipping,
    highestDifficultyKlipping,
    popularity,
  } = filterTexts;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dropdownOptions = [
    {
      label: recentlyCreated.label,
      description: recentlyCreated.description,
      value: HjertekurvFilterType.RecentlyCreated,
    },
    {
      label: alphabetic.label,
      description: alphabetic.description,
      value: HjertekurvFilterType.Alphabetic,
    },
    {
      label: lowestDifficultyFletting.label,
      description: lowestDifficultyFletting.description,
      value: HjertekurvFilterType.LowestDifficultyFletting,
    },
    {
      label: highestDifficultyFletting.label,
      description: highestDifficultyFletting.description,
      value: HjertekurvFilterType.HighestDifficultyFletting,
    },
    {
      label: lowestDifficultyKlipping.label,
      description: lowestDifficultyKlipping.description,
      value: HjertekurvFilterType.LowestDifficultyKlipping,
    },
    {
      label: highestDifficultyKlipping.label,
      description: highestDifficultyKlipping.description,
      value: HjertekurvFilterType.HighestDifficultyKlipping,
    },
    {
      label: popularity.label,
      description: popularity.description,
      value: HjertekurvFilterType.Popularity,
    },
  ];

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (value: HjertekurvFilterType) => {
    onSelectFilter(value);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      buttonRef.current &&
      !buttonRef.current.contains(target)
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
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`arrow-button ${isDropdownOpen ? "open" : ""}`}
      >
        {filterButtonLabel}
      </button>

      {isDropdownOpen && (
        <div ref={dropdownRef} className="dropdown">
          {dropdownOptions.map((option) => (
            <button
              className={`dropdown-option ${option.value === currentFilter ? "selected" : ""}`}
              aria-label={option.description}
              title={option.description}
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
