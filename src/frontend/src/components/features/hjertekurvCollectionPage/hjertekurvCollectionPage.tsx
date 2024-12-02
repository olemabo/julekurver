"use client";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { useRef, useState } from "react";
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

import "./hjertekurvCollectionCard.scss";
import Popover from "@/components/shared/ui/popover/popover";
import {
  FullHeart,
  FullScissor,
} from "@/components/shared/difficultyLevel/icons";

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
  const showResultsRef = useRef<HTMLDivElement | null>(null);
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
    if (showResultsRef) {
      showResultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
        Se vår komplette samling av hjertekurver med maler og bilder. Bruk søk
        og filtrering for å finne den perfekte kurven for ditt neste prosjekt.
        Du kan filtrere etter
        <Popover
          title="Vanskelighetsgrad"
          content={
            <>
              Vanskelighetsgraden på en hjertekurv bestemmes av to faktorer:
              <ul className="custom-ul">
                <li>
                  <b>Fletting:</b> Vurderer hvor utfordrende selve flettingen
                  er, angitt med et hjerte-ikon: <FullHeart size={"small"} />.
                  Dette kan inkludere antall strimler, strimlenes tykkelse og
                  variasjon i flettemønsteret, som alle kan gjøre prosessen mer
                  kompleks.
                </li>
                <li>
                  <b>Klipping:</b> Angir hvor utfordrende det er å klippe ut
                  kurven før flettingen starter, og er markert med et saks-ikon:{" "}
                  <FullScissor size={"small"} />. Noen kurver har detaljerte
                  motiver som krever presisjon og nøyaktighet under klipping.
                </li>
              </ul>
            </>
          }
        >
          vanskelighetsgrad
        </Popover>
        for å finne en kurv som passer dine ferdigheter.
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
      <div className="hits-and-filer-container" ref={showResultsRef}>
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
        <Paragraph>Ingen treff på søk/filter</Paragraph>
      )}
    </PageWrapper>
  );
}

export default HjertekurvCollectionPage;
