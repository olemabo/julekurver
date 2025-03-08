"use client";

import Search from "@/components/shared/ui/search/search";
import { RefObject } from "react";
import { useRouter } from "next/navigation";

export type SearchBoxProps = {
  handleSearch: () => void;
  searchFieldRef: RefObject<HTMLInputElement | null>;
};

export default function SearchBox({ handleSearch, searchFieldRef }: SearchBoxProps) {
  const router = useRouter();

  const handleSearchClick = () => {
    if (searchFieldRef.current && searchFieldRef.current.value) {
      const query = searchFieldRef.current.value.trim();
      router.push(`/no/search?query=${encodeURIComponent(query)}`);
      handleSearch();
    }
  };

  return (
    <div className="dropdown-content">
      <Search
        ref={searchFieldRef}
        placeholder="Legg inn søkeord..."
        onClick={handleSearchClick}
      />
    </div>
  );
}
