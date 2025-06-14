import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/localization/dictionaries";
import {
  InstagramIcon,
  PinterestIcon,
} from "@/components/shared/ui/icons/icons";
import { INSTAGRAM_URL } from "@/constants/urls";

export default function SocialMediaSection() {
  const { dictionary } = use(LanguageContext);

  const followUsHeading = getValuesByKeys(dictionary, [
    "footer",
    "followUsHeading",
  ]);

  const pinterestUrl = "";
  const instagramUrl = INSTAGRAM_URL;

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
