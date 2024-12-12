import Link from "next/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";

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
        <Link onClick={onClick} href={`/${lang}/hjertekurver`}>
          {hjertekurverLinkText}
        </Link>
      </li>
      <li>
        <Link onClick={onClick} href={`/${lang}/hvordan-lage-kurver`}>
          {hjertekurverHeading}
        </Link>
      </li>
      <li>
        <Link onClick={onClick} href={`/${lang}/om-siden`}>
          {abouteSiteLinkText}
        </Link>
      </li>
    </ul>
  );
}
