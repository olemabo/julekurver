import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import Link from "../../shared/link/Link";
import "./footer.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <div className="footer-container horizontal">
        <div className="webpage-links">
          <Link href="/om-siden" linkTitle='Om siden' />
          <Link href="/kontakt-oss" linkTitle='Kontakt oss' />
          <Link href="/julekurver" linkTitle='Julekurver' />
        </div>
        <div className="social-media-links">
          {/* <Link icon={<PinterestIcon />} target="_blank" href="#" linkTitle='Pinterest' />
          <Link icon={<InstagramIcon />} target="_blank" href="#" linkTitle='Instagram' /> */}
          <Link icon={<PinterestIcon />} target="_blank" href="#" />
          <Link icon={<InstagramIcon />} target="_blank" href="#" />
        </div>
      </div>
    </footer>
  )
};

export default Footer;