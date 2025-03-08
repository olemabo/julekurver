"use server";

import HowToMalToPaper from "@/components/features/howToCreateHjertekurv/HowToMalToPaper";
import { LangParams } from "@/providers";
import { getDictionary, getValuesByKeys } from "../../dictionaries";

export async function generateMetadata({ params }: { params: LangParams }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "seo",
    "title",
  ]);
  const description = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "seo",
    "description",
  ]);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: `https://hjertekurver.no/${lang}/hvordan-lage-kurver/mal-til-papir`,
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function Page({ params }: { params: LangParams }) {
  const { lang } = await params;

  return <HowToMalToPaper lang={lang} />;
}
