import Image from "next/image";
import Link from "@/components/shared/ui/link/link";
import { InstagramIcon } from "@/components/shared/ui/icons/icons";
import styles from "./inspiration.module.css";
import { getInstagramImages } from "@/lib/api/services/get-instragram-images";
import ContentHeader from "../../content-header/content-header";
import { darkTheme } from "@/constants/display-theme";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";

async function InstagramImages() {
  const images = await getInstagramImages();

  return (
    <>
      <div className={styles.inspirationSectionContainer}>
        {images.map((image, index) => (
          <Image
            key={`insp-section-${index}`}
            src={image.mediaUrl}
            alt={`Instagram media ${index + 1}`}
            width={300}
            height={300}
          />
        ))}
      </div>
      <div className={styles.socialMediaLinksContainer}>
        <Link
          icon={<InstagramIcon />}
          target="_blank"
          href="https://www.instagram.com/hjertekurver/"
        >
          Instagram
        </Link>
      </div>
    </>
  );
}

// async function InstagramImagesLoader() {
//   return (
//     <div className={styles.inspirationSectionContainer}>
//       {[...Array(3)].map((_, index) => (
//         <div key={index} className={styles.instagramImagePlaceholder} />
//       ))}
//     </div>
//   );
// }

export default async function InspirationSection({ lang }: LocaleProps) {
  const title = (await getDictionary(lang)).pages.frontpage.inspirationSection
    .title;

  return (
    <>
      <ContentHeader title={title} theme={darkTheme} />
      <InstagramImages />
    </>
  );
}
