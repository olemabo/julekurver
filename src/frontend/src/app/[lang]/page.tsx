import FrontPage from "@/components/features/front-page/front-page";
import { Locale, LOCALES } from "@/config/i18n";

export const revalidate = 46000;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  return <FrontPage lang={lang} />;
}
