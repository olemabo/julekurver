"use server";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import LignendeKurver from "./lignendeKurver";
import HvordanLageKurver from "./hvordanLageKurver";
import KurvMal from "./kurvMal/kurvMal";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import AboutHjertekurvSection from "./aboutHjertekurvSection";
import "./hjertekurv.scss";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";
import { Hjertekurv } from "@/types/hjertekurv";
import { getDictionary } from "@/localization/dictionaries";

export type HjertekurvPageProps = {
  hjertekurv: Hjertekurv;
} & Locale;

export default async function HjertekurvPage({
  hjertekurv,
  lang,
}: HjertekurvPageProps) {
  const {
    name,
    url,
    imageHjertekurvMalUrl,
    imageHjertekurvMal2Url,
    downloadMal,
  } = hjertekurv;

  const dictionary = await getDictionary(lang);
  const breadcrumbHome = dictionary.breadcrumb.frontpage;
  const breadcrumbHeartBaskets = dictionary.breadcrumb.hjertekurver;

  if (!hjertekurv) {
    return null;
  }

  const breadCrumbLinks = [
    { linkText: breadcrumbHome, href: `/${lang}` },
    { linkText: breadcrumbHeartBaskets, href: `/${lang}/${URLs.hjertekurver}` },
    { linkText: name, href: `/${lang}/${URLs.hjertekurver}/${url}` },
  ];

  return (
    <PageWrapper className="hjertekurv-page">
      <Breadcrumb linkItems={breadCrumbLinks} />
      <AboutHjertekurvSection hjertekurv={hjertekurv} lang={lang} />
      <KurvMal
        mal1Url={imageHjertekurvMalUrl}
        mal2Url={imageHjertekurvMal2Url}
        downloadMal={downloadMal}
        lang={lang}
      />
      <HvordanLageKurver lang={lang} />
      <LignendeKurver lang={lang} url={url} />
    </PageWrapper>
  );
}
