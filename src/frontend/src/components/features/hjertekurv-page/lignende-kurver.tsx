import HjertekurvCollectionCard from "../hjertekurv-collection-page/searchAndFilter/collection-card/hjertekurv-collection-card";
import Heading from "@/components/shared/ui/heading/heading";
import { LocaleProps } from "@/config/i18n";
import { getRelatedHjertekurver } from "@/lib/api/services/get-related-hjertekurver";
import { getDictionary } from "@/localization/get-dictionary";

type LignendeKurverProps = {
  url: string;
} & LocaleProps;

export default async function LignendeKurver({
  url,
  lang,
}: LignendeKurverProps) {
  const relatedHjertekurver = await getRelatedHjertekurver(url, lang);
  const { title } = (await getDictionary(lang)).pages.hjertekurvPage
    .lignendeKurver;

  if (!relatedHjertekurver || relatedHjertekurver.length === 0) {
    return null;
  }

  return (
    <>
      <Heading level="h2">{title}</Heading>
      <div
        style={{ marginTop: "36px" }}
        className="hjertekurv-kartotek-section small"
      >
        {relatedHjertekurver?.slice(0, 6).map((hjertekurv, index) => (
          <HjertekurvCollectionCard
            key={`hjertekurv-collection-${hjertekurv?.name}-${index}`}
            size="sm"
            showDifficultyLevels={false}
            hjertekurv={hjertekurv}
            lang={lang}
          />
        ))}
      </div>
    </>
  );
}
