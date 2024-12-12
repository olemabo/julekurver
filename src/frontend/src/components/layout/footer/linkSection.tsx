"use client";

import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";

export default function LinkSection() {
  const { lang, dictionary } = use(LanguageContext);

  const hjertekurverHeading = getValuesByKeys(dictionary, [
    "footer",
    "hjertekurverSection",
    "title",
  ]);
  const seeKurverLinkText = getValuesByKeys(dictionary, [
    "footer",
    "hjertekurverSection",
    "seeKurverLinkText",
  ]);
  const createKurverLinkText = getValuesByKeys(dictionary, [
    "footer",
    "hjertekurverSection",
    "createKurverLinkText",
  ]);

  const aboutSiteHeading = getValuesByKeys(dictionary, [
    "footer",
    "aboutSiteSection",
    "title",
  ]);
  const aboutSiteLinkText = getValuesByKeys(dictionary, [
    "footer",
    "aboutSiteSection",
    "aboutSiteLinkText",
  ]);
  const contactUsLinkText = getValuesByKeys(dictionary, [
    "footer",
    "aboutSiteSection",
    "contactUsLinkText",
  ]);

  return (
    <div className="footer-link-section">
      <div className="webpage-links">
        <Heading headingLevel="h2" withMargins={false}>
          {hjertekurverHeading}
        </Heading>
        <Link href={`/${lang}/hjertekurver`} linkTitle={seeKurverLinkText} />
        <Link
          href={`/${lang}/hvordan-lage-kurver`}
          linkTitle={createKurverLinkText}
        />
      </div>
      <div className="webpage-links">
        <Heading headingLevel="h2" withMargins={false}>
          {aboutSiteHeading}
        </Heading>
        <Link href={`/${lang}/om-siden`} linkTitle={aboutSiteLinkText} />
        <Link href={`/${lang}/kontakt-oss`} linkTitle={contactUsLinkText} />
      </div>
    </div>
  );
}
