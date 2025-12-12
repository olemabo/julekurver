"use server";

import SearchPage from "@/components/features/searchPage/searchPage";
import type { Locale } from "@/providers";

export default async function Page(props: PageProps<"/[lang]/search">) {
  const { lang } = await props.params as Locale;

  return <SearchPage lang={lang} />;
}
