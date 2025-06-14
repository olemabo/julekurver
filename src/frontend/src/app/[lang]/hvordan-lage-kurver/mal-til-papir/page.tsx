"use server";

import HowToMalToPaper from "@/components/features/howToCreateHjertekurv/HowToMalToPaper";
import { LangParams } from "@/providers";
import { getDictionary } from "../../../../localization/dictionaries";
import { BASE_URL, URLs } from "@/constants/urls";

export async function generateMetadata({ params }: { params: LangParams }) {
  const { lang } = await params;
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

export default async function Page({ params }: { params: LangParams }) {
  const { lang } = await params;

  return <HowToMalToPaper lang={lang} />;
}
