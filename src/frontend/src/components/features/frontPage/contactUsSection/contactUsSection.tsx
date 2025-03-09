"use client";

import { useState } from "react";
import { createBackendUrl } from "@/utils/backendApiUrl";
// import Image from "next/image";
import Button from "@/components/shared/ui/button/button";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import TextArea from "@/components/shared/ui/textarea/textarea";
import { lightTheme } from "@/constants/displayTheme";
import axios from "axios";
import "./contactUsSection.scss";
import LazyImage from "@/components/shared/lazyImage/LazyImage";
import Link from "next/link";
import { useContactUsSection } from "../useTexts";
import { ReplacePlaceholder } from "@/components/shared/content/replacePlaceholder";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export default function ContactUsSection({ lang }: Locale) {
  const {
    title,
    introParagraph,
    introLinkText,
    thankYouMessage,
    feedbackPrompt,
    textareaLabel,
    textareaPlaceholder,
    buttonLabel,
    imageAltText,
  } = useContactUsSection();
  const feedbackUrl = createBackendUrl("/api/feedback/");

  const [hasSentContactUsMessage, setHasSentContactUsMessage] = useState(false);
  const [contactUsMessage, setContactUsMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactUsMessage = async () => {
    if (!contactUsMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    try {
      await axios.post(feedbackUrl, { message: contactUsMessage });
      setHasSentContactUsMessage(true);
      setContactUsMessage("");
      setErrorMessage("");
    } catch {
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const paragraphMaxWidth = 500;

  return (
    <div className="contact-section-container">
      <div>
        <Heading theme={lightTheme} headingLevel="h2">
          {title}
        </Heading>
        <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
          <ReplacePlaceholder
            text={introParagraph}
            placeholder="{link}"
            component={
              <Link
                style={{ color: "inherit" }}
                href={`/${lang}/${URLs.contactUs}`}
              >
                {introLinkText}
              </Link>
            }
          />
        </Paragraph>
        <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
          {feedbackPrompt}
        </Paragraph>
        {hasSentContactUsMessage ? (
          <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
            {thankYouMessage}
          </Paragraph>
        ) : (
          <div className="contact-form">
            <TextArea
              label={textareaLabel}
              customOnChange={(message: string) => setContactUsMessage(message)}
              value={contactUsMessage}
              placeholder={textareaPlaceholder}
              maxWidth={400}
              errorMessage={errorMessage}
            />
            <Button
              theme={lightTheme}
              label={buttonLabel}
              onClick={handleContactUsMessage}
            />
          </div>
        )}
      </div>
      <LazyImage
        src={"/images/pages/frontpage/frontpage_hjertekurv_letter-cropped.svg"}
        alt={imageAltText}
        imageSize={{ height: 350, width: 350 }}
        className="illustration-image"
      />
    </div>
  );
}
