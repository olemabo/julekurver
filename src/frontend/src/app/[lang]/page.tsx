import FrontPage from "@/components/features/frontPage/frontPage";
import { Locale, LOCALES } from "@/config/i18n";

export const revalidate = 46000;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Home(props: PageProps<"/[lang]">) {
  const lang = (await props.params).lang as Locale;

  return <FrontPage lang={lang} />;
}
