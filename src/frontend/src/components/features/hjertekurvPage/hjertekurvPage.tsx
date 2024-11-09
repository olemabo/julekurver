import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import DifficultyLevel from "@/components/shared/difficultyLevel/difficultyLevel";
import LignendeKurver from "./lignendeKurver";
import HvordanLageKurver from "./hvordanLageKurver";
import KurvMal from "./kurvMal/kurvMal";
import KurvConverter from "./kurvColorConverter/kurvColorConverter";

import "./hjertekurv.css";

export type HjertekurvPageProps = {
  hjertekurv: Hjertekurv;
};

export default function JulekurvPage({ hjertekurv }: HjertekurvPageProps) {
  const {
    name,
    about,
    difficulty,
    difficultyScissor,
    url,
    imageHjertekurvUrl,
    imageHjertekurvMalUrl,
    imageHjertekurvMal2Url,
    downloadMal,
  } = hjertekurv;

  const imageUrl = createApiMediaUrl(imageHjertekurvUrl);

  if (!hjertekurv) {
    return null;
  }

  return (
    <div className="default-page-container julekurv-page">
      <Breadcrumb
        linkItems={[
          { linkText: "Forside", href: "/" },
          { linkText: "Hjertekurver", href: "/hjertekurver" },
          { linkText: name, href: `/hjertekurver/${url}` },
        ]}
      />
      <div style={{ display: "flex", columnGap: "48px" }}>
        <div>
          <Heading headingLevel="h1">{name}</Heading>
          <p dangerouslySetInnerHTML={{ __html: about }} />

          <b>Vanskelighetsgrad fletting: </b>
          <DifficultyLevel type="heart" rating={difficulty} />
          <b>Vanskelighetsgrad klipping: </b>
          <DifficultyLevel type="scissor" rating={difficultyScissor} />
        </div>
        <KurvConverter imageUrl={imageUrl} />
      </div>
      <KurvMal
        mal1Url={imageHjertekurvMalUrl}
        mal2Url={imageHjertekurvMal2Url}
        downloadMal={downloadMal}
      />
      <HvordanLageKurver />
      <LignendeKurver url={url} />
    </div>
  );
}
