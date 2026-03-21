import Image from "next/image";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import styles from "./aboutKurverSection.module.css";
import { LocaleProps } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

export default async function AboutKurverSection({ lang }: LocaleProps) {
  const paragraphMaxWidth = 480;
  const dictionary = (await getDictionary(lang)).pages.frontpage
    .aboutKurverSection;

  const {
    title,
    paragraph1,
    paragraph2,
    learnMoreAboutUsButtonLabel,
    imageAltText,
  } = dictionary;

  return (
    <div className={styles.aboutKurverContainer}>
      <Image
        alt={imageAltText}
        height={350}
        width={335}
        priority
        src="/images/pages/frontpage/frontpage_hjertekurv-cropped.svg"
      />
      <div className={styles.textContainer}>
        <Heading theme="light" level="h2">
          {title}
        </Heading>
        <Paragraph maxWidth={paragraphMaxWidth} theme="light">
          {paragraph1}
        </Paragraph>
        <Paragraph maxWidth={paragraphMaxWidth} theme="light">
          {paragraph2}
        </Paragraph>
        <Button
          theme="light"
          label={learnMoreAboutUsButtonLabel}
          href={buildAppRoute({
            route: "/[lang]/[page]",
            params: { lang, page: "om-siden" },
          })}
        />
      </div>
    </div>
  );
}
