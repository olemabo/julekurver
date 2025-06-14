"use server";

import SearchPage from "@/components/features/searchPage/SearchPage";
import { LangParams } from "@/providers";

export default async function Page({ params }: { params: LangParams }) {
    const { lang } = await params;

  return <SearchPage lang={lang} />;
}
