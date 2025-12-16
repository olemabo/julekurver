import HjertekurvPage from "@/components/features/hjertekurvPage/hjertekurvPage";
import { createApiMediaUrl } from "@/lib/api/backendApiUrl";
import { BASE_URL } from "@/constants/urls";
import { getHjertekurvData } from "@/components/features/hjertekurvPage/api";
import { LocaleProps, LOCALES } from "@/config/i18n";
import { getHjertekurverData } from "@/components/features/hjertekurvCollectionPage/api";

export const revalidate = 46000;

export async function generateStaticParams() {
  const params: { lang: string; hjertekurv: string }[] = [];

  for (const lang of LOCALES) {
    const content = await getHjertekurverData(lang);

    content.forEach((item) => {
      params.push({
        lang,
        hjertekurv: item.url,
      });
    });
  }

  return params;
}

export async function generateMetadata(
  props: PageProps<"/[lang]/hjertekurver/[hjertekurv]">,
) {
  const { hjertekurv, lang } = await props.params;

  const content = await getHjertekurvData(hjertekurv, lang);
  const image = createApiMediaUrl(content?.imageHjertekurvUrl);

  return {
    title: content?.name + " hjertekurv/julekurv med mal",
    description: content?.about,
    openGraph: {
      title: content?.name,
      url: `${BASE_URL}/${lang}/${content?.url}`,
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

  const content = await getHjertekurvData(hjertekurv, lang);

  return <HjertekurvPage lang={lang} hjertekurv={content} />;
}
