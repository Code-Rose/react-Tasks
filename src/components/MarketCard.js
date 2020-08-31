import React from 'react';
import '../css/MarketCards.css';

const MarketCard = (props) => {
    return (
        <div className="MarketCard">
            <p>{props.name}</p>
            <ul className="CardNames">
            <li className="MapMarker"><i class="fa fa-map-marker"></i>India</li>
            <li className="View-btn"><a href="http://www.google.com">View All</a></li>
            </ul>
            <div className="clear"></div>
        </div>
    );
};

export default MarketCard;