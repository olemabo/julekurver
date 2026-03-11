import Button from "@/components/shared/ui/button/button";
import JulekurvStep from "./hjertekurv-step";
import { lightTheme } from "@/constants/display-theme";
import styles from "./lag-hjertekurver-section.module.css";
import ContentHeader from "../../content-header/content-header";
import { LocaleProps } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

export default async function LagHjertekurvSection({ lang }: LocaleProps) {
  const dictionary = (await getDictionary(lang)).pages.frontpage
    .lagHjertekurvSection;

  const { title, step1, step2, step3, buttonLabel } = dictionary;

  const julekurvSteps = [
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_materialer.svg",
      description: step1,
      height: 225,
      number: 1,
    },
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_mal.svg",
      description: step2,
      height: 210,
      number: 2,
    },
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_kurv.svg",
      description: step3,
      height: 210,
      number: 3,
    },
  ];

  return (
    <>
      <ContentHeader title={title} theme={lightTheme} />
      <div className={styles.lagHjertekurvSectionContainer}>
        {julekurvSteps.map((step, index) => (
          <JulekurvStep
            key={index}
            number={step.number}
            imageUrl={step.imageSrc}
            svgSize={60}
            description={step.description}
            height={step.height}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          theme={lightTheme}
          label={buttonLabel}
          href={buildAppRoute({
            route: "/[lang]/hvordan-lage-kurver",
            params: { lang },
          })}
        />
      </div>
    </>
  );
}
