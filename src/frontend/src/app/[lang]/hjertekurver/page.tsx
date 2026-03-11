import { LOCALES, type Locale } from "@/config/i18n";
import HjertekurvCollectionPage from "@/components/features/hjertekurv-collection-page/hjertekurv-collection-page";
import { getHjertekurver } from "@/lib/api/services/get-hjertekurver";
import { getDictionary } from "@/localization/get-dictionary";

export const revalidate = 3600;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hjertekurver">) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);

  const title = dictionary.pages.hjertekurverKartotekPage.seo.title;
  const description = dictionary.pages.hjertekurverKartotekPage.seo.description;

  return {
    title: title,
    description: description,
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/hjertekurver">) {
  const lang = (await params).lang as Locale;

  const content = await getHjertekurver("", lang);

  return <HjertekurvCollectionPage hjertekurver={content} lang={lang} />;
}
