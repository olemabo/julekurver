import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import ContactSection from "./contact-section/contact-section";
import STANDARD_PAGE_TYPES from "@/constants/standard-page-types";
import { LocaleProps } from "@/config/i18n";
import { PageContent } from "@/lib/api/services/get-standard-page";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";
import RichText from "@/components/shared/ui/rich-text/rich-text";

export type StandardPageProps = {
  pageContent: PageContent | null;
} & LocaleProps;

export default async function StandardPage({
  pageContent,
  lang,
}: StandardPageProps) {
  const dictionary = await getDictionary(lang);

  if (!pageContent || !pageContent?.content) {
    return null;
  }

  const standardPageBreadcrumbs = [
    {
      linkText: dictionary.breadcrumb.frontpage,
      href: buildAppRoute({ route: "/[lang]", params: { lang } }),
    },
    { linkText: pageContent.title, href: pageContent.title },
  ];

  const isContactPage =
    pageContent.pageType === STANDARD_PAGE_TYPES.CONTACT_PAGE;

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={standardPageBreadcrumbs} />
      <Heading level="h1">{pageContent.title}</Heading>
      <RichText content={pageContent.content} />
      {isContactPage && <ContactSection lang={lang} />}
    </PageWrapper>
  );
}
