import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import styles from "./footer.module.css";
import { getDictionary } from "@/localization/get-dictionary";
import { LocaleProps } from "@/config/i18n";

export default async function LinkSection({ lang }: LocaleProps) {
  const { hjertekurverSection, aboutSiteSection } = (await getDictionary(lang))
    .footer;

  return (
    <div className={styles.footerLinkSection}>
      <div className={styles.webpageLinks}>
        <Heading level="h2" withMargins={false}>
          {hjertekurverSection.title}
        </Heading>
        <Link href={{ route: "/[lang]/hjertekurver", params: { lang } }}>
          {hjertekurverSection.seeKurverLinkText}
        </Link>
        <Link href={{ route: "/[lang]/hvordan-lage-kurver", params: { lang } }}>
          {hjertekurverSection.createKurverLinkText}
        </Link>
      </div>
      <div className={styles.webpageLinks}>
        <Heading level="h2" withMargins={false}>
          {aboutSiteSection.title}
        </Heading>
        <Link
          href={{ route: "/[lang]/[page]", params: { lang, page: "om-siden" } }}
        >
          {aboutSiteSection.aboutSiteLinkText}
        </Link>
        <Link
          href={{
            route: "/[lang]/[page]",
            params: { lang, page: "kontakt-oss" },
          }}
        >
          {aboutSiteSection.contactUsLinkText}
        </Link>
      </div>
    </div>
  );
}
