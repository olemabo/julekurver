import Popover from "../../ui/popover/popover";
import Link from "next/link";
import { getDictionary } from "@/localization/get-dictionary";

export default function SymmetriskMotivPopover({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["popover"]["symmetriskMotiv"];
}) {
  const {
    title,
    intro,
    link1Text,
    link1Href,
    mid,
    link2Text,
    link2Href,
    outro,
  } = dictionary;

  return (
    <Popover
      title={title}
      content={
        <>
          {intro} <Link href={link1Href}>{link1Text}</Link> {mid}{" "}
          <Link href={link2Href}>{link2Text}</Link> {outro}
        </>
      }
    >
      {title?.toLowerCase()}
    </Popover>
  );
}
