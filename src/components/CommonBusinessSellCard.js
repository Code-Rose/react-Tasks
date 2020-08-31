import React from 'react';
import '../css/CommonBusinessSellCards.css';

const CommonBusinessSellCard = (props) => {
    return (
        <div className="BusinessSellCards" style={{backgroundImage: `url(${props.imgsrc})`}}>
           <h1 className="BusinessText">{props.name}</h1>
           
        </div>
    );
};

export default CommonBusinessSellCard;