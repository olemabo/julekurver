import JulekurvPage from "@/components/features/julekurvPage/julekurvPage";

export interface Julekurv {
  name: string;
  about: string;
  imageJulekurvUrl: string;
  url: string;
  imageJulekurvMalUrl?: string;
}

export default async function Page({
  params,
}: {
  params: { julekurv: string };
}) {
  const julekurvName = params.julekurv;

  const data = await fetch(
    `http://127.0.0.1:8000//api/julekurv-page-api/?julekurvName=${julekurvName}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );
  const pageContent: Julekurv = await data.json();

  const parsedContent =
    typeof pageContent === "string" ? JSON.parse(pageContent) : pageContent;

  return <JulekurvPage julekurv={parsedContent} />;
}
