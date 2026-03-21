import HowToSection from "@/components/shared/how-to/how-to";
import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { ReplacePlaceholder } from "@/components/shared/content/rePlaceholder";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";

export default async function HvordanLageKurver({ lang }: LocaleProps) {
  const { title, intro, steps } = (await getDictionary(lang)).pages
    .hjertekurvPage.hvordanLageKurver;

  return (
    <div style={{ marginBottom: "48px" }}>
      <Heading level="h2">{title}</Heading>
      <Paragraph style={{ marginBottom: "36px" }}>
        <ReplacePlaceholder
          text={intro.text}
          placeholder="{link}"
          component={
            <Link
              href={{
                route: "/[lang]/hvordan-lage-kurver",
                params: { lang },
              }}
            >
              {intro.linkText}
            </Link>
          }
        />
      </Paragraph>
      {steps.map((step) => (
        <HowToSection key={step.number} number={step.number} isDarkRed>
          {step.description}
        </HowToSection>
      ))}
    </div>
  );
}
