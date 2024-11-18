import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import "./hjertekurvCollectionCard.css";
import Image from "next/image";
import Link from "next/link";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Heading from "@/components/shared/ui/heading/heading";
import DifficultyLevel, {
  ICON_TYPE_HEART,
  ICON_TYPE_SCISSOR,
} from "@/components/shared/difficultyLevel/difficultyLevel";

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

  return (
    <Link href={`/hjertekurver/${url}`} key={name} className={size}>
      <div className="section">
        <Heading headingLevel="h3">{name}</Heading>
        <Image
          className="kurv-image"
          width={imageSize}
          height={imageSize}
          alt={name}
          src={mediaUrl}
        />
        {showDifficultyLevels && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
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
