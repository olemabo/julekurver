"use server";

import { HjertekurvCollectionPage } from "@/components/features/hjertekurvCollectionPage/hjertekurvCollectionPage";
import { LangParams } from "@/providers";
import { getHjertekurverData } from "@/components/features/hjertekurvCollectionPage/api";
import { getDictionary } from "@localization/dictionaries";

export async function generateMetadata({ params }: { params: LangParams }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const title = dictionary.pages.hjertekurverKartotekPage.seo.title;
  const description = dictionary.pages.hjertekurverKartotekPage.seo.description;

  return {
    title: title,
    description: description,
  };
}

export type HjertekurvParams = Promise<{ hjertekurv: string }> & LangParams;

export default async function Page({ params }: { params: HjertekurvParams }) {
  const { hjertekurv, lang } = await params;

  const content = await getHjertekurverData(hjertekurv, lang);

  return <HjertekurvCollectionPage hjertekurver={content} lang={lang} />;
}
