"use server";

import HjertekurvPage from "@/components/features/hjertekurvPage/hjertekurvPage";
import { createApiMediaUrl } from "@/lib/api/backendApiUrl";
import { HjertekurvParams } from "../page";
import { BASE_URL } from "@/constants/urls";
import { getHjertekurvData } from "@/components/features/hjertekurvPage/api";

export async function generateMetadata({
  params,
}: {
  params: HjertekurvParams;
}) {
  const { hjertekurv, lang } = await params;

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

export default async function Page({ params }: { params: HjertekurvParams }) {
  const { hjertekurv, lang } = await params;

  const content = await getHjertekurvData(hjertekurv, lang);

  return <HjertekurvPage lang={lang} hjertekurv={content} />;
}
