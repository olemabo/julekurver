import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import Link from "next/link";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Heading from "@/components/shared/ui/heading/heading";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficultyLevel/difficultyLevel";
import DisplayHjertekurvSvgWithColors from "@/components/shared/images/displayHjertekurvSvgWithColors";
import "./hjertekurvCollectionCard.scss";

export type HjertekurvCardSize = "sm" | "default";

type HjertekurvCollectionCardProps = {
  hjertekurv: Hjertekurv;
  size?: HjertekurvCardSize;
  showDifficultyLevels?: boolean;
};

export default function HjertekurvCollectionCard({
  hjertekurv,
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
    <Link href={`/hjertekurver/${url}`} key={name} className={size}>
      <div className="section">
        <Heading style={{ color: fillColor1 }} headingLevel="h3">
          {name}
        </Heading>
        <div className="hover-wrapper">
          {/* <Image
          className="kurv-image"
          width={imageSize}
          height={imageSize}
          alt={name}
          src={mediaUrl}
        /> */}
          <DisplayHjertekurvSvgWithColors
            imageUrl={mediaUrl}
            fillColor1={fillColor1}
            // fillColor1={"#8b6657"}
            fillColor2={fillColor2}
            imageSize={{ height: imgSize, width: imgSize }}
          />
          {/* <DisplayHjertekurvSvgWithColors

          imageUrl={mediaUrl} 
          fillColor1={"#9B776B"}
          // fillColor1={"#8b6657"}
          fillColor2={fillColor2}
          imageSize={{ height: imgSize, width: imgSize }}
        />
        <DisplayHjertekurvSvgWithColors

        imageUrl={mediaUrl} 
        fillColor1={"#8b6657"}
        fillColor2={fillColor2}
        imageSize={{ height: imgSize, width: imgSize }}
        />
        <DisplayHjertekurvSvgWithColors

        imageUrl={mediaUrl} 
        fillColor1={"#7d4d3d"}
        fillColor2={fillColor2}
        imageSize={{ height: imgSize, width: imgSize }}
        /> */}
        </div>
        {showDifficultyLevels && (
          <div className="difficulty-level-container">
            <DifficultyLevel
              hideEmpty
              iconSize="small"
              type={ICON_TYPE_HEART}
              rating={difficultyFletting}
              // color={fillColor1}
            />
            <DifficultyLevel
              hideEmpty
              iconSize="small"
              type={ICON_TYPE_SCISSOR}
              rating={difficultyKlipping}
              // color={fillColor1}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
