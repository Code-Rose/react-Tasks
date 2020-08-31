import React from 'react';
import logo2 from './logo2.png';
import india from './india.png';
import header from './header.jpg';
import '../css/Header.css';

class Header extends React.Component{


    render(){
        return(
            <div>
                <div className="UpperHeader" style={{backgroundImage: `url(${header})`,backgroundPosition:'center',
                backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                <div className="wrapper topnav">
                    <ul className="Logo">
                            <img src={logo2}  alt="log" />
                            </ul>
                    <ul className="RightHeader">
                        <li id="sell-btn"><a href="http://www.google.com">Sell Your Business</a></li>
                        <li className="country"><img src={india}  alt="INDIA-FLAG" />&nbsp;&nbsp;IND</li>
                    </ul>
                </div>
                <div className="clear"></div>
                    <hr/>
                    <div className="Navbar wrapper">
                         <ul>
                            <li className="menu"><a href="http://www.google.com">HOME</a></li>
                            <li className="menu"><a href="http://www.google.com">BUSINESS</a></li>
                            <li className="menu"><a href="http://www.google.com">FRANCHISES</a></li>
                            <li className="menu"><a href="http://www.google.com">SELLING</a></li>
                            <li className="menu"><a href="http://www.google.com">BROKERS</a></li>
                            <li className="menu"><a href="http://www.google.com">FRANCHISORS</a></li>
                            <li id="login"><a href="http://www.google.com">LOGIN</a></li>
                         </ul>
                   </div>
                   <div className="clear"></div>
                    <div className="alText wrapper">
                   <div className="headerText">
                        <p className="paratag">Lorem ipsum dolor sit amet,tempor incididunt labore dolore magna aliqua. </p>
                        <input type="text" className="searchInput" placeholder="Enter to Search" />
                        <button id="search-btn">Search</button>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

// const Header = () => {
//     return (
//         <div>
//             <h1>Header Serction</h1>
//         </div>
//     );
// };

export default Header;