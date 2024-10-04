'use client';

import './header.scss';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Header() {
  return (
    <header>
      <nav>
        <a href='/'>
          <img src="/images/logo/header_logo.svg" height={40} />
        </a>
        <div style={{display: 'flex', columnGap: '60px' }}>
          <ul>
            <li>
              <a href="/julekurver">Julekurver</a>
            </li>
            <li>
              <a href="/om-siden">Om siden</a>
            </li>
            <li>
              <a href="/kontakt-oss">Kontakt oss</a>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <SearchIcon fontSize="large" />
            </li>
            <li>
              <FavoriteBorderIcon fontSize="large" />
            </li>
            <li>
              <PersonOutlineIcon fontSize="large" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}