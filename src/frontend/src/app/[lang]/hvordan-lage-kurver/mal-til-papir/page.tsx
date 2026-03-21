import HowToMalToPaper from "@/components/features/how-to-create-hjertekurv/how-to-mal-to-paper";
import { Locale, LOCALES } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";

export const revalidate = 2592000;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hvordan-lage-kurver/mal-til-papir">) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);

  const title = dictionary.pages.howToMalToPaper.seo.title;
  const description = dictionary.pages.howToMalToPaper.seo.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: buildAppRoute({
        route: "/[lang]/hvordan-lage-kurver/mal-til-papir",
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
}: PageProps<"/[lang]/hvordan-lage-kurver/mal-til-papir">) {
  const lang = (await params).lang as Locale;

  return <HowToMalToPaper lang={lang} />;
}
