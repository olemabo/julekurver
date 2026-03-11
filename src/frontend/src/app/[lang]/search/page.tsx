import SearchPage from "@/components/features/search-page/search-page";
import { Locale } from "@/config/i18n";

export default async function Page({ params }: PageProps<"/[lang]/search">) {
  const lang = (await params).lang as Locale;

  return <SearchPage lang={lang} />;
}
