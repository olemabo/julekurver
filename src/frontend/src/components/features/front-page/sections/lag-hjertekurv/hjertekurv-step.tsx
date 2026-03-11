import LazyImage from "@/components/shared/lazy-image/lazy-image";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/display-theme";
import styles from "./hjertekurv-step.module.css";

type HjertekurvStepProps = {
  imageUrl: string;
  description: string;
  number: number;
  height?: number;
  svgSize?: number;
};

export default function HjertekurvStep({
  imageUrl,
  description,
  height = 280,
}: HjertekurvStepProps) {
  const imageSize = { height: height, width: 250 };
  return (
    <div className={styles.hjertekurvStep}>
      <LazyImage
        src={imageUrl}
        alt={description}
        imageSize={imageSize}
        className="illustration-image"
      />
      <Paragraph theme={lightTheme}>{description}</Paragraph>
    </div>
  );
}
