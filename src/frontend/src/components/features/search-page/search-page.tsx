import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import SearchAndResult from "./search-and-results";
import { LocaleProps } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";
import { Link } from "@/components/shared/ui/link/link";

export default async function SearchPage({ lang }: LocaleProps) {
  const dictionary = await getDictionary(lang);
  const searchDictionary = dictionary.pages.searchPage;
  const { heading, paragraph, linkText } = searchDictionary;
  const { searchPage, frontpage } = dictionary.breadcrumb;

  const breadcrumbs = [
    { linkText: frontpage, href: "/" },
    {
      linkText: searchPage,
      href: buildAppRoute({ route: "/[lang]/search", params: { lang } }),
    },
  ];

  return (
    <PageWrapper>
      <Breadcrumb linkItems={breadcrumbs} />
      <Heading level="h1">{heading}</Heading>
      <Paragraph maxWidth={500}>
        {paragraph}{" "}
        <Link
          href={{
            route: "/[lang]/hjertekurver",
            params: { lang },
          }}
        >
          {linkText}
        </Link>
        .
      </Paragraph>
      <SearchAndResult lang={lang} dictionary={searchDictionary} />
    </PageWrapper>
  );
}
