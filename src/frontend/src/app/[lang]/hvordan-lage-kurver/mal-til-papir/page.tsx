import HowToMalToPaper from "@/components/features/howToCreateHjertekurv/HowToMalToPaper";
import { getDictionary } from "../../../../localization/dictionaries";
import { BASE_URL, URLs } from "@/constants/urls";
import { Locale, LOCALES } from "@/config/i18n";

export const revalidate = 2592000;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/hvordan-lage-kurver/mal-til-papir">,
) {
  const lang = (await props.params).lang as Locale;
  const dictionary = await getDictionary(lang);

  const title = dictionary.pages.howToMalToPaper.seo.title;
  const description = dictionary.pages.howToMalToPaper.seo.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: `${BASE_URL}/${lang}/${URLs.hvordanLageKurver}/${URLs.malTilPapir}`,
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function Page(
  props: PageProps<"/[lang]/hvordan-lage-kurver/mal-til-papir">,
) {
  const lang = (await props.params).lang as Locale;

  return <HowToMalToPaper lang={lang} />;
}
