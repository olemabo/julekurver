"use client";

import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import LignendeKurver from "./lignendeKurver";
import HvordanLageKurver from "./hvordanLageKurver";
import KurvMal from "./kurvMal/kurvMal";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import AboutHjertekurvSection from "./aboutHjertekurvSection";
import "./hjertekurv.scss";
import { Locale } from "@/providers";
import { useBreadcrumbTexts } from "./useTexts";

export type HjertekurvPageProps = {
  hjertekurv: Hjertekurv;
} & Locale;

export default function HjertekurvPage({
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

  const { breadcrumbHome, breadcrumbHeartBaskets } = useBreadcrumbTexts();

  if (!hjertekurv) {
    return null;
  }

  const breadCrumbLinks = [
    { linkText: breadcrumbHome, href: `/${lang}` },
    { linkText: breadcrumbHeartBaskets, href: `/${lang}/hjertekurver` },
    { linkText: name, href: `/${lang}/hjertekurver/${url}` },
  ];

  return (
    <PageWrapper className="hjertekurv-page">
      <Breadcrumb linkItems={breadCrumbLinks} />
      <AboutHjertekurvSection hjertekurv={hjertekurv} />
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
