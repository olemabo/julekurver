import Heading from "@/components/shared/ui/heading/heading";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import KurvConverter from "./kurvColorConverter/kurvColorConverter";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Bold from "@/components/shared/ui/bold/bold";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficultyLevel/difficultyLevel";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { formatDate, useHjertekurverPageTexts } from "./utils";

export type AboutHjertekurvSectionProps = {
  hjertekurv: Hjertekurv;
};

export default function AboutHjertekurvSection({
  hjertekurv,
}: AboutHjertekurvSectionProps) {
  const {
    name,
    about,
    difficultyFletting,
    difficultyKlipping,
    createdAt,
    imageHjertekurvUrl,
  } = hjertekurv;

  const { difficultyFlettingText, difficultyKlippingText, addedText } =
    useHjertekurverPageTexts();

  const imageUrl = createApiMediaUrl(imageHjertekurvUrl);

  const formattedDate = formatDate(createdAt);

  return (
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

        <Bold asBlock>{difficultyFlettingText}:</Bold>
        <DifficultyLevel
          iconSize="medium"
          type={ICON_TYPE_HEART}
          rating={difficultyFletting}
        />
        <Bold asBlock>{difficultyKlippingText}:</Bold>
        <DifficultyLevel
          iconSize="medium"
          type={ICON_TYPE_SCISSOR}
          rating={difficultyKlipping}
        />
        <Paragraph style={{ marginTop: "24px", fontSize: "20px" }}>
          <Bold>{addedText}:</Bold>
          {formattedDate}
        </Paragraph>
      </div>
      <div className="kurv-converter-desktop">
        <KurvConverter imageUrl={imageUrl} />
      </div>
    </div>
  );
}
