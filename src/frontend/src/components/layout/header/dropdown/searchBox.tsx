"use client";

import Search from "@/components/shared/ui/search/search";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export type SearchBoxProps = {
  handleSearch: () => void;
};

export default function SearchBox({ handleSearch }: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearchClick = () => {
    if (inputRef.current && inputRef.current.value) {
      const query = inputRef.current.value.trim();
      router.push(`/no/search?query=${encodeURIComponent(query)}`);
      handleSearch();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="dropdown-content">
      <Search
        ref={inputRef}
        placeholder="Legg inn søkeord..."
        onClick={handleSearchClick}
      />
    </div>
  );
}
