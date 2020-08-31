import React from 'react';
import '../css/CommonCategoryCards.css';


const CommonCategoryCard = (props) => {
    return (
        <div className="wrapper">
        <div className="CategoryCards">
            <img src={props.imgsrc} alt="Hotel" />
            <p>{props.name}</p>
        </div>
        </div>


    );
};

export default CommonCategoryCard;