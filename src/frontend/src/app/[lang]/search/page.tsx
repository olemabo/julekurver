"use client";

import { useSearchParams } from "next/navigation";
import SearchPage from "@/components/features/searchPage/searchPage";

export default function Page() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";

  return <SearchPage defautlQuery={query} />;
}
