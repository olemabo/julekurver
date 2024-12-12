import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import ContactSection from "./contactSection";

const CONTACT_PAGE = "contact";

export type PageContent = {
  title: string;
  content: string;
  pageType: string;
};

export type StandardPageProps = {
  pageContent: PageContent;
};

export default function StandardPage({ pageContent }: StandardPageProps) {
  if (!pageContent || !pageContent?.content) {
    return null;
  }

  const standardPageBreadcrumbs = [
    { linkText: "Forside", href: "/" },
    { linkText: pageContent.title, href: pageContent.title },
  ];

  const isContactPage = pageContent.pageType === CONTACT_PAGE;

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={standardPageBreadcrumbs} />
      <Heading headingLevel="h1">{pageContent.title}</Heading>
      {pageContent?.content && (
        <div dangerouslySetInnerHTML={{ __html: pageContent?.content }} />
      )}
      {isContactPage && <ContactSection />}
    </PageWrapper>
  );
}
