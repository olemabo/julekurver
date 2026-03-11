import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import LignendeKurver from "./lignende-kurver";
import HvordanLageKurver from "./hvordan-lage-kurver";
import KurvMal from "./kurv-mal/kurv-mal";
import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import AboutHjertekurvSection from "./about-hjertekurv-section";
import styles from "./hjertekurv-page.module.css";
import { Hjertekurv } from "@/types/hjertekurv";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";

export type HjertekurvPageProps = {
  hjertekurv: Hjertekurv;
} & LocaleProps;

export default async function HjertekurvPage({
  hjertekurv,
  lang,
}: HjertekurvPageProps) {
  if (!hjertekurv) return null;

  const {
    name,
    url,
    imageHjertekurvMalUrl,
    imageHjertekurvMal2Url,
    downloadMal,
  } = hjertekurv;

  const { frontpage, hjertekurver } = (await getDictionary(lang)).breadcrumb;

  const breadCrumbLinks = [
    {
      linkText: frontpage,
      href: buildAppRoute({ route: "/[lang]", params: { lang } }),
    },
    {
      linkText: hjertekurver,
      href: buildAppRoute({ route: "/[lang]/hjertekurver", params: { lang } }),
    },
    {
      linkText: name,
      href: buildAppRoute({
        route: "/[lang]/hjertekurver/[hjertekurv]",
        params: { lang, hjertekurv: url },
      }),
    },
  ];

  const dictionary = (await getDictionary(lang)).pages.hjertekurvPage.kurvMal;
  const popoverDictionary = (await getDictionary(lang)).popover.symmetriskMotiv;

  return (
    <PageWrapper className={styles.hjertekurvPage}>
      <Breadcrumb linkItems={breadCrumbLinks} />
      <AboutHjertekurvSection hjertekurv={hjertekurv} lang={lang} />
      <KurvMal
        mal1Url={imageHjertekurvMalUrl}
        mal2Url={imageHjertekurvMal2Url}
        downloadMal={downloadMal}
        lang={lang}
        dictionary={dictionary}
        popoverDictionary={popoverDictionary}
      />
      <HvordanLageKurver lang={lang} />
      <LignendeKurver lang={lang} url={url} />
    </PageWrapper>
  );
}
