import React from 'react';
import CommonBusinessSellCard from './CommonBusinessSellCard';
import '../css/BusinesSellSlider.css';
import Sales1 from './Sales1.png';
import Sales2 from './Sales2.png';
import Sales3 from './Sales3.png';


const BusinesSellSlider = () => {
    return (
        <div className="Sales-Container">
        <div className="SellHead"><h1>HOW DO I SELL MY BUSINESS ?</h1></div>
        <div className="wrapper">
            <CommonBusinessSellCard name="Timing The Sale" imgsrc={Sales1}/>
            <CommonBusinessSellCard name="Using a Broker" imgsrc={Sales2}/>
            <CommonBusinessSellCard name="Using a Broker" imgsrc={Sales3}/>
        </div>
        </div>
    );
};

export default BusinesSellSlider;