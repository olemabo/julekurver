"use client";

import { useRef, useState } from "react";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Pagination, {
  PaginationOption,
} from "@/components/shared/ui/pagination/pagination";
import Search from "@/components/shared/ui/search/search";
import FilterButton from "./filter-button/filter-button";
import { filterAndSortHjertekurver, HjertekurvFilterType } from "./sort";
import CategoryFilterToggle from "./categories/categories";
import { Hjertekurv } from "@/types/hjertekurv";
import { LocaleProps } from "@/config/i18n";
import HjertekurvCollectionCard from "./collection-card/hjertekurv-collection-card";
import styles from "./search-and-filter.module.css";
import { getDictionary } from "@/localization/get-dictionary";

export const defaultPaginationOptions = [
  { label: "12", value: 12 },
  { label: "24", value: 24 },
  { label: "48", value: 48 },
];

export type SearchAndFilterSectionProps = {
  hjertekurver: Hjertekurv[];
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["pages"]["hjertekurverKartotekPage"];
} & LocaleProps;

export function SearchAndFilterSection({
  hjertekurver,
  lang,
  dictionary,
}: SearchAndFilterSectionProps) {
  const { placeholder, resultsCount, noResults } = dictionary.search;

  const [searchQuery, setSearchQuery] = useState("");
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPaginationOptions[0].value);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(
    HjertekurvFilterType.RecentlyCreated,
  );

  const showResultsRef = useRef<HTMLDivElement | null>(null);

  const filteredAndSortedHjertekurver = filterAndSortHjertekurver(
    hjertekurver,
    searchQuery,
    selectedCategories,
    selectedFilter,
  );

  const paginatedData = filteredAndSortedHjertekurver.slice(
    (paginationNumber - 1) * pageSize,
    (paginationNumber - 1) * pageSize + pageSize,
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  const handleCategoryToggle = (categoryId: number) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
    setPaginationNumber(1);
  };

  const handleFilterChange = (filterValue: HjertekurvFilterType) =>
    setSelectedFilter(filterValue);

  const handlePaginationUpdate = (pageNumber: number) => {
    setPaginationNumber(pageNumber);
    scrollToResults();
  };

  const handlePageSizeChange = (option: PaginationOption | null) => {
    setPageSize(option?.value ?? pageSize);
    setPaginationNumber(1);
  };

  const scrollToResults = () => {
    showResultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <Search onChange={handleSearchChange} placeholder={placeholder} />
        <CategoryFilterToggle
          hjertekurver={hjertekurver}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
      </div>
      <div className={styles.hitsAndFilterContainer} ref={showResultsRef}>
        <Paragraph>
          {resultsCount} <b>{filteredAndSortedHjertekurver.length}</b>
        </Paragraph>
        <FilterButton
          currentFilter={selectedFilter}
          onSelectFilter={handleFilterChange}
          dictionary={dictionary.filters}
        />
      </div>
      {filteredAndSortedHjertekurver?.length > 0 ? (
        <>
          <div className="hjertekurv-kartotek-section">
            {paginatedData.map((hjertekurv, index) => (
              <HjertekurvCollectionCard
                lang={lang}
                key={hjertekurv.name || index}
                hjertekurv={hjertekurv}
              />
            ))}
          </div>
          <Pagination
            selectOptions={defaultPaginationOptions}
            onChange={handlePaginationUpdate}
            onSelectOptionChange={handlePageSizeChange}
            defaultPageSize={pageSize}
            total={filteredAndSortedHjertekurver.length}
          />
        </>
      ) : (
        <Paragraph>{noResults}</Paragraph>
      )}
    </>
  );
}

export default SearchAndFilterSection;
