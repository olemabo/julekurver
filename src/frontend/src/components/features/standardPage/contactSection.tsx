"use client";

import Button from "@/components/shared/ui/button/button";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import TextArea from "@/components/shared/ui/textarea/textarea";
import { createBackendUrl } from "@/utils/backendApiUrl";
import axios from "axios";
import { useState } from "react";
import { useContactSectionTexts } from "./useTexts";

export default function ContactSection() {
  const {
    heading,
    paragraph,
    thankYouMessage,
    textareaLabel,
    textareaPlaceholder,
    errorMessage,
    buttonLabel,
  } = useContactSectionTexts();

  const apiBaseUrl = createBackendUrl();
  const feedbackUrl = `${apiBaseUrl}/api/feedback/`;
  const [hasSentContactUsMessage, setHasSentContactUsMessage] = useState(false);
  const [contactUsMessage, setContactUsMessage] = useState("");
  const [errorMessageState, setErrorMessage] = useState("");

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
    } catch {}
  };

  return (
    <>
      <Heading headingLevel="h2">{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      {hasSentContactUsMessage ? (
        <Paragraph maxWidth={500}>{thankYouMessage}</Paragraph>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <TextArea
            label={textareaLabel}
            style={{
              border: "1px solid black",
              backgroundColor: "transparent",
            }}
            value={contactUsMessage}
            customOnChange={(message: string) => setContactUsMessage(message)}
            placeholder={textareaPlaceholder}
            maxWidth={400}
            errorMessage={errorMessageState}
          />
          <Button label={buttonLabel} onClick={handleContactUsMessage} />
        </div>
      )}
    </>
  );
}
