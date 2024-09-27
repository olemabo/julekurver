import React, { FunctionComponent } from "react";
import "./topMenu.scss";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const TopMenu : FunctionComponent = () => {
    
    return (
        <>
            <header>
                <nav>
                    <div>
                        <img src="../../../../static/images/hjertekurver1.svg" height={76} />
                    </div>
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
                </nav>            
            </header>
        </>
    )
};

export default TopMenu;