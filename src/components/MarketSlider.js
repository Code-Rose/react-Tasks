import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../css/MarketSlider.css';
import MarketCard from './MarketCard';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
      },
}

class MarketSlider extends Component {

    
  render() {
    return (
        <div className="Market wrapper">
        <div className="MarketHeading ">
        <h1>MID MARKET BUSINESS</h1>
        </div>

        <Carousel 
        
        //  swipeable={false}
        // draggable={false}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        >

        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        <MarketCard 
        name="Lorem ipsum dolor sit amet, consectetur"/>
        
        </Carousel>
    </div>
    );
  }
}

export default MarketSlider;