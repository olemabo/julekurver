"use server";

import Heading from "@/components/shared/ui/heading/heading";
import KurvConverter from "./kurvColorConverter/kurvColorConverter";
import { createApiMediaUrl } from "@/lib/api/backendApiUrl";
import Bold from "@/components/shared/ui/bold/bold";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficultyLevel/difficultyLevel";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { formatDate } from "./utils";
import { Hjertekurv } from "@/types/hjertekurv";
import { getDictionary } from "@/localization/dictionaries";
import { Locale } from "@/providers";

export type AboutHjertekurvSectionProps = {
  hjertekurv: Hjertekurv;
} & Locale;

export default async function AboutHjertekurvSection({
  hjertekurv,
  lang,
}: AboutHjertekurvSectionProps) {
  const {
    name,
    about,
    difficultyFletting,
    difficultyKlipping,
    createdAt,
    imageHjertekurvUrl,
  } = hjertekurv;

  const dictionary = await getDictionary(lang);
  const difficultyFlettingText =
    dictionary.pages.hjertekurvPage.difficultyFletting;
  const difficultyKlippingText =
    dictionary.pages.hjertekurvPage.difficultyKlipping;
  const addedText = dictionary.pages.hjertekurvPage.added;

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
        <Paragraph style={{ marginTop: "24px", fontSize: "18px" }}>
          <Bold style={{ fontSize: "16px" }}>{addedText}:</Bold>
          {formattedDate}
        </Paragraph>
      </div>
      <div className="kurv-converter-desktop">
        <KurvConverter imageUrl={imageUrl} />
      </div>
    </div>
  );
}
