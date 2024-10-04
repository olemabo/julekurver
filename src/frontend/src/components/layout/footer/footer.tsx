'use client';

import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.scss';
import Link from '@/components/shared/ui/link/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container horizontal">
        <div style={{display: 'flex', columnGap: '120px'}}>
            <div className="webpage-links">
                <h2 className='heading3'>Hjertekurver</h2>
                <Link href="/se-kurver" linkTitle="Se kurver" />
                <Link href="/hvordan-lage-kurver" linkTitle="Lag kurver" />
            </div>
            <div className="webpage-links">
                <h2 className='heading3'>Om nettsiden</h2>
                <Link href="/om-siden" linkTitle="Om siden" />
                <Link href="/kontakt-oss" linkTitle="Kontakt oss" />
            </div>
        </div>
        <div className="social-media-links">
            <h2 className='heading3'>Følg oss</h2>
            <Link icon={<InstagramIcon/>} linkTitle='Instagram' target="_blank" href="#" />
            <Link icon={<PinterestIcon/>} linkTitle='Pinterest' target="_blank" href="#" />
        </div>
      </div>
    </footer>
  );
}
