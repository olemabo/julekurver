import Popover from "@/components/shared/ui/popover/popover";
import { getDictionary } from "@/localization/get-dictionary";
import { LocaleProps } from "@/config/i18n";
import {
  FullHeart,
  FullScissor,
} from "@/components/shared/difficulty-level/icons";

export default async function DifficultyPopover({ lang }: LocaleProps) {
  const dictionary = await getDictionary(lang);

  const {
    title,
    description,
    difficulty,
    weaving,
    weavingDetails,
    weavingDetails2,
    cutting,
    cuttingDetails,
    cuttingDetails2,
  } = dictionary.pages.hjertekurverKartotekPage.difficultyPopover;

  const factors = [
    {
      title: weaving,
      details: (
        <>
          {weavingDetails}
          <FullHeart size="small" />. {weavingDetails2}
        </>
      ),
    },
    {
      title: cutting,
      details: (
        <>
          {cuttingDetails}
          <FullScissor size="small" />. {cuttingDetails2}
        </>
      ),
    },
  ];

  return (
    <Popover
      title={title}
      content={
        <>
          {description}
          <ul className="custom-ul">
            {factors.map((factor, index) => (
              <li key={index}>
                <b>{factor.title}</b> {factor.details}
              </li>
            ))}
          </ul>
        </>
      }
    >
      {difficulty}
    </Popover>
  );
}
