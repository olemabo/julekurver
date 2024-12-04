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

export default function ContactUsSection() {
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
    } catch {
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const paragraphMaxWidth = 500;

  return (
    <div className="contact-section-container">
      <div>
        <Heading theme={lightTheme} headingLevel="h2">
          Kontakt oss
        </Heading>
        <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
          Din interesse betyr mye for oss, og vi setter stor pris på
          tilbakemeldinger. Har du spørsmål, forslag, eller ønsker å dele dine
          egne hjertekurv-kreasjoner? Vi vil gjerne høre fra deg! Besøk vår{" "}
          <Link style={{ color: "inherit" }} href="/no/kontakt-oss">
            kontakt oss{" "}
          </Link>
          -side for å komme i kontakt.
        </Paragraph>
        <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
          Hvis du ønsker å sende inn en rask, anonym tilbakemelding, kan du
          gjøre det i boksen under. Skriv inn det du vil dele, og klikk på
          &apos;Send inn tilbakemelding&apos; - vi gjennomgår alle bidrag så
          snart som mulig.
        </Paragraph>
        {hasSentContactUsMessage ? (
          <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
            Takk for din tilbakemelding!
          </Paragraph>
        ) : (
          <div className="contact-form">
            <TextArea
              customOnChange={(message: string) => setContactUsMessage(message)}
              value={contactUsMessage}
              placeholder="Legg inn tilbakemelding..."
              maxWidth={400}
              errorMessage={errorMessage}
            />
            <Button
              theme={lightTheme}
              label="Send inn tilbakemelding"
              onClick={handleContactUsMessage}
            />
          </div>
        )}
      </div>
      <LazyImage
        src={"/images/pages/frontpage/frontpage_hjertekurv_letter-cropped.svg"}
        alt={"logo av flettet hjertekurv"}
        imageSize={{ height: 350, width: 350 }}
        className="illustration-image"
      />
      {/* <Image
        alt="logo av flettet hjertekurv"
        height={350}
        height={350}
        width={350}
        src={"/images/pages/frontpage/frontpage_hjertekurv_letter-cropped.svg"}
      /> */}
    </div>
  );
}
