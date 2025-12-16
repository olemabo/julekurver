"use client";

import HowToSection from "@/components/shared/howTo/howTo";
import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { useHvordanLageKurverTexts } from "./useTexts";
import { ReplacePlaceholder } from "@/components/shared/content/replacePlaceholder";
import { URLs } from "@/constants/urls";
import { LocaleProps } from "@/config/i18n";

export default function HvordanLageKurver({ lang }: LocaleProps) {
  const { title, intro, steps } = useHvordanLageKurverTexts();

  return (
    <div style={{ marginBottom: "48px" }}>
      <Heading headingLevel="h2">{title}</Heading>
      <Paragraph style={{ marginBottom: "36px" }}>
        <ReplacePlaceholder
          text={intro.text}
          placeholder="{link}"
          component={
            <Link
              linkTitle={intro.linkText}
              href={`/${lang}/${URLs.hvordanLageKurver}`}
            />
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
