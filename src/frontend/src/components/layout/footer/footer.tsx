import SocialMediaSection from "./social-media-section";
import LinkSection from "./link-section";
import styles from "./footer.module.css";
import { LocaleProps } from "@/config/i18n";

export default function Footer({ lang }: LocaleProps) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <LinkSection lang={lang} />
        <SocialMediaSection lang={lang} />
      </div>
    </footer>
  );
}
