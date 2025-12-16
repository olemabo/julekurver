"use server";

import SearchPage from "@/components/features/searchPage/searchPage";
import { Locale } from "@/config/i18n";

export default async function Page(props: PageProps<"/[lang]/search">) {
  const lang = (await props.params).lang as Locale;

  return <SearchPage lang={lang} />;
}
