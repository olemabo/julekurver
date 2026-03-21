import HowToCreateHjertekurv from "@/components/features/how-to-create-hjertekurv/how-to-create-hjertekurv";
import { Locale, LOCALES } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";

export const revalidate = 2592000;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hvordan-lage-kurver">) {
  const lang = (await params).lang as Locale;

  const dictionary = await getDictionary(lang);
  const title = dictionary.pages.howToCreateHjertekurvPage.seo.title;
  const description =
    dictionary.pages.howToCreateHjertekurvPage.seo.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: buildAppRoute({
        route: "/[lang]/hvordan-lage-kurver",
        params: { lang },
      }),
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/hvordan-lage-kurver">) {
  const lang = (await params).lang as Locale;

  return <HowToCreateHjertekurv lang={lang} />;
}
