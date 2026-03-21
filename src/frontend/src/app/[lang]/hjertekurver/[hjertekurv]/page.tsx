import HjertekurvPage from "@/components/features/hjertekurv-page/page";
import { createApiMediaUrl } from "@/lib/api/backend-api-url";
import { Locale, LocaleProps, LOCALES } from "@/config/i18n";
import { getHjertekurver } from "@/lib/api/services/get-hjertekurver";
import { buildAppRoute } from "@/utils/routes";
import { getHjertekurv } from "@/lib/api/services/get-hjertekurv";

export const revalidate = 46000;

export async function generateStaticParams() {
  const params: { lang: Locale; hjertekurv: string }[] = [];

  for (const lang of LOCALES) {
    const content = await getHjertekurver("", lang);

    content.forEach((item) => {
      params.push({
        lang,
        hjertekurv: item.url,
      });
    });
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hjertekurver/[hjertekurv]">) {
  const lang = (await params).lang as Locale;
  const { hjertekurv } = await params;

  const content = await getHjertekurv(hjertekurv, lang);
  const image = createApiMediaUrl(content?.imageHjertekurvUrl);

  return {
    title: content?.name + " hjertekurv/julekurv med mal",
    description: content?.about,
    openGraph: {
      title: content?.name,
      url: buildAppRoute({
        route: "/[lang]/hjertekurver/[hjertekurv]",
        params: { lang, hjertekurv },
      }),
      type: "website",
      image: image,
    },
    twitter: {
      card: "summary_large_image",
      title: content?.name,
      description: content?.about,
      image: image,
    },
  };
}

export type HjertekurvParams = { hjertekurv: string } & LocaleProps;

export default async function Page(
  props: PageProps<"/[lang]/hjertekurver/[hjertekurv]">,
) {
  const { hjertekurv, lang } = (await props.params) as HjertekurvParams;

  const content = await getHjertekurv(hjertekurv, lang);

  return <HjertekurvPage lang={lang} hjertekurv={content} />;
}
