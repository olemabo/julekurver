"use client";

import Button from "@/components/shared/ui/button/button";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import TextArea from "@/components/shared/ui/textarea/textarea";
import { sendFeedback } from "@/lib/api/services/post-feedback";
import { getDictionary } from "@/localization/get-dictionary";
import { useState } from "react";

export default function ContactSchema({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["pages"]["contactSection"];
}) {
  const {
    heading,
    paragraph,
    thankYouMessage,
    textareaLabel,
    textareaPlaceholder,
    errorMessage,
    buttonLabel,
  } = dictionary;

  const [hasSent, setHasSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!message.trim()) {
      setError(errorMessage);
      return;
    }
    try {
      await sendFeedback(message);
      setHasSent(true);
      setMessage("");
      setError("");
    } catch {
      setError("Noe gikk galt. Prøv igjen senere.");
    }
  };

  if (hasSent) {
    return <Paragraph maxWidth={500}>{thankYouMessage}</Paragraph>;
  }

  return (
    <>
      <Heading level="h2">{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
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
          value={message}
          customOnChange={setMessage}
          placeholder={textareaPlaceholder}
          maxWidth={400}
          errorMessage={error}
        />
        <Button label={buttonLabel} onClick={handleSend} />
      </div>
    </>
  );
}
