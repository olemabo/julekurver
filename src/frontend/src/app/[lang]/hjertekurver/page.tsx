import { HjertekurvCollectionPage } from "@/components/features/hjertekurvCollectionPage/hjertekurvCollectionPage";
import { getHjertekurverData } from "@/components/features/hjertekurvCollectionPage/api";
import { getDictionary } from "@/localization/dictionaries";
import { LOCALES, type Locale } from "@/config/i18n";

export const revalidate = 3600;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/hjertekurver">,
) {
  const lang = (await props.params).lang as Locale;
  const dictionary = await getDictionary(lang);

  const title = dictionary.pages.hjertekurverKartotekPage.seo.title;
  const description = dictionary.pages.hjertekurverKartotekPage.seo.description;

  return {
    title: title,
    description: description,
  };
}

export default async function Page(props: PageProps<"/[lang]/hjertekurver">) {
  const lang = (await props.params).lang as Locale;

  const content = await getHjertekurverData(lang);

  return <HjertekurvCollectionPage hjertekurver={content} lang={lang} />;
}
