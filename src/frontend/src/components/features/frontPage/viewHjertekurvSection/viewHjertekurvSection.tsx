"use client";

import Button from "@/components/shared/ui/button/button";
import useHjertekurver from "./useViewHjertekurvSection";
import HjertekurvLoader from "@/components/shared/loaders/hjertekurvLoader";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HjertekurvCarousel from "./hjertekurvCarousel";
import ContentHeader from "../contentHeader/contentHeader";
import { darkTheme } from "@/constants/displayTheme";
import { useViewHjertekurvSection } from "../useTexts";
import { Locale } from "@/providers";
import "./viewHjertekurvSection.scss";

export default function ViewHjertekurvSection({ lang }: Locale) {
  const { data, error, loading } = useHjertekurver("");
  const { title, paragraph1, paragraph2, listItems, buttonLabel } =
    useViewHjertekurvSection();

  if (loading) {
    return <HjertekurvLoader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || data.length < 3) {
    return null;
  }

  return (
    <>
      <ContentHeader title={title} theme={darkTheme} />
      <div className="our-hearts-container">
        <div>
          <Paragraph maxWidth={400}>{paragraph1}</Paragraph>
          <Paragraph maxWidth={400}>{paragraph2}</Paragraph>
          <ul className="custom-ul">
            {listItems?.map((step, index) => (
              <li key={`our-hearts-container-${index}`}>{step}</li>
            ))}
          </ul>
          <Button
            style={{ marginTop: "24px" }}
            label={buttonLabel}
            href={`${lang}/hjertekurver`}
          />
        </div>
        <HjertekurvCarousel useFirst displayTime={5000} kurver={data} />
      </div>
    </>
  );
}
