"use client";

import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <Image
            src="/images/logo/header_logo.svg"
            alt="Webpage logo"
            width={200}
            height={40}
          />
        </a>
        <div style={{ display: "flex", columnGap: "60px" }}>
          <ul>
            <li>
              <Link href="/julekurver">Julekurver</Link>
            </li>
            <li>
              <Link href="/om-siden">Om siden</Link>
            </li>
            <li>
              <Link href="/kontakt-oss">Kontakt oss</Link>
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
