import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HowToMalTilMatpapirSection from "./how-mal-til-matpapir";
import { LocaleProps } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

export default async function HowToMalToPaper({ lang }: LocaleProps) {
  const dictionary = await getDictionary(lang);
  const title = dictionary.pages.howToMalToPaper.title;
  const ingress = dictionary.pages.howToMalToPaper.ingress;
  const breadcrumb = dictionary.breadcrumb;

  const breadCrumbs = [
    { linkText: breadcrumb.frontpage, href: "/" },
    {
      linkText: breadcrumb.howToCreateHjertekurvPage,
      href: buildAppRoute({
        route: "/[lang]/hvordan-lage-kurver",
        params: { lang },
      }),
    },
    {
      linkText: breadcrumb.howToMalToPaper,
      href: buildAppRoute({
        route: "/[lang]/hvordan-lage-kurver/mal-til-papir",
        params: { lang },
      }),
    },
  ];

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={breadCrumbs} />
      <Heading level="h1">{title}</Heading>
      <Paragraph>{ingress}</Paragraph>
      <HowToMalTilMatpapirSection lang={lang} />
    </PageWrapper>
  );
}
