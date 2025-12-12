"use server";

import { HjertekurvCollectionPage } from "@/components/features/hjertekurvCollectionPage/hjertekurvCollectionPage";
import type { LangParams, Locale } from "@/providers";
import { getHjertekurverData } from "@/components/features/hjertekurvCollectionPage/api";
import { getDictionary } from "@localization/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/hjertekurver">) {
  const { lang } = await props.params as Locale;
  const dictionary = await getDictionary(lang);

  const title = dictionary.pages.hjertekurverKartotekPage.seo.title;
  const description = dictionary.pages.hjertekurverKartotekPage.seo.description;

  return {
    title: title,
    description: description,
  };
}

export type HjertekurvParams = { hjertekurv: string } & LangParams;

export default async function Page(props: PageProps<"/[lang]/hjertekurver">) {
  const { lang } = await props.params as HjertekurvParams;

  const content = await getHjertekurverData("hjertekurv", lang);

  return <HjertekurvCollectionPage hjertekurver={content} lang={lang} />;
}
