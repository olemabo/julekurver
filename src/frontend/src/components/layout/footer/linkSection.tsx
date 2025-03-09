"use client";

import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { scrollToMain } from "@/utils/utils";
import { URLs } from "@/constants/urls";

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
        <Link
          onClick={scrollToMain}
          href={`/${lang}/${URLs.hjertekurver}`}
          linkTitle={seeKurverLinkText}
        />
        <Link
          onClick={scrollToMain}
          href={`/${lang}/${URLs.hvordanLageKurver}`}
          linkTitle={createKurverLinkText}
        />
      </div>
      <div className="webpage-links">
        <Heading headingLevel="h2" withMargins={false}>
          {aboutSiteHeading}
        </Heading>
        <Link
          href={`/${lang}/${URLs.aboutSite}`}
          onClick={scrollToMain}
          linkTitle={aboutSiteLinkText}
        />
        <Link
          href={`/${lang}/${URLs.contactUs}`}
          onClick={scrollToMain}
          linkTitle={contactUsLinkText}
        />
      </div>
    </div>
  );
}
