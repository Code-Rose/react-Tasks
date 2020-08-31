import React from 'react';
import img from './img.png';
import '../css/BusinessCards.css';

const BusinessCards = (props) => {
    return (
        <div>
            <div className="FeaturedCards" style={{backgroundImage: `url(${img})`}}>
                <p>{props.para} </p>
                <a href="{props.link}">Uttrakhand</a>
                <p>{props.para2}</p>
            </div>
        </div>
    );
};

export default BusinessCards;