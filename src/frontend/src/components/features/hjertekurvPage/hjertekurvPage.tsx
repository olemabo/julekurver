"use client";

import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import LignendeKurver from "./lignendeKurver";
import HvordanLageKurver from "./hvordanLageKurver";
import KurvMal from "./kurvMal/kurvMal";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import AboutHjertekurvSection from "./aboutHjertekurvSection";
import "./hjertekurv.scss";

export type HjertekurvPageProps = {
  hjertekurv: Hjertekurv;
};

export default function HjertekurvPage({ hjertekurv }: HjertekurvPageProps) {
  const {
    name,
    url,
    imageHjertekurvMalUrl,
    imageHjertekurvMal2Url,
    downloadMal,
  } = hjertekurv;

  if (!hjertekurv) {
    return null;
  }

  const breadCrumbLinks = [
    { linkText: "Forside", href: "/" },
    { linkText: "Hjertekurver", href: "/hjertekurver" },
    { linkText: name, href: `/hjertekurver/${url}` },
  ];

  return (
    <PageWrapper className="hjertekurv-page">
      <Breadcrumb linkItems={breadCrumbLinks} />
      <AboutHjertekurvSection hjertekurv={hjertekurv} />
      <KurvMal
        mal1Url={imageHjertekurvMalUrl}
        mal2Url={imageHjertekurvMal2Url}
        downloadMal={downloadMal}
      />
      <HvordanLageKurver />
      <LignendeKurver url={url} />
    </PageWrapper>
  );
}
