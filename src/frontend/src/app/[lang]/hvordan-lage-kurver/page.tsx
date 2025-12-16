import HowToCreateHjertekurv from "@/components/features/howToCreateHjertekurv/howToCreateHjertekurv";
import { getDictionary } from "@/localization/dictionaries";
import { BASE_URL, URLs } from "@/constants/urls";
import { Locale, LOCALES } from "@/config/i18n";

export const revalidate = 2592000;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/hvordan-lage-kurver">,
) {
  const lang = (await props.params).lang as Locale;

  const dictionary = await getDictionary(lang);
  const title = dictionary.pages.howToCreateHjertekurvPage.seo.title;
  const description =
    dictionary.pages.howToCreateHjertekurvPage.seo.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: `${BASE_URL}/${lang}/${URLs.hvordanLageKurver}`,
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function Page(
  props: PageProps<"/[lang]/hvordan-lage-kurver">,
) {
  const lang = (await props.params).lang as Locale;

  return <HowToCreateHjertekurv lang={lang} />;
}
