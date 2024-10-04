import FrontPage from "@/components/features/frontPage/frontPage";
import { getDictionary, Locale } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const t = await getDictionary(lang);

  return (
    <FrontPage />
  );
}
