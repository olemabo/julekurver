import Link from "next/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { URLs } from "@/constants/urls";

type LinkListSectionProps = {
  onClick: () => void;
};

export default function LinkListSection({ onClick }: LinkListSectionProps) {
  const { lang, dictionary } = use(LanguageContext);

  const hjertekurverLinkText = getValuesByKeys(dictionary, [
    "header",
    "hjertekurverLinkText",
  ]);
  const hjertekurverHeading = getValuesByKeys(dictionary, [
    "header",
    "createKurverLinkText",
  ]);
  const abouteSiteLinkText = getValuesByKeys(dictionary, [
    "header",
    "abouteSiteLinkText",
  ]);

  return (
    <ul>
      <li>
        <Link onClick={onClick} href={`/${lang}/${URLs.hjertekurver}`}>
          {hjertekurverLinkText}
        </Link>
      </li>
      <li>
        <Link onClick={onClick} href={`/${lang}/${URLs.hvordanLageKurver}`}>
          {hjertekurverHeading}
        </Link>
      </li>
      <li>
        <Link onClick={onClick} href={`/${lang}/${URLs.aboutSite}`}>
          {abouteSiteLinkText}
        </Link>
      </li>
    </ul>
  );
}
