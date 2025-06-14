import Link from "next/link";
import { use } from "react";
import { LanguageContext } from "@/providers";
import { getValuesByKeys } from "@/localization/dictionaries";
import Image from "next/image";

type LogoProps = {
  onClick: () => void;
};

export default function Logo({ onClick }: LogoProps) {
  const { dictionary } = use(LanguageContext);

  const logoText = getValuesByKeys(dictionary, ["header", "logoText"]);

  return (
    <Link className="logo" href="/" onClick={onClick}>
      <Image
        src="/images/logo/logo_black-cropped.svg"
        alt="Webpage logo"
        width={32}
        height={32}
      />
      {logoText}
    </Link>
  );
}
