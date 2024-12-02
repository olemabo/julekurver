import Image from "next/image";
import React, { useState } from "react";
import "./pagination.scss";

export type PaginationOption = {
  label: string;
  value: number;
};

export const defaultPaginationOptions = [
  { label: "10", value: 10 },
  { label: "25", value: 25 },
  { label: "100", value: 100 },
];

interface PaginationProps {
  total: number;
  defaultPage?: number;
  defaultPageSize?: number;
  selectOptions?: Array<PaginationOption>;
  onChange?: (page: number) => void;
  onSelectOptionChange?: (option: PaginationOption | null) => void;
}

export default function Pagination({
  defaultPage,
  selectOptions,
  defaultPageSize,
  total,
  onChange,
  onSelectOptionChange,
}: PaginationProps) {
  const [page, setPage] = useState(defaultPage ?? 1);
  const [pageSize, setPageSize] = useState(defaultPageSize ?? 10);

  const currentSelectOptions = selectOptions ?? defaultPaginationOptions;

  const numberOfBoxes = Math.ceil(total / pageSize);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (onChange) {
      onChange(newPage);
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize);
    setPage(1);
    if (onSelectOptionChange) {
      const selectedOption = currentSelectOptions.find(
        (option) => option.value === newSize,
      );
      onSelectOptionChange(selectedOption ?? null);
    }
  };

  const minPage = pageSize * (page - 1) + 1;
  const maxPage = page === numberOfBoxes ? total : pageSize * page;

  const showString = `${minPage}-${maxPage} av ${total.toString()}`;

  return (
    <div className="pagination-container">
      <div className="option-container">
        <select
          className="custom-select"
          id="pagination-options"
          onChange={handlePageSizeChange}
          value={pageSize}
        >
          {currentSelectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor="pagination-options">{showString}</label>
      </div>
      <div className="pagination-buttons-container">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <Image
            className="left"
            src="/images/icons/pagination/arrow_left.svg"
            alt="Arrow down icon"
            width={32}
            height={18}
          />
        </button>

        <div className="page-buttons">
          {Array.from({ length: numberOfBoxes }, (_, i) => (
            <button
              key={i + 1}
              className={`page-button ${page === i + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          disabled={page === numberOfBoxes}
          onClick={() => handlePageChange(page + 1)}
        >
          <Image
            className="right"
            src="/images/icons/pagination/arrow_right.svg"
            alt="Arrow down icon"
            width={32}
            height={18}
          />
        </button>
      </div>
    </div>
  );
}
