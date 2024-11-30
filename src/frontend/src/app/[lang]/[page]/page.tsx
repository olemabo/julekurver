import { fetchWith404Check } from "@/api/fetchWrapper";
import StandardPage, {
  PageContent,
} from "@/components/features/standardPage/standardPage";
import { createBackendUrl } from "@/utils/backendApiUrl";

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}) {
  const pageName = params.page;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<PageContent>(
    `${apiBaseUrl}/api/standard-page-api/?pageUrl=${pageName}`,
    {
      next: {
        revalidate: 1,
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

export default async function Page({ params }: { params: { page: string } }) {
  const pageName = params.page;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<PageContent>(
    `${apiBaseUrl}/api/standard-page-api/?pageUrl=${pageName}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  return <StandardPage pageContent={pageContent} />;
}
