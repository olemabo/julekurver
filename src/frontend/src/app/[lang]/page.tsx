"use server";

import FrontPage from "@/components/features/frontPage/frontPage";
import { LangParams } from "@/providers";

export type FrontpageParams = LangParams;

export default async function Home({ params }: { params: FrontpageParams }) {
  const { lang } = await params;

  return <FrontPage lang={lang} />;
}
