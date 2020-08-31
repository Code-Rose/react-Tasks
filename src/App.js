import React from 'react';


import Header from './components/Header'
import CategoryCards from './components/CategoryCards';
import MarketSlider from './components/MarketSlider';
import LocationCards from './components/LocationCards';
import SubscribeText from './components/SubscribeText';
import FranchisesCards from './components/FranchisesCards';
import BusinesSellSlider from './components/BusinesSellSlider';
import FeatureCards from './components/FeatureCards';
import AdvisorSearch from './components/AdvisorSearch';
import Footer from './components/Footer';
import BannerCardView from './components/BannerCardView';

function App() {
  return (
    <div>
    <Header/>
    <BannerCardView/>
    <CategoryCards/>
    <MarketSlider/>
    <LocationCards/>
    <SubscribeText/>
    <FranchisesCards/>
    <BusinesSellSlider/>
    <FeatureCards/>
    <AdvisorSearch/>
    <Footer/>
    </div>
  );
}

export default App;
