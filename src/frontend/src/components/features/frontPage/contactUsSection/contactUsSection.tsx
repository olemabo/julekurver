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
          Vår lidenskap for fletting av hjerter har ført til opprettelsen av
          dette nettstedet, et sted hvor kjærlighet møter kreativitet. Vi tror
          på kraften av håndlagde hjerte-flettede kreasjoner for å uttrykke
          følelser og skape unike øyeblikk.
        </Paragraph>
        <Paragraph theme={lightTheme} maxWidth={paragraphMaxWidth}>
          Om det er noe som helst du ønsker å ta kontakt om, ikke nøl. Om det er
          nye kurver, feil på nettsiden eller andre spørsmål.
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
