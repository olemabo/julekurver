"use client";

import Button from "@/components/shared/ui/button/button";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import TextArea from "@/components/shared/ui/textarea/textarea";
import { createBackendUrl } from "@/utils/backendApiUrl";
import axios from "axios";
import { useState } from "react";

export default function ContactSection() {
  const apiBaseUrl = createBackendUrl();
  const feedbackUrl = `${apiBaseUrl}/api/feedback/`;
  const [hasSentContactUsMessage, setHasSentContactUsMessage] = useState(false);
  const [contactUsMessage, setContactUsMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactUsMessage = async () => {
    if (!contactUsMessage) {
      setErrorMessage("Du må legge inn innhold for å sende tilbakemelding");
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
      <Heading headingLevel="h2">Send direkte tilbakemelding</Heading>
      <Paragraph>
        Ønsker du å sende inn en rask, anonym tilbakemelding kan du gjøre det
        under her. Legg inn en tilbakemelding i boksen under og klikk på
        &apos;Send inn tilbakemelding&apos;, så vil vi gå gjennom den så raskt
        som mulig.
      </Paragraph>
      {hasSentContactUsMessage ? (
        <Paragraph maxWidth={500}>Takk for din tilbakemelding!</Paragraph>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "36px",
          }}
        >
          <TextArea
            label="Legg igjen en tilbakemelding"
            style={{
              border: "1px solid black",
              backgroundColor: "transparent",
            }}
            value={contactUsMessage}
            customOnChange={(message: string) => setContactUsMessage(message)}
            placeholder="Legg inn tilbakemelding..."
            maxWidth={400}
            errorMessage={errorMessage}
          />
          <Button
            label="Send inn tilbakemelding"
            onClick={handleContactUsMessage}
          />
        </div>
      )}
    </>
  );
}
