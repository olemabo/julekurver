import FrontPage from "@/components/features/frontPage/frontPage";
import { Locale } from "@/providers";
import { LOCALES } from "@/config/i18n";

export const revalidate = 46000;

export async function generateStaticParams() {
  const a = LOCALES.map((lang) => ({ lang }));
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Home(props: PageProps<"/[lang]">) {
  const { lang } = (await props.params) as Locale;

  return <FrontPage lang={lang} />;
}
