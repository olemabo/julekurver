import Button from "@/components/shared/ui/button/button";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HjertekurvCarousel from "./hjertekurv-carousel";
import ContentHeader from "../../content-header/content-header";
import { darkTheme } from "@/constants/display-theme";
import styles from "./view-hjertekurver.module.css";
import { LocaleProps } from "@/config/i18n";
import { getHjertekurver } from "@/lib/api/services/get-hjertekurver";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";

export default async function ViewHjertekurvSection({ lang }: LocaleProps) {
  const [hjertekurver, dictionary] = await Promise.all([
    getHjertekurver("", lang),
    getDictionary(lang),
  ]);

  const { title, paragraph1, paragraph2, listItems, buttonLabel } =
    dictionary.pages.frontpage.viewHjertekurvSection;

  if (!hjertekurver || hjertekurver.length < 3) {
    return null;
  }

  return (
    <>
      <ContentHeader title={title} theme={darkTheme} />
      <div className={styles.ourHeartsContainer}>
        <div>
          <Paragraph maxWidth={400}>{paragraph1}</Paragraph>
          <Paragraph maxWidth={400}>{paragraph2}</Paragraph>
          <ul className="custom-ul">
            {listItems?.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <Button
            style={{ marginTop: "24px" }}
            label={buttonLabel}
            href={buildAppRoute({
              route: "/[lang]/hjertekurver",
              params: { lang },
            })}
            theme={darkTheme}
          />
        </div>
        <HjertekurvCarousel useFirst displayTime={5000} kurver={hjertekurver} />
      </div>
    </>
  );
}
