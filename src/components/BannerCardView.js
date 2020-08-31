import React from 'react'
import BusinessCards from './BusinessCards';

class BannerCardView extends React.Component{
constructor(){
    super();
    this.state={

    }
}
render(){
    return(
        <div className="BusinessCards wrapper"> 
        <h1>FEATURED BUSINESS</h1>

        <BusinessCards  heading="FEATURED BUSINESS"
         para="thjis is ac cardsghs mfejkefhef mjjerf jefeh " 
         link="http://www.google.com"
         para2="i am arman khan here"/>

         <BusinessCards  heading="FEATURED BUSINESS"
         para="thjis is ac cardsghs mfejkefhef mjjerf jefeh " 
         link="http://www.google.com"
         para2="i am arman khan here"/>

         <BusinessCards  heading="FEATURED BUSINESS"
         para="thjis is ac cardsghs mfejkefhef mjjerf jefeh " 
         link="http://www.google.com"
         para2="i am arman khan here"/>
         </div>
    )
}
}
export default BannerCardView;