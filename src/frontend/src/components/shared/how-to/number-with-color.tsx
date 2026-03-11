import { darkTheme, DisplayTheme } from "@/constants/display-theme";
import Image from "next/image";
import styles from "./number-with-color.module.css";

type NumberWithColorProps = {
  number: number;
  theme?: DisplayTheme;
  svgSize?: number;
  isDarkRed?: boolean;
};

export default function NumberWithColor({
  number,
  theme,
  svgSize = 40,
  isDarkRed = false,
}: NumberWithColorProps) {
  if (!number) return null;

  const backgroundSvg =
    theme === darkTheme
      ? isDarkRed
        ? "/images/pages/number_background_darkred.svg"
        : "/images/pages/number_background.svg"
      : "/images/pages/number_background_hvit.svg";

  return (
    <div className={`${styles.numberWithColorContainer} ${styles[theme!]}`}>
      <span>{number?.toString()}</span>
      <Image
        src={backgroundSvg}
        alt="Number color background"
        width={svgSize}
        height={svgSize}
      />
    </div>
  );
}
