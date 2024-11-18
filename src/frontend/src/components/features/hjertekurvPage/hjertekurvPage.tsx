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
          <p
            style={{ maxWidth: 400 }}
            dangerouslySetInnerHTML={{ __html: about }}
          />

          <b
            style={{
              fontFamily: "'Alegreya Sans Medium'",
              display: "block",
              margin: "24px 0 12px 0",
            }}
          >
            Vanskelighetsgrad fletting:{" "}
          </b>
          <DifficultyLevel
            iconSize="medium"
            type={ICON_TYPE_HEART}
            rating={difficultyFletting}
          />
          <b
            style={{
              fontFamily: "'Alegreya Sans Medium'",
              display: "block",
              margin: "24px 0 12px 0",
            }}
          >
            Vanskelighetsgrad klipping:{" "}
          </b>
          <DifficultyLevel
            iconSize="medium"
            type={ICON_TYPE_SCISSOR}
            rating={difficultyKlipping}
          />
          <p style={{ marginTop: "24px" }}>
            <b
              style={{
                fontFamily: "'Alegreya Sans Medium'",
                margin: "24px 0 12px 0",
              }}
            >
              Opprettet:{" "}
            </b>{" "}
            {new Date(createdAt).toLocaleDateString()}
          </p>
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
