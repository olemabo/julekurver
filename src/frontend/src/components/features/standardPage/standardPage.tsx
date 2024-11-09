import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";

export interface PageContent {
  title: string;
  content: string;
}

export type StandardPageProps = {
  pageContent: PageContent;
};

export default function StandardPage({ pageContent }: StandardPageProps) {
  return (
    <>
      {pageContent && (
        <div className="default-page-container standard-page">
          <Breadcrumb
            linkItems={[
              { linkText: "Forside", href: "/" },
              { linkText: "Om siden", href: "/om-siden" },
            ]}
          />
          <Heading headingLevel="h1">{pageContent.title}</Heading>
          {pageContent?.content && (
            <div dangerouslySetInnerHTML={{ __html: pageContent?.content }} />
          )}
        </div>
      )}
    </>
  );
}
