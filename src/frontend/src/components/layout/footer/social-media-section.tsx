import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import {
  InstagramIcon,
  PinterestIcon,
} from "@/components/shared/ui/icons/icons";
import styles from "./footer.module.css";
import { getDictionary } from "@/localization/get-dictionary";
import { LocaleProps } from "@/config/i18n";

export default async function SocialMediaSection({ lang }: LocaleProps) {
  const { followUsHeading } = (await getDictionary(lang)).footer;

  const pinterestUrl = "";

  return (
    <div className={styles.socialMediaLinks}>
      <Heading level="h2" withMargins={false}>
        {followUsHeading}
      </Heading>
      <Link
        icon={<InstagramIcon />}
        target="_blank"
        href="https://www.instagram.com/hjertekurver/"
      >
        Instagram
      </Link>
      {pinterestUrl && (
        <Link icon={<PinterestIcon />} target="_blank" href="#">
          Pinterest
        </Link>
      )}
    </div>
  );
}
