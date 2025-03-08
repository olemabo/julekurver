import { fetchWith404Check } from "@/api/fetchWrapper";
import StandardPage, {
  PageContent,
} from "@/components/features/standardPage/standardPage";
import { createBackendUrl } from "@/utils/backendApiUrl";

type PageParams = Promise<{ page: string }>;

export async function generateMetadata({ params }: { params: PageParams }) {
  const pageName = (await params).page;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<PageContent>(
    `${apiBaseUrl}/api/standard-page-api/?pageUrl=${pageName}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return {
    title: pageContent?.title,
    description: pageContent?.content,
    openGraph: {
      title: pageContent?.title,
      url: `https://hjertekurver.no/no/${pageName}`,
    },
    twitter: {
      title: pageContent?.title,
      description: pageContent?.content,
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { page } = await params;

  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<PageContent>(
    `${apiBaseUrl}/api/standard-page-api/?pageUrl=${page}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return <StandardPage pageContent={pageContent} />;
}
