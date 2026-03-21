import Image from "next/image";
import Popover from "../../ui/popover/popover";
import { getDictionary } from "@/localization/get-dictionary";

export default function FlettetilleggPopover({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["popover"]["flettetillegg"];
}) {
  const { content, altText, title } = dictionary;

  return (
    <Popover
      title={title}
      content={
        <>
          {content}
          <Image
            src="/images/pages/frontpage/flettetillegg.svg"
            alt={altText}
            width={270}
            height={60}
          />
        </>
      }
    >
      {title}
    </Popover>
  );
}
