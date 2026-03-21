import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

type LogoProps = {
  logoText: string;
  onClick: () => void;
};

export default function Logo({ logoText, onClick }: LogoProps) {
  return (
    <Link className={styles.logo} href="/" onClick={onClick}>
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
