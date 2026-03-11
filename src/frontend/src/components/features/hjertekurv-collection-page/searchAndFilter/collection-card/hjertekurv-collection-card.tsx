import { createApiMediaUrl } from "@/lib/api/backend-api-url";
import Heading from "@/components/shared/ui/heading/heading";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficulty-level/difficulty-level";
import DisplayHjertekurvSvgWithColors from "@/components/shared/images/display-hjertekurv-svg-with-colors";
import "./hjertekurv-collection-card.css";
import { Hjertekurv } from "@/types/hjertekurv";
import { LocaleProps } from "@/config/i18n";
import Link from "@/components/shared/ui/link/link";
import styles from "./hjertekurv-collection-card.module.css";

export type HjertekurvCardSize = "sm" | "default";

type HjertekurvCollectionCardProps = {
  hjertekurv: Hjertekurv;
  size?: HjertekurvCardSize;
  showDifficultyLevels?: boolean;
} & LocaleProps;

export default function HjertekurvCollectionCard({
  hjertekurv,
  lang,
  size = "default",
  showDifficultyLevels = true,
}: HjertekurvCollectionCardProps) {
  const {
    url,
    imageHjertekurvUrl,
    name,
    difficultyFletting,
    difficultyKlipping,
  } = hjertekurv;
  const mediaUrl = createApiMediaUrl(imageHjertekurvUrl);

  const imageSize = size === "sm" ? 120 : 160;

  let hexColors = ["#7D4D3D", "#BC9284", "#616357", "#CBC1BB", "#372316"];

  hexColors = ["#7d4d3d", "#616357"];

  hexColors = ["#9B776B"];
  hexColors = ["#9B776B"];

  const fillColor1 = hexColors[Math.floor(Math.random() * hexColors.length)];
  const fillColor2 = "white";
  const imgSize = imageSize.toString() + "px";

  return (
    <Link
      href={{
        route: "/[lang]/hjertekurver/[kurv]",
        params: { lang, kurv: url },
      }}
      key={name}
      className={size}
    >
      <div className="section">
        <Heading style={{ color: fillColor1 }} level="h2">
          {name}
        </Heading>
        <div className="hover-wrapper">
          <DisplayHjertekurvSvgWithColors
            imageUrl={mediaUrl}
            fillColor1={fillColor1}
            fillColor2={fillColor2}
            imageSize={{ height: imgSize, width: imgSize }}
          />
        </div>
        {showDifficultyLevels && (
          <div className={styles.difficultyLevelsContainer}>
            <DifficultyLevel
              hideEmpty
              iconSize="small"
              type={ICON_TYPE_HEART}
              rating={difficultyFletting}
            />
            <DifficultyLevel
              hideEmpty
              iconSize="small"
              type={ICON_TYPE_SCISSOR}
              rating={difficultyKlipping}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
