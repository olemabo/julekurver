import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import SearchAndFilterSection from "./searchAndFilter/search-and-filter-section";
import DifficultyPopover from "./difficullty-popover";
import { Hjertekurv } from "@/types/hjertekurv";
import { LocaleProps } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

export type HjertekurvCollectionPageProps = {
  hjertekurver: Hjertekurv[];
} & LocaleProps;

export default async function HjertekurvCollectionPage({
  hjertekurver,
  lang,
}: HjertekurvCollectionPageProps) {
  if (hjertekurver?.length === 0) return null;

  const dictionary = await getDictionary(lang);

  const linkItems = [
    {
      linkText: dictionary.breadcrumb.frontpage,
      href: buildAppRoute({ route: "/[lang]", params: { lang } }),
    },
    {
      linkText: dictionary.breadcrumb.hjertekurver,
      href: buildAppRoute({ route: "/[lang]/hjertekurver", params: { lang } }),
    },
  ];

  const hjertekurvDictionary = dictionary.pages.hjertekurverKartotekPage;
  const { heading, paragraph } = hjertekurvDictionary;

  return (
    <PageWrapper>
      <Breadcrumb linkItems={linkItems} />
      <Heading level="h1">{heading}</Heading>
      <Paragraph maxWidth={450}>
        {paragraph.intro}
        <DifficultyPopover lang={lang} />
        {paragraph.outro}
      </Paragraph>
      <SearchAndFilterSection
        lang={lang}
        hjertekurver={hjertekurver}
        dictionary={hjertekurvDictionary}
      />
    </PageWrapper>
  );
}
