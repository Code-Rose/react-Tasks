import React from 'react';
import '../css/CommonFranchisesCards.css';

const CommonFranchisesCard = (props) => {
    return (
        <div className="FranchisesCards" 
        style={{backgroundImage: `url(${props.imgsrc})` ,backgroundPosition:'center',
               backgroundRepeat: 'no-repeat',height:'200px' ,width:'350px'}}>
        <p>{props.name}  <img src={props.imgsrci} alt="&nbsp;" /></p>
       
        </div>
    );
};

export default CommonFranchisesCard;