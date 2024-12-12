"use client";

import SocialMediaSection from "./socialMediaSection";
import LinkSection from "./linkSection";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <LinkSection />
        <SocialMediaSection />
      </div>
    </footer>
  );
}
