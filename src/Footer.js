import React from 'react'
import './Footer.css';

function Footer() {
    var currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>© {currentYear} The Vlage! rights reserved</p>
            <p>Privary · Terms · Sitemap · Company Details</p>
        </div> 
    )
}

export default Footer
