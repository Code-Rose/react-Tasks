import React from 'react';
import '../css/CommonLocationCard.css';
import Bangalore from './Bangalore.png';


const CommonLocationCard = (props) => {
    return (
        <div className="LocationCards" style={{backgroundImage: `url(${Bangalore})`}}>
           <h1 className="locationText">{props.name}</h1>
           <h1>{props.number}</h1>
           
        </div>
    );
};

export default CommonLocationCard;