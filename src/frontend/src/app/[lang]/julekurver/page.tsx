import JulekurvKartotekPage from "@/components/features/julekurvKartotekPage/julekurvKartotekPage";
import { Julekurv } from "./[julekurv]/page";

export default async function Page({
  params,
}: {
  params: { julekurv: string };
}) {
  const julekurvName = params.julekurv;

  const data = await fetch(
    `http://127.0.0.1:8000/api/julekurver-page-api/?julekurvName=${julekurvName}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  const pageContent: Julekurv[] = await data.json();

  const parsedContent =
    typeof pageContent === "string" ? JSON.parse(pageContent) : pageContent;

  return <JulekurvKartotekPage julekurver={parsedContent} />;
}
