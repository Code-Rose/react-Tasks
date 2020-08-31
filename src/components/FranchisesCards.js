import React from 'react';
import franchise from './franchise.jpg';
import logo2 from './logo2.png';
import logo from './logo.png';
import CommonFranchisesCard from './CommonFranchisesCard';
import '../css/FranchisesCard.css';

const FranchisesCards = () => {
    return (
        <div className="Franchises-Container">
        <div className="FranchisesHead"><h1>FEATURED FRANCHISES</h1></div>
        <div className="wrapper">
            <CommonFranchisesCard 
            name="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut" 
             imgsrc={franchise}/>

            <CommonFranchisesCard 
            imgsrci={logo} />

            <CommonFranchisesCard 
            imgsrci={logo2} />
        </div>
        <div className="clear"></div>
        </div>
    );
};

export default FranchisesCards;