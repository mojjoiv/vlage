import React from 'react'
import './Header.css';
import vlage from './assets/img/vlage.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="header-container">
            <div className="header">
                <Link to="/">
                <img
                    className="header__icon, photo"
                    src={vlage}
                    alt="THE VLAGE"
                />
                </Link>
                <div className="header-center">
                    <input type="text" placeholder="Search here"/>
                    <div className="search-btn"><SearchIcon/></div>
                </div>

                <div className="header-right">
                    <p className="bcm-a-host">Become a host</p> 
                    <div className="globe"><LanguageIcon/></div>
                    <div className="down"><ExpandMoreIcon/></div>
                    <Avatar/>
                </div>
            </div>
        </header>
    )
}

export default Header
