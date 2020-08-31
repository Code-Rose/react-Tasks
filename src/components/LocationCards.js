import React from 'react';
import CommonLocationCard from './CommonLocationCard';
import '../css/LocationCards.css';

const LocationCards = () => {
    return (
        <div>
          <div className="LocationCardView wrapper">
          <div className="locationHeading"><h1>POPULAR BUSINESS LOCATIONS</h1></div>
             <div className="Loc-Card-Container">
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             <CommonLocationCard name="BAANGALORE" number="(19)"/>
             </div>
             </div>
             <div className="clear"></div>
          </div>
    );
};

export default LocationCards;