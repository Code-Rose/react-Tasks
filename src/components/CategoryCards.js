import React from 'react';
import '../css/CategoryCards.css';
import hotel from './hotel.png';
import restaurants from './restaurants.png';
import website from './website.png';
import manufacturing from './manufacturing.png';
import CommonCategoryCard from './CommonCategoryCard';

class CategoryCards extends React.Component{

    render(){
        return(
            <div className="Category ">
            <div className="CategoryCard wrapper" >
            <h1>POPULAR BUSINESS CATEGORIES</h1>

            <CommonCategoryCard imgsrc={hotel} name="HOTEL"/>
            <CommonCategoryCard imgsrc={manufacturing} name="MANUFACTURING"/>
            <CommonCategoryCard imgsrc={restaurants} name="RESTAURANTS"/>
            <CommonCategoryCard imgsrc={website} name="WEBSITES"/>

            <div className="clear"></div>

            </div>
            <div className="linkview">
           <a href="http://www.google.com">View All &nbsp; &rarr;</a>
           </div>
            </div>
        )
    }
}
// const CategoryCards = () => {
//     return (
//         <div>
//             <h1>POPULAR BUSINESS CATEGORIES</h1>
//             <CommonCategoryCard imgsrc={hotel} name="HOTEL"/>
//         </div>
//     );
// };

export default CategoryCards;