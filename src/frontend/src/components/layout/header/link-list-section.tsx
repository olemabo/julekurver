import Link from "@/components/shared/ui/link/link";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";

type LinkListSectionProps = {
  onClick: () => void;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
} & LocaleProps;

export default function LinkListSection({
  onClick,
  dictionary,
  lang,
}: LinkListSectionProps) {
  const { hjertekurverLinkText, createKurverLinkText, abouteSiteLinkText } =
    dictionary;

  return (
    <ul>
      <li>
        <Link
          onClick={onClick}
          href={{ route: "/[lang]/hjertekurver", params: { lang } }}
        >
          {hjertekurverLinkText}
        </Link>
      </li>
      <li>
        <Link
          onClick={onClick}
          href={{ route: "/[lang]/hvordan-lage-kurver", params: { lang } }}
        >
          {createKurverLinkText}
        </Link>
      </li>
      <li>
        <Link
          onClick={onClick}
          href={{ route: "/[lang]/[page]", params: { lang, page: "om-siden" } }}
        >
          {abouteSiteLinkText}
        </Link>
      </li>
    </ul>
  );
}
