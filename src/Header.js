import React from 'react'
import './Header.css';
import vlage from './assets/img/vlage.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
                    {/* <Avatar/> */}
                    <Avatar aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        </Avatar>
                        <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <Link to="/Profile" className="button4"><MenuItem  onClick={handleClose}>Profile</MenuItem></Link>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
               </div>
            </div>
        </header>
    )
}

export default Header
