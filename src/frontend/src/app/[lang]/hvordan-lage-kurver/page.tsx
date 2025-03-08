"use server";

import HowToCreateHjertekurv from "@/components/features/howToCreateHjertekurv/howToCreateHjertekurv";
import { LangParams } from "@/providers";
import { getDictionary, getValuesByKeys } from "../dictionaries";

export async function generateMetadata({ params }: { params: LangParams }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "seo",
    "title",
  ]);
  const description = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "seo",
    "description",
  ]);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: `https://hjertekurver.no/${lang}/hvordan-lage-kurver`,
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function Page({ params }: { params: LangParams }) {
  const { lang } = await params;

  return <HowToCreateHjertekurv lang={lang} />;
}
