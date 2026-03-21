import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import styles from "./contact-us.module.css";
import LazyImage from "@/components/shared/lazy-image/lazy-image";
import { ReplacePlaceholder } from "@/components/shared/content/rePlaceholder";
import { LocaleProps } from "@/config/i18n";
import Link from "@/components/shared/ui/link/link";
import { getDictionary } from "@/localization/get-dictionary";
import ContactSchema from "./contact-schema";

export default async function ContactUsSection({ lang }: LocaleProps) {
  const dictionary = (await getDictionary(lang)).pages.frontpage
    .contactUsSection;

  const { title, introParagraph, introLinkText, feedbackPrompt, imageAltText } =
    dictionary;

  return (
    <div className={styles.contactContainer}>
      <div>
        <Heading theme="light" level="h2">
          {title}
        </Heading>
        <Paragraph theme="light" maxWidth={500}>
          <ReplacePlaceholder
            text={introParagraph}
            placeholder="{link}"
            component={
              <Link
                style={{ color: "inherit" }}
                href={{
                  route: "/[lang]/[page]",
                  params: { lang, page: "kontakt-oss" },
                }}
              >
                {introLinkText}
              </Link>
            }
          />
        </Paragraph>
        <Paragraph theme="light" maxWidth={500}>
          {feedbackPrompt}
        </Paragraph>
        <div className={styles.contactForm}>
          <ContactSchema dictionary={dictionary} />
        </div>
      </div>
      <div className={styles.image}>
        <LazyImage
          src="/images/pages/frontpage/frontpage_hjertekurv_letter-cropped.svg"
          alt={imageAltText}
          imageSize={{ height: 350, width: 350 }}
        />
      </div>
    </div>
  );
}
