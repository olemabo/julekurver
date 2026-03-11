import Heading from "@/components/shared/ui/heading/heading";
import KurvConverter from "./kurv-color-converter/kurv-color-converter";
import { createApiMediaUrl } from "@/lib/api/backend-api-url";
import Bold from "@/components/shared/ui/bold/bold";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficulty-level/difficulty-level";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { Hjertekurv } from "@/types/hjertekurv";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";
import styles from "./about-hjertekurv-section.module.css";
import { formatDate } from "@/utils/date";
export type AboutHjertekurvSectionProps = {
  hjertekurv: Hjertekurv;
} & LocaleProps;

export default async function AboutHjertekurvSection({
  hjertekurv,
  lang,
}: AboutHjertekurvSectionProps) {
  const { name, about, createdAt, imageHjertekurvUrl } = hjertekurv;
  const dictionary = (await getDictionary(lang)).pages.hjertekurvPage;

  const { difficultyFletting, difficultyKlipping, added } = dictionary;

  const imageUrl = createApiMediaUrl(imageHjertekurvUrl);

  const formattedDate = formatDate(createdAt);

  return (
    <div className={styles.hjertekurvPageContainer}>
      <div>
        <Heading level="h1">{name}</Heading>
        <Paragraph
          style={{ maxWidth: 400 }}
          dangerouslySetInnerHTML={{ __html: about }}
        />

        <div className={styles.kurvConverterMobile}>
          <KurvConverter imageUrl={imageUrl} dictionary={dictionary} />
        </div>

        <Bold asBlock>{difficultyFletting}:</Bold>
        <DifficultyLevel
          iconSize="medium"
          type={ICON_TYPE_HEART}
          rating={hjertekurv.difficultyFletting}
        />
        <Bold asBlock>{difficultyKlipping}:</Bold>
        <DifficultyLevel
          iconSize="medium"
          type={ICON_TYPE_SCISSOR}
          rating={hjertekurv.difficultyKlipping}
        />
        <Paragraph style={{ marginTop: "24px", fontSize: "18px" }}>
          <Bold style={{ fontSize: "16px" }}>{added}:</Bold>
          {formattedDate}
        </Paragraph>
      </div>
      <div className={styles.kurvConverterDesktop}>
        <KurvConverter imageUrl={imageUrl} dictionary={dictionary} />
      </div>
    </div>
  );
}
