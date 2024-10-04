import StandardPage, {
  PageContent,
} from "@/components/features/standardPage/standardPage";

export default async function Page({ params }: { params: { page: string } }) {
  const pageName = params.page;

  const data = await fetch(
    `http://127.0.0.1:8000/api/standard-page-api/?pageUrl=${pageName}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const pageContent: PageContent = await data.json();

  const parsedContent =
    typeof pageContent === "string" ? JSON.parse(pageContent) : pageContent;

  return <StandardPage pageContent={parsedContent} />;
}
