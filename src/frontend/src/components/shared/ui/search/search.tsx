import React, { forwardRef, useEffect, useState } from "react";
import "./search.scss";
import Button from "../button/button";

type SearchProps = {
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  isLoading?: boolean;
  onClick?: (query: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      placeholder,
      label,
      defaultValue,
      isLoading,
      onClick,
      onChange,
    }: SearchProps,
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue || "");

    useEffect(() => {
      setInputValue(defaultValue || "");
    }, [defaultValue]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
      setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
      if (inputValue.trim()) {
        onClick?.(inputValue.trim());
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearchClick();
      }
    };

    return (
      <div className="search-container">
        {label && <label>{label}</label>}
        <div className="input-container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 50 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="22" stroke="black" strokeWidth="6.5" />
            <line
              x1="25"
              y1="50"
              x2="25"
              y2="95"
              stroke="black"
              strokeWidth="5"
            />
          </svg>
          <input
            ref={ref}
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            className="jds-search"
            type="search"
          />
          {onClick && (
            // <button onClick={handleSearchClick} disabled={isLoading}>
            //   {isLoading ? <div className="spinner"></div> : "Søk"}
            // </button>
            <Button
              label="Søk"
              onClick={handleSearchClick}
              disabled={isLoading}
            ></Button>
          )}
        </div>
      </div>
    );
  },
);

Search.displayName = "Search";

export default Search;
