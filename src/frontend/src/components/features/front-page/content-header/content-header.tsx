import { DisplayTheme } from "@/constants/display-theme";
import Heading from "@/components/shared/ui/heading/heading";
import styles from "./content-header.module.css";

type ContentHeaderProps = {
  title: string;
  theme: DisplayTheme;
};

export default function ContentHeader({ title, theme }: ContentHeaderProps) {
  return (
    <div className={`${styles.contentHeader} ${styles[theme]}`}>
      <Heading theme={theme} level="h2">
        {title}
      </Heading>
    </div>
  );
}
