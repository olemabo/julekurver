"use client";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { useState } from "react";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HjertekurvCollectionCard from "./hjertekurvCollectionCard";
import Pagination, {
  PaginationOption,
} from "@/components/shared/ui/pagination/pagination";
import Search from "@/components/shared/ui/search/search";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import FilterButton from "./filterButton";
import { filterAndSortHjertekurver, HjertekurvFilterType } from "./sort";
import CategoryFilterToggle from "./categories";

import "./hjertekurvCollectionCard.css";

export const defaultPaginationOptions = [
  { label: "12", value: 12 },
  { label: "24", value: 24 },
  { label: "48", value: 48 },
];

const linkItems = [
  { linkText: "Forside", href: "/" },
  { linkText: "Hjertekurver", href: "/hjertekurver" },
];

export type HjertekurvCollectionPageProps = {
  hjertekurver: Hjertekurv[];
};

export function HjertekurvCollectionPage({
  hjertekurver,
}: HjertekurvCollectionPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPaginationOptions[0].value);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(
    HjertekurvFilterType.Alphabetic,
  );

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

  const paginationUpdate = (pageNumber: number) => {
    setPaginationNumber(pageNumber);
  };

  const handlePageSizeChange = (option: PaginationOption | null) => {
    setPageSize(option?.value ?? pageSize);
    setPaginationNumber(1);
  };

  const handleCategoryToggle = (categoryId: number) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
    setPaginationNumber(1);
  };

  return (
    <PageWrapper>
      <Breadcrumb linkItems={linkItems} />
      <Heading headingLevel="h1">Søk blant hjertekurver</Heading>
      <Paragraph maxWidth={450}>
        Søk blant alle våre hjertekurver ved hjelp av søkefunksjonaliteten vår.
        Sorter på vanskelighetsgrad og andre ting. Det er det bare å gjøre ja
        før du spør om ting, ikke sant?
      </Paragraph>
      <div className="filter-container">
        <Search
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={"Søk etter hjertekurver"}
        />
        <CategoryFilterToggle
          hjertekurver={hjertekurver}
          selectedCategories={selectedCategories}
          handleCategoryToggle={(categoryId) =>
            handleCategoryToggle(categoryId)
          }
        />
      </div>
      <div className="hits-and-filer-container">
        <p>
          Antall treff: <b>{filteredAndSortedHjertekurver.length}</b>
        </p>
        <FilterButton
          currentFilter={selectedFilter}
          onSelectFilter={(filterValue) => setSelectedFilter(filterValue)}
        />
      </div>
      {filteredAndSortedHjertekurver?.length > 0 ? (
        <>
          <div className="hjertekurv-kartotek-section">
            {paginatedData.map((hjertekurv, index) => (
              <HjertekurvCollectionCard
                key={hjertekurv.name || index}
                hjertekurv={hjertekurv}
              />
            ))}
          </div>
          <Pagination
            selectOptions={defaultPaginationOptions}
            onChange={paginationUpdate}
            onSelectOptionChange={handlePageSizeChange}
            defaultPage={1}
            defaultPageSize={pageSize}
            total={filteredAndSortedHjertekurver.length}
          />
        </>
      ) : (
        <div>
          Ingen treff på søk/filter
          {/* <HjertekurvLoader /> */}
        </div>
      )}
    </PageWrapper>
  );
}

export default HjertekurvCollectionPage;
