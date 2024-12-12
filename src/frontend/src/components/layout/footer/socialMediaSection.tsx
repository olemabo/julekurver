import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import {
  InstagramIcon,
  PinterestIcon,
} from "@/components/shared/ui/icons/icons";

export default function SocialMediaSection() {
  const { dictionary } = use(LanguageContext);

  const followUsHeading = getValuesByKeys(dictionary, [
    "footer",
    "followUsHeading",
  ]);

  const pinterestUrl = "Hss";
  const instagramUrl = "https://www.instagram.com/hjertekurver/";

  return (
    <div className="social-media-links">
      <Heading headingLevel="h2" withMargins={false}>
        {followUsHeading}
      </Heading>
      {instagramUrl && (
        <Link
          icon={<InstagramIcon />}
          linkTitle="Instagram"
          target="_blank"
          href={instagramUrl}
        />
      )}
      {pinterestUrl && (
        <Link
          icon={<PinterestIcon />}
          linkTitle="Pinterest"
          target="_blank"
          href="#"
        />
      )}
    </div>
  );
}
