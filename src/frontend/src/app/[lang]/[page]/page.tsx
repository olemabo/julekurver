import StandardPage from "@/components/features/standard-page/page";
import { Locale } from "@/config/i18n";
import { getStandardPage } from "@/lib/api/services/get-standard-page";
import { buildAppRoute } from "@/utils/routes";

export const revalidate = 86400;

export async function generateStaticParams() {
  // TODO: Hent disse fra api
  return [
    { lang: "no", page: "om-siden" },
    { lang: "no", page: "kontakt-oss" },
    { lang: "en", page: "om-siden" },
    { lang: "en", page: "kontakt-oss" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[page]">) {
  const lang = (await params).lang as Locale;
  const { page } = await params;

  const pageContent = await getStandardPage(page, lang);

  if (!pageContent) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: pageContent.title,
    description:
      pageContent.content?.replace(/<[^>]*>/g, "").substring(0, 160) ||
      pageContent.title,
    openGraph: {
      title: pageContent.title,
      description: pageContent.content
        ?.replace(/<[^>]*>/g, "")
        .substring(0, 160),
      url: buildAppRoute({ route: "/[lang]/[page]", params: { lang, page } }),
      type: "website",
    },
    twitter: {
      card: "summary",
      title: pageContent.title,
      description: pageContent.content
        ?.replace(/<[^>]*>/g, "")
        .substring(0, 160),
    },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/[page]">) {
  const lang = (await params).lang as Locale;
  const { page } = await params;

  const content = await getStandardPage(page, lang);

  return <StandardPage lang={lang} pageContent={content} />;
}
