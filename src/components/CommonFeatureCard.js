import React from 'react';
import features1 from './features1.png';
import '../css/CommonFeatureCard.css';


const CommonFeatureCard = () => {
    return (
        <div className="FeatureCard">
            <img src={features1} alt="img" />
            <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
            <a href="http://www.google.com">For Sellers</a>
        </div>
    );
};

export default CommonFeatureCard;