import React from 'react';
import logo2 from './logo2.png';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="Footer-Container">
        <div className="content wrapper">

            <div className="footerLeft">
                <ul>
                <li><img src={logo2} alt="logo" /></li>
                <br/><br/>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididuntnisi ut aliquip ex ea commodo consequat.
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></li>
                </ul>
            </div>

            <div className="footerMid">
            <h1>LINKS</h1><br/>
            <ul>
               <li>Terms and Conditions</li>
               <li>Privacy Policy</li>
               <li>Cookie Policy</li>
               <li>Terms and Conditions</li>
               <li>Help  & FAQs</li>
               <li>Contact Us</li>
               </ul>
            </div>

            <div className="footerRight">
            <h1>OUR NETWORK</h1>
                <ul>
                <li><a href="http://wwww.google.com">FranchiseSales.in</a></li>
                <li><a href="http://wwww.google.com">FranchiseAvendre.fr</a></li>
                <li><a href="http://wwww.google.com">PropertySales.in</a></li>
                </ul>
            </div>

        </div>
        <div className="clear "></div>
        <div className="hr">
        <hr/>
        </div>
        <div className="preserved"><p>&copy;2018 Example. All Rights Reserved</p></div>
        </div>
    );
};

export default Footer;