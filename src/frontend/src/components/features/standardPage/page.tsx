import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading, { HeadingLevel } from "@/components/shared/ui/heading/heading";
import ContactSection from "./contactSection";
import { getDictionary } from "@/localization/dictionaries";
import STANDARD_PAGE_TYPES from "@/constants/standardPageTypes";
import { PageContent } from "./type";
import { LocaleProps } from "@/config/i18n";

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
    { linkText: dictionary.breadcrumb.frontpage, href: `/${lang}` },
    { linkText: pageContent.title, href: pageContent.title },
  ];

  const isContactPage =
    pageContent.pageType === STANDARD_PAGE_TYPES.CONTACT_PAGE;

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={standardPageBreadcrumbs} />
      <Heading headingLevel={HeadingLevel.H1}>{pageContent.title}</Heading>
      {pageContent?.content && (
        <div dangerouslySetInnerHTML={{ __html: pageContent?.content }} />
      )}
      {isContactPage && <ContactSection />}
    </PageWrapper>
  );
}
