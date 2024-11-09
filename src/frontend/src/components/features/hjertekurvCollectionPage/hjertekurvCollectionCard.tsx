import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import "./hjertekurvCollectionCard.css";
import Image from "next/image";
import Link from "next/link";
import { createApiMediaUrl } from "@/utils/backendApiUrl";

export type HjertekurvCardSize = "sm" | "default";

type HjertekurvCollectionCardProps = {
  hjertekurv: Hjertekurv;
  size?: HjertekurvCardSize;
};

export default function HjertekurvCollectionCard({
  hjertekurv,
  size = "default",
}: HjertekurvCollectionCardProps) {
  const { url, imageHjertekurvUrl, name } = hjertekurv;
  const mediaUrl = createApiMediaUrl(imageHjertekurvUrl);

  const imageSize = size === "sm" ? 120 : 160;

  return (
    <Link href={`/hjertekurver/${url}`} key={name} className={size}>
      <div className="section">
        <h3>{name}</h3>
        <Image width={imageSize} height={imageSize} alt={name} src={mediaUrl} />
      </div>
    </Link>
  );
}
