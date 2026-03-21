import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import ContactSchema from "./contact-schema";
import { getDictionary } from "@/localization/get-dictionary";
import { LocaleProps } from "@/config/i18n";

export default async function ContactSection({ lang }: LocaleProps) {
  const dictionary = (await getDictionary(lang))["pages"]["contactSection"];

  return (
    <>
      <Heading level="h2">{dictionary.heading}</Heading>
      <Paragraph>{dictionary.paragraph}</Paragraph>
      <ContactSchema dictionary={dictionary} />
    </>
  );
}
