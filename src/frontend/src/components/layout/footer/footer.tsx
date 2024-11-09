"use client";

import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@/components/shared/ui/link/link";
import Heading from "@/components/shared/ui/heading/heading";

import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-link-section">
          <div className="webpage-links">
            <Heading headingLevel="h2" withMargins={false}>
              Hjertekurver
            </Heading>
            <Link href="/se-kurver" linkTitle="Se kurver" />
            <Link href="/hvordan-lage-kurver" linkTitle="Lag kurver" />
          </div>
          <div className="webpage-links">
            <Heading headingLevel="h2" withMargins={false}>
              Om nettsiden
            </Heading>
            <Link href="/om-siden" linkTitle="Om siden" />
            <Link href="/kontakt-oss" linkTitle="Kontakt oss" />
          </div>
        </div>
        <div className="social-media-links">
          <Heading headingLevel="h2" withMargins={false}>
            Følg oss
          </Heading>
          <Link
            icon={<InstagramIcon />}
            linkTitle="Instagram"
            target="_blank"
            href="https://www.instagram.com/hjertekurver/"
          />
          <Link
            icon={<PinterestIcon />}
            linkTitle="Pinterest"
            target="_blank"
            href="#"
          />
        </div>
      </div>
    </footer>
  );
}
