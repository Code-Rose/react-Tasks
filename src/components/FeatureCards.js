import React from 'react';
import CommonFeatureCard from './CommonFeatureCard';
import '../css/FeatureCard.css';
import features1 from './features1.png';

const FeatureCards = () => {
    return (
        <div className="Feature-Container">
        <div className="wrapper">
          <div className="FeatureHead"><h1>BUSINESS ADVICE AND FEATURES</h1></div>
           <div className="LeftFeature-Container">
                    <img src={features1} alt="img" />
                    <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
                    <a href="http://www.google.com">For Sellers</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do tempor incididunt consectetur adipiscing elit dolore magna aliqua.</p>
        </div>
           <div className="RightFeature-Container">
           <CommonFeatureCard/>
           <CommonFeatureCard/>
           <CommonFeatureCard/>
           <CommonFeatureCard/>
           </div>
           </div>
        </div>
    );
};

export default FeatureCards;