"use client";

import { createBackendUrl } from "@/lib/api/backendApiUrl";
import { useCallback, useEffect, useState } from "react";
import Search from "@/components/shared/ui/search/search";
import { useRouter } from "next/navigation";
import { SearchResultItem } from "./SearchResultItem";
import Pagination, {
  PaginationOption,
} from "@/components/shared/ui/pagination/pagination";
import { useSearchPageResultTexts } from "./useTexts";
import "./SearchPage.scss";

export enum PageType {
  StandardPage = "standardPage",
  Hjertekurv = "hjertekurvPage",
}

export interface SearchHits {
  url: string;
  title: string;
  description: string;
  type: PageType;
  imageUrl?: string;
}

export const defaultPaginationOptions = [
  { label: "10", value: 10 },
  { label: "25", value: 25 },
  { label: "100", value: 100 },
];

export default function SearchAndResult() {
  const {
    searchPlaceholder,
    searchResultsText,
    noResultsText,
    noResultsMessage,
  } = useSearchPageResultTexts();
  const apiBaseUrl = createBackendUrl();
  const router = useRouter();

  const [searchResults, setSearchResults] = useState<SearchHits[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(defaultPaginationOptions[0].value);
  const [paginationNumber, setPaginationNumber] = useState(1);

  const paginationUpdate = (pageNumber: number) => {
    setPaginationNumber(pageNumber);
  };

  const handlePageSizeChange = (option: PaginationOption | null) => {
    setPageSize(option?.value ?? pageSize);
    setPaginationNumber(1);
  };

  const fetchSearchResults = useCallback(
    (searchQuery: string) => {
      setLoading(true);

      fetch(`${apiBaseUrl}/api/webpage-search-api/?query=${searchQuery}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((hits) => {
          setSearchResults(hits ?? []);
          router.push(`?query=${searchQuery}`);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [apiBaseUrl, router],
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get("query");
    if (initialQuery) {
      setQuery(initialQuery);
      fetchSearchResults(initialQuery);
    }
  }, [fetchSearchResults]);

  const handleSearch = (currentQuery: string) => {
    if (currentQuery && currentQuery !== query) {
      fetchSearchResults(currentQuery);
      setQuery(currentQuery);
    }
  };

  const numberOfHits = searchResults?.length ?? 0;
  const showSearchResults = searchResults && numberOfHits > 0;

  const paginatedData = searchResults.slice(
    (paginationNumber - 1) * pageSize,
    (paginationNumber - 1) * pageSize + pageSize,
  );

  return (
    <>
      <Search
        defaultValue={query}
        placeholder={searchPlaceholder}
        onClick={handleSearch}
        isLoading={loading}
      />
      <div style={{ maxWidth: "700px" }}>
        {showSearchResults ? (
          <div>
            <label style={{ display: "block", marginBottom: "12px" }}>
              {` ${searchResultsText.replace("{hits}", numberOfHits?.toString()).replace("{query}", query)}`}
            </label>
            <ul>
              {paginatedData.map((hit) => (
                <SearchResultItem query={query} key={hit.url} hit={hit} />
              ))}
            </ul>
            <Pagination
              selectOptions={defaultPaginationOptions}
              onChange={paginationUpdate}
              onSelectOptionChange={handlePageSizeChange}
              defaultPage={1}
              defaultPageSize={pageSize}
              total={numberOfHits}
            />
          </div>
        ) : (
          <>
            <p style={{ margin: 0 }}>
              <b>{noResultsText.replace("{query}", query)}.</b>
            </p>
            <p>{noResultsMessage}</p>
          </>
        )}
      </div>
    </>
  );
}
