import { BASE_URL } from "@/constants/urls";
import { getStandardPage } from "@/components/features/standardPage/api";
import StandardPage from "@/components/features/standardPage/page";
import { Locale } from "@/providers";

export async function generateMetadata(props: PageProps<"/[lang]/[page]">) {
  const { page, lang } = await props.params;
  const pageContent = await getStandardPage(page, lang, 3600);

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
      url: `${BASE_URL}/${lang}/${page}`,
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

export const revalidate = 3600;

export default async function Page(props: PageProps<"/[lang]/[page]">) {
  const { lang } = (await props.params) as Locale;
  const { page } = await props.params;

  const content = await getStandardPage(page, lang, 3600);

  return <StandardPage lang={lang} pageContent={content} />;
}
