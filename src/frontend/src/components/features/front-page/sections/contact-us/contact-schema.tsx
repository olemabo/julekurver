"use client";

import Button from "@/components/shared/ui/button/button";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import TextArea from "@/components/shared/ui/textarea/textarea";
import { lightTheme } from "@/constants/display-theme";
import { sendFeedback } from "@/lib/api/services/post-feedback";
import { getDictionary } from "@/localization/get-dictionary";
import { useState } from "react";

type Dictionary = Awaited<
  ReturnType<typeof getDictionary>
>["pages"]["frontpage"]["contactUsSection"];

export default function ContactSchema({
  dictionary,
}: {
  dictionary: Dictionary;
}) {
  const {
    thankYouMessage,
    errorMessage,
    textareaLabel,
    textareaPlaceholder,
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
    return (
      <Paragraph theme={lightTheme} maxWidth={500}>
        {thankYouMessage}
      </Paragraph>
    );
  }

  return (
    <>
      <TextArea
        label={textareaLabel}
        customOnChange={setMessage}
        value={message}
        placeholder={textareaPlaceholder}
        maxWidth={400}
        errorMessage={error}
      />
      <Button theme={lightTheme} label={buttonLabel} onClick={handleSend} />
    </>
  );
}
