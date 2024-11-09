"use client";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import "./hjertekurvCollectionCard.css";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { useState } from "react";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HjertekurvCollectionCard from "./hjertekurvCollectionCard";
import { Category } from "./useCategories";
import Pagination, {
  PaginationOption,
} from "@/components/shared/ui/pagination/pagination";
import Search from "@/components/shared/ui/search/search";

export const defaultPaginationOptions = [
  { label: "12", value: 12 },
  { label: "24", value: 24 },
  { label: "48", value: 48 },
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

  const numberOfHits = hjertekurver?.length;

  const filteredHjertekurver = hjertekurver?.filter(
    (hjertekurv) =>
      hjertekurv.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        hjertekurv.categories?.some((cat) =>
          selectedCategories.includes(cat.id),
        )),
  );

  const uniqueCategories = Array.from(
    hjertekurver
      .flatMap((hjertekurv) => hjertekurv.categories || [])
      .reduce((map, category) => {
        map.set(category.id, category);
        return map;
      }, new Map<number, Category>())
      .values(),
  );

  const paginatedData = filteredHjertekurver.slice(
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
    <>
      <div style={{ marginBottom: "64px" }} className="default-page-container">
        <Breadcrumb
          linkItems={[
            { linkText: "Forside", href: "/" },
            { linkText: "Hjertekurver", href: "/hjertekurver" },
          ]}
        />
        <div>
          <Heading headingLevel="h1">Søk blant hjertekurver</Heading>
          <Paragraph>
            Søk blant alle våre hjertekurver ved hjelp av søkefunksjonaliteten
            vår. Sorter på vanskelighetsgrad og andre ting. Det er det bare å
            gjøre ja før du spør om ting, ikke sant?
          </Paragraph>
          <div>
            <div className="filter-container">
              <Search
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={"Søk etter hjertekurver her ..."}
              />
              <div className="filter-buttons">
                {uniqueCategories.map((value) => (
                  <label htmlFor={`toggleButton-${value.id}`} key={value.id}>
                    <input id={`toggleButton-${value.id}`} type="checkbox" />
                    <span
                      className={`filter-button ${selectedCategories.includes(value.id) ? "active" : ""}`}
                      onClick={() => handleCategoryToggle(value.id)}
                    >
                      {value.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {filteredHjertekurver && filteredHjertekurver.length > 0 ? (
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
                  total={numberOfHits}
                />
              </>
            ) : (
              <div>No content found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HjertekurvCollectionPage;
