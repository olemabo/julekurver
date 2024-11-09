import { fetchWith404Check } from "@/api/fetchWrapper";
import StandardPage, {
  PageContent,
} from "@/components/features/standardPage/standardPage";
import { createBackendUrl } from "@/utils/backendApiUrl";

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
