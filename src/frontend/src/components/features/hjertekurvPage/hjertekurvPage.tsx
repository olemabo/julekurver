import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficultyLevel/difficultyLevel";
import LignendeKurver from "./lignendeKurver";
import HvordanLageKurver from "./hvordanLageKurver";
import KurvMal from "./kurvMal/kurvMal";
import KurvConverter from "./kurvColorConverter/kurvColorConverter";

import "./hjertekurv.css";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Bold from "@/components/shared/ui/bold/bold";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

export type HjertekurvPageProps = {
  hjertekurv: Hjertekurv;
};

export default function JulekurvPage({ hjertekurv }: HjertekurvPageProps) {
  const {
    name,
    about,
    difficultyFletting,
    difficultyKlipping,
    url,
    imageHjertekurvUrl,
    imageHjertekurvMalUrl,
    imageHjertekurvMal2Url,
    createdAt,
    downloadMal,
  } = hjertekurv;

  const imageUrl = createApiMediaUrl(imageHjertekurvUrl);

  if (!hjertekurv) {
    return null;
  }

  const breadCrumbLinks = [
    { linkText: "Forside", href: "/" },
    { linkText: "Hjertekurver", href: "/hjertekurver" },
    { linkText: name, href: `/hjertekurver/${url}` },
  ];

  return (
    <PageWrapper className="hjertekurv-page">
      <Breadcrumb linkItems={breadCrumbLinks} />
      <div className="hjertekurv-page-container">
        <div>
          <Heading headingLevel="h1">{name}</Heading>
          <p
            style={{ maxWidth: 400 }}
            dangerouslySetInnerHTML={{ __html: about }}
          />

          <div className="kurv-converter-mobile">
            <KurvConverter imageUrl={imageUrl} />
          </div>

          <Bold asBlock>Vanskelighetsgrad fletting:</Bold>
          <DifficultyLevel
            iconSize="medium"
            type={ICON_TYPE_HEART}
            rating={difficultyFletting}
          />
          <Bold asBlock>Vanskelighetsgrad klipping:</Bold>
          <DifficultyLevel
            iconSize="medium"
            type={ICON_TYPE_SCISSOR}
            rating={difficultyKlipping}
          />
          <Paragraph style={{ marginTop: "24px" }}>
            <Bold>Lagt til:</Bold>
            {new Date(createdAt).toLocaleDateString()}
          </Paragraph>
        </div>
        <div className="kurv-converter-desktop">
          <KurvConverter imageUrl={imageUrl} />
        </div>
      </div>
      <KurvMal
        mal1Url={imageHjertekurvMalUrl}
        mal2Url={imageHjertekurvMal2Url}
        downloadMal={downloadMal}
      />
      <HvordanLageKurver />
      <LignendeKurver url={url} />
    </PageWrapper>
  );
}
